import { useCanvas } from '@/hooks/useCanvas';
import { STAGE_SIZE, StageType } from '@/utils';
import { KonvaEventObject } from 'konva/lib/Node';
import React, { useMemo, useRef } from 'react'
import { Stage, Layer, Text, Image, } from 'react-konva';
import useImage from 'use-image';


const URLImage = ({ image }: { image: { src: string, x: number, y: number } }) => {
    const [img] = useImage(image.src);
    const { option } = useCanvas()
    const { width, height } = {
        width: option.size || img?.width || 10,
        height: option.size || img?.height || 10
    }

    return (
        <Image
            image={img}
            x={image.x}
            y={image.y}
            // I will use offset to set origin to the center of the image
            offsetX={img ? width / 2 : 0}
            offsetY={img ? height / 2 : 0}
            width={width}
            height={height}
        />
    );
};


export const Drawer = () => {

    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState<{ tool: string, points: (number)[] }[]>([]);
    const isDrawing = React.useRef(false);

    const { option } = useCanvas()

    const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
        isDrawing.current = true;
        const pos = e.target?.getStage()?.getPointerPosition();
        setLines([...lines, { tool, points: [pos?.x || 0, pos?.y || 0] }]);
    };

    const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }
        const stage = e.target.getStage();
        const point = stage?.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        // add point
        lastLine.points = lastLine.points.concat([point?.x || 0, point?.y || 0]);

        // replace last
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        isDrawing.current = false;
    };
    const stageRef = useRef<StageType>(null)

    const [img] = useImage(option.background || '');

    const bgWidth = useMemo(() => {
        const { width, height } = {
            width: img?.width || STAGE_SIZE,
            height: img?.height || STAGE_SIZE
        }
        return (STAGE_SIZE / height) * width
    }, [img?.width])

    return <Stage
        ref={stageRef}
        width={STAGE_SIZE}
        height={STAGE_SIZE}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        className="border-[2px] border-black rounded-[40px] overflow-hidden"
    >
        <Layer>
            <Image
                image={img}
                x={0}
                y={0}
                width={bgWidth}
                height={STAGE_SIZE}
                offsetX={(bgWidth - STAGE_SIZE) / 2}
            />
            <Text text="Just start drawing" x={5} y={30} />
            {lines.map((line, i) => {
                return line?.points?.slice?.(0, line?.points?.length / 2)?.map((_: any, pointIndex: number) => {
                    return <URLImage
                        key={`${i}${pointIndex}`}
                        image={{
                            src: option.icon,
                            x: line?.points?.[2 * pointIndex],
                            y: line?.points?.[2 * pointIndex + 1]
                        }}
                    />
                })
            })}
        </Layer>
    </Stage>
}