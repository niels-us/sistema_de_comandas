import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { Modal, Button } from 'react-bootstrap';

const AdminReporte = () => {
    const { platos } = useSelector((state) => state.plato);
    const { pedidosDB, cargandoPedidosDB } = useSelector((state) => state.pedido);

    const [pedidosFiltrados, setPedidosFiltrados] = useState([]);
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const [show, setShow] = useState(false);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (pedido) => {
        setPedidoSeleccionado(pedido);
        setShow(true);
    };

    useEffect(() => {
        const filtrarPedidos = () => {
            let resultado = pedidosDB;

            if (fechaInicio) {
                resultado = resultado.filter((pedido) => {
                    const fechaPedido = pedido.pedido_fech.substring(0, 10);
                    return fechaPedido >= fechaInicio;
                });
            }

            if (fechaFin) {
                resultado = resultado.filter((pedido) => {
                    const fechaPedido = pedido.pedido_fech.substring(0, 10);
                    return fechaPedido <= fechaFin;
                });
            }

            setPedidosFiltrados(resultado);
        };

        filtrarPedidos();
    }, [pedidosDB, fechaInicio, fechaFin]);

    const calcularTotal = (pedido) => {
        let total = 0;
        if (platos.length > 0 && pedido.pedidoplatos) {
            pedido.pedidoplatos.forEach((platoPedido) => {
                const plato = platos.find((p) => p.plato_id === platoPedido.plato_id);
                if (plato) {
                    total += +plato.plato_pre * +platoPedido.pedidoplato_cant;
                }
            });
        }
        return total.toFixed(2);
    };



    return (
        <main className="container mt-5">
            <h1 className="display-4 mb-4">Reporte de Ventas</h1>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="fechaInicio">Fecha Inicio:</label>
                                <input
                                    type="date"
                                    id="fechaInicio"
                                    className="form-control"
                                    value={fechaInicio}
                                    onChange={(e) => setFechaInicio(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="fechaFin">Fecha Fin:</label>
                                <input
                                    type="date"
                                    id="fechaFin"
                                    className="form-control"
                                    value={fechaFin}
                                    onChange={(e) => setFechaFin(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Fecha/Hora</th>
                            <th>Nro Pedido</th>
                            <th>Estado</th>
                            <th className="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargandoPedidosDB ? (
                            <tr>
                                <td colSpan="4" className="text-center">Cargando...</td>
                            </tr>
                        ) : pedidosFiltrados.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">No se encontraron pedidos.</td>
                            </tr>
                        ) : (
                            pedidosFiltrados.map((pedido) => (
                                <tr key={pedido.pedido_nro} onClick={() => handleShow(pedido)} style={{ cursor: 'pointer' }}>
                                    <td>{format(new Date(pedido.pedido_fech), 'dd/MM/yyyy HH:mm')}</td>
                                    <td>{pedido.pedido_nro}</td>
                                    <td>
                                        <span className={`badge badge-${pedido.pedido_est === 'pagado' ? 'success' : 'warning'}`}>
                                            {pedido.pedido_est.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="text-right">S/ {calcularTotal(pedido)}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Detalle del Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {pedidoSeleccionado && (
                        <>
                            <p><strong>Nro Pedido:</strong> {pedidoSeleccionado.pedido_nro}</p>
                            <p><strong>Fecha:</strong> {format(new Date(pedidoSeleccionado.pedido_fech), 'dd/MM/yyyy HH:mm')}</p>
                            <div className="table-responsive">
                                <table className="table table-bordered table-sm">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Plato</th>
                                            <th className="text-center">Cant.</th>
                                            <th className="text-right">P. Unit.</th>
                                            <th className="text-right">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pedidoSeleccionado.pedidoplatos.map((item, index) => {
                                            const plato = platos.find(p => p.plato_id === item.plato_id);
                                            const nombre = plato ? plato.plato_nom : 'Desconocido';
                                            const precio = plato ? +plato.plato_pre : 0;
                                            const subtotal = precio * +item.pedidoplato_cant;
                                            return (
                                                <tr key={index}>
                                                    <td>{nombre}</td>
                                                    <td className="text-center">{item.pedidoplato_cant}</td>
                                                    <td className="text-right">S/ {precio.toFixed(2)}</td>
                                                    <td className="text-right">S/ {subtotal.toFixed(2)}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="3" className="text-right"><strong>Total:</strong></td>
                                            <td className="text-right"><strong>S/ {calcularTotal(pedidoSeleccionado)}</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
};

export default AdminReporte;
