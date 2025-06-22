import { useMediaQuery } from 'react-responsive';
import { Accordion, Template, TextAlign, Text } from 'shared/ui';
import { lessons } from '../../../../data/lessons';
import guiro from '../../../../public/img/instuments/guiro.webp';
import cl from './Lessons.module.scss';

interface LessonsProps {
    backgroundColor?: string;
}

export const Lessons = ({ backgroundColor }: LessonsProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Lessons}
            id={lessons.id}
            classWrap={cl.wrap}
        >
            <div></div>
            <div className={cl.decr}>
                <Text title={lessons.title} />
                <Accordion
                    height='1400px'
                    background={backgroundColor}
                    linkId={lessons.id}
                >
                    {lessons.text.map((item, index) => (
                        <Text key={index} align={isMobileScreen ? TextAlign.CENTER : TextAlign.RIGHT} text={item} />
                    ))}
                </Accordion>
            </div>
            <img src={guiro} className={cl.guiro} alt='guiro' />
        </Template>
    );
};
