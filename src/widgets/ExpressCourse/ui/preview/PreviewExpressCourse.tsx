import {
    Button,
    ButtonSize,
    ButtonTheme,
    Template,
    Text,
    TextTheme,
} from 'shared/ui';

import { expressCourse } from '../../../../../data/expressCourse';
import posterPreview from '../../../../../public/img/poster.webp';

import cl from './PreviewExpressCourse.module.scss';

interface PreviewExpressCourseProps {
    backgroundColor?: string;
    backgroundColorCard?: string;
}

export const PreviewExpressCourse = ({ backgroundColor }: PreviewExpressCourseProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.PreviewExpressCourse}
            id={expressCourse.id}
            classWrap={cl.wrap}
            link={`/${expressCourse.id}`}
        >
            <Text text={expressCourse.subTitle} className={cl.subTitle} />
            <Text
                animation={true}
                theme={TextTheme.WITHOUT}
                title={expressCourse.title}
                className={cl.title}
            />
            {/* <Text text={course.date} className={cl.date} /> */}
            <div className={cl.saleWrap}>
                <img
                    loading='lazy'
                    src={posterPreview}
                    alt={'sale'}
                    className={cl.saleImg}
                />
                {/* <Text className={cl.saleText} text={expressCourse.saleText} /> */}
            </div>
            <Button
                size={ButtonSize.ML}
                theme={ButtonTheme.BACKGROUND}
                className={cl.btn}
            >
                Подробнее
            </Button>
        </Template>
    );
};
