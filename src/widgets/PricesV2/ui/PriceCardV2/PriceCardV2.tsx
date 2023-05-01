import { classNames } from 'shared/lib/classNames/classNames';

import cl from './PriceCardV2.module.scss';

interface PriceCardV2Props {
    className?: string;
    title: string;
    price: string;
    description: string;
    countTimeWeek?: string;
    isStudent?: boolean;
    background?: Record<string, string>;
}

export const PriceCardV2 = (props: PriceCardV2Props) => {
    const {
        className,
        title,
        price,
        description,
        countTimeWeek,
        isStudent,
        background,
    } = props;


    return (
        <div
            style={background}
            className={classNames(cl.PriceCardV2, {}, [className])}
        >
            <div className={cl.wrap}></div>
            <div className={cl.priceData}>
                <div className={cl.title}>
                    <span>{title}</span>
                </div>
                <ul className={cl.priceDataWrap}>
                    <li className={cl.price}>
                        <span>Цена: {price}</span>
                    </li>
                    {countTimeWeek && (
                        <li className={cl.countTimeWeek}>
                            <span>Количество занятий: {countTimeWeek}</span>
                        </li>
                    )}
                    {description && (
                        <li>
                            <span>Описание: {description}</span>

                        </li>
                    )}
                </ul>
                {isStudent && <div className={cl.student}>*Чтобы приобрести абонемент, необходимо предъявить студенческий билет при оплате.</div>}
            </div>
        </div>
    );
};
