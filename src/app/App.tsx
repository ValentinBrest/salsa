import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { Footer } from 'widgets/Footer';
import { NavBar } from 'widgets/NavBar';

import Up from '../../public/img/toUp.svg';
import UpSalsamania from '../../public/img/toUpSalsamania.svg';

import { AppRouter } from './providers/router';
import { Theme, useTheme } from './providers/ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY_PREVIOUS } from './providers/ThemeProvider/lib/ThemeContext';

function App() {
    const [isSctollTo, setIsScrollTo] = useState(false);
    const bgFirst = 'var(--bg-color)';
    const { pathname } = useLocation();

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

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (theme === Theme.SALSAMANIA && pathname !== '/project') {
            setTheme(
                localStorage.getItem(LOCAL_STORAGE_THEME_KEY_PREVIOUS) ||
                    Theme.LIGHT
            );
        }
    }, [pathname, setTheme, theme]);

    return (
        <div className='app'>
            <Suspense fallback=''>
                <NavBar />
                <main className='content-page'>
                    <AppRouter />
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
