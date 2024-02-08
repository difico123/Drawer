import React, { createContext } from 'react';
import { Stage, Layer, Image, Text, } from 'react-konva';
import useImage from 'use-image';
import { KonvaEventObject } from "konva/lib/Node";
import { IconSelector } from '@/features/IconSelector';
import { useCanvas } from '@/hooks/useCavas';

const URLImage = ({ image }: { image: { src: string, x: number, y: number } }) => {
    const [img] = useImage(image.src);
    return (
        <Image
            image={img}
            x={image.x}
            y={image.y}
            // I will use offset to set origin to the center of the image
            offsetX={img ? img.width / 2 : 0}
            offsetY={img ? img.height / 2 : 0}
        />
    );
};

export const MainLayout = () => {

    const [tool, setTool] = React.useState('pen');
    const [lines, setLines] = React.useState<{ tool: string, points: (number)[] }[]>([]);
    const isDrawing = React.useRef(false);

    const { icon } = useCanvas()

    console.log(icon);


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


    return <div
        className="flex-x-center border-2 border-red-200 h-full w-full mt-10"
    >
        <div className='flex-x-center w-[1050px]'>
            <IconSelector />
            <Stage
                width={538}
                height={538}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
                className="border-[2px] border-black rounded"
            >
                <Layer>
                    <Text text="Just start drawing" x={5} y={30} />
                    {lines.map((line, i) => {
                        return line?.points?.slice?.(0, line?.points?.length / 2)?.map((_: any, pointIndex: number) => {
                            return <URLImage
                                key={`${i}${pointIndex}`}
                                image={{
                                    src: icon || "https://konvajs.org/assets/lion.png",
                                    x: line?.points?.[2 * pointIndex],
                                    y: line?.points?.[2 * pointIndex + 1]
                                }}
                            />
                        })
                    })}
                </Layer>
            </Stage>

            <div className='flex flex-1'>
                right sidebar
            </div>
        </div>
    </div >
}