import { useMediaQuery } from 'react-responsive';
import { Button, ButtonTheme, Template, Text, TextAlign, TextTheme } from 'shared/ui';

import { school } from '../../../../data/school';
import bongi from '../../../../public/img/instuments/bongi.webp';
import orange from '../../../../public/img/newYear/orange.png';

import cl from './School.module.scss';
import { Link } from 'react-router-dom';

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
            id={school.id}
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

            <div className={cl.wrap}>
                <div>
                    <Text
                        align={
                            isMobileScreen ? TextAlign.CENTER : TextAlign.LEFT
                        }
                        className={cl.text}
                        text={school.text}
                    />
                </div>
                <img
                    src={bongi}
                    className={cl.bongi}
                    alt='бонги'
                    loading='lazy'
                />
            </div>
            <Button theme={ButtonTheme.OUTLINE} className={cl.btn}>
                <a href={'/school'}>Подробнее</a>
            </Button>
        </Template>
    );
};
