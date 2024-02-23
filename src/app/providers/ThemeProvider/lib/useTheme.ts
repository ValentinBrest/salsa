import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, LOCAL_STORAGE_THEME_KEY_PREVIOUS, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    setSalsaManiaTheme: () => void;
    setTheme: (theme) => void;
    theme: Theme;
}

export function useTheme ():useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    const setSalsaManiaTheme = () => {
        const newTheme = Theme.SALSAMANIA;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY_PREVIOUS, theme !== newTheme ? theme: Theme.LIGHT);
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };


    return {
        theme,
        toggleTheme,
        setSalsaManiaTheme,
        setTheme,
    };
}