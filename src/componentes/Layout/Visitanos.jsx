import React from "react";


const Visitanos = () => {
    const ACCESS_TOKEN = 'TU_TOKEN_DE_ACCESO';
    const ACCOUNT_NAME = 'caprichosas.salta';

    fetch(`https://graph.instagram.com/${ACCOUNT_NAME}/media?fields=id,caption,media_url,thumbnail_url&access_token=${ACCESS_TOKEN}`)
    .then(response => response.json())
    .then(data => {
        const thumbnailUrl = data.data[0].thumbnail_url;
        const photoElement = document.getElementById('photo');
        photoElement.innerHTML = `<img src="${thumbnailUrl}">`;
    })
    .catch(error => console.error(error));
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-12 text-center">
                    <h2 className="mb-5">¡Visítanos en instagram!</h2>
                </div>
                <div className="col-6 col-xl-3 mt-2 mb-5">
                    <a href="https://www.instagram.com/p/CkHKTRmJcqO/" target={"blank"}><img className="img-fluid" src="/images/instagramUno.jpg" alt="" /></a>
                </div>
                <div className="col-6 col-xl-3 mt-2 mb-5">
                    <a href="https://www.instagram.com/p/CiLt5hgsxrg/" target={"blank"}><img className="img-fluid" src="/images/instagramDos.jpg" alt="" /></a>
                </div>
                <div className="col-6 col-xl-3 mt-2 mb-5">
                    <a href="https://www.instagram.com/p/CQgnS28MoM0/" target={"blank"}><img className="img-fluid" src="/images/instagramTres.jpg" alt="" /></a>
                </div>
                <div className="col-6 col-xl-3 mt-2 mb-5">
                    <a href="https://www.instagram.com/p/Ch5mT5TprAd/" target={"blank"}><img className="img-fluid" src="/images/instagramCuatro.jpg" alt="" /></a>
                </div>
            </div>
        </div>
    );
}   

export default Visitanos;