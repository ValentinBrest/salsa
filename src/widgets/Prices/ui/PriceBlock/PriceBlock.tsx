import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui';

import meshok from '../../../../../public/img/newYear/meshok.webp';


import cl from './PriceBlock.module.scss';

import { PriceHeader } from '../PriceHeader/PriceHeader';
import { PriceBody } from '../PriceBody/PriceBody';

interface PriceBlockProps {
    className?: string;
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const PriceBlock = ({
    className = '',
    backgroundColor,
    isNewYear = false,
}: PriceBlockProps) => {
    
    return (
        <div
            style={{ background: backgroundColor }}
            id='price'
            className={classNames(cl.Prices, {}, [className])}
        >
            {isNewYear && (
                <img
                    src={meshok}
                    className={cl.meshok}
                    alt='meshok'
                    loading='lazy'
                />
            )}
            <PriceHeader/>
            <PriceBody/>
        </div>
    );
};
