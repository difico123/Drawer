import { useEffect } from 'react'

function useOutsideClick(
    ref: React.RefObject<HTMLElement>,
    callback: (e: MouseEvent) => void,
): void {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                typeof callback === 'function' && callback(event)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, callback])
}

export default useOutsideClick
