import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import bongi from '../../../../public/img/instuments/guiro.png';

import cl from './Lessons.module.scss';
import { Accordion } from 'shared/ui';

interface LessonsProps {
    className?: string;
    backgroundColor?: string;
}

export const Lessons = ({ className, backgroundColor }: LessonsProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });

    return (
        <div
            style={{ background: backgroundColor }}
            id='lessons'
            className={classNames(cl.Lessons, {}, [className])}
            ref={triggerRef}
        >
            <div className='container'>
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        []
                    )}
                >
                    <div></div>
                    <div className={cl.decr}>
                        <Text title='Занятия' />
                        <Accordion height='1600px' background={backgroundColor} linkId='lessons'>
                            <Text
                                align={TextAlign.RIGHT}
                                text={
                                    <>
                                        На занятиях мы много внимания уделяем
                                        тщательной отработке техники танца,
                                        развитию чувства ритма, учим правильному
                                        взаимодействию в паре. Обучаясь сальсе в
                                        нашей школе, вы получите качественные
                                        знания и умения. А уровень погружения в
                                        танец зависит от вашего желания.<br/><br/> У нас
                                        на занятиях дружеская атмосфера,
                                        здоровый юмор и много хорошей музыки. Мы
                                        любим свое дело и делаем его качественно
                                        и с удовольствием! <b>Наша цель и наш
                                        «движ» основаны на стремлении к
                                        саморазвитию и самореализации в танце.
                                        Наша задача – создание пространства для
                                        личного роста и комфортного обучения. </b>
                                        Если вы хотите быть уверенными в своем
                                        уровне на столичных (или зарубежных)
                                        вечеренках, быть котируемым
                                        партнером/партнершей, то вам в
                                        «СальсаБрест». <br/><br/>Скорость продвижения по
                                        учебной программе на начальном этапе
                                        происходит по усредненному уровню
                                        группы. Это значит, что от стараний
                                        каждого зависит общий успех, а пропуски
                                        занятий тянут всю группу назад. Учебная
                                        программа, методика преподавания,
                                        танцевальный опыт преподавателей – все
                                        это является важной составляющей успеха
                                        учеников. Но! Никто, кроме вас самих, не
                                        заставит вас двигаться вперед. Мы дадим
                                        вам все, чтобы ваш рост состоялся. <b>Ваше
                                        дело прилагать усилия, чтобы взять то,
                                        что дается. Силы даются идущему!</b>
                                    </>
                                }
                            />
                        </Accordion>
                    </div>
                    <img src={bongi} className={cl.bongi} />
                </div>
            </div>
        </div>
    );
};
