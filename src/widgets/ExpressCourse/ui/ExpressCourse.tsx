import { Link } from 'react-router-dom';
import { Button, ButtonSize, ButtonTheme, LinkScroll, Template, Text, TextTheme } from 'shared/ui';
import { course } from '../../../../data/course';
import conga from '../../../../public/img/instuments/conga.webp';
import cl from './ExpressCourse.module.scss';

interface ExpressCourseProps {
    backgroundColor?: string;
}

export const ExpressCourse = ({ backgroundColor }: ExpressCourseProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.ExpressCourse}
            id={'express'}
            classWrap={cl.wrap}
        >
            <Text text={course.subTitle} className={cl.subTitle} />
            <Text
                animation={true}
                theme={TextTheme.WITHOUT}
                title={course.title}
                className={cl.title}
            />
            <Link
                to='/course'
                className={cl.linkBtn}
            >
                <Button
                    size={ButtonSize.ML}
                    theme={ButtonTheme.OUTLINE}
                    className={cl.btn}
                >
                    Подробнее
                </Button>
            </Link>
        </Template>
    );
};
