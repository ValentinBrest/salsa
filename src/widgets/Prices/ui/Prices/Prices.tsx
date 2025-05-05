import { PriceBlock } from '../PriceBlock/PriceBlock';
import cl from './Prices.module.scss';
import { prices } from '../../../../../data/prices';
import { Template, TextAlign, Text } from 'shared/ui';

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
            id={'prices'}
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
