import { MutableRefObject, useRef, useState } from 'react';
import { RoutePath } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Accordion,
    AppLink,
    AppLinkTheme,
    Button,
    ButtonSize,
    ButtonTheme,
} from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Prices } from 'widgets/Prices';

import saxophone from '../../../../public/img/instuments/saxophone.png';

import cl from './WhySalsa.module.scss';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';

interface WhySalsaProps {
    className?: string;
    backgroundColor?: string;
}

export const WhySalsa = ({ className, backgroundColor }: WhySalsaProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: () => console.log('1'),
    });
    return (
        <div ref={wrapperRef}
            style={{ background: backgroundColor }}
            id='whySalsa'
            className={classNames(cl.WhySalsa, {}, [className])}
        >
            <div className='container'>
                <div className={cl.wrap} ref={triggerRef}>
                    <div></div>
                    <img src={saxophone} className={cl.sax} />
                    <div className={cl.decr}>
                        <Text title='Почему сальса?' />
                        <Text
                            align={TextAlign.RIGHT}
                            className={cl.epigraph}
                            epigraph='«Однажды одна женщина попросила меня станцевать бачату, и я ответил, что не танцую бачату. А она сказала: «О-о-о. Так вы танцуете только сальсу?» И я сказал: «Да». Сальсу, что означает гуахира, гуарача, сон монтуно, мамбо, гуагуанко, бомба, плена, мозамбик, хала-хала, пачанга… Мне что, еще одного танца в жизни не хватало?»'
                            author={<b>Френки Мартинес</b>}
                        />
                        <Accordion height='500px' background={backgroundColor}>
                            <Text
                                align={TextAlign.RIGHT}
                                className=''
                                text={
                                    <>
                                        Танцевальная и музыкальная культура
                                        сальсы развивается несколько сотен лет.
                                        Музыка сальсы – это квинтэссенция всего
                                        лучшего, что есть в европейской
                                        классической музыке, музыке стран
                                        Латинской Америки, Африки,
                                        североамериканском джазе. Поэтому она
                                        так глубока и разнообразна. Развитию
                                        музыки сальсы посвящены книги. Сальса –
                                        одновременно история традиций и одно из
                                        самых популярных и современных
                                        направлений танца, сценическое искусство
                                        и уличный искрометный танец,
                                        зажигательный драйв и поэзия лиричной
                                        стороны жизни, работа над собой и
                                        максимально наполненный отдых и радость.
                                        Называть сальсу просто социальным танцем
                                        – неверно. <br />
                                        <br />
                                        Сальса – это про искусство движения и
                                        про жизнь во всей ее полноте! К
                                        сожалению, молодые люди, выбирая
                                        направление танца, часто не обращают
                                        внимание на то, под какую музыку они
                                        будут тренироваться, репетировать и,
                                        собственно, танцевать. А ведь танец –
                                        отражение музыки, а музыка – язык души.
                                    </>
                                }
                            />
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};
