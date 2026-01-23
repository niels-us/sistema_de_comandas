import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { HashRouter } from 'react-router-dom';
import { loadDB } from './mocks/db';

loadDB();

async function enableMocking() {
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
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>,
		document.getElementById('root')
	);
});
