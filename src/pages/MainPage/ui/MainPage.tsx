import { Abonement } from 'widgets/Abonement';
import { AboutSalsa } from 'widgets/AboutSalsa';
import { Answers } from 'widgets/Answers';
import { Events } from 'widgets/Events';
import { Form } from 'widgets/Form';
import { Information } from 'widgets/Information';
import { Intro } from 'widgets/Intro';
import { Lessons } from 'widgets/Lessons';
import { Photos } from 'widgets/Photos';
import { WhySalsa } from 'widgets/WhySalsa';
import { WhySchool } from 'widgets/WhySchool';

export const MainPage = () => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    return (
        <>
            <Intro/>
            <AboutSalsa />
            <WhySalsa backgroundColor={bgSecond}/>
            <WhySchool backgroundColor={bgFirst} backgroundColorCard={bgSecond}/>
            <Events backgroundColor={bgSecond}/>
            <Lessons backgroundColor={bgFirst}/>
            <Information backgroundColor={bgSecond}/>
            <Abonement backgroundColor={bgFirst}/>
            <Photos backgroundColor={bgSecond}/>
            <Answers backgroundColor={bgFirst}/>
            <Form backgroundColor={bgSecond}/>
        </>
    );
};