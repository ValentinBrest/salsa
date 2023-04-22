import { Suspense } from 'react';
import { MainPage } from 'pages/MainPage';
import { About } from 'widgets/About';
import { Answers } from 'widgets/Answers';
import { Footer } from 'widgets/Footer';
import { Form } from 'widgets/Form';
import { Intro } from 'widgets/Intro';
import { NavBar } from 'widgets/NavBar';
import { Prices } from 'widgets/Prices';
import { Shedule } from 'widgets/Shedule';

import { AppRouter } from './providers/router';

function App() {
    return (
        <div className="app">
            <Suspense fallback="">
                <NavBar/>
                <div className="content-page">
                    <AppRouter/>  
                </div>
                <Footer/>
            </Suspense>
        </div>
    );
}

export default App;
