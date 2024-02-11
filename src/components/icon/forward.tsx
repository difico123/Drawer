
import { IconProps } from "@/utils/interface"

const Forward = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
        className="icon"
    >
        <rect strokeWidth="4" x="0.492497" y="0.507391" width="136.96" height="136.961" rx="68.4801" transform="matrix(0.999889 0.0148937 -0.0148957 0.999889 2.55839 0.138717)" stroke={stroke} fill={fill} />
        <path strokeWidth="4" d="M108.531 70.1462L32.4618 70.1462" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" fill={fill} />
        <path strokeWidth="4" d="M83.2148 95.4602L108.531 70.1461L83.2148 44.8319" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" fill={fill} />
    </svg>

}

Forward.defaultProps = {
    width: 141,
    height: 141,
    stroke: 'black',
    fill: 'none'
}

export default Forward