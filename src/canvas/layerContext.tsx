import { createContext, useState } from "react"

import React from 'react';

const CanvasContext = createContext<{
    icon: string,
    setIcon: (url: string) => void
}>({
    icon: '',
    setIcon: () => { }
})


export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
    const [icon, setIcon] = useState('')

    return <CanvasContext.Provider value={{
        icon, setIcon
    }} >
        {children}
    </CanvasContext.Provider >
}

export default CanvasContext