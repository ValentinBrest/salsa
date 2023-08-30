import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { prices } from '../../../../../data/prices/prices';
import abonement1 from '../../../../../public/img/prices/1_lesson.jpg';
import abonement2 from '../../../../../public/img/prices/2_lesson.jpg';
import abonement3 from '../../../../../public/img/prices/3_lesson.jpg';
import abonement4 from '../../../../../public/img/prices/4_lesson.jpg';
import { PriceCardV2 } from '../PriceCardV2/PriceCardV2';

import cl from './PricesV2.module.scss';

interface PricesV2Props {
    className?: string;
    backgroundColor?: string ;
}

export const PricesV2 = ({ className, backgroundColor }: PricesV2Props) => {

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
        <div style={{background: backgroundColor}} id="price" className={classNames(cl.PricesV2, {}, [className])}>
            {/* <div className="container"> */}
            <Text title="Абонементы"/>
            <div className={cl.wrap}>
                {/* {prices.map((item, index) => <PriceCardV2 {...item} key={index} background={bagroundArr[index]}/>)} */}
            </div>
                
            {/* </div> */}
        </div>
    );
};
