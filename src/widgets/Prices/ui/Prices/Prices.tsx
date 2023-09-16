import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { prices } from '../../../../../data/prices/prices';

import cl from './Prices.module.scss';

interface PricesProps {
    className?: string;
    backgroundColor?: string;
}

export const Prices = ({ className, backgroundColor }: PricesProps) => {
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobileScreen = useMediaQuery({ query: '(max-width: 400px)' });
    return (
        <div
            style={{ background: backgroundColor }}
            id='price'
            className={classNames(cl.Prices, {}, [className])}
        >
            <Text subTitle='Цены на абонементы' className={cl.title} />
            <div className={cl.wrap}>
                {!isTabletScreen && <div />}
                {prices.header.map((item, index) => (
                    <div
                        key={index}
                        className={classNames(cl.header, {}, [className])}
                    >
                        {index === 0 && isMobileScreen? (
                            <Text
                                text={'"Студен-ческий"'}
                                theme={TextTheme.ITALIC}
                                className={cl.fff}
                            />
                        ) : (
                            <Text
                                text={item.name}
                                theme={TextTheme.ITALIC}
                                className={cl.fff}
                            />
                        )}
                        {item.old && (
                            <Text
                                text={item.old}
                                theme={TextTheme.ITALIC}
                                className={cl.old}
                            />
                        )}
                        {item.note && (
                            <Text
                                text={item.note}
                                theme={TextTheme.ITALIC}
                                className={cl.note}
                            />
                        )}
                    </div>
                ))}
                {prices.body.map((el) =>
                    el.map((item, index) => (
                        <Text
                            key={index}
                            className={classNames(
                                cl.body,
                                {
                                    [cl.even]: !!(index % 2),
                                    [cl.odd]: !(index % 2),
                                    [cl.firstClm]: !(index % 4),
                                    [cl.third]: isTabletScreen && !(index % 4),
                                },
                                [className]
                            )}
                            text={item}
                            theme={TextTheme.ITALIC}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
