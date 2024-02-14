
import { IconProps } from "@/utils/interface"

const Pen = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M61.1,102l45.5-45.5c6.1-6.1,6.1-16,0-22.1c-6.1-6.1-16-6.1-22.1,0L38.9,79.9l-4.7,26.9L61.1,102z"
            fill={fill} stroke={stroke} strokeLinejoin="round" className="group-hover:stroke-white" />
        <line strokeWidth="4" x1="38.9" y1="80" x2="61" y2="102.1" fill={fill} stroke={stroke} strokeMiterlimit={4} className="group-hover:stroke-white" />
        <line strokeWidth="4" x1="82.2" y1="36.1" x2="104.3" y2="58.1" fill={fill} stroke={stroke} strokeMiterlimit={4} className="group-hover:stroke-white" />

    </svg>

}

Pen.defaultProps = {
    fill: 'none',
    stroke: '#000000'
}

export default Pen