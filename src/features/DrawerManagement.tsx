import { Button, Icons } from "@/components"
import { useCanvas } from "@/hooks/useCanvas"
import { AppEvent, emitter } from "@/plugins"
import { CanvasMode } from "@/utils"

const ICON_SIZE = 45

export const DrawerManagement = () => {

    const { option, setOption } = useCanvas()

    const handleCanvasMode = (mode: CanvasMode) => () => {
        setOption({
            ...option,
            mode
        })
    }

    const handleUndoDraw = () => {
        emitter.emit(AppEvent.UNDO_DRAW)
    }

    return <div className="flex justify-between">
        <Button active={option.mode === CanvasMode.DRAW} onClick={handleCanvasMode(CanvasMode.DRAW)}>
            <Icons.Pen size={ICON_SIZE} />
        </Button >
        <Button active={option.mode === CanvasMode.EDIT} onClick={handleCanvasMode(CanvasMode.EDIT)}>
            <Icons.Hand size={ICON_SIZE} />
        </Button>
        <Button onClick={handleUndoDraw}>
            <Icons.Undo size={ICON_SIZE} />
        </Button>
        <Button >
            <Icons.Trash size={ICON_SIZE} />
        </Button>
    </div>
}