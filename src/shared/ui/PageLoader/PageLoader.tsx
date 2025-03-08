import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames('page_loader', {}, [className])}>
        <div className="spinner" />
    </div>
);

export default PageLoader;
