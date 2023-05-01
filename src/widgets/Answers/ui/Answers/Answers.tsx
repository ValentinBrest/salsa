import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { answers } from '../../../../../data/answers/answers';
import { AnswerCard } from '../AnswerCard/AnswerCard';

import cl from './Answers.module.scss';

interface AnswersProps {
    className?: string;
    backgroundColor?: string ;
}

export const Answers = ({ className, backgroundColor }: AnswersProps) => {

    
    return (
        <div style={{background: backgroundColor}} id="question" className={classNames(cl.Answers, {}, [className])}>
            <div className="container">
                <Text title="Вопросы"/>
                <div className={cl.wrap}>
                    {answers.map((item) => <AnswerCard {...item} key={item.id}/>)}
                </div>
            </div>
        </div>
    );
};
