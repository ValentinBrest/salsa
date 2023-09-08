import { RoutePath } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Prices } from 'widgets/Prices';

import Saxophone from '../../../../../public/img/instuments/saxophone.svg';

import cl from './Abonement.module.scss';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
}

export const Abonement = ({ className, backgroundColor }: PricesProps) => {
    return (
        <div style={{background: backgroundColor}} 
            id="abonement" className={classNames(cl.Abonement, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <div></div>
                    <Saxophone className={cl.sax}/>
                    {/* <div className={cl.pick}/> */}
                    <div className={cl.decr}>
                        <Text title="Абонементы" />
                        <Text subTitle="Занятия в группах" align={TextAlign.RIGHT} />
                        <Text align={TextAlign.RIGHT} 
                            text="В начинающей группе срок обучения: 0-2 месяцев. Изучаем базовые шаги, ритм, пластику тела, основные связки движений и взаимодействие в паре.
В продолжающей группе срок обучения 2+ месяцев. Изучаем сложные связки движений, сложную пластику тела, импровизацию, ведение и взаимодействие в паре."
                        />
                        <Text subTitle="Индивидуальные занятия" align={TextAlign.RIGHT} />
                        <Text align={TextAlign.RIGHT} className=""
                            text="Срок обучения неограничен. Нет предела совершенству! В среднем, за месяц, при занятиях 3 раза в неделю, можно научиться танцевать"
                        />
                        {/* <AppLink to={RoutePath.prices} theme={AppLinkTheme.BUTTON}>
                            <Button
                                className={cl.button}
                                size={ButtonSize.L}
                                theme={ButtonTheme.OUTLINE}
                            >
                                {'Узнать цены'}
                            </Button>
                        </AppLink> */}
                    </div>
                    
                </div> 

                <Prices/>
            </div>
        </div>
    );
};
