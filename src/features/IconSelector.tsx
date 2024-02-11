import { Icons } from "@/components"
import { useCanvas } from "@/hooks/useCanvas"
import { getIconLink, getPaginatedItems, ICON_SELECTOR_SIZE } from "@/utils"
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


    const handleClickBack = () => {
        if (page < 1) return
        setPage((page) => page - 1)
    }

    const handleClickForward = () => {
        if (page >= items.totalPage) return
        setPage((page) => page + 1)
    }



    return <div>
        <div className={`w-[${ICON_SELECTOR_SIZE}px] h-[${ICON_SELECTOR_SIZE}px] grid grid-cols-4 gap-[8px] `}>
            <div onClick={handleClickBack}>
                <Icons.Back stroke="red" width={ICON_SELECTOR_SIZE} height={ICON_SELECTOR_SIZE} />
            </div>
            {
                items.data.map((index) => {
                    const iconUrl = getIconLink(index + 1)
                    return <div key={index} className={`cursor-pointer bg-white rounded-full w-[${ICON_SELECTOR_SIZE}px] border-[1px] p-2 h-[${ICON_SELECTOR_SIZE}px] ${iconUrl === option.icon ? 'border-black' : 'border-transparent'}`} >
                        <img src={iconUrl} width={ICON_SELECTOR_SIZE} height={ICON_SELECTOR_SIZE} onClick={handleClickIcon(iconUrl)} />
                    </div>
                })
            }

            <div onClick={handleClickForward}>
                <Icons.Forward stroke="red" width={ICON_SELECTOR_SIZE} height={ICON_SELECTOR_SIZE} />
            </div>

        </div>
    </div>


}