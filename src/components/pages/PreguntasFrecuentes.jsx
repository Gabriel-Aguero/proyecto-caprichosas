import React, { useState } from 'react'
import { Col, Container, Row, Collapse, ListGroup as List  } from 'react-bootstrap';

const PreguntasFrecuentes = () => {

	const [openOne, setOpenOne] = useState(false);
	const [openTwo, setOpenTwo] = useState(false);
	const [openThree, setOpenThree] = useState(false);
	const [openFour, setOpenFour] = useState(false);
	const [openFive, setOpenFive] = useState(false);

	return (
		<Container className='my-5 fuentesP'>
			<h1 className='my-5'>Preguntas Frecuentes</h1>
			<Row>
				<Col xs={"10"} className="mt-5">
					<h3>¿Dónde realizan envíos?</h3>
					<Collapse in={openOne}>
						<div className="mt-3" id="example-collapse-text">
							<List className='list-group-item'>
								<List.Item><p>Se realizan envíos gratis a domicilio en zona NORTE.</p></List.Item>
								<List.Item><p>Puntos de encuentros en: </p>
									<List>
									<List.Item><p>Municidipalidad de vaqueros.</p></List.Item>
									<List.Item><p>Plaza Armada Argentina de ciudad del milagro.</p></List.Item>
									<List.Item><p>Universidad Nacional de Salta (UNSA).</p></List.Item>
									<List.Item><p>Plaza Belgrano.</p></List.Item>
									</List>
								</List.Item>
								<List.Item><p>Retiros: Ciudad del Milagro. Av. Armada Argentina y Tte. Juan Gabande. Block E.</p></List.Item>
							</List>
						</div>
					</Collapse>
				</Col>
				<Col xs={"2"} className="mt-5 d-flex justify-content-end">
					<div className='cursor' onClick={() => setOpenOne(!openOne)} aria-controls="example-collapse-text" aria-expanded={openOne}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
				</Col>

				<Col xs={"10"} className="mt-3">
					<h3>¿Cuáles son las formas de pago?</h3>
					<Collapse in={openTwo}>
						<div className="mt-3" id="example-collapse-text">
							<p className="ps-3 fw-bold">Contamos con los siguientes metodos de pago por el momento: </p>
							<List className='list-group-item'>
								<List.Item><p>EFECTIVO</p></List.Item>
								<List.Item><p>TRASNFERENCIA</p></List.Item>
								<List.Item><p>TARJETAS DE CREDITO</p>
									<List className='list-group-item'>
										<div className="list-group-item">
											<List.Item className='posicionMediosPago'><img src="/images/visaCredito.svg" alt="" /></List.Item>
											<List.Item className='posicionMediosPago'><img src="/images/mastercardCredito.svg" alt="" /></List.Item>
											<List.Item className='posicionMediosPago'><img src="/images/cabalCredito.svg" alt="" /></List.Item>
											<List.Item className='posicionMediosPago'><img src="/images/naranjaCredito.svg" alt="" /></List.Item>
											<List.Item className='posicionMediosPago'><img src="/images/americanCredito.svg" alt="" /></List.Item>
											<List.Item><p>Hasta 3 cuotas sin interes con Macro VISA</p></List.Item>	
										</div>				
									</List>
								</List.Item>
								<List.Item><p>TARJETAS DE DÉBITO</p>
									<List className='list-group-item'>
										<div className="list-group-item">
											<List.Item className='posicionMediosPago'><img src="/images/visaDebito.svg" alt="" /></List.Item>
											<List.Item className='posicionMediosPago'><img src="/images/mastercardDebito.svg" alt="" /></List.Item>
											<List.Item className='posicionMediosPago'><img src="/images/maestroDebito.svg" alt="" /></List.Item>
											<List.Item className='posicionMediosPago'><img src="/images/cabalDebito.svg" alt="" /></List.Item>
										</div>	
									</List>
								</List.Item>
							</List>
						</div>
					</Collapse>
				</Col>
				<Col xs={"2"} className="mt-3 d-flex justify-content-end">
					<div className='cursor' onClick={() => setOpenTwo(!openTwo)} aria-controls="example-collapse-text" aria-expanded={openTwo}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
				</Col>

				<Col xs={"10"} className="mt-3">
					<h3>¿Qué pasa si un conjunto que quiero no está disponible?</h3>
					<Collapse in={openThree}>
						<div className="mt-3" id="example-collapse-text">
							<List className='list-group-item'>
								<List.Item><p>Para conocer si hay stock del modelo que deseas, debes contactarnos por Whatsapp desde el producto que estas deseando. En caso de que no contar con el modelo que deseas, te lo comunicaremos y se podra arreglar en el momento para tomar tu pedido.</p></List.Item>
							</List>
						
						</div>
					</Collapse>
				</Col>
				<Col xs={"2"} className="mt-3 d-flex justify-content-end">
					<div className='cursor' onClick={() => setOpenThree(!openThree)} aria-controls="example-collapse-text" aria-expanded={openThree}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
				</Col>

				<Col xs={"10"} className="mt-3">
					<h3>¿Tenés dudas acerca de tu talla? </h3>
					<Collapse in={openFour}>
						<div className="mt-3" id="example-collapse-text">
							<List className='list-group-item'>
								<List.Item><p className='fw-bold'>Guia de talles:</p></List.Item>
								<List.Item><p>Talle 85: 80 - 86 cm</p></List.Item>
								<List.Item><p>Talle 90: 86 - 91 cm</p></List.Item>
								<List.Item><p>Talle 95: 91 - 97 cm</p></List.Item>
								<List.Item><p>Talle 100: 97 - 107 cm</p></List.Item>
							</List>
						</div>
					</Collapse>
					</Col>
				<Col xs={"2"} className="mt-3 d-flex justify-content-end">
					<div className='cursor' onClick={() => setOpenFour(!openFour)} aria-controls="example-collapse-text" aria-expanded={openFour}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
				</Col>

				<Col xs={"10"} className="mt-3 mb-5">
					<h3>Política de cambio y devoluciones</h3>
					<Collapse in={openFive}>
						<div className="mt-3" id="example-collapse-text">
							<List className='list-group-item'>
								<List.Item><p className="fw-bold">¿Las prendas tienen cambio?</p></List.Item>
								<List.Item><p>Sí, todas las prendas tienen cambio. Para cualquier cambio, el cliente tiene hasta 48hs luego de haber recibido el producto.</p></List.Item>
								<List.Item><p className="fw-bold">¿Cuáles son las condiciones de cambio?</p></List.Item>
								<List.Item><p>Será necesario para realizar el cambio que el producto no tenga uso y se encuentre en perfectas condiciones, con sus respectivas etiquetas, accesorios y su embalaje original (si posee).</p></List.Item>
								<List.Item><p className="fw-bold">¿Cómo solicito un cambio?</p></List.Item>
								<List.Item><p>Para solicitar un cambio, envíanos un mensaje a nuestro Whatsapp o correo electronico a caprichosas.salta22@outlook.com con tu nombre y apellido, el motivo del cambio y comprobante de pago en caso de poseer. La solicitud será respondida a la brevedad y te indicaremos los pasos a seguir.</p></List.Item>
							</List>
						</div>
					</Collapse>
				</Col>
				<Col xs={"2"} className="mt-3 d-flex justify-content-end">
					<div className='cursor' onClick={() => setOpenFive(!openFive)} aria-controls="example-collapse-text" aria-expanded={openFive}><img className="img-fluid" src="/images/flecha.svg" alt="" /></div>
				</Col>
			</Row>
		</Container>
	)
}

export default PreguntasFrecuentes;

