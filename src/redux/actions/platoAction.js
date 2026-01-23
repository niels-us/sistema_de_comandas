import {
	FIN_CARGANDO_PLATOS,
	FIN_CARGANDO_PLATOS_POR_CATEGORIA,
	INICIO_CARGANDO_PLATOS,
	INICIO_CARGANDO_PLATOS_POR_CATEGORIA,
	SET_PLATOS,
	SET_PLATOS_POR_CATEGORIA
} from '../types/types';

const setCargandoPlatosPorCategoria = () => {
	return {
		type: INICIO_CARGANDO_PLATOS_POR_CATEGORIA
	};
};

const setFinCargandoPlatosPorCategoria = () => {
	return {
		type: FIN_CARGANDO_PLATOS_POR_CATEGORIA
	};
};

const setInicioCargandoPlatos = () => {
	return { type: INICIO_CARGANDO_PLATOS };
};

const setFinCargandoPlatos = () => {
	return { type: FIN_CARGANDO_PLATOS };
};

export const getPlatosPorCategoriaId = (categoriaId) => {
	return async (dispatch) => {
		dispatch(setCargandoPlatosPorCategoria());


		// const endpoint = `${URL_BACKEND}/categoria/${categoriaId}/platos`;
		// const response = await axios.get(endpoint);

		// MOCK: Leer de localStorage
		const localDB = localStorage.getItem('mockDB_v7');
		let platos = [];
		if (localDB) {
			const db = JSON.parse(localDB);
			platos = db.platos.filter(p => p.categoria_id === +categoriaId) || [];
		}

		dispatch({
			type: SET_PLATOS_POR_CATEGORIA,
			payload: platos
		});

		dispatch(setFinCargandoPlatosPorCategoria());
	};
};

export const getPlatos = () => {
	return async (dispatch) => {
		dispatch(setInicioCargandoPlatos());

		// const endpoint = `${URL_BACKEND}/plato`;
		// const response = await axios.get(endpoint);
		// console.log(response);

		// MOCK: Leer de localStorage
		const localDB = localStorage.getItem('mockDB_v7');
		let platos = [];
		if (localDB) {
			const db = JSON.parse(localDB);
			platos = db.platos || [];
		}

		dispatch({
			type: SET_PLATOS,
			payload: platos
		});

		dispatch(setFinCargandoPlatos());
	};
};
