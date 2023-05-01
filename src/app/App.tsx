import { Suspense } from 'react';
import { Footer } from 'widgets/Footer';
import { NavBar } from 'widgets/NavBar';

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
