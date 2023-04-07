import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { prices } from '../../../../../data/prices/prices';
import { PricesCard } from '../PriceCard/PricesCard';

import cl from './Prices.module.scss';

interface PricesProps {
    className?: string;
}

export const Prices = ({ className }: PricesProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.Prices, {}, [className])}>
            <div className="container">
                <Text title="Цены"/>
                <div className={cl.wrap}>
                    {prices.map((item, index) => <PricesCard {...item} key={index}/>)}
                </div>
                
            </div>
        </div>
    );
};
