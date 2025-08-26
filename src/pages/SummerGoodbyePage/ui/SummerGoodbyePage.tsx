import { InfoSummerGoodbye } from 'widgets/SummerGoodbye';

export const SummerGoodbyePage = ({}) => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    return (
        <>
            <InfoSummerGoodbye backgroundColor={bgSecond} backgroundColorCard={bgFirst} />
        </>
    );
};
