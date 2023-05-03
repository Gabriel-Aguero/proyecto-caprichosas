import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Nosotros = () => {
	return (
		<Container>
			<Row>
				
				
				<Col xs={"12"} md={"8"}>
					<h1 className="text-start mt-5 mb-4 fw-bold">¡Quien soy!</h1>
					<Col xs={"12"} md={"8"}>
						<p className="h4 mt-5 mb-4">¡Bienvenidas a Caprichosas! Soy Rocío, responsable de este emprendimiento que nació el 11 de Julio del 2020. Nos apasiona ayudar a las personas a sentirse cómodas, seguras y hermosas en su propia piel.</p>
					</Col>
				
					<Col xs={"12"} md={"8"}>
						<p className="h4 mt-4">Nos esforzamos por ofrecer una amplia gama de productos de alta calidad, diseñados cuidadosamente, para adaptarse a todos los gustos y necesidades. Desde conjuntos clásicos y elegantes, hasta piezas atrevidas y sexys…¡estamos seguros de que vas a encontrar algo que te encante!</p>
					</Col>
				
					<Col xs={"12"} md={"8"}>
						<p className="h4 mt-4">Nuestra misión es centrarnos en tu experiencia, que sientas la diferencia cada vez que uses nuestros productos, y al mismo tiempo, te ofrecemos una manera de comprar accesible.</p>
					</Col>
				
					<Col xs={"12"} md={"8"}>
						<p className="h4 mt-4 mb-md-5 pb-md-5">Sentite libre de explorar nuestro catálogo y no dudes en contactarnos si tenes alguna pregunta.</p>
					</Col>
				</Col>
				<Col xs={"12"} md={"4"} >
					<div className="d-flex align-items-center h-100">
						<img src="/images/imagenNosotros.jpg" alt="" className="img-fluid" />
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Nosotros;