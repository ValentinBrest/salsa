import { Abonement } from 'widgets/Abonement';
import { About } from 'widgets/About';
import { Answers } from 'widgets/Answers';
import { Events } from 'widgets/Events';
import { Form } from 'widgets/Form';
import { Intro } from 'widgets/Intro';
import { Memo } from 'widgets/Memo';
import { Photos } from 'widgets/Photos';
import { Prices } from 'widgets/Prices';
import { PricesV2 } from 'widgets/PricesV2';
import { Shedule } from 'widgets/Shedule';

export const MainPage = () => {
    const bgSecond = 'var(--bg-color-second)';

    return (
        <>
            {/* <Intro/> */}
            <About />
            {/* <Shedule backgroundColor={bgSecond}/> */}
            <Abonement />
            {/* <Events /> */}
            {/* <PricesV2 backgroundColor={bgSecond}/> */}
            <Photos backgroundColor={bgSecond}/>
            {/* <Memo backgroundColor={bgSecond}/> */}
            {/* <Prices /> */}
            <Answers />
            <Form backgroundColor={bgSecond}/>
        </>
    );
};