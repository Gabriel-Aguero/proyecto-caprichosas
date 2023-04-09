import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="colorFondo">
            <div className="container text-center">
                <div className="row align-items-end">

                    <div className="col-12 my-5">
                        <h1>CAPRICHOSAS</h1>
                    </div>

                    <div className="col-12 mb-5 mb-md-0">
                        <img src={"/images/corazon.svg"} alt="" />
                    </div>

                    <div className="col-12 my-md-5">
                        <div className="row">
                            <div className="col-12 col-md-5 col-xl-4 mb-5 text-center text-md-start redesSociales">
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
                            </div>

                            <div className="col-12 col-md-5 col-xl-4 text-center text-md-start">
                                <h2>Ayuda</h2>
                                <Link className="link" to="/preguntas-frecuentes">
                                    <p>Preguntas Frecuentes</p>
                                </Link>
                                <p>Envios y Pagos</p>
                                <p>Politicas de cambios y devoluciones</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 my-md-5">
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-2 border-top">
                            <p>&copy; 2023 Caprichosas. Todos los derechos reservados.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Footer;