import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from '../shared/lib/classNames/classNames';
import { useThene } from './providers/ThemeProviders';
import { AboutPage } from 'pages/AboutPage/imdex';
import { MainPage } from 'pages/MainPage';
import './styles/index.scss';

const App = () => {

    const { theme, toggleTheme } = useThene();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Главная </Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={'Loading'}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}> toggle</button>
        </div>
    );
};

export default App;