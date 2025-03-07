import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';
import { AppRouter } from './providers/router';
import { classNames } from '../shared/lib/classNames/classNames';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
