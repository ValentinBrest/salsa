

import { Template, Text, TextTheme } from 'shared/ui';

import { trialLesson } from '../../../../../data/trialLesson';
import Mail from '../../../../../public/icon/mail.svg';
import Instagram from '../../../../../public/icon/social/instagram.svg';
import Telegram from '../../../../../public/icon/social/telegram.svg';
import dance from '../../../../../public/img/dance.webp';

import cl from './TrialLesson.module.scss';

interface TrialLessonProps {
    className?: string;
    backgroundColor?: string;
    eventName?: string
}

export const TrialLesson = ({ backgroundColor, eventName = 'ПРОБНЫЙ УРОК' }: TrialLessonProps) => {
    const {title, suptitle, message, toDirect, direct, messagePost} = trialLesson;
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.TrialLesson}
            id={'trialLesson'}
            classWrap={cl.wrap}
        >
            <div>
                <Text theme={TextTheme.WITHOUT} title={`${title} ${eventName}`} />
                <div className={cl.send}>
                    <Text className={cl.withoutMargin} text={suptitle} />
                    <div className={cl.wantToDance}>
                        <span>{message}</span>
                    </div>
                    <Text className={cl.withoutMargin} text={toDirect} />
                    <div className={cl.social}>
                        <a
                            href='https://www.instagram.com/salsabrest/'
                            aria-label='Перейти в инстаграм'
                        >
                            <Instagram className={cl.insta}
                            />
                        </a>
                        <a
                            href='https://t.me/salsabrestdirect'
                            aria-label='Перейти в телеграм'
                            className={cl.direct}
                            data-text={direct}
                        >
                            <Telegram className={cl.telega}
                            />
                        </a>
                    </div>
                    <Text text={messagePost} />
                    <a href={`mailto:${trialLesson.mail}`} className={cl.mailWrap}>
                        <Mail className={cl.mail}
                        />
                        <Text text={trialLesson.mail} />
                    </a>
                </div>
            </div>

            <img
                src={dance}
                className={cl.trialLessonImg}
                alt='все на танцы'
            />
        </Template> 
    );
};
