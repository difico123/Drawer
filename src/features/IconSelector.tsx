import { Icons } from "@/components"
import { useCanvas } from "@/hooks/useCavas"
import { ICON_SELECTOR_SIZE } from "@/utils/constans"
import { times } from "lodash"

const IconsLength = 20

const MAX_DISPLAY_ICON_NUMBER = 18


export const IconSelector = () => {
    const { setIcon } = useCanvas()

    const handleClickIcon = (url: string) => () => {
        setIcon(url)
    }

    return <div className="flex-1 mr-4">
        <div>
            <div className={`w-[${ICON_SELECTOR_SIZE}px] h-[${ICON_SELECTOR_SIZE}px] grid grid-cols-4 gap-[8px] `}>
                <Icons.Back stroke="red" width={ICON_SELECTOR_SIZE} height={ICON_SELECTOR_SIZE} />
                {
                    times(IconsLength).slice(0, MAX_DISPLAY_ICON_NUMBER).map((_, index) => {
                        const iconUrl = `/icon/icon_${index + 1}.png`
                        return <img key={index} src={iconUrl} width={ICON_SELECTOR_SIZE} height={ICON_SELECTOR_SIZE} onClick={handleClickIcon(iconUrl)} />
                    })
                }
                <Icons.Forward stroke="red" width={ICON_SELECTOR_SIZE} height={ICON_SELECTOR_SIZE} />
            </div>
        </div>

    </div>
}