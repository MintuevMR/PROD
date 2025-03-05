import { Link } from 'react-router-dom';
import { classNames } from '../shared/lib/classNames/classNames';
import { useThene } from './providers/ThemeProviders';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {

    const { theme, toggleTheme } = useThene();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter />
            <button onClick={toggleTheme}> toggle</button>
        </div>
    );
};

export default App;