import { BackgroundSelect, DropSelect, RangeSlider } from "@/components"
import { useCanvas } from "@/hooks/useCanvas"

export const OptionSetting = () => {

    const { option, setOption } = useCanvas()
    const { size, density } = option

    const handleChangeDensity = (value: number) => {
        setOption({ ...option, density: value })
    }

    const handleChangeSize = (value: number) => {
        setOption({ ...option, size: value })
    }


    return <div className="">
        <div className="flex gap-[10px]">
            <BackgroundSelect />
            <DropSelect />
        </div>
        <RangeSlider
            value={density}
            title="Density"
            onChangeValue={handleChangeDensity}
            step={1}
            min={10}
            max={20}
        />
        <RangeSlider
            value={size}
            title="Size"
            onChangeValue={handleChangeSize}
            step={1}
            min={10}
            max={50}
        />
    </div>
}