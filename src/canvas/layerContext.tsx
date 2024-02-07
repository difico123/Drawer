import { LayerType, StageType } from "@/utils"
import { createContext, useRef } from "react"

import { Image } from 'react-konva';
import Konva from "konva";

import React from 'react';
import { Stage, Layer, } from 'react-konva';
import useImage from "use-image";

const CanvasContext = createContext<{
    stageDimension: {
        width: number,
        height: number
    }
    stageRef: React.RefObject<StageType> | null
    layerRef: React.RefObject<LayerType> | null
}>({
    stageDimension: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    stageRef: null,
    layerRef: null
})

const URLImage = ({ image }: any) => {
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

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
    const stageRef = useRef<StageType>(null)
    const layerRef = useRef<LayerType>(null)
    const width = window.innerWidth
    const height = window.innerHeight

    const dragUrl = React.useRef();
    const [images, setImages] = React.useState<any>([]);


    return <CanvasContext.Provider value={{
        stageDimension: {
            width,
            height
        },
        stageRef,
        layerRef,
    }} >
        <Stage
            container='area'
            width={window.innerWidth}
            height={window.innerHeight}
            ref={stageRef}
        >
            <Layer ref={layerRef}>
            </Layer>
        </Stage>
        {children}

    </CanvasContext.Provider >
}

export default CanvasContext