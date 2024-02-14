import classNames from "classnames"
import { Button } from "../base/Button"
import { IconBackground } from "../icon/IconBackground"
import { Modal } from "../modal/Modal"
import { useRef } from "react"
import { BG_LIST, ModalRef } from "@/utils"
import { BackgroundItem } from "./BackgroundItem"
import { useCanvas } from "@/hooks/useCanvas"

export const BackgroundSelect = () => {
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
            <IconBackground size={40} />
        </Button>
        <Modal ref={modalRef}>
            <div className="flex gap-2 flex-wrap max-w-[400px]">
                {
                    BG_LIST.map((item, index) => {
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