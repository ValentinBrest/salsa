import { Register } from 'widgets/Register';
import { InfoWomanStyle } from 'widgets/WomanStyle';

export const WomanPage = ({}) => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    return (
        <>
            <InfoWomanStyle backgroundColor={bgSecond} backgroundColorCard={bgFirst} />
            <Register
                backgroundColor={bgSecond}
                eventName={'Женский стиль'}
            />
        </>
    );
};
