

import { IconProps } from "@/utils/interface"

export const IconUndo = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M39.6,55.7h45.8c13,0,23.5,10.5,23.5,23.5l0,0c0,13-10.5,23.5-23.5,23.5H39.6" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M62.7,32.7L39.6,55.7l23.1,23.1" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
    </svg>

}

IconUndo.defaultProps = {
    fill: 'none',
    stroke: '#000000'
}
