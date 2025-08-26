import {
    Button,
    ButtonSize,
    ButtonTheme,
    Template,
    Text,
    TextTheme,
} from 'shared/ui';

import summerGoodbye from '../../../../../data/summerGoodbye';

import cl from './PreviewSummerGoodbye.module.scss';

interface PreviewSummerGoodbyeProps {
    backgroundColor?: string;
    backgroundColorCard?: string;
}

export const PreviewSummerGoodbye = ({
    backgroundColor,
}: PreviewSummerGoodbyeProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.PreviewSummerGoodbye}
            id={summerGoodbye.id}
            classWrap={cl.wrap}
            link={`/${summerGoodbye.id}`}
        >
            <Text text={summerGoodbye.subTitle} className={cl.subTitle} />
            <Text
                animation={true}
                theme={TextTheme.WITHOUT}
                title={summerGoodbye.title}
                className={cl.title}
            />
            <div className={cl.saleWrap}>
                <img
                    loading='lazy'
                    src={summerGoodbye.afisha}
                    alt={'sale'}
                    className={cl.saleImg}
                />
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
