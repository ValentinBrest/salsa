import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
// import { About } from 'widgets/AboutSalsa';

import cl from './PoliticsPage.module.scss';

export const PoliticsPage = () => {
    return <div className={classNames(cl.Politics, {}, [])}>
        <div className="container">
            <Text theme={TextTheme.WITHOUT} title="Политика конфиденциальности"/>
        </div>
    </div>;
};
