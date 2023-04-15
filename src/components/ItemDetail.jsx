import React from "react";
import { Col, Container, Row, Carousel, Button } from "react-bootstrap";
import ProductosRelacionados from "./ProductosRelacionados";


const ItemDetail = ({item}) => {

    const phoneNumber = '3412295482';
    const message = `Hola Caprichosas, estoy muy interesa en el producto ${item.Nombre}. Me gustaria informacion sobre el mismo.`
    const image = item.imagen;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}%0A${encodeURIComponent(image)}`;
    const handleWhatsAppButtonClick = () => {
        window.open(url);
    };
    

    return (
        <Container className="my-5">
            <Row>
                <Col md={"6"}>
                    <Carousel fade variant="dark">
                        <Carousel.Item >
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid" style={{width: '490px', height: '730px', objectFit: 'cover' }} src={item.imagen} alt="First slide"/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid" style={{width: '490px', height: '730px', objectFit: 'cover' }} src={item.imagen} alt="First slide"/>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center">
                                <img className="img-fluid"  src={"/images/productoUno.jpg"} alt="First slide"/>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={"4"}>
                    <h2>{item.Categoria + " " + item.Nombre }</h2>
                    <h3 className="my-5">{"$ " + item.Precio + " ARS"}</h3>
                    <Button onClick={handleWhatsAppButtonClick} className="rounded-0" variant="dark ronde">Continuar Compra <img src="/images/whatsapp.svg" alt="" /></Button>
                </Col>
            </Row>
            <ProductosRelacionados/>
        </Container>
        
    )
}

export default ItemDetail;