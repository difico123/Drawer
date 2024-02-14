import { useCanvas } from "@/hooks/useCanvas";
import useImage from "use-image";
import { CanvasImage } from "./image";
import { STAGE_SIZE } from "@/utils";
import { useMemo } from "react";


export const BackgroundCanvas = (() => {
    const { option } = useCanvas()
    const [img] = useImage(option.background || '');

    const bgWidth = useMemo(() => {
        const { width, height } = {
            width: img?.width || STAGE_SIZE,
            height: img?.height || STAGE_SIZE
        }
        return (STAGE_SIZE / height) * width
    }, [img?.width])

    return <CanvasImage
        image={{
            src: option.background || ''
        }}
        width={bgWidth}
        height={STAGE_SIZE}
        offsetX={(bgWidth - STAGE_SIZE) / 2}
    />
})