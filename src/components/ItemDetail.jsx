import React from "react";
import { Col, Container, Row, Carousel, Button } from "react-bootstrap";
import OtrosProductos from "./OtrosProductos";


const ItemDetail = ({item}) => {

    const phoneNumber = '3876018879';
    const message = `Hola Caprichosas, estoy muy interesa en el producto ${item.nombre}. Me gustaria tener mas detalles sobre el mismo. Gracias!`
    const imagen = item.imagen;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}%0A${encodeURIComponent(imagen)}`;
    const handleWhatsAppButtonClick = () => {
        window.open(url);
    };
    

    return (
        <Container className="my-5">
            <Row>
                <Col xs={"12"} md={"5"}>
                    <Carousel fade variant="dark" id="carouselDesplazamiento">
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid" style={{width: '500px', height: '500px', objectFit: 'cover' }} src={item.imagen1} alt="Imagen Producto"/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid" style={{width: '500px', height: '500px', objectFit: 'cover' }} src={item.imagen2} alt="Imagen Producto"/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid" style={{width: '500px', height: '500px', objectFit: 'cover' }} src={item.imagen3} alt="Imagen Producto"/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={"4"} className="mt-5 mt-md-0 ms-md-5 ps-4">
                    <h2>{item.categoria + " " + item.nombre }</h2>
                    <h3 className="my-3">{"$ " + item.precio + " ARS"}</h3>
                    <Button onClick={handleWhatsAppButtonClick} className="rounded-0 my-5" variant="dark ronde">Continuar Compra  <img src="/images/whatsapp.svg" alt="Logo Whatsapp" /></Button>
                    <h6 className="fuente mt-4">Colores</h6>
                    
                        <div className="cuadradoUno"></div>
                        <div className="cuadradoDos"></div>
                        <div className="cuadradoTres"></div>
                        
                        {item.nombre === "Clara" && (
                            <>
                                <div className="cuadradoCuatro"></div>
                                <div className="cuadradoCinco"></div>
                            </>
                        )}
                    
                </Col>
            </Row>
            <OtrosProductos id={item.categoria}/>
        </Container>
        
    )
}

export default ItemDetail;