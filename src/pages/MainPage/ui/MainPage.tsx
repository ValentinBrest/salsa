import { Abonement } from 'widgets/Abonement';
import { Abonement2 } from 'widgets/Abonement2';
import { About } from 'widgets/About';
import { Answers } from 'widgets/Answers';
import { Events } from 'widgets/Events';
import { Form } from 'widgets/Form';
import { Intro } from 'widgets/Intro';
import { Memo } from 'widgets/Memo';
import { Photos } from 'widgets/Photos';
import { Shedule } from 'widgets/Shedule';

export const MainPage = () => {
    const bgSecond = 'var(--bg-color-second)';

    return (
        <>
            <Intro/>
            <About />
            {/* <Shedule backgroundColor={bgSecond}/> */}
            <Abonement2 backgroundColor={bgSecond}/>
            <Abonement backgroundColor={bgSecond}/>
            {/* <Events /> */}
            <Photos />
            {/* <Memo backgroundColor={bgSecond}/> */}
            <Answers backgroundColor={bgSecond}/>
            <Form />
        </>
    );
};