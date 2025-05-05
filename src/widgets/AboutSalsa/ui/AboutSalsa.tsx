
import { Template, Text } from 'shared/ui';
import { aboutSalsa } from '../../../../data/aboutSalsa';
import conga from '../../../../public/img/instuments/conga.webp';
import cl from './AboutSalsa.module.scss';

interface AboutSalsaProps {
    backgroundColor?: string;
}

export const AboutSalsa = ({ backgroundColor }: AboutSalsaProps) => {
    return (
        <Template
            backgroundColor={backgroundColor}
            className={cl.AboutSalsa}
            id={'about'}
            classWrap={cl.wrap}
        >
            <div className={cl.decr}>
                {aboutSalsa.map((text, index) => <Text text={text} key={index}/>)}
            </div>
            <img src={conga} className={cl.conga} alt='конги' />
        </Template>
    );
};