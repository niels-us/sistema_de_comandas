import React, { useState } from 'react';
import { PosBoletaItem } from './PosBoletaItem';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import PosModalBoleta from './PosModalBoleta';
import { eliminarPedidoPorMesaIdAction } from '../../../redux/actions/pedidoAction'; // Import action
import Swal from 'sweetalert2'; // Import Swal

const PosBoleta = () => {
	const dispatch = useDispatch(); // Initialize dispatch
	const { pedidos } = useSelector((state) => state.pedido);
	const { idMesaSeleccionada, mesas } = useSelector((state) => state.mesa);
	const [mostrar, setMostrar] = useState(false);

	let objMesa = mesas.find((objMesa) => objMesa.mesa_id === idMesaSeleccionada);

	let objPedidoActual = pedidos.find(
		(objPedido) => objPedido.mesaId === idMesaSeleccionada
	);

	const handleEliminar = () => {
		Swal.fire({
			title: '¿Estás seguro?',
			text: "¡No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminarlo!'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(eliminarPedidoPorMesaIdAction(idMesaSeleccionada));
				Swal.fire(
					'¡Eliminado!',
					'El pedido ha sido eliminado.',
					'success'
				)
			}
		})
	}

	return (
		<div className="boleta">
			<h3>
				Pedido Mesa: &nbsp;
				<span className="color-secundario">
					{objMesa ? objMesa.mesa_nro : 'seleccione'}
				</span>
			</h3>
			<hr />
			<div className="comanda">
				<h4 className="comanda__mesa">
					{objMesa ? `Mesa ${objMesa.mesa_nro}` : 'seleccione'}
				</h4>
				<p className="comanda__usuario">Carlos Jimenez</p>
				<hr />

				<ul className="comanda__lista">
					{objPedidoActual
						? objPedidoActual.platos.map((objPlatoPedido, i) => {
							return (
								<PosBoletaItem objPlatoPedido={objPlatoPedido} key={i} />
							);
						})
						: null}
				</ul>
				{idMesaSeleccionada !== -1 ? (
					<div className="d-flex justify-content-between">
						<button
							className="boton boton-success"
							onClick={() => {
								setMostrar(true);
							}}
							style={{ flex: 1, marginRight: '5px' }}
						>
							PAGAR
						</button>
						<button
							className="boton boton-danger"
							onClick={handleEliminar}
							style={{ flex: 1, marginLeft: '5px', backgroundColor: '#dc3545' }}
						>
							ELIMINAR
						</button>
					</div>

				) : null}
			</div>
			<PosModalBoleta mostrar={mostrar} setMostrar={setMostrar} />
		</div>
	);
};

export default PosBoleta;
