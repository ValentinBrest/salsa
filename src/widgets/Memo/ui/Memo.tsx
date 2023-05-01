import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import cl from './Memo.module.scss';

interface MemoProps {
    className?: string;
    backgroundColor?: string ;
}

export const Memo = ({ className, backgroundColor }: MemoProps) => {
    
    return (
        <div style={{background: backgroundColor}} id="memo" className={classNames(cl.Memo, {}, [className])}>
            <div className="container">
                <Text title="Памятка для новичков"/>
                <div className={cl.wrap}>
        
                    
                </div>
                
            </div>
        </div>
    );
};
