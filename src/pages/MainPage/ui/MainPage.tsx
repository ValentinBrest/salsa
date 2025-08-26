import { refineDate } from 'shared/lib/helpers/refineDate';
import { AboutSalsa } from 'widgets/AboutSalsa';
import { Information } from 'widgets/Information';
import { Intro } from 'widgets/Intro';
import { Lessons } from 'widgets/Lessons';
import { LookSalsa } from 'widgets/LookSalsa';
import { Photos } from 'widgets/Photos';
import { Prices } from 'widgets/Prices';
import { Questions } from 'widgets/Questions';
import { Register } from 'widgets/Register';
import { Salsa } from 'widgets/Salsa';
import { School } from 'widgets/School';
import { PreviewSummerGoodbye } from 'widgets/SummerGoodbye';

export const MainPage = ({}) => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';
    const bgSummerGoodbye = 'var(--summer-goodbye-color)';

    const isNewYear = refineDate();

    return (
        <>
            <Intro isNewYear={isNewYear} />
            <PreviewSummerGoodbye backgroundColor={bgSummerGoodbye} />
            <AboutSalsa />
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
            <Register backgroundColor={bgSecond} />
        </>
    );
};
