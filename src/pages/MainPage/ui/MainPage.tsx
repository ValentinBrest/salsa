import { useEffect } from 'react';
import SnowStorm from 'react-snowstorm';
import { AboutSalsa } from 'widgets/AboutSalsa';
import { ExpressCourse } from 'widgets/ExpressCourse';
import { Information } from 'widgets/Information';
import { Intro } from 'widgets/Intro';
import { Lessons } from 'widgets/Lessons';
import { LookSalsa } from 'widgets/LookSalsa';
import { Photos } from 'widgets/Photos';
import { Prices } from 'widgets/Prices';
import { Questions } from 'widgets/Questions';
import { Salsa } from 'widgets/Salsa';
import { School } from 'widgets/School';
import { TrialLesson } from 'widgets/TrialLesson';

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
    const bgExpressCourse = 'var(--course-color)';

    const isNewYear = new Date() <= new Date('2025-01-15');

    return (
        <>
            <>
                {isNewYear && <SnowStorm />}
                <Intro isNewYear={isNewYear} />
                <ExpressCourse backgroundColor={bgExpressCourse}/>
                <AboutSalsa/>
                <Salsa backgroundColor={bgSecond} isNewYear={isNewYear} />
                <School
                    backgroundColor={bgFirst}
                    backgroundColorCard={bgSecond}
                    isNewYear={isNewYear}
                />
                <Lessons backgroundColor={bgSecond} />
                <Prices backgroundColor={bgFirst} isNewYear={isNewYear} />
                <LookSalsa backgroundColor={bgSecond} isNewYear={isNewYear} />
                <Photos isNewYear={isNewYear} backgroundColor={bgFirst} />
                <Questions backgroundColor={bgSecond} isNewYear={isNewYear} />
                <Information isNewYear={isNewYear} backgroundColor={bgFirst} />
            </>
            <TrialLesson backgroundColor={bgSecond} />
        </>
    );
};
