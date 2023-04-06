import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './AnswerCard.module.scss';

interface AnswerCardProps {
    className?: string;
    question: string;
    answer: string;
    id: number;
}

export const AnswerCard = (props: AnswerCardProps) => {
    const { className, question, answer, id } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cl.AnswerCard, {}, [className])}>
            <div>{id}</div>
            <div>{question}</div>
            <div>{answer}</div>
        </div>
    );
};
