import React from "react";

const ComoComprar = () => {
    return (
        <div className="colorFondo my-5">
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col-6 col-md-3">
                        <img src="/images/compraUno.svg" alt="" />
                        <p>Escoge el producto que más te guste</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/images/compraDos.svg" alt="" />
                        <p>Selecciona “continuar compra” para contactarnos y darte una atención personalizada</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/images/compraTres.svg" alt="" />
                        <p>Nos preocupamos que toda la experiencia de compra se acomode a nuestros clientes.la</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/images/compraCuatro.svg" alt="" />
                        <p>Vamos y te entregamos tu producto en tus manos</p>
                    </div>
            
                </div>
            
            </div>
        </div>
    );
}

export default ComoComprar;