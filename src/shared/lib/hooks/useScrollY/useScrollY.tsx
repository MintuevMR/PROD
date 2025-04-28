import { useEffect, useState } from 'react';

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            setScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY;
};
