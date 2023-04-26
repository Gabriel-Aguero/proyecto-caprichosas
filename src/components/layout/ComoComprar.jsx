import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ComoComprar = () => {
    return (
        <div className="colorSecundario my-5">
            <Container>
                <Row className="text-center py-5">
                    <Col xs={"6"} md={"3"}>
                        <img src="/images/compraUno.svg" alt="" />
                        <p className="mt-3">Escoge el producto que más te guste.</p>
                    </Col>
                    <Col xs={"6"} md={"3"}>
                        <img src="/images/compraDos.svg" alt="" />
                        <p className="mt-3">Selecciona “continuar compra” para contactarnos y darte una atención personalizada.</p>
                    </Col>
                    <Col xs={"6"} md={"3"}>
                        <img src="/images/compraTres.svg" alt="" />
                        <p className="mt-3">Nos preocupamos que toda la experiencia de compra se acomode a nuestros clientes.</p>
                    </Col>
                    <Col xs={"6"} md={"3"}>
                        <img src="/images/compraCuatro.svg" alt="" />
                        <p className="mt-3">Vamos y te entregamos tu producto en tus manos.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ComoComprar;
