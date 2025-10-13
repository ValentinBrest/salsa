import gold from '../../../../public/img/newYear/gold.png';
import saxophone from '../../../../public/img/instuments/saxophone.webp';
import partSnow from '../../../../public/img/newYear/partSnow.webp';
import { salsa } from '../../../../data/salsa';
import cl from './Salsa.module.scss';
import { Accordion, Template, TextAlign, Text } from 'shared/ui';
import { useMediaQuery } from 'react-responsive';

interface SalsaProps {
    backgroundColor?: string;
    isNewYear?: boolean;
}

export const Salsa = ({
    backgroundColor,
    isNewYear = false,
}: SalsaProps) => {
    const O = <img src={gold} alt='o' className={'toy small'} loading="lazy"/>;
    const isMobileScreen = useMediaQuery({ query: '(max-width: 576px)' });
    
    return (
        <div className={cl.superWrap}>
            {isNewYear && (
                <img
                    src={partSnow}
                    className={cl.partSnow}
                    alt='partSnow'
                    loading="lazy"
                />
            )}
            <Template
                backgroundColor={backgroundColor}
                className={cl.Salsa}
                classWrap={cl.wrap}
                id={salsa.id}
                amount={0.2}
            >
                <img src={saxophone} className={cl.sax} alt='саксофон' loading="lazy" />
                <div></div>
                <div className={cl.decr}>
                    {isNewYear ? (
                        <Text hardTitle={['П', O, 'чему сальса?']} />
                    ) : (
                        <Text title={salsa.title} />
                    )}
                    <Text
                        align={TextAlign.RIGHT}
                        className={cl.epigraph}
                        epigraph={salsa.epigraph.text}
                        author={salsa.epigraph.author}
                    />
                    <Accordion
                        height='800px'
                        background={backgroundColor}
                        linkId={salsa.id}
                    >
                        {salsa.text.map((item, index) => (
                            <Text
                                key={index}
                                align={isMobileScreen ? TextAlign.CENTER : TextAlign.RIGHT}
                                text={item}
                            />
                        ))}
                    </Accordion>
                </div>
            </Template>
        </div>
    );
};
