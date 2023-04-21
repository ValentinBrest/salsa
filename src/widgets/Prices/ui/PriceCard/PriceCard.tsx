import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './PriceCard.module.scss';

interface PriceCardProps {
    className?: string;
    title: string;
    price: number;
    limit: string;
    countTimeWeek?: string;
    isStudent?: boolean;
    background?: Record<string, string>
}

export const PriceCard = (props: PriceCardProps) => {
    const { className, title, price, limit, countTimeWeek, isStudent, background } = props;

    const { t } = useTranslation();

    return (
        <div style={background} className={classNames(cl.PriceCard, {}, [className])}>
            
            <div className={cl.title}><span>{title}</span></div>
            <div>
                <span>{price} руб.</span>
            </div>
            <div><span>{limit}</span></div>
            <div><span>{countTimeWeek}</span></div>
        </div>
    );
};
