import { useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { SalsaMania } from 'widgets/SalsaMania';

export const ProjectPage = () => {
    const bgSecond = 'var(--bg-color-second)';
    const { setSalsaManiaTheme } = useTheme();

    useEffect(() => {
        setSalsaManiaTheme();
    }, []);
    return <SalsaMania backgroundColor={bgSecond} />;
};
