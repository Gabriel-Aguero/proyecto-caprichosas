import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Nosotros = () => {
	return (
		<Container>
			<Row>
				<h1 className="text-center my-5">Quien soy!</h1>
				<Col xs={"12"}>
					<Col xs={"12"} md={"6"}>
						<p className="fst-italic my-5">¡Bienvenidas a Caprichosas! Soy Rocío, responsable de este emprendimiento que nació el 11 de Julio del 2020. Nos apasiona ayudar a las personas a sentirse cómodas, seguras y hermosas en su propia piel.</p>
					</Col>
				</Col>
				<Col xs={"12"} className="d-flex justify-content-end">
					<Col xs={"12"} md={"6"}>
						<p className="fst-italic my-5">Nos esforzamos por ofrecer una amplia gama de productos de alta calidad, diseñados cuidadosamente, para adaptarse a todos los gustos y necesidades. Desde conjuntos clásicos y elegantes, hasta piezas atrevidas y sexys…¡estamos seguros de que vas a encontrar algo que te encante!</p>
					</Col>
				</Col>
				<Col xs={"12"}>
					<Col xs={"12"} md={"6"}>
						<p className="fst-italic my-5">Nuestra misión es centrarnos en tu experiencia, que sientas la diferencia cada vez que uses nuestros productos, y al mismo tiempo, te ofrecemos una manera de comprar accesible.</p>
					</Col>
				</Col>
				<Col xs={"12"} className="d-flex justify-content-end mb-5">
					<Col xs={"12"} md={"6"}>
						<p className="fst-italic my-5">Sentite libre de explorar nuestro catálogo y no dudes en contactarnos si tenes alguna pregunta.</p>
					</Col>
				</Col>
			</Row>
		</Container>
	)
}

export default Nosotros;