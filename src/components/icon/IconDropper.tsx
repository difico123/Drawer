
import { IconProps } from "@/utils/interface"

export const IconDropper = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M102.5,78.4c0,19.2-14.4,34.8-32.1,34.8S38.2,97.6,38.2,78.4c0-26.9,32.1-49.8,32.1-49.8S102.5,51.4,102.5,78.4
	z" fill={fill} stroke={stroke} strokeLinejoin="round" className="group-hover:stroke-white" />
    </svg>

}

IconDropper.defaultProps = {
    fill: 'none',
    stroke: '#000000',
    size: 10
}
