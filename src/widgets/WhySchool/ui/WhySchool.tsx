import { useState } from 'react';
import { RoutePath } from 'app/providers/router';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Prices } from 'widgets/Prices';

import guiro from '../../../../public/img/instuments/guiro.png';
import piter from '../../../../public/img/travel/piter.jpg';

import cl from './WhySchool.module.scss';

interface WhySchoolProps {
    className?: string;
    backgroundColor?: string;
}

export const WhySchool = ({ className, backgroundColor }: WhySchoolProps) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div style={{background: backgroundColor}} 
            id="about" className={classNames(cl.WhySchool, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    
                    <div className={cl.decr}>
                        <Text theme={TextTheme.WITHOUT} title="Почему вам именно в школу «СальсаБрест»? " />
                        
                        <Text align={TextAlign.CENTER}
                            text={<>Самое главное при выборе школы – это <b>преподаватели</b>. Мы определили Сальсу своим Делом и собираемся продвигать это танцевальное направление в нашем городе, ломать сложившиеся стереотипы, постоянно совершенствуясь в танце, продолжая углублять и делать всесторонними свои знания и методику преподавания. Мы готовы тратить на это все имеющееся у нас время. Поверьте, настоящая сальса этого достойна! <br/><br/> Мы танцуем сальсу более 10 лет, обучались у ведущих мировых танцоров сальсы. У нас за плечами множество изученных мастер-классов, поездок и выступлений.  Только в этом (2023) году мы успели побывать { !isVisible? '...' : ''} {!isVisible? '' : <>в качестве педагогов в г. Минске  на фестивале Minsk Salsa All-Stars от Salsa.Evolution, поучаствовали в Сальса марафоне Mambolove (г. Москва), фестивале ESTO.FEST (г. Санкт-Петербург). 
                                {/* <div className={cl.travel}>
                                    <img src={piter} alt="minsk" className={cl.minsk}/>
                                    <img src={piter} alt="moskow" className={cl.moskow}/>
                                    <img src={piter} alt="piter" className={cl.piter}/>
                                </div> */}
                                <br/>Наша задача, как преподавателей, не только в том, чтобы вы научились получать удовольствие от танца (как в паре, так и соло), но еще больше в том, чтобы вы испытывали радость от осознания своего роста в танце и от того, что попали именно к нам в школу. <br/><br/>Представляем нашего преподавателя по женскому стилю в сальсе. <b>Мария Сервантес</b>. <br/>Начала свой танцевальный путь с художественной гимнастики, в которую пришла в 4 года и доросла до 2 взрослого разряда. Затем с отличием окончила «Детскую хореографическую школу им. Погодина г.Бреста».<br/> Имеет большой опыт сценических выступлений, участия в международных конкурсах и фестивалях, а также собственных хореографических постановок. Владеет классическим и народно-сценическим видами танцев. Также изучала современные танцы: контемп, хип-хоп, джаз-фанк, хай-хилз. Имеет опыт работы в театре танца.  Проходила обучение у топовых танцоров сальсы в @mambovirtualacademy. Прошла отбор в virtual team Татьяны Каннарсы. Победительница одного из челленджей Брэнды Ли. Мария продолжает развиваться сама и с радостью  делится приобретенным опытом со своими учениками. А имея вдобавок и высшее педагогическое образование, она максимально профессионально подходит к процессу обучения.</>}</>}
                        />
                    </div>
                    {/* {isVisible && <div className={cl.teacher}>
                        <img src={guiro}/>
                    </div>} */}
                    <img src={guiro} className={cl.guiro}/>
                </div> 
                <div className={cl.invertedwrap}>
                    <div></div>
                    <div className={cl.decr}>                   
                        {isVisible && <Text align={TextAlign.RIGHT} className={cl.epigraph}
                            epigraph="«Эпиграф про румбу»"
                            author={<b>Френки Мартинес</b>}
                        />}
                        {isVisible && <Text align={TextAlign.CENTER}
                            text={<>Нередко в школах танцев одни и те же преподаватели танцуют и преподают несколько направлений танцев. Мы знаем по опыту, что при таком подходе, качественно уметь танцевать несколько направлений и качественно обучать им, невозможно. Тем более <b>САЛЬСУ</b>! Ведь сальса – это не один танец, она включает в себя сон, мамбо, ча-ча-ча, румбу, пачангу, свинг и т.д. Такие «школы», к великому нашему сожалению, формируют неправильное представление о сальсе, и наше задача – сломать сложившиеся стереотипы, изменить сложившуюся практику          апрвапрывпывапывапывапывап. К слову, ни одна серьезная школа в других городах не имеет преподавателей, которые вели бы одновременно занятия по столь разным танцевальным направлениям, как это происходит в нашем городе.  <u>Поэтому за САЛЬСОЙ приходите к нам.</u> Тогда вам не придется потом сильно удивляться, а нам вас переучивать.</>}
                        />}
                    </div>
                    
                </div> 
                {/* <svg className={cl.svg} viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
                    </svg> */}
                <Button
                    className={cl.button}
                    size={ButtonSize.L}
                    theme={ButtonTheme.CLEAR}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? <svg className={cl.svgInverted} viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
                    </svg> : <svg className={cl.svg} viewBox="0 0 5 9">
                        <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
                    </svg> }
                </Button>
            </div>
        </div>
    );
};
