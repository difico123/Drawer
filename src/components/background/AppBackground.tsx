import { useCanvas } from "@/hooks/useCanvas"

export const AppBackground = (() => {

    const { option } = useCanvas()

    return <div
        className='w-full h-full fixed top-0 z-[-1] transition-all '
    >
        <img
            src={option.background}
            className='w-full h-full object-cover blur'
            alt="background"
        />
    </div>
})