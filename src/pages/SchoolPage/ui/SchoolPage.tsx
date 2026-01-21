import { useMediaQuery } from 'react-responsive';
import { Button, ButtonTheme, Card, Template, Text, TextAlign, TextTheme } from 'shared/ui';
import { schoolPage } from '../../../../data/school';
import Instagram from '../../../../public/icon/social/insta.svg';
import cl from './SchoolPage.module.scss';

interface SchoolPageProps {
    className?: string;
    backgroundColorCard?: string;
    isNewYear?: boolean;
}

const bgFirst = 'var(--bg-color-second)';

export const SchoolPage = ({ backgroundColorCard }: SchoolPageProps) => {
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <Template
            className={cl.School}
            backgroundColor={backgroundColorCard || bgFirst}
            isMotion={false}
        >
            <Text
                className={cl.title}
                theme={TextTheme.WITHOUT}
                title={schoolPage.title}
            />
            <div>
                {schoolPage.about.map((item) => (
                    <Card
                        key={item.id}
                        className={cl.card}
                        background={item?.isNote && '#ffe6e6'}
                    >
                        <Text
                            text={item?.title}
                            className={cl.cardTitle}
                            align={
                                isMobileScreen
                                    ? TextAlign.CENTER
                                    : TextAlign.LEFT
                            }
                        />
                        <Text
                            align={
                                isMobileScreen
                                    ? TextAlign.CENTER
                                    : TextAlign.LEFT
                            }
                            text={item?.description}
                        />
                    </Card>
                ))}
            </div>

            {schoolPage.teachers.map((item) => {
                const Tag = item.link ? 'a' : 'div';
                return (
                    <div key={item.id}>
                        <div className={cl.invertedwrap}>
                            <Tag href={item.link ?? ''} className={cl.link}>
                                <img
                                    src={item.image}
                                    alt={item.id}
                                    className={cl.image}
                                    loading='lazy'
                                />
                                <span className={cl.iconWrap}>
                                    {item?.alias && <span>{item.alias}</span>}
                                    <Instagram className={cl.insta} />
                                </span>
                            </Tag>
                            <div>
                                <Text subTitle={item.teacherTitle} />
                                <Text
                                    className={cl.teacherTitle}
                                    text={item.name}
                                />
                            </div>
                        </div>
                        <div>
                            {item.about.map((item) => (
                                <Card
                                    key={item.id}
                                    className={cl.card}
                                    background='#ffeeda'
                                >
                                    <Text
                                        text={item?.title}
                                        className={cl.cardTitle}
                                        align={
                                            isMobileScreen
                                                ? TextAlign.CENTER
                                                : TextAlign.LEFT
                                        }
                                    />
                                    <Text
                                        align={
                                            isMobileScreen
                                                ? TextAlign.CENTER
                                                : TextAlign.LEFT
                                        }
                                        className={cl.text}
                                        text={item?.description}
                                    />
                                </Card>
                            ))}
                        </div>
                    </div>
                );
            })}
            <Button theme={ButtonTheme.OUTLINE} className={cl.btn}>
                <a href='/'>
                    На главную
                </a>
            </Button>
        </Template>
    );
};
