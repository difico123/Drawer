import classNames from "classnames"
import { Button } from "../base/Button"
import Dropper from "../icon/dropper"
import { COL_BG_LIST, GRAD_BG_LIST, ModalRef } from "@/utils"
import { Modal } from "../modal/Modal"
import { BackgroundItem } from "./BackgroundItem"
import { useCanvas } from "@/hooks/useCanvas"
import { useRef } from "react"

export const DropSelect = () => {
    const modalRef = useRef<ModalRef>(null)
    const { setOption } = useCanvas()


    const handleClick = () => {
        modalRef.current?.show()
    }

    const handleSelectBackground = (src: string) => () => {
        setOption((option) => ({
            ...option,
            background: src
        }))
        modalRef.current?.hide()
    }

    return <div>

        <Button className={classNames("px-[39px] py-[2px]")} onClick={handleClick}>
            <Dropper size={40} />
        </Button>
        <Modal ref={modalRef}>
            <div className="flex gap-2 flex-wrap max-w-[400px]">
                {
                    [...GRAD_BG_LIST, ...COL_BG_LIST].map((item, index) => {
                        return <BackgroundItem
                            key={index}
                            src={item}
                            onClick={handleSelectBackground(item)}
                        />

                    })
                }
            </div>
        </Modal>
    </div>
}