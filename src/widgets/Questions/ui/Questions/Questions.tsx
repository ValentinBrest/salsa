
import { Template, Text } from 'shared/ui';

import {questions} from '../../../../../data/questions/questions';
import clave from '../../../../../public/img/instuments/clave.webp';
import blue from '../../../../../public/img/newYear/blue.png';
import { QuestionCard } from '../QuestionCard/QuestionCard';

import cl from './Questions.module.scss';

interface QuestionsProps {
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Questions = ({
    backgroundColor,
    isNewYear = false,
}: QuestionsProps) => {
    const O = <img src={blue} className={'toy medium'} alt='o' loading='lazy'/>;

    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Questions}
            id={questions.id}
            classWrap={cl.wrap}
            amount={0.1}
        >
            {isNewYear ? (
                <Text
                    hardTitle={['В', O, 'пр', O, 'сы']}
                    className={cl.title}
                />
            ) : (
                <Text title={questions.title} className={cl.title} />
            )}
            <img src={clave} className={cl.clave} alt='клавы' loading='lazy'/>
            
            {questions.text.map((item) => (
                <QuestionCard
                    {...item}
                    key={item.id}
                    className={cl.QuestionCard}
                />
            ))}
        </Template>
    );
};
