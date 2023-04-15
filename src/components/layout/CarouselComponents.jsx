import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

const CarouselComponents = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Carousel fade>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"/images/bannerPrimero.jpg"} alt="Banner"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"/images/bannerSegundo.jpg"} alt="Banner"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={"/images/bannerTercero.jpg"} alt="Banner"/>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}       

export default CarouselComponents;
