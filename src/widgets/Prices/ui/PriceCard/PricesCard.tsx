import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './PricesCard.module.scss';

interface PricesCardProps {
    className?: string;
    title: string;
    price: number;
    limit: string;
    countTimeWeek?: string;
    isStudent?: boolean;
}

export const PricesCard = (props: PricesCardProps) => {
    const { className, title, price, limit, countTimeWeek, isStudent } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cl.PricesCard, {}, [className])}>
            <div>{title}</div>
            <div>{price}</div>
            <div>{limit}</div>
            <div>{countTimeWeek}</div>
        </div>
    );
};
