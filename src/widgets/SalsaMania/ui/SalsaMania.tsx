import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { Accordion, Button, ButtonSize, ButtonTheme, Card } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Form } from 'widgets/Form';

import BOOMP from '../../../../public/img/main/8.webp';
import PROP from '../../../../public/img/maria.webp';
import BOOM from '../../../../public/img/project/salsamania/boom.webp';
import FOOD from '../../../../public/img/project/salsamania/food.webp';
import MUSIC from '../../../../public/img/project/salsamania/music.webp';
import SIEMIA from '../../../../public/img/project/salsamania/seimia.webp';
import TALK from '../../../../public/img/project/salsamania/talk.webp';

import cl from './SalsaMania.module.scss';

interface SalsaManiaProps {
    className?: string;
    backgroundColor?: string;
}

export const SalsaMania = ({ className, backgroundColor }: SalsaManiaProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    const isTableScreen = useMediaQuery({ query: '(max-width: 992px)' });
    const getHeightAccordion = () => {
        if (isMobileScreen) {
            return '2500px';
        } else if (isTableScreen) {
            return '2200px';
        } else {
            return '1700px';
        }
    };
    const projects = [
        {
            color: '#d39f64',
            image: BOOMP,
            to: '/projects/salsamania',
            letter: 'С',
            name: 'BOOM',
            picture: BOOM,
            text: (
                <>
                    ИТАК! Первый шаг в рамках Проекта «СальсаМания» – новый
                    набор на парную Сальсу с нуля!💥 28 февраля (ср)– пробное
                    занятие❗️
                    <br />
                    <br />
                    ВНИМАНИЕ! «Погружение» в сальсу в рамках Проекта
                    «СальсаМания» дает скидку на абонемент на 6 месяцев.
                    <br />
                    <br />
                    💫Сальса – это активность и лирика, брутальность и
                    элегантность одновременно. Сальса – это МУЗЫКА! Ни один
                    танец не может похвастаться таким разнообразием настроений и
                    стилей!💯 Сальса в паре – это максимально круто, интересно,
                    музыкально.
                    <br />
                    ✅️Мы не просто учим топать в ритм, мы поможем вам сделать
                    ваше тело умным, изучить законы импровизации, развить свою
                    музыкальность!🤓
                    <br />
                    <br />
                    <>
                        {isTableScreen && (
                            <img
                                src={BOOM}
                                alt={'Boom'}
                                className={cl.picture}
                            />
                        )}
                    </>
                    ➡️ ПЕРВОЕ ЗАНЯТИЕ (пробное): <br />
                    🔹️28 февраля с 20:00 до 21:00
                    <br />
                    🔹️фитес-клуб MFit (Гоголя, 61), второй этаж, зал 4. (Ключ
                    от шкафчика в раздевалке выдается милыми девушками на
                    ресепшене).
                    <br />
                    <br />
                    ➡️ СТОИМОСТЬ с учетом скидок Проекта:
                    <br />
                    💰первое (пробное) занятие – 5р. (есть возможность расчета
                    по карте).
                    <br />
                    🔹️Стоимость стандартного абонемента на месяц – 75 р.,
                    <br />
                    🔹️молодежного – 65 р, <br />
                    🔹️студенческого – 35 р.
                    <br />
                    🕺💃Стоимость парных абонементов: стандарт - 130, молодежный
                    - 100, студенческий - 55.
                    <br />
                    <br />
                    ➡️ ЧТО ИМЕТЬ ПРИ СЕБЕ:
                    <br />
                    ✔️удобную для двигательной активности одежду👕
                    <br />
                    ✔️и обязательно сменную(!) обувь👟 (желательно с гладкой
                    подошвой).
                    <br />
                    ✔️Плюс при покупке абонемента может потребоваться паспорт
                    или водительское удостоверение (для студентов дневной формы
                    обучения — студенческий билет), так как у нас действует
                    система скидок, основывающаяся на возрасте (скидки студентам
                    и молодым людям от 18 от 28 лет), а также существует
                    возрастное ограничение. (18-40 лет).
                    <br />
                    <br />
                    ❗️Дорогие девушки, воспользуйтесь всем своим обаянием и
                    уговорите своего знакомого (друга, бой-френда, коллегу,
                    соседа и т.д.) поддержать вас в вашем увлечении. На занятиях
                    пары меняются для оптимального овладения навыком
                    ведения/следования. Если вы найдёте парня, который не против
                    вас поддержать, будет замечательно! Когда в группе мало
                    партнеров (а их, как правило, записывается меньше, чем
                    партнерш), вам же придется долго простаивать на занятии. А
                    когда гендерный баланс соблюден, обучение идет намного
                    эффективнее. Плюс парный абонемент дешевле.😉
                    <br />
                    <br />
                    ❗❗❗Парни, если вы считаете, что парные танцы не для
                    мужчин, то Сальса для вас! 🤘
                </>
            ),
            id: 1,
            status: 'active',
        },
        {
            color: '#d39f64',
            image: SIEMIA,
            to: '/projects/salsamania',
            letter: 'А',
            name: 'SHOW',
            text: (
                <>
                    В рамках Подпроекта «СальсаSHOW» мы готовим выступления
                    следующих групп:
                    <br />
                    <br />
                    - начинающих, с опытом от 8 месяцев в нашей студии;
                    <br />
                    - группа по женскому стилю;
                    <br />- группа профессиональных танцоров, окончивших
                    обучение в школе хореографии, ансамбле «Праменчык»,
                    танцующих в ансамле «Радость», временно не танцующих, но
                    желающих продлить свою жизнь танцора в достойном для этого
                    месте.
                </>
            ),
            id: 2,
            status: 'nonactive',
        },
        {
            color: '#d39f64',
            image: PROP,
            to: '/projects/salsamania',
            letter: 'Л',
            name: 'PRO',
            subname: 'ject',
            id: 3,
            status: 'nonactive',
        },
        {
            color: '#d39f64',
            image: MUSIC,
            letter: 'Ь',
            name: 'MUSIC',
            text: (
                <>
                    Всем привет.
                    <br />
                    Мы начинаем разбор одной из наиболее популярных сальса
                    песен. НО! Стоп! Здесь не про теорию музыкальности. Здесь
                    про попытку стать музыкантом!!!
                    <br />
                    <br /> Откапываем из-под кроватей, снимаем с пыльных шкафов,
                    вынимаем из кладовки заброшенные, забытые музыкальные
                    инструменты и начинаем готовиться к коллективному
                    исполнению. Пальчики то, пооомнят! Ноты раздадим! О месте и
                    времени сбора после составления списка сумасшедших!
                    <br />
                    <br /> Кто не владеет музыкальным инструментом – не спешите
                    списывать себя со счетов, клавы и маракасы никто не отменял.
                    Кроме того, не забывайте, самый мощный и непревзойденный
                    музыкальный инструмент – человеческий голос. И даже, если вы
                    не солист, то уж в подпевке то справитесь ;)
                    <br />
                    <br /> Главное – достаточное количество крэзи-бактерий в
                    крови.
                </>
            ),
            id: 4,
            status: 'nonactive',
        },
        {
            color: '#d39f64',
            image: TALK,
            to: '/projects/salsamania',
            letter: 'С',
            name: 'TALK',
            text: (
                <>
                    Всем, здравствуйте! Здесь соберутся люди, которые уже
                    созрели к тому, чтобы погружение в сальсу стало не просто
                    работой над техникой. Мы открываем курс Диалогов. Почему
                    диалогов, а не лекций? Да потому, что участие в обсуждении и
                    личный вклад в коллективную разумность ))) неограничены.
                    <br />
                    <br />
                    Да, будет ведущий, он задаст тему, он начнет ее раскрывать.
                    А дальше мы будем делиться собственным опытом и пониманием
                    того, о чем идет речь. Философы называют это исполнением
                    текстов. Ведь знания – это живое.
                    <br />
                    <br /> Кроме того, в рамках этого проекта, преподаватель
                    составит вам личный план тренеровок, направленный на
                    исправление характерных для вас проблем.
                </>
            ),
            id: 5,
            status: 'nonactive',
        },
        {
            color: '#d39f64',
            image: FOOD,
            to: '/projects/salsamania',
            letter: 'А',
            name: 'FOOD',
            text: (
                <>
                    Всем приятного аппетита! Но подождите. Не торопитесь ложить
                    в рот то, что уже на вилке. А может быть ЭТО убивает в вас
                    танцора! А вы ведь уже не принадлежите только себе самому.
                    Вы нужны Сальса-социуму! Ладно, раз уж накололи – ешьте! Но
                    давайте понимать, что язык танцора – это его тело, и оно
                    должно быть умным! и здоровым! В нашей студии присутствуют
                    прекрасные специалисты по питанию, в том числе
                    сертифицированный специлиаст нутрициолог. Он поможет
                    разобраться что именно колет в боку, откуда берутся лишние
                    деления на весах, почему вам так грустно сегодня, а вчера вы
                    хотели догнать паровоз.
                </>
            ),
            id: 6,
            status: 'nonactive',
        },
    ];
    const [stageVisible, setStageVisible] = useState([{ ...projects[0] }]);
    
    return (
        <>
            <section
                id='projects'
                style={{ background: backgroundColor, paddingBottom: '50px' }}
            >
                <Text
                    title={'"СальсаМания"'}
                    className={cl.title}
                    animation={true}
                    theme={TextTheme.WITHOUT}
                />
                <div className='container'>
                    <Text
                        className={cl.mainText}
                        text={
                            <>
                                <b>Проект «СальсаМания»</b> это начало новой
                                инициативы, направленной на популяризацию в
                                Бресте самого музыкального, движового и
                                одновременно культурного танца, вобравшего в
                                себя огромное множество направлений и стилей.
                                <br />
                                <br />
                                <em>
                                    Сальса – это результат слияния
                                    латиноамериканской, африканской и
                                    европейской культур в одно целое. Эта смесь
                                    дала толчок развитию таких танцевальных
                                    направлений, как сон, мамбо, касино, бугалу,
                                    ча-ча, фламенко, пачанга, афро, румба и
                                    многих других. Сальса - это буря эмоций в
                                    сочетании с глубиной переживаний. Почему?
                                    Потому что вышла из народа, прошла все
                                    ступени становления и добралась до высокой
                                    сцены, оставаясь доступной на всех
                                    пройденных уровнях. Проект «СальсаМания» -
                                    это культурный взрыв в танцах!
                                </em>
                                <br />
                                <br />
                                Проект делится на следующие ударные направления:
                            </>
                        }
                    />
                    <div className={cl.wrap}>
                        {projects.map((item) => (
                            <LinkScroll
                                key={item.id}
                                href='/'
                                to={item.name}
                                smooth={true}
                                className={classNames(
                                    cl.stage,
                                    {
                                        [cl.active]:
                                            stageVisible[0].name === item.name,
                                    },
                                    []
                                )}
                                data-status={item.status}
                                onClick={() =>
                                    item.status === 'active' &&
                                    setStageVisible([item])
                                }
                            >
                                <div
                                    className={cl.color}
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <Text
                                    text={item.letter}
                                    className={cl.letter}
                                />
                                <Text text={item.name} className={cl.name} />
                                <img src={item.image} className={cl.image} />
                                {item.status !== 'active' && (
                                    <div className={cl.soon}>Скоро</div>
                                )}
                            </LinkScroll>
                        ))}
                    </div>
                </div>
            </section>
            {projects.map(
                (item) =>
                    item.status === 'active' && (
                        <div key={item.name} id={item.name}></div>
                    )
            )}
            <div
                style={{ background: backgroundColor }}
                className={cl.salsaStages}
            >
                <div className='container'>
                    {/* <Text title={`Сальса${stageVisible[0].name}${stageVisible[0].subname ? stageVisible[0].subname: ''}`} className={cl.title} /> */}
                    <div className={cl.wrapStage}>
                        {!isTableScreen && (
                            <img
                                src={stageVisible[0].picture}
                                alt={stageVisible[0].name}
                                className={cl.picture}
                            />
                        )}
                        <Card
                            withoutPic={true}
                            // background={backgroundColorCard}
                            className={cl.card}
                        >
                            {' '}
                            <Text text={'САЛЬСА'} className={cl.subTitle} />
                            <Text
                                title={`${stageVisible[0].name}${
                                    stageVisible[0].subname
                                        ? stageVisible[0].subname
                                        : ''
                                }`}
                                className={cl.stageTitle}
                                theme={TextTheme.WITHOUT}
                            />
                            <Accordion
                                startHeight='300px'
                                height={getHeightAccordion()}
                                background={backgroundColor}
                            >
                                {stageVisible[0].text ??
                                    'Этап стартует уже скоро!!!'}
                            </Accordion>
                            <LinkScroll href='/' to='form' smooth={true} className={cl.linkBtn}>
                                <Button
                                    size={ButtonSize.L}
                                    theme={ButtonTheme.OUTLINE}
                                    className={cl.btn}
                                >
                                    Участвовать
                                </Button>
                            </LinkScroll>
                        </Card>
                    </div>
                </div>
            </div>

            <Form backgroundColor={backgroundColor} />
        </>
    );
};
