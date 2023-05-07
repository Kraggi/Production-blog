import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import './index.scss';

export const App = () => {
    return (
        <div className='app'>
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

