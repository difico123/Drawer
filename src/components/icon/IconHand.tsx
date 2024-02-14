import { IconProps } from "@/utils/interface"

export const IconHand = ({ width, height, stroke, size, fill }: IconProps) => {
    const _width = size || width;
    const _height = size || height

    return <svg xmlns="http://www.w3.org/2000/svg"
        width={_width}
        height={_height}
        viewBox="0 0 141 141"
    >
        <path strokeWidth="4" d="M102.1,84.3c0,15.7-14.2,28.4-31.6,28.4S38.8,100,38.8,84.3" fill={fill} stroke={stroke} className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M102.1,85.7V51.8c0-3.7-3-6.8-6.8-6.8l0,0c-3.7,0-6.8,3-6.8,6.8v17.9" fill={fill} stroke={stroke} strokeLinecap="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M88.5,58.6V42.5c0-3.7-3-6.8-6.8-6.8l0,0c-3.7,0-6.8,3-6.8,6.8v22.9" fill={fill} stroke={stroke} strokeLinecap="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M61.4,60.4V42.5c0-3.7-3-6.8-6.8-6.8l0,0c-3.7,0-6.8,3-6.8,6.8v13.8" fill={fill} stroke={stroke} strokeLinecap="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M38.8,85.3V64c0-3.7,3-6.8,6.8-6.8l0,0c3.7,0,6.8,3,6.8,6.8v12c4.5,1.1,11.7,3.3,11.7,13.7" fill={fill} stroke={stroke} strokeLinecap="round" className="group-hover:stroke-white" />
        <path strokeWidth="4" d="M75,57.1v-22c0-3.7-3-6.8-6.8-6.8l0,0c-3.7,0-6.8,3-6.8,6.8v26.6" fill={fill} stroke={stroke} strokeLinecap="round" className="group-hover:stroke-white" />

    </svg>

}

IconHand.defaultProps = {
    fill: 'none',
    stroke: '#000000'
}
