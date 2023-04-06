import { Suspense } from 'react';
import { About } from 'widgets/About';
import { Answers } from 'widgets/Answers';
import { Footer } from 'widgets/Footer';
import { Form } from 'widgets/Form';
import { Intro } from 'widgets/Intro';
import { NavBar } from 'widgets/NavBar';
import { Prices } from 'widgets/Prices';
import { Shedule } from 'widgets/Shedule';
import { Sidebar } from 'widgets/Sidebar/ui';

import { AppRouter } from './providers/router';

function App() {

    return (
        <div className="app">
            <Suspense fallback="">
                <NavBar/>
                <Intro/>
                <About/>
                <Shedule/>
                <Prices/>
                <Answers/>
                <Form/>
                <Footer/>
                {/* <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>  
                </div> */}
            </Suspense>
            
        </div>
    );
}

export default App;
