import React from 'react';
import { About } from 'widgets/About';
import { Answers } from 'widgets/Answers';
import { Footer } from 'widgets/Footer';
import { Form } from 'widgets/Form';
import { Intro } from 'widgets/Intro';
import { NavBar } from 'widgets/NavBar';
import { Prices } from 'widgets/Prices';
import { Shedule } from 'widgets/Shedule';

export const MainPage = () => {
    return (
        <>
            <Intro />
            <About />
            <Shedule />
            <Prices />
            <Answers />
            <Form />
        </>
    );
};