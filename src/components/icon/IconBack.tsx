import { IconProps } from "@/utils/interface"

export const IconBack = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
        className="icon-back"
    >
        <path strokeWidth="4" d="M139,69.1L139,69.1c0.6,37.8-29.6,68.9-67.5,69.5h0C33.7,139.2,2.6,109,2,71.2l0,0C1.5,33.3,31.7,2.2,69.5,1.7
	l0,0C107.3,1.1,138.4,31.3,139,69.1z" strokeMiterlimit={4} stroke={stroke} fill={fill} />
        <path strokeWidth="4" d="M108.5,70.1H32.5" strokeLinecap="round" stroke={stroke} fill={fill} />
        <path strokeWidth="4" d="M57.8,44.8L32.5,70.1l25.3,25.3" strokeLinejoin="round" stroke={stroke} fill={fill} />
    </svg>

}

IconBack.defaultProps = {
    fill: 'none',
    stroke: 'black'
}
