import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f // enable dev tools extension
	)
)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
	, document.querySelector('#app')
);
