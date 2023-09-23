import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import bongi from '../../../../public/img/instuments/bongi.png';

import cl from './Lessons.module.scss';

interface LessonsProps {
    className?: string;
    backgroundColor?: string;
}

export const Lessons = ({ className, backgroundColor }: LessonsProps) => {
    return (
        <div
            style={{ background: backgroundColor }}
            id='lessons'
            className={classNames(cl.Lessons, {}, [className])}
        >
            <div className='container'>
                <div className={cl.wrap}>
                    <div></div>
                    <div className={cl.decr}>
                        <Text title='Занятия' />

                        <Text
                            align={TextAlign.RIGHT}
                            text={
                                <>
                                    На занятиях мы много внимания уделяем
                                    тщательной отработке базовых техник,
                                    развитию чувства ритма, учим правильному
                                    взаимодействию в паре. Обучаясь сальсе в
                                    нашей школе, вы получите качественные знания
                                    и умения. У нас на занятиях дружеская
                                    атмосфера, здоровый юмор и много хорошей
                                    музыки. Мы любим свое дело и делаем его
                                    качественно и с удовольствием! <br /><br />К
                                    сожалению, существуют люди, считающие, что
                                    сальса – это про отдых, знакомства, общение,
                                    удовольствие. А почему бы и нет. У нас
                                    действует система скидок, выгодная для
                                    молодых людей от 18 до 28 лет. Как правило,
                                    у молодых людей этого возраста меньшие
                                    доходы и бОльшие расходы. (подъемный бонус
                                    на первые 10 лет молодости ;)
                                </>
                            }
                        />
                    </div>
                    <img src={bongi} className={cl.bongi} />
                </div>
            </div>
        </div>
    );
};
