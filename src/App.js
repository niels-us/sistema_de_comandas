import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PosRouter from './modulos/pos/PosRouter';
import AuthRouter from './modulos/auth/AuthRouter';
import AdminRouter from './modulos/admin/AdminRouter';
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { iniciarSesionLocalStorage } from './redux/actions/authAction';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(iniciarSesionLocalStorage());
	}, [dispatch]);

	return (
		<Switch>
			<Route path="/pos" component={PosRouter} />
			<Route path="/auth" component={AuthRouter} />
			<PrivateRoute path="/admin" component={AdminRouter} />
			<Redirect to="/pos/pos" />
		</Switch>
	);
};

export default App;
