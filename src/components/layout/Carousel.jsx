import React from "react";

const Carousel = () => {
    return (
        <div className="container mt-5">
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={"/images/bannerPrimero.jpg"} class="d-block banner" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={"/images/bannerSegundo.jpg"} class="d-block banner" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={"/images/bannerTercero.jpg"} class="d-block banner" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}       

export default Carousel;