import { classNames } from 'shared/lib/classNames/classNames';
import {
    Accordion,
    Button,
    ButtonSize,
    ButtonTheme,
    Card,
    Slider,
    Tabs,
} from 'shared/ui';
import { Divider } from 'shared/ui/Divider/Divider';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import summerGoodbye from '../../../../../data/summerGoodbye';

import './InfoSummerGoodbye.scss';
import cl from './InfoSummerGoodbye.module.scss';

interface InfoSummerGoodbyeProps {
    className?: string;
    backgroundColor?: string;
    backgroundColorCard?: string;
}

export const InfoSummerGoodbye = ({
    className,
    backgroundColor,
    backgroundColorCard,
}: InfoSummerGoodbyeProps) => {
    const registerBtn = (link, text = 'Зарегистироваться') => (
        <a target='_blank' href={link} className={cl.linkBtn}>
            <Button
                size={ButtonSize.ML}
                theme={ButtonTheme.OUTLINE}
                className={cl.btn}
            >
                {text}
            </Button>
        </a>
    );

    return (
        <section
            style={{
                background: backgroundColor,
                paddingBottom: '50px',
            }}
            id={summerGoodbye.id}
            className={classNames(cl.InfoSummerGoodbye, {}, [className])}
        >
            <div className='container'>
                <Card className={cl.card}>
                    <div className={cl.introWrap}>
                        <img
                            src={summerGoodbye.afisha}
                            alt='summerImg'
                            className={cl.poster}
                            loading="lazy"
                        />

                        <div>
                            <Text
                                animation={true}
                                theme={TextTheme.WITHOUT}
                                title={summerGoodbye.title}
                                className={cl.mainTitle}
                                // back={() => navigate('/')}
                            />
                            <Text
                                align={TextAlign.LEFT}
                                text={summerGoodbye.descr}
                            />
                            {summerGoodbye.descrItems.map((item, index) => (
                                <Text
                                    key={index}
                                    align={TextAlign.LEFT}
                                    text={item}
                                />
                            ))}
                            <Text
                                align={TextAlign.LEFT}
                                text={summerGoodbye.descrFinal}
                            />
                            {registerBtn(summerGoodbye.registerLink)}
                        </div>
                    </div>
                    <div>
                        <Text
                            align={TextAlign.LEFT}
                            title={summerGoodbye.programm}
                            className={cl.title}
                            theme={TextTheme.WITHOUT}
                        />
                        <Tabs
                            tabs={[
                                {
                                    id: 'tab1',
                                    label: summerGoodbye.firstDay,
                                    content: summerGoodbye.firstDayItems.map(
                                        (item, index) => (
                                            <Text
                                                key={index}
                                                align={TextAlign.LEFT}
                                                text={item}
                                            />
                                        )
                                    ),
                                },
                                {
                                    id: 'tab2',
                                    label: summerGoodbye.secondDay,
                                    content: (
                                        <>
                                            {summerGoodbye.secondDayItems.map(
                                                (item, index) => (
                                                    <Text
                                                        key={index}
                                                        align={TextAlign.LEFT}
                                                        text={item}
                                                    />
                                                )
                                            )}
                                        </>
                                    ),
                                },
                            ]}
                            defaultActiveTab='tab1'
                        />

                        <Text
                            align={TextAlign.LEFT}
                            title={summerGoodbye.masterClasses.title}
                            theme={TextTheme.WITHOUT}
                            className={cl.title}
                            id={summerGoodbye.masterClasses.id}
                        />
                        <Accordion
                            linkId={summerGoodbye.masterClasses.id}
                            height='3000px'
                            background={backgroundColorCard}
                        >
                            <Card className={cl.cardMaster}>
                                <Text
                                    text={summerGoodbye.masterClasses.descr}
                                />

                                {summerGoodbye.masterClasses.teachers.map(
                                    (item, index) => (
                                        <div key={item.id}>
                                            <div
                                                className={classNames(
                                                    cl.teacherWrap,
                                                    {
                                                        [cl.invertedTeacherWrap]:
                                                            index % 2 !== 0,
                                                    },
                                                    []
                                                )}
                                            >
                                                <img
                                                    src={item.src}
                                                    alt={item.name}
                                                    className={cl.photo}
                                                    loading="lazy"
                                                />
                                                <div className={cl.info}>
                                                    <>
                                                        <Text
                                                            align={
                                                                TextAlign.CENTER
                                                            }
                                                            subTitle={item.name}
                                                        />
                                                        <Text
                                                            align={
                                                                TextAlign.CENTER
                                                            }
                                                            text={item.descr}
                                                        />
                                                        {item.masterName && (
                                                            <Text
                                                                align={
                                                                    TextAlign.CENTER
                                                                }
                                                                text={`Тема мастер-класса: ${item.masterName}`}
                                                            />
                                                        )}
                                                    </>
                                                </div>
                                            </div>
                                            <Divider />
                                        </div>
                                    )
                                )}

                                <div
                                    className={classNames(
                                        cl.teacherWrap,
                                        {},
                                        []
                                    )}
                                >
                                    <img
                                        src={summerGoodbye.dj.src}
                                        alt={summerGoodbye.dj.name}
                                        className={cl.photo}
                                        loading="lazy"
                                    />
                                    <div>
                                        <Text
                                            align={TextAlign.CENTER}
                                            subTitle={summerGoodbye.dj.name}
                                        />
                                        <Text
                                            align={TextAlign.LEFT}
                                            className={cl.djDescr}
                                            text={summerGoodbye.dj.descr}
                                        />
                                    </div>
                                </div>

                                <Text
                                    align={TextAlign.CENTER}
                                    subTitle={summerGoodbye.prices}
                                    className={cl.prices}
                                />

                                {registerBtn(summerGoodbye.registerLink)}
                            </Card>
                        </Accordion>

                        <Text
                            align={TextAlign.LEFT}
                            title={summerGoodbye.volleyball.title}
                            theme={TextTheme.WITHOUT}
                            className={cl.title}
                            id={summerGoodbye.volleyball.id}
                        />
                        <div className={cl.volleyballWrap}>
                            <div>
                                <Text
                                    align={TextAlign.LEFT}
                                    text={summerGoodbye.volleyball.titleDescr}
                                />
                                <Text
                                    align={TextAlign.LEFT}
                                    text={summerGoodbye.volleyball.motivation}
                                />
                                {registerBtn(
                                    summerGoodbye.volleyball.link,
                                    'Регистрация на турнир'
                                )}
                            </div>

                            <img
                                src={summerGoodbye.volleyball.image}
                                alt='summerImg'
                                className={cl.volleyballImage}
                                loading="lazy"
                            />
                        </div>

                        <Accordion
                            linkId={summerGoodbye.volleyball.id}
                            height='2500px'
                            background={backgroundColorCard}
                            className={cl.accordion}
                        >
                            <Card background={backgroundColor}>
                                <Text
                                    align={TextAlign.LEFT}
                                    text={summerGoodbye.volleyball.descr}
                                />

                                {registerBtn(
                                    summerGoodbye.volleyball.link,
                                    'Регистрация на турнир'
                                )}
                            </Card>
                        </Accordion>

                        <Text
                            align={TextAlign.LEFT}
                            title={summerGoodbye.place.title}
                            theme={TextTheme.WITHOUT}
                            className={cl.titlePlace}
                            id={summerGoodbye.place.id}
                        />

                        <Text
                            align={TextAlign.CENTER}
                            subTitle={summerGoodbye.place.name}
                            theme={TextTheme.WITHOUT}
                            className={cl.subTitlePlace}
                            id={summerGoodbye.place.id}
                        />

                        <div className={'sliderImages'}>
                            <Slider
                                autoPlay={true}
                                showNavs={true}
                                images={summerGoodbye.place.images}
                                mobileImages={summerGoodbye.place.images}
                            />
                        </div>

                        <Accordion
                            linkId={summerGoodbye.place.id}
                            height='2500px'
                            background={backgroundColorCard}
                            className={cl.accordion}
                        >
                            <Card background={backgroundColor}>
                                <Text
                                    align={TextAlign.LEFT}
                                    text={summerGoodbye.place.descr}
                                />
                            </Card>
                        </Accordion>
                    </div>
                    {registerBtn(summerGoodbye.registerLink)}
                </Card>
            </div>
        </section>
    );
};
