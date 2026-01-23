// import axios from 'axios';
// import { URL_BACKEND } from '../../environments/environments';
import {
	FIN_CARGANDO_CATEGORIAS,
	INICIO_CARGANDO_CATEGORIAS,
	SET_CATEGORIAS,
	SET_SELECCIONAR_CATEGORIA
} from '../types/types';

const setCargandoCategorias = () => {
	return { type: INICIO_CARGANDO_CATEGORIAS };
};
const setFinCargandoCategorias = () => {
	return { type: FIN_CARGANDO_CATEGORIAS };
};
export const getCategorias = () => {
	return async (dispatch) => {
		dispatch(setCargandoCategorias());

		// const endpoint = `${URL_BACKEND}/categoria`;
		// const response = await axios.get(endpoint);

		// MOCK: Leer de localStorage
		const localDB = localStorage.getItem('mockDB_v7');
		let categorias = [];
		if (localDB) {
			const db = JSON.parse(localDB);
			categorias = db.categorias || [];
		}

		dispatch({
			type: SET_CATEGORIAS,
			payload: categorias
		});

		// console.log('CATEGORIAS DESDE DB', categorias);

		dispatch(setFinCargandoCategorias());
	};
};

export const seleccionarCategoriaAction = (id) => {
	return {
		type: SET_SELECCIONAR_CATEGORIA,
		payload: id
	};
};
