import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

const CarouselComponents = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Carousel fade variant="dark" className="p-0">
                    <Carousel.Item>
                        <img className="w-100 imgCarousel" src={"/images/bannerPrimero.jpg"} alt="Banner"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 imgCarousel" src={"/images/bannerSegundo.jpg"} alt="Banner"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="w-100 imgCarousel" src={"/images/bannerTercero.jpg"} alt="Banner"/>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}       

export default CarouselComponents;
