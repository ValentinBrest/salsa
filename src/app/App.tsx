import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';
import { Footer } from 'widgets/Footer';
import { NavBar } from 'widgets/NavBar';

import Up from '../../public/icon/toUp.svg';

function App() {
    const [isSctollTo, setIsScrollTo] = useState(false);
    const bgFirst = 'var(--bg-color)';
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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

    return (
        <div className='app'>
            <Suspense fallback=''>
                <NavBar />
                <main className='content-page'>
                    {AppRouter()}
                    <a
                        href='#up'
                        aria-label='наверх'
                        className={`pageup ${isSctollTo ? 'activeScroll' : ''}`}
                    >
                        <Up className='up' />
                    </a>
                </main>
                <Footer backgroundColor={bgFirst} />
            </Suspense>
        </div>
    );
}

export default App;
