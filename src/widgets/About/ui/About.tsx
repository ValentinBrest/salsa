import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';

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
                        <Text title="О ШКОЛЕ"/>

                        <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Hic harum reprehenderit aliquam. Commodi saepe beatae eos. 
                        Quis aliquid exercitationem iusto tempora mollitia optio eaque odio 
                        dolorem, sed beatae quod et tenetur nulla veniam laboriosam est 
                        voluptas minima voluptatibus, assumenda doloremque, voluptatem quibusdam 
                        facilis! Ex officia voluptas, assumenda voluptatum mollitia veritatis!" theme={TextTheme.ITALIC}/>
                        <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quae soluta cum tenetur, enim assumenda nisi laudantium dolor fugiat 
                        nulla inventore?...." theme={TextTheme.ITALIC}/>
                        
                        <AppLink to={'/main'} theme={AppLinkTheme.BUTTON}>
                            <Button 
                                className={cl.button}
                                size={ButtonSize.L}
                                theme={ButtonTheme.OUTLINE}
                            >
                                Узнать больше
                            </Button>
                        </AppLink>
                        
                    </div>
                    <div className={cl.pick}></div>
                </div>
            </div>
        </div>
    );
};
