import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import App from './app/App';

import 'app/styles/index.scss';

render(
    <HashRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </HashRouter>,
    document.getElementById('root'),
);
