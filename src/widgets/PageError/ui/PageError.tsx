import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Произошла ошибка</p>
            <Button onClick={reloadPage}> Обновить страницу</Button>
        </div>
    );
};
export default PageError;
