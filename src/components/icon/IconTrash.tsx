

import { IconProps } from "@/utils/interface"

export const IconTrash = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M101.5,41.9h-62" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M81,41.9l-3-6c-0.8-1.7-2.6-2.8-4.5-2.8h-7.9c-1.9,0-3.6,1.1-4.5,2.8l-3,6" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M41.8,53.2l4,50.1c0.2,2.6,2.4,4.6,5,4.6h39.5c2.6,0,4.8-2,5-4.6l4-50.1" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M57.9,96.3l-2.2-38.6" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M70.6,96.3V57.8" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M83.2,96.3l2.2-38.6" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />

    </svg>

}

IconTrash.defaultProps = {
    fill: 'none',
    stroke: '#000000'
}
