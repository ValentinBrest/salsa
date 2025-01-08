import SnowStorm from 'react-snowstorm';
import { Abonement } from 'widgets/Abonement';
import { AboutSalsa } from 'widgets/AboutSalsa';
import { Answers } from 'widgets/Answers';
import { Events } from 'widgets/Events';
import { Form } from 'widgets/Form';
import { Information } from 'widgets/Information';
import { Intro } from 'widgets/Intro';
import { Lessons } from 'widgets/Lessons';
import { NewYear } from 'widgets/NewYear';
import { Photos } from 'widgets/Photos';
import { SalsaMania } from 'widgets/SalsaMania';
import { WhySalsa } from 'widgets/WhySalsa';
import { WhySchool } from 'widgets/WhySchool';

interface MainPageProps {
    isSalsamaniaTheme?: boolean;
    setIsSalsamaniaTheme?: (value: boolean) => void;
}

export const MainPage = ({
    isSalsamaniaTheme,
    setIsSalsamaniaTheme,
}: MainPageProps) => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    const isNewYear = new Date() <= new Date('2025-01-15');

    return (
        <>
            {/* {isSalsamaniaTheme ? (
                <SalsaMania backgroundColor={bgSecond} setIsSalsamaniaTheme={setIsSalsamaniaTheme}/>
            ) : ( */}
            <>
                {isNewYear && <SnowStorm />}
                <Intro
                    isNewYear={isNewYear}
                    setIsSalsamaniaTheme={setIsSalsamaniaTheme}
                />
                <AboutSalsa />
                <WhySalsa isNewYear={isNewYear} backgroundColor={bgSecond} />
                <WhySchool
                    isNewYear={isNewYear}
                    backgroundColor={bgFirst}
                    backgroundColorCard={bgSecond}
                />
                <Lessons backgroundColor={bgSecond} />
                <Abonement isNewYear={isNewYear} backgroundColor={bgFirst} />
                <Events isNewYear={isNewYear} backgroundColor={bgSecond} />
                <Photos isNewYear={isNewYear} backgroundColor={bgFirst} />
                <Answers isNewYear={isNewYear} backgroundColor={bgSecond} />
                <Information isNewYear={isNewYear} backgroundColor={bgFirst} />
            </>
            {/* )} */}
            <Form backgroundColor={bgSecond} />
            {isNewYear && <NewYear />}
        </>
    );
};
