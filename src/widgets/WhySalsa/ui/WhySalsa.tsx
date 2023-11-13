import { MutableRefObject, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Accordion } from 'shared/ui';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import saxophone from '../../../../public/img/instuments/saxophone.png';

import cl from './WhySalsa.module.scss';

interface WhySalsaProps {
    className?: string;
    backgroundColor?: string;
}

export const WhySalsa = ({ className, backgroundColor }: WhySalsaProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });
    return (
        <div
            style={{ background: backgroundColor }}
            id="whySalsa"
            className={classNames(cl.WhySalsa, {}, [className])}
            ref={triggerRef}
        >
            <div className="container">
                <div
                    className={classNames(
                        cl.wrap,
                        { [cl.active]: isVisible },
                        [],
                    )}
                >
                    <div></div>
                    <img src={saxophone} className={cl.sax} />
                    <div className={cl.decr}>
                        <Text title="Почему сальса?" />
                        <Text
                            align={TextAlign.RIGHT}
                            className={cl.epigraph}
                            epigraph="«Однажды одна женщина попросила меня станцевать бачату, и я ответил, что не танцую бачату. А она сказала: «О-о-о. Так вы танцуете только сальсу?» И я сказал: «Да». Сальсу, что означает гуахира, гуарача, сон монтуно, мамбо, гуагуанко, бомба, плена, мозамбик, хала-хала, пачанга… Мне что, еще одного танца в жизни не хватало?»"
                            author={<b>Френки Мартинес</b>}
                        />
                        <Accordion
                            height="1070px"
                            background={backgroundColor}
                            linkId="whySalsa"
                        >
                            <Text
                                align={TextAlign.RIGHT}
                                className=""
                                text={
                                    <>
                                        Танцевальная и музыкальная культура
                                        сальсы развивается несколько сотен лет.
                                        Сальса-музыка – это квинтэссенция всего
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
                                        – неверно.{' '}
                                        <b>
                                            Сальса – это про искусство движения
                                            и про жизнь во всей ее полноте!
                                        </b>
                                        <br />
                                        <br />
                                        Выбирая направление танца, обращайте
                                        внимание на то, под какую музыку вы
                                        будете тренироваться, репетировать и,
                                        собственно, танцевать. Ведь танец –
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
