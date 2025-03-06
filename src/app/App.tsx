import { Link } from 'react-router-dom';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';
import { Sidebar } from 'widgets/Sidebar/ui';

const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;