import { Button } from "@/components"
import { useCanvas } from "@/hooks/useCanvas"
import { CanvasEffect } from "@/utils"

export const EffectSelector = () => {
    const { setOption, option } = useCanvas()

    const handleSelectOption = (effect: CanvasEffect) => () => {
        setOption((option) => {
            return {
                ...option,
                effect
            }
        })
    }

    return <div className="grid grid-cols-2 gap-2">
        {
            (Object.keys(CanvasEffect) as (keyof typeof CanvasEffect)[]).map((key) => {
                const effect = CanvasEffect[key]
                return <div key={key}>
                    <Button className="w-full h-full py-[10px]" onClick={handleSelectOption(effect)} active={option.effect === effect}>
                        <div className="group-hover:text-white">
                            {effect}
                        </div>
                    </Button>
                </div>
            })
        }
    </div>
}