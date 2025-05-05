import { classNames } from 'shared/lib/classNames/classNames';
import React, { UIEvent, useEffect, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollSaveActions } from 'features/scrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollByPath } from 'features/scrollSave/model/selectors/getScrollPosition';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode;
    onScrollCallbeck?: () => void;
}

const Page = ({ className, children, onScrollCallbeck }: PageProps) => {
    const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, location.pathname));

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: location.pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollCallbeck });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);

    return (

        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};

export default Page;
