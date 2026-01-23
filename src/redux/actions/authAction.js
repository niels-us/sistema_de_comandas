// import { URL_BACKEND } from '../../environments/environments';
import {
	FIN_CARGANDO_LOGIN,
	INICIO_CARGANDO_LOGIN,
	SET_SUCCESS_LOGIN
} from '../types/types';
// import axios from 'axios';
const inicioCargandoLogin = () => {
	return {
		type: INICIO_CARGANDO_LOGIN
	};
};
const finCargandoLogin = () => {
	return {
		type: FIN_CARGANDO_LOGIN
	};
};

export const iniciarSesionAction = (correo, password) => {
	return async (dispatch) => {
		dispatch(inicioCargandoLogin());

		// const endpoint = `${URL_BACKEND}/login`;
		// const response = await axios.post(
		// 	endpoint,
		// 	JSON.stringify({ correo: correo, password: password }),
		// 	{
		// 		headers: {
		// 			'Content-type': 'application/json'
		// 		}
		// 	}
		// );

		// MOCK: Login Exitoso
		setTimeout(() => {
			const token = 'fake-jwt-token-admin';
			localStorage.setItem('token', token);
			dispatch({
				type: SET_SUCCESS_LOGIN,
				payload: {
					autenticado: true,
					usu_nom: 'Administrador (Mock)',
					usu_id: 1,
					usu_tipo: 'ADMIN',
					token: token
				}
			});
			dispatch(finCargandoLogin());
		}, 1000);
	};
};

export const iniciarSesionLocalStorage = () => {
	return async (dispatch) => {
		dispatch(inicioCargandoLogin());
		let token = localStorage.getItem('token');
		// MOCK: Verificar token
		if (token) {
			setTimeout(() => {
				dispatch({
					type: SET_SUCCESS_LOGIN,
					payload: {
						autenticado: true,
						usu_nom: 'Administrador (Mock)',
						usu_id: 1,
						usu_tipo: 'ADMIN',
						token: token
					}
				});
				dispatch(finCargandoLogin());
			}, 500);
		} else {
			dispatch(finCargandoLogin());
		}
	};
};
