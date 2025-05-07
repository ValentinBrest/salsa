import { Course } from 'widgets/Course';
import { TrialLesson } from 'widgets/TrialLesson';

export const CoursePage = ({}) => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    return (
        <>
            <Course backgroundColor={bgSecond} backgroundColorCard={bgFirst} />
            <TrialLesson
                backgroundColor={bgSecond}
                eventName={'ЭКСПРЕСС-КУРС'}
            />
        </>
    );
};
