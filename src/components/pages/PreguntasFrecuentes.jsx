import React, { useState } from 'react'
import { Col, Container, Row, Collapse } from 'react-bootstrap';

const PreguntasFrecuentes = () => {

	const [openOne, setOpenOne] = useState(false);
	const [openTwo, setOpenTwo] = useState(false);
	const [openThree, setOpenThree] = useState(false);
	const [openFour, setOpenFour] = useState(false);

	return (
		<Container className='my-5'>
		<h1 className='my-5'>Preguntas Frecuentes</h1>
		<Row>
			<Col xs={"10"} className="my-5">
			<h3 className='fst-italic'>¿Dónde realizan envíos?</h3>
			<Collapse in={openOne}>
				<div className="mt-5" id="example-collapse-text">
					<p className="ps-3">Los envios se realizan en distintos puntos de encuentros, los cuales son los siguitenes: </p>
				</div>
			</Collapse>
			</Col>
			<Col xs={"2"} className="my-5">
			<div className='cursor' onClick={() => setOpenOne(!openOne)} aria-controls="example-collapse-text" aria-expanded={openOne}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
			</Col>

			<Col xs={"10"} className="my-5">
			<h3 className='fst-italic'>¿Cuáles son las formas de pago?</h3>
			<Collapse in={openTwo}>
				<div className="mt-5" id="example-collapse-text">

				<ul className="ms-3 ps-3">
					<li>Efectivo</li>
					<li>Transferencia</li>
					<li>Tarjetas de crédito y débito</li>
				</ul>
			
				</div>
			</Collapse>
			</Col>
			<Col xs={"2"} className="my-5">
			<div className='cursor' onClick={() => setOpenTwo(!openTwo)} aria-controls="example-collapse-text" aria-expanded={openTwo}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
			</Col>

			<Col xs={"10"} className="my-5">
			<h3 className='fst-italic'>¿Qué pasa si un conjunto que quiero no está disponible?</h3>
			<Collapse in={openThree}>
				<div className="mt-5" id="example-collapse-text">
				<p className="ps-3">Las opciones para estos casos son las siguientes</p>
				</div>
			</Collapse>
			</Col>
			<Col xs={"2"} className="my-5">
			<div className='cursor' onClick={() => setOpenThree(!openThree)} aria-controls="example-collapse-text" aria-expanded={openThree}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
			</Col>

			<Col xs={"10"} className="my-5">
			<h3 className='fst-italic'>¿Se puede abonar con tarjeta?</h3>
			<Collapse in={openFour}>
				<div className="mt-5" id="example-collapse-text">
				<p className="ps-3">Para abonar con tarjeta de credito o debito, debes seguir los siguientes pasos: </p>
				</div>
			</Collapse>
			</Col>
			<Col xs={"2"} className="my-5">
			<div className='cursor' onClick={() => setOpenFour(!openFour)} aria-controls="example-collapse-text" aria-expanded={openFour}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
			</Col>
		</Row>
		</Container>
	)
}

export default PreguntasFrecuentes;

