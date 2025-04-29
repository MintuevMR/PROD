import { classNames } from 'shared/lib/classNames/classNames';
import React, { useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode;
    onScrollCallbeck?: () => void;
}

const Page = ({ className, children, onScrollCallbeck }: PageProps) => {
    const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollCallbeck });

    return (

        <div ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </div>
    );
};

export default Page;
