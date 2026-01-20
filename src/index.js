
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

async function enableMocking() {
	// Iniciamos el worker siempre (para demo en GH Pages)
	const { worker } = await import('./mocks/browser');
	return worker.start({
		onUnhandledRequest: 'bypass',
		serviceWorker: {
			url: `${process.env.PUBLIC_URL}/mockServiceWorker.js`
		}
	});
}

enableMocking().then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
});
