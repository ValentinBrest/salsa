import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import {answers} from '../../../../../data/answers/answers';
import { AnswerCard } from '../AnswerCard/AnswerCard';

import cl from './Answers.module.scss';

interface AnswersProps {
    className?: string;
}

export const Answers = ({ className }: AnswersProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.Answers, {}, [className])}>
            <div className='container'>
                <h2 className={cl.title}>Вопросы</h2>
                <div className={cl.wrap}>
                    {answers.map((item) => <AnswerCard {...item} key={item.id}/>)}
                </div>
            </div>
        </div>
    );
};
