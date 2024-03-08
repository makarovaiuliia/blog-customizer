import { StrictMode } from 'react';
import { App } from './components/app';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
