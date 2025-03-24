import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import Portal from '../Portal/Portal';

interface ModalProps {
    isOpen?: boolean;
    children?: ReactNode;
    className?: string;
    onClose?: () => void;
}

const Modal: FC<ModalProps> = ({
    className, children, isOpen, onClose,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

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
