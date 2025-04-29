import React, { useEffect } from 'react';

export interface UseInfinityScrollOpt {
    callback?: () => void;
    triggerRef: React.MutableRefObject<HTMLElement>;
    wrapperRef: React.MutableRefObject<HTMLElement>;
}

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef }: UseInfinityScrollOpt) => {
    useEffect(() => {
        const options = {
            root: wrapperRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const trigger = triggerRef.current;
        const observer = new IntersectionObserver(([empty]) => {
            if (empty.isIntersecting) {
                callback?.();
            }
        }, options);

        observer.observe(triggerRef.current);

        return () => {
            if (observer) {
                observer.unobserve(trigger);
            }
        };
    });
};
