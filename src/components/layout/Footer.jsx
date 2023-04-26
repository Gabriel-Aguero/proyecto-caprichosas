import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="colorPrincipal">
            <Container>
                <Row className=" text-center">
                    <Col xs={"12"} className="my-5">
                        <img className="img-fluid" src={"/images/logoPrincipal.svg"} alt="" />
                    </Col>
                    <Col className="my-md-5 py-md-5">
                        <Row>
                            <Col xs={"12"} md={"5"} xl={"3"} className="mb-5 text-center text-md-start redesSociales">
                            <h2>Contacto</h2>
                            <p>
                                <a href="https://mail.google.com/mail/?view=cm&to=caprichosas.salta22@outlook.com" target={"blank"}><img className="icons" src={"/images/correo.svg"} alt="" /> caprichosas.salta22@outlook.com</a>
                            </p>
                            <p>
                                <a href="https://www.instagram.com/caprichosas.salta/" target={"blank"}><img className="icons" src={"/images/instagram.svg"} alt="" />@Caprichosas.salta</a>
                            </p>
                            <p>
                                <a href="https://www.facebook.com/Caprichosas.salta/" target={"blank"}><img className="icons" src={"/images/facebook.svg"} alt="" />Caprichosas.salta</a>
                            </p>                    
                            </Col>
                            <Col xs={"12"} md={"5"} xl={"3"} className="text-center text-md-start mb-5">
                                <h2>Ayuda</h2>
                                <Link className="link" to="/preguntasfrecuentes">
                                    <p>Preguntas Frecuentes</p>
                                    <p>Politicas de cambios y devoluciones</p>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={"12"}>
                        <p>© 2023 Caprichosas - Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;


