import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
// import axios from 'axios';
// import { URL_BACKEND } from '../environments/environments';

export const postPagarPedido = async (objPedido, mesaId) => {
	let objPedidoBackend = {
		usu_id: 2,
		mesa_id: mesaId,
		pedido_est: 'pagado',
		pedido_nro: uuidv4(),
		pedido_fech: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
		pedidoplatos: objPedido.platos.map((objPlatoPedido) => {
			return {
				plato_id: objPlatoPedido.plato_id,
				pedidoplato_cant: objPlatoPedido.cantidad
			};
		})
	};
	// SIMULACIÓN DE BACKEND
	// const endpoint = `${URL_BACKEND}/pedido`;
	// const response = await axios.post(
	// 	endpoint,
	// 	JSON.stringify(objPedidoBackend),
	// 	{
	// 		headers: {
	// 			'Content-type': 'application/json'
	// 		}
	// 	}
	// );
	// return response.data;

	// Simular respuesta exitosa despues de 1 segundo
	return new Promise((resolve) => {
		setTimeout(() => {
			// ACTUALIZACION MOCK PARA PERSISTENCIA
			const localDB = localStorage.getItem('mockDB_v7');
			if (localDB) {
				const db = JSON.parse(localDB);
				if (!db.pedidos) db.pedidos = [];
				db.pedidos.push(objPedidoBackend);
				localStorage.setItem('mockDB_v7', JSON.stringify(db));
			}

			resolve({ ok: true, message: 'Pedido pagado exitosamente (MOCK)' });
		}, 1000);
	});
};
