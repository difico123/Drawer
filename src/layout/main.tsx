import { Drawer } from "@/features/drawer"
import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import Konva from 'konva';
import { LayerType, StageType, } from '@/utils';

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
export const MainLayout = () => {



    return <div>
        <div>
            <Drawer />
        </div>
    </div>
}