import { useTheme } from 'app/providers/ThemeProvider';
import { useEffect } from 'react';
import { SalsaMania } from 'widgets/SalsaMania';

export const ProjectPage = () => {
    const bgSecond = 'var(--bg-color-second)';
    const bgFirst = 'var(--bg-color)';
    const { setSalsaManiaTheme } = useTheme();

    useEffect(() => {
        setSalsaManiaTheme();
    }, []);
    return <SalsaMania backgroundColor={bgSecond} />;
};
