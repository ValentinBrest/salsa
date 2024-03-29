import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    SALSAMANIA = 'salsamania'
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const LOCAL_STORAGE_THEME_KEY_PREVIOUS = 'previous_theme';