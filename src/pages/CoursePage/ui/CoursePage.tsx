import { Course } from 'widgets/Course';
import { Form } from 'widgets/Form';

interface CoursePageProps {
    isSalsamaniaTheme?: boolean;
    setIsSalsamaniaTheme?: (value: boolean) => void;
}

export const CoursePage = ({
}: CoursePageProps) => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';

    const isNewYear = new Date() <= new Date('2025-01-15');

    return (
        <>
            <Course isNewYear={isNewYear} backgroundColor={bgSecond} backgroundColorCard={bgFirst}/>
            
            <Form backgroundColor={bgSecond} />
        </>
    );
};
