import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { prices } from '../../../../../data/prices/prices';;

import cl from './Prices.module.scss';

interface PricesProps {
    className?: string;
    backgroundColor?: string ;
}

export const Prices = ({ className, backgroundColor }: PricesProps) => {

    return (
        <div style={{background: backgroundColor}} id="price" className={classNames(cl.Prices, {}, [className])}>
            <div className="container">
                <Text title="Цены на абонементы"/>
                <div className={cl.wrap}>
                    <div></div>
                    {prices.header.map((item, index) => <div key={index} className={classNames(cl.header, {}, [className])}> 
                        <Text text={item.name} theme={TextTheme.ITALIC} className={cl.fff}/>
                        {item.old && <Text text={item.old} theme={TextTheme.ITALIC} className={cl.old}/>}
                        {item.note && <Text text={item.note} theme={TextTheme.ITALIC} className={cl.note}/>}
                    </div>,
                    )}
                    {prices.body.map((el) => el.map((item, index) => <Text
                        key={index}
                        className={classNames(cl.body, {[cl.even]: !!(index % 2), [cl.odd]: !(index % 2), [cl.firstClm]: !(index % 4)}, [className])}
                        text={item}
                        theme={TextTheme.ITALIC}
                    />))}
                </div>
                
            </div>
        </div>
    );
};
