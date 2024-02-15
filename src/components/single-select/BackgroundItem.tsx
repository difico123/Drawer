import classNames from "classnames"

type IProps = {
    src: string,
    onClick: () => void
}
export const BackgroundItem = ({ src, onClick }: IProps) => {

    return <div
        className={classNames(
            "border-[1px] border-black ",
            "w-[43px] h-[43px]",
            "rounded-full",
            'overflow-hidden',
            'cursor-pointer'
        )}
        onClick={onClick}
    >
        <img src={src} className="object-cover w-full h-full" />
    </div>
}