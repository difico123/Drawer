

import { IconProps } from "@/utils/interface"

export const IconSend = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M107.6,69.6L39,104.1l14.8-34.5L39,35.1L107.6,69.6z" fill={fill} stroke={stroke} strokeLinejoin="round" />
        <path strokeWidth="4" d="M53.6,69.6h53.2" fill={fill} stroke={stroke} strokeLinejoin="round" />
    </svg>

}

IconSend.defaultProps = {
    fill: 'none',
    stroke: '#000000'
}
