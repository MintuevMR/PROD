import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface PortalProps {
    children?: React.ReactNode;
    element?: HTMLElement;
}

const Portal: FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};

export default Portal;
