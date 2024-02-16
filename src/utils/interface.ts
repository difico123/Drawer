export { Stage as StageType, } from 'konva/lib/Stage';
export { Layer as LayerType } from 'konva/lib/Layer'


export interface IconProps {
    width?: number,
    height?: number,
    stroke?: string,
    size?: number
    fill?: string
}

export enum CanvasEffect {
    NONE = "None",
    BEAT = "Beat",
    BOUNCE = "Bounce",
    ORBIT = "Orbit",
    ROTATE = "Rotate",
    SWING = "Swing",
    APPEAR = "Appear",
    WIGGLE = "Wiggle"
}

export enum CanvasMode {
    DRAW = 'draw',
    EDIT = "edit",

}
export interface ICanvasOption {
    effect: CanvasEffect
    mode: CanvasMode
    background?: string,
    density?: number,
    size: number
    isRandom?: boolean
    icon: string
}

export type ModalRef = {
    show: () => void,
    hide: () => void
}