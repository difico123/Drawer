import useOutsideClick from "@/hooks/useOutSideClick"
import { ModalRef } from "@/utils/interface"
import classNames from "classnames"
import {
    ForwardRefExoticComponent,
    RefAttributes,
    forwardRef,
    useImperativeHandle,
    useRef,
    useState
} from "react"

type Props = {
    children: React.ReactNode
}

export const Modal: ForwardRefExoticComponent<
    Props & RefAttributes<ModalRef>
> = forwardRef((props, ref) => {

    const [isOpen, setIsOpen] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)

    useOutsideClick(containerRef, () => {
        setIsOpen(false)
    })

    useImperativeHandle(
        ref,
        () => ({
            show: () => {
                setIsOpen(true)
            },
            hide: () => {
                setIsOpen(false)
            },
        }),
        [],
    )
    return <div
        ref={containerRef}
        className={classNames(
            "absolute top-[50%] left-[50%]",
            "translate-x-[-50%] translate-y-[-50%]",
            "z-50",
        )}
    >
        {
            isOpen &&
            <div className={classNames(
                'bg-white',
                "border-[1px] border-black",
                'rounded-[40px]',
                'p-4'
            )}>
                {
                    props.children
                }
            </div>
        }
    </div>
})
