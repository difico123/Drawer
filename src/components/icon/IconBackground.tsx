
import { IconProps } from "@/utils/interface"

export const IconBackground = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M36.8,32.3h66.8c2.5,0,4.5,2,4.5,4.5v66.8c0,2.5-2,4.5-4.5,4.5H36.8c-2.5,0-4.5-2-4.5-4.5V36.8
	C32.3,34.3,34.3,32.3,36.8,32.3z" className="group-hover:stroke-white" fill={fill} stroke={stroke} strokeLinejoin="round" />
        <path strokeWidth="4" d="M32.3,88l15.5-15.5l13.7,11.6L85,61l22.6,23.2" fill={fill} stroke={stroke}
            strokeLinecap="round" className="group-hover:stroke-white" strokeLinejoin="round"
        />
        <ellipse strokeWidth="4" cx="60.7" cy="53.7" rx="7.8" ry="7.8" fill={fill} stroke={stroke} className="group-hover:stroke-white" />
    </svg>

}

IconBackground.defaultProps = {
    fill: 'none',
    stroke: '#000000'
}
