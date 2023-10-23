import { Abonement } from 'widgets/Abonement';
import { AboutSalsa } from 'widgets/AboutSalsa';
import { Answers } from 'widgets/Answers';
import { Events } from 'widgets/Events';
import { Form } from 'widgets/Form';
import { Intro } from 'widgets/Intro';
import { IntroV2 } from 'widgets/Introv2';
import { Lessons } from 'widgets/Lessons';
import { Memo } from 'widgets/Memo';
import { Photos } from 'widgets/Photos';
import { Shedule } from 'widgets/Shedule';
import { WhySalsa } from 'widgets/WhySalsa';
import { WhySchool } from 'widgets/WhySchool';

export const MainPage = () => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    return (
        <>
            <IntroV2/>
            <AboutSalsa />
            {/* <Shedule backgroundColor={bgSecond}/> */}
            <WhySalsa backgroundColor={bgSecond}/>
            <WhySchool backgroundColor={bgFirst}/>
            <Lessons backgroundColor={bgSecond}/>
            <Abonement />
            {/* <Events /> */}
            <Photos backgroundColor={bgSecond}/>
            {/* <Memo backgroundColor={bgSecond}/> */}
            <Answers />
            <Form backgroundColor={bgSecond} />
        </>
    );
};