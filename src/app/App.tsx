import { Link } from 'react-router-dom';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';

const App = () => {

    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;