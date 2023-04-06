import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';

import cl from './About.module.scss';

interface AboutProps {
    className?: string;
}

export const About = ({ className }: AboutProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cl.About, {}, [className])}>
            <div className="container">
                <div className={cl.wrap}>
                    <div className={cl.decr}>
                        <h2 className={cl.title}>О ШКОЛЕ</h2>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum reprehenderit aliquam. Commodi saepe beatae eos. Quis aliquid exercitationem iusto tempora mollitia optio eaque odio dolorem, sed beatae quod et tenetur nulla veniam laboriosam est voluptas minima voluptatibus, assumenda doloremque, voluptatem quibusdam facilis! Ex officia voluptas, assumenda voluptatum mollitia veritatis!</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta cum tenetur, enim assumenda nisi laudantium dolor fugiat nulla inventore?</p>
                        </div>
                    </div>
                    <div className={cl.pick}></div>
                </div>
            </div>
        </div>
    );
};
