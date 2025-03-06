import { Link } from 'react-router-dom';
import { classNames } from '../shared/lib/classNames/classNames';
import { useThene } from './providers/ThemeProviders';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

const App = () => {

    const { theme, toggleTheme } = useThene();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}> toggle</button>
        </div>
    );
};

export default App;