import SnowStorm from 'react-snowstorm';
import { AboutSalsa } from 'widgets/AboutSalsa';
import { Answers } from 'widgets/Answers';
import { Events } from 'widgets/Events';
import { Form } from 'widgets/Form';
import { Information } from 'widgets/Information';
import { Intro } from 'widgets/Intro';
import { Lessons } from 'widgets/Lessons';
import { Photos } from 'widgets/Photos';
import { Prices } from 'widgets/Prices';
import { Salsa } from 'widgets/Salsa';
import { School } from 'widgets/School';

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
                />
                <AboutSalsa />
                <Salsa backgroundColor={bgSecond} isNewYear={isNewYear} />
                <School
                backgroundColor={bgFirst}
                backgroundColorCard={bgSecond}
                isNewYear={isNewYear}
            />
                <Lessons backgroundColor={bgSecond} />
                <Prices backgroundColor={bgFirst} isNewYear={isNewYear} />
                <Events isNewYear={isNewYear} backgroundColor={bgSecond} />
                <Photos isNewYear={isNewYear} backgroundColor={bgFirst} />
                <Answers isNewYear={isNewYear} backgroundColor={bgSecond} />
                <Information isNewYear={isNewYear} backgroundColor={bgFirst} />
            </>
            {/* )} */}
            <Form backgroundColor={bgSecond} />
        
        </>
    );
};
