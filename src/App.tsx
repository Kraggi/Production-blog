import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { useTheme } from "./theme/useTheme";
import './styles/index.scss';
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Изменить тему</button>
            <div>
                <Link to='/'>Главная</Link>
                <Link to='/about'>О сайте</Link>
            </div>
            <Suspense fallback={<h1>Загрузка...</h1>}>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                    <Route path='/' element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

