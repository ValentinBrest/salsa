import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { CoursePage } from 'pages/CoursePage';
import { MainPage } from 'pages/MainPage';
import { Footer } from 'widgets/Footer';
import { NavBar } from 'widgets/NavBar';

import Up from '../../public/icon/toUp.svg';

import { useTheme } from './providers/ThemeProvider';
import {
    LOCAL_STORAGE_THEME_KEY_PREVIOUS,
    Theme,
} from './providers/ThemeProvider/lib/ThemeContext';
import { AppRouter } from 'app/providers/router';

function App() {
    const [isSctollTo, setIsScrollTo] = useState(false);
    const [isSalsamaniaTheme, setIsSalsamaniaTheme] = useState(false);
    const { setTheme } = useTheme();
    const bgFirst = 'var(--bg-color)';

    useEffect(() => {
        function handleMove() {
            if (scrollY < document.documentElement.clientHeight) {
                setIsScrollTo(false);
            } else {
                setIsScrollTo(true);
            }
        }
        window.addEventListener('scroll', handleMove);
        return () => {
            window.removeEventListener('scroll', handleMove);
        };
    }, []);

    useEffect(() => {
        if (!isSalsamaniaTheme) {
            setTheme(
                localStorage.getItem(LOCAL_STORAGE_THEME_KEY_PREVIOUS) ||
                    Theme.LIGHT,
            );
        }
    }, []);

    return (
        <div className='app'>
            <Suspense fallback=''>
                <NavBar setIsSalsamaniaTheme={setIsSalsamaniaTheme} />
                <main className='content-page'>
                    {AppRouter()}
                    <LinkScroll
                        href='/'
                        to={'up'}
                        aria-label='наверх'
                        smooth={true}
                        className={`pageup ${isSctollTo ? 'activeScroll' : ''}`}
                    >
                        <Up className='up' />
                    </LinkScroll>
                </main>
                <Footer backgroundColor={bgFirst} />
            </Suspense>
        </div>
    );
}

export default App;
