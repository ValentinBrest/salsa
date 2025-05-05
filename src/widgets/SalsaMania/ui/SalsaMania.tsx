import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';
import { useTheme } from 'app/providers/ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY, LOCAL_STORAGE_THEME_KEY_PREVIOUS, Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { classNames } from 'shared/lib/classNames/classNames';
import { Accordion, Button, ButtonSize, ButtonTheme, Card } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { salsamania } from '../../../../data/salsamania/salsamania';
// import BOOMP from '../../../../public/img/main/8.webp';
// import PROP from '../../../../public/img/maria.webp';
// import BOOM from '../../../../public/img/project/salsamania/boom.webp';
// import FOOD from '../../../../public/img/project/salsamania/food.webp';
// import MUSIC from '../../../../public/img/project/salsamania/music.webp';
// import SIEMIA from '../../../../public/img/project/salsamania/seimia.webp';
// import TALK from '../../../../public/img/project/salsamania/talk.webp';

import cl from './SalsaMania.module.scss';

interface SalsaManiaProps {
    className?: string;
    backgroundColor?: string;
    setIsSalsamaniaTheme?: (value: boolean) => void;
}

export const SalsaMania = ({ backgroundColor, setIsSalsamaniaTheme }: SalsaManiaProps) => {
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
    // const projects = [
    //     {
    //         image: BOOMP,
    //         letter: 'С',
    //         name: 'BOOM',
    //         picture: BOOM,
    //         text: (
    //             <>
    //                 {salsamania.BOOM[0]}
    //                 <br />
    //                 <br />
    //                 {isTableScreen && (
    //                     <img src={BOOM} alt={'Boom'} className={cl.picture} />
    //                 )}
    //                 {salsamania.BOOM[1]}
    //             </>
    //         ),
    //         id: 1,
    //         status: 'active',
    //     },
    //     {
    //         image: SIEMIA,
    //         letter: 'А',
    //         name: 'SHOW',
    //         text: salsamania.SIEMIA[0],
    //         id: 2,
    //         status: 'nonactive',
    //     },
    //     {
    //         image: PROP,
    //         letter: 'Л',
    //         name: 'PRO',
    //         subname: 'ject',
    //         id: 3,
    //         status: 'nonactive',
    //     },
    //     {
    //         image: MUSIC,
    //         letter: 'Ь',
    //         name: 'MUSIC',
    //         text: salsamania.MUSIC[0],
    //         id: 4,
    //         status: 'nonactive',
    //     },
    //     {
    //         image: TALK,
    //         letter: 'С',
    //         name: 'TALK',
    //         text: salsamania.TALK[0],
    //         id: 5,
    //         status: 'nonactive',
    //     },
    //     {
    //         image: FOOD,
    //         letter: 'А',
    //         name: 'FOOD',
    //         text: salsamania.FOOD[0],
    //         id: 6,
    //         status: 'nonactive',
    //     },
    // ];
    // const [stageVisible, setStageVisible] = useState([{ ...projects[0] }]);

    const { setTheme } = useTheme();
    const backPage = () => {
        const newTheme =
            localStorage.getItem(LOCAL_STORAGE_THEME_KEY_PREVIOUS) ||
            Theme.LIGHT;
        setIsSalsamaniaTheme(false);
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return (
        <>
            <section
                id='projects'
                style={{ background: backgroundColor, paddingBottom: '50px' }}
            >
                <Text
                    title={salsamania.title}
                    className={cl.title}
                    animation={true}
                    theme={TextTheme.WITHOUT}
                    back={backPage}
                />
                <div className='container'>
                    <Text className={cl.mainText} text={salsamania.main} />
                    <div className={cl.wrap}>
                        {/* {projects.map((item) => (
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
                                <div className={cl.color} />
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
                        ))} */}
                    </div>
                </div>
            </section>
            {/* {projects.map(
                (item) =>
                    item.status === 'active' && (
                        <div key={item.name} id={item.name}></div>
                    )
            )} */}
            <div
                style={{ background: backgroundColor }}
                className={cl.salsaStages}
            >
                <div className='container'>
                    <div className={cl.wrapStage}>
                        {/* {!isTableScreen && (
                            <img
                                src={stageVisible[0].picture}
                                alt={stageVisible[0].name}
                                className={cl.picture}
                            />
                        )} */}
                        <Card withoutPic={true} className={cl.card}>
                            {' '}
                            <Text text={'САЛЬСА'} className={cl.subTitle} />
                            {/* <Text
                                title={`${stageVisible[0].name}${
                                    stageVisible[0].subname
                                        ? stageVisible[0].subname
                                        : ''
                                }`}
                                className={cl.stageTitle}
                                theme={TextTheme.WITHOUT}
                            /> */}
                            <Accordion
                                startHeight='300px'
                                height={getHeightAccordion()}
                                background={backgroundColor}
                            >
                                1111
                                {/* {stageVisible[0].text ??
                                    'Этап стартует уже скоро!!!'} */}
                            </Accordion>
                            <LinkScroll
                                href='/'
                                to='form'
                                smooth={true}
                                className={cl.linkBtn}
                            >
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
        </>
    );
};
