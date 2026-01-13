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
            {prices.note.map((item, index) => (
                <Text
                    key={index}
                    className={cl.text}
                    align={TextAlign.LEFT}
                    text={item}
                />
            ))}
            
        </Template>
    );
};
