import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const Visitanos = () => {
    return (
        <Container>
            <Row className="text-center">
                <Col xs={"12"}>
                    <h2>¡Visítanos en instagram!</h2>
                </Col>
                <Col xs={"6"} xl={"3"} className="mt-2 mb-5">
                    <a href="https://www.instagram.com/p/CkHKTRmJcqO/" target={"blank"}><img className="img-fluid" src="/images/instagramUno.jpg" alt="Imagen Instragram" /></a>
                </Col>
                <Col xs={"6"} xl={"3"} className="mt-2 mb-5">
                    <a href="https://www.instagram.com/p/CiLt5hgsxrg/" target={"blank"}><img className="img-fluid" src="/images/instagramDos.jpg" alt="Imagen Instragram" /></a>
                </Col>
                <Col xs={"6"} xl={"3"} className="mt-2 mb-5">
                    <a href="https://www.instagram.com/p/CQgnS28MoM0/" target={"blank"}><img className="img-fluid" src="/images/instagramTres.jpg" alt="Imagen Instragram" /></a>
                </Col>
                <Col xs={"6"} xl={"3"} className="mt-2 mb-5">
                    <a href="https://www.instagram.com/p/Ch5mT5TprAd/" target={"blank"}><img className="img-fluid" src="/images/instagramCuatro.jpg" alt="Imagen Instragram" /></a>
                </Col>
            </Row>
        </Container>
    );
}   

export default Visitanos;

