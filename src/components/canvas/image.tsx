import useImage from "use-image";
import { Image } from 'react-konva';

import { ImageConfig } from "konva/lib/shapes/Image";
type IProps = {
    image: {
        src: string
    }
} & Omit<Partial<ImageConfig>, "image">

export const CanvasImage = ({ custom: image, ...rest }: IProps) => {
    const { src } = image
    const { x = 0, y = 0 } = rest
    const [img] = useImage(src);

    const { width, height } = {
        width: img?.width || 0,
        height: img?.height || 0
    }

    return (
        <Image
            x={x}
            y={y}
            offsetX={img ? width / 2 : 0}
            offsetY={img ? height / 2 : 0}
            width={width}
            height={height}

            {...rest}
            image={img}
        />
    );
};