import { Template, Text,TextAlign } from 'shared/ui';

import { prices } from '../../../../../data/prices';
import { PriceBlock } from '../PriceBlock/PriceBlock';

import cl from './Prices.module.scss';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

const {title, notes} = prices;

export const Prices = ({ backgroundColor, isNewYear = false }: PricesProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.Prices}
            id={prices.id}
            amount={0.1}
        >
            <Text title={title} />
            <PriceBlock isNewYear={isNewYear} />
            {notes.map((item, index) => (
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
