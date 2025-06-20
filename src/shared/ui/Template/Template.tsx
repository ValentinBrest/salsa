import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import cl from './Template.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface TemplateProps {
    className?: string;
    children: ReactNode;
    backgroundColor?: string;
    id?: string;
    classWrap?: string;
    amount?: number;
    link?: string;
}

const cardVariants: Variants = {
    offscreen: {
        y: 200,
    },
    onscreen: {
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1,
        },
    },
};

export const Template = ({
    className = '',
    backgroundColor,
    children,
    id,
    classWrap = '',
    amount = 0.3,
    link,
}: TemplateProps) => {
    const content = (
        <motion.section
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount }}
            style={{ background: backgroundColor }}
            id={id}
            className={classNames(cl.Template, {}, [className])}
        >
            <div className='container'>
                <motion.div
                    variants={cardVariants}
                    className={classNames(classWrap, {}, [])}
                >
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );

    return link ? (
        <a href={link} className={cl.link}>
            {content}
        </a>
    ) : (
        content
    );
};
