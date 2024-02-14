import { Icons } from "@/components"
import { useCanvas } from "@/hooks/useCanvas"
import { getIconLink, getPaginatedItems, ICON_SELECTOR_SIZE } from "@/utils"
import classNames from "classnames"
import { times } from "lodash"
import { useMemo, useState } from "react"

const IconsLength = 20

export const IconSelector = () => {
    const { setOption, option } = useCanvas()
    const [page, setPage] = useState(1)

    const handleClickIcon = (url: string) => () => {
        setOption({ ...option, icon: url })
    }

    const iconsNames = useMemo(() => times(IconsLength), [])
    const items = getPaginatedItems(iconsNames, page)


    const handleBackPage = () => {
        if (page < 1) return
        setPage((page) => page - 1)
    }

    const handleForwardPage = () => {
        if (page >= items.totalPage) return
        setPage((page) => page + 1)
    }

    return <div>
        <div className={classNames(
            `w-[${ICON_SELECTOR_SIZE}px] h-[${ICON_SELECTOR_SIZE}px]`,
            "grid grid-cols-4",
            "gap-[8px]")}
        >
            <div onClick={handleBackPage}>
                <Icons.Back
                    width={ICON_SELECTOR_SIZE}
                    height={ICON_SELECTOR_SIZE}
                />
            </div>
            {
                items.data.map((index) => {
                    const iconUrl = getIconLink(index + 1)
                    return <div
                        key={index}
                        className={
                            classNames(
                                'p-2',
                                'cursor-pointer',
                                'rounded-full',
                                'border-[1px]',
                                `w-[${ICON_SELECTOR_SIZE}px] h-[${ICON_SELECTOR_SIZE}px]`,
                                `${iconUrl === option.icon ?
                                    'border-black bg-white' :
                                    'border-transparent bg-transparent'}`
                            )
                        }
                    >
                        <img
                            src={iconUrl}
                            width={ICON_SELECTOR_SIZE}
                            height={ICON_SELECTOR_SIZE}
                            onClick={handleClickIcon(iconUrl)}
                        />
                    </div>
                })
            }

            <div onClick={handleForwardPage}>
                <Icons.Forward
                    width={ICON_SELECTOR_SIZE}
                    height={ICON_SELECTOR_SIZE}
                />
            </div>

        </div>
    </div>


}