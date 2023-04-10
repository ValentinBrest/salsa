import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { prices } from '../../../../../data/prices/prices';
import abonement1 from '../../../../../public/img/prices/1_lesson.jpg';
import abonement2 from '../../../../../public/img/prices/2_lesson.jpg';
import abonement3 from '../../../../../public/img/prices/3_lesson.jpg';
import abonement4 from '../../../../../public/img/prices/4_lesson.jpg';
import { PriceCard } from '../PriceCard/PriceCard';

import cl from './Prices.module.scss';

interface PricesProps {
    className?: string;
}

export const Prices = ({ className }: PricesProps) => {
    const { t } = useTranslation();

    const Background1 = {
        background: `bottom / cover no-repeat url(${abonement1})`,
    };
    const Background2 = {
        background: `center / cover no-repeat url(${abonement2})`,
    };
    const Background3 = {
        background: `bottom / cover no-repeat url(${abonement3})`,
    };
    const Background4 = {
        background: `bottom / cover no-repeat url(${abonement4})`,
    };

    const bagroundArr = [Background1, Background2, Background3, Background4];

    return (
        <div className={classNames(cl.Prices, {}, [className])}>
            {/* <div className="container"> */}
            <Text title="Цены"/>
            <div className={cl.wrap}>
                {prices.map((item, index) => <PriceCard {...item} key={index} background={bagroundArr[index]}/>)}
            </div>
                
            {/* </div> */}
        </div>
    );
};
