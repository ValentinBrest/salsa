import { InfoExpressCourse } from 'widgets/ExpressCourse';
import { Register } from 'widgets/Register';

export const ExpressCoursePage = ({}) => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    return (
        <>
            <InfoExpressCourse backgroundColor={bgSecond} backgroundColorCard={bgFirst} />
            <Register
                backgroundColor={bgSecond}
                eventName={'ЭКСПРЕСС-КУРС'}
            />
        </>
    );
};
