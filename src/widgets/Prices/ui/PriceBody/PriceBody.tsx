import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui';
import { prices } from '../../../../../data/prices';
import salesImage from '../../../../../public/img/sales.png';
import clb from '../PriceBlock/PriceBlock.module.scss';
import cl from './PriceBody.module.scss';
interface PriceBodyProps {
    className?: string;
}

export const PriceBody = ({ className }: PriceBodyProps) => {
    return (
        <>
            {prices.body.map((el) => (
                <div
                    className={classNames(
                        cl.wrapBody,
                        { [cl.sales]: ['couple'].includes(el.key) },
                        [className]
                    )}
                    key={el.key}
                >
                    <div className={classNames(cl.body, {}, [cl.firstClm])}>
                        <Text text={el.name} theme={TextTheme.ITALIC} />
                        {['couple'].includes(el.key) && (
                            <img
                                src={salesImage}
                                className={cl.salesImage}
                                alt='sales'
                                loading='lazy'
                            />
                        )}
                    </div>

                    {el.prices.map((item, index) => (
                        <Text
                            key={index}
                            className={classNames(
                                cl.body,
                                {
                                    [cl.salesPrice]: ['couple'].includes(
                                        el.key
                                    ),
                                },
                                [clb[`category${index + 1}`]]
                            )}
                            text={
                                <>
                                    {item.currentPrice}
                                    <Text
                                        className={classNames(
                                            cl.oldPrice,
                                            {},
                                            []
                                        )}
                                        text={item.oldPrice}
                                    />
                                </>
                            }
                            theme={TextTheme.ITALIC}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};
