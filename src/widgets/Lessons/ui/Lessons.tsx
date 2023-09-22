
import { useState } from 'react';
import { RoutePath } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
    Button,
    ButtonSize,
    ButtonTheme,
} from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import bongi from '../../../../public/img/instuments/bongi.png';

import cl from './Lessons.module.scss';

interface LessonsProps {
    className?: string;
    backgroundColor?: string;
}

export const Lessons = ({ className, backgroundColor }: LessonsProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            style={{background: backgroundColor}} 
            id="lessons" 
            className={classNames(cl.Lessons, {}, [className])}
        >
            <div className="container">
                <div className={cl.wrap}>
                    <div></div>
                    <div className={cl.decr}>
                        <Text title="Занятия" />

                        <Text align={TextAlign.RIGHT}
                            text="На занятиях мы много внимания уделяем тщательной отработке базовых техник, развитию чувства ритма, учим правильному взаимодействию в паре. Обучаясь сальсе в нашей школе, вы получите качественные знания и умения. У нас на занятиях дружеская атмосфера, здоровый юмор и много хорошей музыки. Мы любим свое дело и делаем его качественно и с удовольствием!
                            К сожалению, существуют люди, считающие, что сальса – это про отдых, знакомства, общение, удовольствие. А почему бы и нет. 
                            У нас действует система скидок, выгодная для молодых людей от 18 до 28 лет. Как правило, у молодых людей этого возраста меньшие доходы и бОльшие расходы. (подъемный бонус на первые 10 лет молодости ;) )"
                        />
                        {/* {!isVisible && <Text
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quae soluta cum tenetur, enim assumenda nisi laudantium dolor fugiat 
                        nulla inventore?...."
                            theme={TextTheme.ITALIC}
                        />}
                        {isVisible && <Text
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quae soluta cum tenetur, enim assumenda nisi laudantium dolor fugiat 
                        nulla inventore? Lorem d exercitationem iusto tempora mollitia optio eaque odio 
                        dolorem, sed beatae quod et tenetur nulla veniam laboriosam est 
                        voluptas minima voluptatibus, assumenda doloremque, voluptatem quibusdam 
                        facilis! Ex officia voluptas, assumenda "
                            theme={TextTheme.ITALIC}
                        />} */}

                        {/* <AppLink to={RoutePath.about} theme={AppLinkTheme.BUTTON}> */}
                        {/* <Button
                            className={cl.button}
                            size={ButtonSize.L}
                            theme={ButtonTheme.OUTLINE}
                            onClick={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? 'Скрыть' : 'Узнать больше'}
                        </Button> */}
                        {/* </AppLink> */}
                    </div>
                    <img src={bongi} className={cl.conga}/>
                    {/* <div className={cl.pick}></div> */}
                </div>
            </div>
        </div>
    );
};
