import { Template, Text,TextAlign } from 'shared/ui';

import { prices } from '../../../../../data/prices';
import { PriceBlock } from '../PriceBlock/PriceBlock';

import cl from './Prices.module.scss';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Prices = ({ backgroundColor, isNewYear = false }: PricesProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Prices}
            id={prices.id}
            amount={0.1}
        >
            <Text title={prices.title} />
            <PriceBlock prices={prices.priceBlock} isNewYear={isNewYear} />
            <Text
                className={cl.text}
                align={TextAlign.LEFT}
                text={prices.note}
            />
        </Template>
    );
};
