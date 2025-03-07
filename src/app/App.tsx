import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';
import { Sidebar } from 'widgets/Sidebar/ui';
import { Suspense } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';

const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;