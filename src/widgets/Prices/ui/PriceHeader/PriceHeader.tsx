import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui';
import { prices } from '../../../../../data/prices';
import clb from '../PriceBlock/PriceBlock.module.scss';
import cl from './PriceHeader.module.scss';

interface PriceHeaderProps {
    className?: string;
}

const { header } = prices;
export const PriceHeader = ({ className }: PriceHeaderProps) => {
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(isTabletScreen);
    }, [isTabletScreen]);

    return (
        <div className={classNames(cl.wrapHeader, {}, [className])}>
            {!isMobile && <div />}
            {header.map((item, index) => (
                <div
                    key={index}
                    className={classNames(cl.header, {}, [
                        clb[`category${index + 1}`],
                    ])}
                >
                    <Text
                        text={item.category}
                        theme={TextTheme.ITALIC}
                        className={cl.category}
                    />

                    {item.old && (
                        <Text
                            text={item.old}
                            theme={TextTheme.ITALIC}
                            className={cl.old}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};
