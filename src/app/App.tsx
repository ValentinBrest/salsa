import { Suspense, useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Footer } from 'widgets/Footer';
import { NavBar } from 'widgets/NavBar';

import Up from '../../public/img/toUp.svg';

import { AppRouter } from './providers/router';

function App() {
    const [isSctollTo, setIsScrollTo] = useState(false);
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
    return (
        <div className="app">
            <Suspense fallback="">
                <NavBar/>
                <div className="content-page">
                    <AppRouter/>  
                    <LinkScroll href="/" to={'up'} smooth={true} className={`pageup ${isSctollTo? 'activeScroll': ''}`}>
                        <Up className="up" />
                    </LinkScroll>
                </div>
                <Footer backgroundColor={bgFirst}/>
            </Suspense>
        </div>
    );
}

export default App;
