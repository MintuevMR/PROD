import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
    isOpen?: boolean;
    children?: ReactNode;
    className?: string;
    onClose?: () => void;
    lazy?: boolean;
}

const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose, lazy,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
    const { theme } = useTheme();

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, 300);
        }
    }, [onClose]);

    const mods = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosing,
    };

    useEffect(() => () => { clearTimeout(timerRef.current); }, []);
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        // return () => setIsMounted(false);
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div
                        className={cls.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
