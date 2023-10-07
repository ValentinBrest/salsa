import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Prices } from 'widgets/Prices';

import trambone from '../../../../../public/img/instuments/trambone.png';

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
                        <Text title="Абонементы" />
                {/* <div className={cl.wrap}>
                    <img src={trambone} className={cl.trambone}/>
                    <div className={cl.decr}>
                        <Text subTitle="Занятия в группах" align={TextAlign.RIGHT} />
                        <Text align={TextAlign.RIGHT} 
                            text="В начинающей группе срок обучения: 0-2 месяцев. Изучаем базовые шаги, ритм, пластику тела, основные связки движений и взаимодействие в паре.
В продолжающей группе срок обучения 2+ месяцев. Изучаем сложные связки движений, сложную пластику тела, импровизацию, ведение и взаимодействие в паре."
                        />
                        <Text subTitle="Индивидуальные занятия" align={TextAlign.RIGHT} />
                        <Text align={TextAlign.RIGHT} className=""
                            text="Срок обучения неограничен. Нет предела совершенству! В среднем, за месяц, при занятиях 3 раза в неделю, можно научиться танцевать"
                        />
                    </div>
                    
                </div>  */}

                <Prices/>
            </div>
        </div>
    );
};
