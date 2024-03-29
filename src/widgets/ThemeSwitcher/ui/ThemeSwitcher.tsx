import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/moon.svg';
import LightIcon from 'shared/assets/icons/sun.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <Button
            title="Переключатель темы"
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme} 
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon/>:<LightIcon/>}
        </Button>
    );
};