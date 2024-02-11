import { CanvasEffect, CanvasMode, ICanvasOption, getIconLink } from "@/utils";
import { createContext, useState } from "react"

import React from 'react';

const defaultOption: ICanvasOption = {
    effect: CanvasEffect.NONE,
    mode: CanvasMode.DRAW,
    icon: getIconLink(15)
}

const CanvasContext = createContext<{
    option: ICanvasOption,
    setOption: React.Dispatch<React.SetStateAction<ICanvasOption>>
}>({
    option: defaultOption,
    setOption: () => { }
})


export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
    const [option, setOption] = useState<ICanvasOption>(defaultOption)

    return <CanvasContext.Provider value={{
        option, setOption
    }} >
        {children}
    </CanvasContext.Provider >
}

export default CanvasContext