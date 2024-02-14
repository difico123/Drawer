import classNames from "classnames"


type IProps = {
    children: React.ReactNode,
    active?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: IProps) => {

    const { children, active, ...rest } = props

    return <button
        {...rest}
        className={
            classNames(
                "border-[1px] border-black",
                "rounded-[64px]",
                'hover:border-white',
                'hover:bg-black',
                'group',
                active ? 'bg-white' : '',
                rest.className
            )
        }>
        {children}
    </button>
}