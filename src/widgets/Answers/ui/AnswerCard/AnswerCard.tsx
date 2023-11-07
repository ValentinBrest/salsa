import { ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import cl from './AnswerCard.module.scss';

interface AnswerCardProps {
    className?: string;
    question: string;
    answer: ReactNode;
    id: number;
}

export const AnswerCard = (props: AnswerCardProps) => {
    const { className, question, answer, id } = props;

    const [isOpen, setIsOpen] = useState(false);

    

    return (
        <div className={classNames(cl.AnswerCard, {[cl.open]: isOpen}, [className])}>
            <div className={cl.header} onClick={() => setIsOpen(!isOpen)}>
                <Text text={`${id}. ${question}`} className={cl.text}/>
                <span className={classNames(cl.sign, {[cl.active]: isOpen}, [])}></span>
            </div>
            {isOpen && <Text className={cl.body} text={answer}/>}
            
        </div>
    );
};
