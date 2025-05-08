import bongi from '../../../../public/img/instuments/bongi.webp';
import maria from '../../../../public/img/maria.webp';
import orange from '../../../../public/img/newYear/orange.png';
import cl from './School.module.scss';
import { school } from '../../../../data/school';
import { Accordion, Template, TextAlign, TextTheme, Text, Card } from 'shared/ui';
import { useMediaQuery } from 'react-responsive';

interface SchoolProps {
    backgroundColor?: string;
    backgroundColorCard?: string;
    isNewYear?: boolean;
}

export const School = ({
    backgroundColor,
    backgroundColorCard,
    isNewYear = false,
}: SchoolProps) => {
    const O = <img alt='o' src={orange} className={'toy large'} />;
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.School}
            id={'school'}
            classWrap={cl.decr}
        >
            {isNewYear ? (
                <Text
                    className={cl.title}
                    theme={TextTheme.WITHOUT}
                    hardTitle={[
                        'П',
                        O,
                        'чему вам именнo в школу «СальсаБрест»?',
                    ]}
                />
            ) : (
                <Text
                    className={cl.title}
                    theme={TextTheme.WITHOUT}
                    title={school.title}
                />
            )}

            <Accordion
                height='3500px'
                background={backgroundColor}
                linkId='school'
            >
                <div className={cl.wrap}>
                    <div>
                        {school.text.map((item, index) => (
                            <Text
                                key={index}
                                align={isMobileScreen ? TextAlign.CENTER : TextAlign.LEFT}
                                className={cl.text}
                                text={item}
                            />
                        ))}
                    </div>
                    <img src={bongi} className={cl.bongi} alt='бонги' />
                </div>

                <Card background={backgroundColorCard} className={cl.card}>
                    {school.note}
                </Card>

                <div className={cl.invertedwrap}>
                    <img src={maria} alt='maria' className={cl.maria} />
                    <div>
                        <>
                            <Text subTitle={school.teacherTitle} />
                            {school.teacherText.map((item, index) => (
                                <Text
                                    key={index}
                                    align={TextAlign.CENTER}
                                    text={item}
                                />
                            ))}
                        </>
                    </div>
                </div>
            </Accordion>
        </Template>
    );
};
