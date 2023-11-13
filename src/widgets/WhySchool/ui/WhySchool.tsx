import { MutableRefObject, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
import { Accordion, Card } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import guiro from '../../../../public/img/instuments/bongi.png';
import maria from '../../../../public/img/maria.jpg';

import cl from './WhySchool.module.scss';

interface WhySchoolProps {
    className?: string;
    backgroundColor?: string;
    backgroundColorCard?: string;
}

export const WhySchool = ({
    className,
    backgroundColor,
    backgroundColorCard,
}: WhySchoolProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const isLaptopScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
    });

    return (
        <div
            style={{ background: backgroundColor }}
            id="about"
            className={classNames(cl.WhySchool, {}, [className])}
            ref={triggerRef}
        >
            <div className="container">
                <div
                    className={classNames(
                        cl.decr,
                        { [cl.active]: isVisible },
                        [],
                    )}
                >
                    <Text
                        className={cl.title}
                        theme={TextTheme.WITHOUT}
                        title="Почему вам именно в школу «СальсаБрест»? "
                    />

                    <Accordion
                        height="4500px"
                        background={backgroundColor}
                        linkId="about"
                    >
                        <div className={cl.wrap}>
                            <div>
                                <Text
                                    align={TextAlign.LEFT}
                                    className={cl.text}
                                    text={
                                        <>
                                            Первое и самое главное при выборе
                                            школы – это <b>преподаватели</b>. В
                                            «СальсаБрест» с вами будут работать
                                            профессиональные и опытные педагоги,
                                            и это отдельная тема! Приходя в
                                            какую-либо студию, не стесняйтесь
                                            интересоваться опытом ваших будущих
                                            преподавателей, ведь вы вручаете им
                                            свое тело, свой вкус и кусочек своей
                                            души. И, как показывает практика,
                                            сменить школу крайне трудно, т.к. в
                                            любом случае человек невольно
                                            привыкает к месту и к людям. Важно
                                            сразу сделать правильный выбор!
                                        </>
                                    }
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    className={cl.text}
                                    text={
                                        <>
                                            Мы определили Сальсу своим Делом и
                                            собираемся продвигать это
                                            танцевальное направление в нашем
                                            городе, ломать сложившиеся
                                            стереотипы, постоянно
                                            совершенствуясь в танце, продолжая
                                            углублять и делать всесторонними
                                            свои знания и методику преподавания.
                                            Мы готовы тратить на это все
                                            имеющееся у нас время. Поверьте,
                                            настоящая сальса этого достойна!
                                        </>
                                    }
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    className={cl.text}
                                    text={
                                        <>
                                            Мы танцуем сальсу более 10 лет,
                                            обучались у ведущих мировых танцоров
                                            сальсы. У нас за плечами множество
                                            изученных мастер-классов, поездок и
                                            выступлений. Только в этом (2023)
                                            году мы поучаствовали в
                                            сальса-марафоне Mambolove (г.
                                            Москва), фестивале ESTO.FEST (г.
                                            Санкт-Петербург), а также успели
                                            побывать в качестве педагогов в г.
                                            Минск на фестивале Minsk Salsa
                                            All-Stars от Salsa.Evolution. Мы не
                                            просто учим двигаться под музыку и
                                            взаимодействовать в паре, а обучаем
                                            пониманию динамических законов, и
                                            использованию этих законов в танце.
                                        </>
                                    }
                                />
                            </div>
                            <img src={guiro} className={cl.guiro} />
                        </div>

                        <Card
                            background={backgroundColorCard}
                            className={cl.card}
                        >
                            <>
                                Нередко в школах танцев одни и те же
                                преподаватели танцуют и преподают несколько
                                направлений танцев, несхожих по своей сути. При
                                таком подходе, качественно уметь танцевать
                                несколько направлений и качественно обучать им
                                невозможно. Тем более САЛЬСУ! Ведь сальса сама
                                по себе танцевальный фьюжн, она включает в себя
                                множество самодостаточных танцевальных
                                направлений. Студии, где преподаватели преподают
                                всё, к сожалению, формируют неправильное,
                                поверхностное представление о сальсе. К слову,
                                ни одна серьезная школа в других городах не
                                имеет преподавателей, которые вели бы
                                одновременно занятия по столь разным
                                танцевальным направлениям. Поэтому за САЛЬСОЙ
                                приходите к нам. Тогда вам не придется потом
                                сильно удивляться, а нам вас переучивать.
                            </>
                        </Card>

                        <div className={cl.invertedwrap}>
                            <img src={maria} alt="maria" className={cl.maria} />
                            <div>
                                {
                                    <>
                                        <Text subTitle="Представляем нашего преподавателя по женскому стилю в сальсе" />
                                        <Text
                                            align={TextAlign.CENTER}
                                            text={
                                                <>
                                                    <br />
                                                    Мария Сервантес. Начала свой
                                                    танцевальный путь с
                                                    художественной гимнастики, в
                                                    которую пришла в
                                                    четырехлетнем возрасте и
                                                    доросла до 2 взрослого
                                                    разряда. Затем с отличием
                                                    окончила «Детскую
                                                    хореографическую школу им.
                                                    Погодина г. Бреста». Имеет
                                                    большой опыт сценических
                                                    выступлений, участия в
                                                    международных конкурсах и
                                                    фестивалях, а также
                                                    собственных хореографических
                                                    постановок. Владеет
                                                    классическим и
                                                    народно-сценическим видами
                                                    танцев. Также изучала
                                                    современные танцы: контемп,
                                                    хип-хоп, джаз-фанк,
                                                    хай-хилз. Имеет опыт работы
                                                    в театре танца. Проходила
                                                    обучение у топовых танцоров
                                                    сальсы в
                                                    @mambovirtualacademy. Прошла
                                                    отбор в virtual team Татьяны
                                                    Каннарсы. Победительница
                                                    одного из челленджей Брэнды
                                                    Ли. <br /> <br /> Мария
                                                    продолжает развиваться сама
                                                    и с радостью делится
                                                    приобретенным опытом со
                                                    своими учениками. А имея
                                                    вдобавок и высшее
                                                    педагогическое образование,
                                                    она максимально
                                                    профессионально подходит к
                                                    процессу обучения.
                                                </>
                                            }
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
