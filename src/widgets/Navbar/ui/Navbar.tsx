import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const onToggleAuthModal = useCallback(() => {
        setIsOpenAuthModal((prev) => !prev);
    }, []);

    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={cls.link}
                    onClick={onToggleAuthModal}
                >
                    Войти
                </Button>
                <Modal isOpen={isOpenAuthModal} onClose={onToggleAuthModal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi amet perspiciatis quaerat harum, molestiae assumenda,
                    porro ut nihil adipisci quas voluptas asperiores minus
                </Modal>
            </div>
        </div>
    );
};
