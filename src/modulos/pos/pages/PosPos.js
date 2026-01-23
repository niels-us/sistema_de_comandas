import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PosBoleta from '../components/PosBoleta';
import PosCategorias from '../components/PosCategorias';
import PosHeader from '../components/PosHeader';
import PosMesas from '../components/PosMesas';
import PosPlatos from '../components/PosPlatos';
import { getCategorias } from '../../../redux/actions/categoriaAction';
import { getMesas } from '../../../redux/actions/mesaAction';

const PosPos = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategorias());
		dispatch(getMesas());
		// console.log('DISPATCH POSPOS');
	}, [dispatch]);

	return (
		<>
			<PosHeader />
			<main className="pos-container">
				<PosCategorias />
				<section className="tabla">
					<PosMesas />
					<div className="pedido">
						<PosPlatos />
						<PosBoleta />
					</div>
				</section>
			</main>
		</>
	);
};

export default PosPos;
