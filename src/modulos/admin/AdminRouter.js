import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminDashboard from './pages/AdminDashboard';
import AdminReporte from './pages/AdminReporte';
import { useDispatch } from 'react-redux';
import { getPlatos } from '../../redux/actions/platoAction';
import { getPedidosDB } from '../../redux/actions/pedidoAction';

const AdminRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPlatos());
		dispatch(getPedidosDB());
	}, [dispatch]);

	return (
		<>
			<AdminHeader />
			<Switch>
				<Route path="/admin/dashboard" component={AdminDashboard} />
				<Route path="/admin/reportes" component={AdminReporte} />
			</Switch>
		</>
	);
};

export default AdminRouter;
