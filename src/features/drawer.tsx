import { useCanvas } from '@/hooks/useCanvas';
import { AppEvent, emitter } from '@/plugins';
import { STAGE_SIZE, StageType, vectorDistance } from '@/utils';
import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import { cloneDeep, last } from 'lodash';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Stage, Layer, Image, } from 'react-konva';
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

    const [lines, setLines] = useState<(Vector2d | null | undefined)[][]>([])
    const isDrawing = React.useRef(false);

    const { option } = useCanvas()

    const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
        isDrawing.current = true;
        const pos = e.target?.getStage()?.getPointerPosition();
        setLines([...lines, [pos]])
    };

    const handleMouseMove = useCallback((e: KonvaEventObject<MouseEvent>) => {
        // no drawing - skipping
        if (!isDrawing.current) {
            return;
        }

        const stage = e.target.getStage();

        const point = stage?.getPointerPosition();

        let lastLines = lines[lines.length - 1]

        // check if not enough dimension
        const lastPoint = last(lastLines)

        const distance = vectorDistance(lastPoint, point)

        if (distance >= 4) {

            // add point
            lastLines = lastLines.concat([point]);

            // replace last
            lines.splice(lines.length - 1, 1, lastLines);
            setLines(lines.concat());
        }
    }, [lines[lines.length - 1]])


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

    useEffect(() => {
        emitter.on(AppEvent.UNDO_DRAW, () => {
            setLines((lines) => {
                const _lines = cloneDeep([...lines])
                _lines.pop()
                return _lines
            })
        })

        emitter.on(AppEvent.REMOVE_CANVAS, () => {
            setLines([])
        })

        return () => {
            emitter.off(AppEvent.UNDO_DRAW)
            emitter.off(AppEvent.REMOVE_CANVAS)
        }
    }, [])

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
            {lines.map((points, i) => {
                return points?.map((point, pointIndex: number) => {
                    return <URLImage
                        key={`${i}${pointIndex}`}
                        image={{
                            src: option.icon,
                            x: point?.x || 0,
                            y: point?.y || 0
                        }}
                    />
                })
            })}
        </Layer>
    </Stage>
}