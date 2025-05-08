import {
    Button,
    ButtonSize,
    ButtonTheme,
    Template,
    Text,
    TextTheme,
} from 'shared/ui';
import { course } from '../../../../data/course';
import summerSale from '../../../../public/img/summerSale.webp';
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
            link={'/course'}
        >
            <Text text={course.subTitle} className={cl.subTitle} />
            <Text
                animation={true}
                theme={TextTheme.WITHOUT}
                title={course.title}
                className={cl.title}
            />
            <Text text={course.date} className={cl.date} />
            <div className={cl.saleWrap}>
                <img
                    loading='lazy'
                    src={summerSale}
                    alt={'sale'}
                    className={cl.saleImg}
                />
                <Text className={cl.saleText} text={course.saleText} />
            </div>
            <Button
                size={ButtonSize.ML}
                theme={ButtonTheme.OUTLINE}
                className={cl.btn}
            >
                Подробнее
            </Button>
        </Template>
    );
};
