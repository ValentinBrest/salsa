import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import Down from '../../../../shared/assets/icons/down.svg';
import Up from '../../../../shared/assets/icons/up.svg';

import cl from './AnswerCard.module.scss';

interface AnswerCardProps {
    className?: string;
    question: string;
    answer: string;
    id: number;
}

export const AnswerCard = (props: AnswerCardProps) => {
    const { className, question, answer, id } = props;

    const [isOpen, setIsOpen] = useState(false);

    

    return (
        <div className={classNames(cl.AnswerCard, {[cl.open]: isOpen}, [className])}>
            <div className={cl.header} onClick={() => setIsOpen(!isOpen)}>
                <span>{id}. {question}</span>
                <span className={classNames(cl.sign, {[cl.active]: isOpen}, [])}></span>
            </div>
            {isOpen && <div className={cl.body}>{answer}</div>}
            
        </div>
    );
};
