// import { URL_BACKEND } from '../../environments/environments';
import {
	FIN_CARGANDO_MESAS,
	INICIO_CARGANDO_MESAS,
	SET_MESAS,
	SET_SELECCIONAR_MESA
} from '../types/types';
// import axios from 'axios';

export const setCargandoMesas = () => {
	return { type: INICIO_CARGANDO_MESAS };
};
export const setFinCargandoMesas = () => {
	return { type: FIN_CARGANDO_MESAS };
};

export const getMesas = () => {
	// action encargado de traer las mesas de ld BD
	return async (dispatch) => {
		dispatch(setCargandoMesas());

		// const endpoint = `${URL_BACKEND}/mesa`;
		// const response = await axios.get(endpoint);

		// MOCK: Leer de localStorage
		const localDB = localStorage.getItem('mockDB_v7');
		let mesas = [];
		if (localDB) {
			const db = JSON.parse(localDB);
			mesas = db.mesas || [];
		}

		dispatch({
			type: SET_MESAS,
			payload: mesas
		});

		dispatch(setFinCargandoMesas());
	};
};

export const seleccionarMesaAction = (id) => {
	return {
		type: SET_SELECCIONAR_MESA,
		payload: id
	};
};
