import CanvasContext from "@/canvas/layerContext"
import { useContext } from "react"

export const useCanvas = () => {
    const value = useContext(CanvasContext)
    return value
}
