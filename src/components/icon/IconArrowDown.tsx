
import { IconProps } from "@/utils/interface"

export const IconArrowDown = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M70.6,108.1v-76" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path strokeWidth="4" d="M45.1,82.8l25.3,25.3l25.4-25.3" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

}

IconArrowDown.defaultProps = {
    fill: 'none',
    stroke: '#000000'
}
