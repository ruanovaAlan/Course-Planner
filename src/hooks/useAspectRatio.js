import { useEffect, useState } from "react";


export function useAspectRatio() {
    const [aspectRatio, setAspectRatio] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setAspectRatio(1);
            } else if (window.innerWidth <= 1024) {
                setAspectRatio(1.5);
            } else if (window.innerWidth >= 1440) {
                setAspectRatio(2);
            } else {
                setAspectRatio(2);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return { aspectRatio };
}
