import React, { useState } from 'react'

const PreguntasFrecuentes = () => {

  const [mensajeUno, setMensajeUno] = useState(true);
  const [mensajeDos, setMensajeDos] = useState(true);
  const [mensajeTres, setMensajeTres] = useState(true);
  const [mensajeCautro, setMensajeCautro] = useState(true);

  return (
    <div className="container">
      <h1 className='my-5'>Preguntas Frecuentes</h1>
      <div className="row text-start">
          <div className="col-10 my-5">
              <h3>¿Dónde realizan envíos?</h3>
          </div>
          <div className="col-2 my-5">
            <div className="cursor" onClick={() => setMensajeUno(!mensajeUno)}>
              {mensajeUno ? '' : ''}<img className="img-fluid" src="/images/flecha.svg" alt="" />
            </div>
          </div>
          <div className="col-10 my-5">
              <h3>¿Cuáles son las formas de pago?</h3>
          </div>

          <div className="col-2 my-5">
            <div className="cursor" onClick={() => setMensajeDos(!mensajeDos)}>
              {mensajeDos ? '' : ''}<img className="img-fluid" src="/images/flecha.svg" alt="" />
            </div>
          </div>
          {!mensajeDos && <p className="ps-3">¿Cuáles son las formas de pago?</p>}
          {!mensajeDos && 
            <ul className="ms-3 ps-3">
              <li>Efectivo</li>
              <li>Transferencia</li>
              <li>Tarjetas de crédito y débito</li>
            </ul>
          }

          <div className="col-10 my-5">
            <h3>¿Qué pasa si un conjunto que quiero no está disponible?</h3>
          </div>
          <div className="col-2 my-5">
            <div className="cursor" onClick={() => setMensajeTres(!mensajeTres)}>
              {mensajeTres ? '' : ''}<img className="img-fluid" src="/images/flecha.svg" alt="" />
            </div>
          </div>
          
          <div className="col-10 my-5">
            <h3>¿Se puede abonar con tarjeta?</h3>
          </div>
          <div className="col-2 my-5 pb-5">
            <div className="cursor" onClick={() => setMensajeCautro(!mensajeCautro)}>
              {mensajeCautro ? '' : ''}<img className="img-fluid" src="/images/flecha.svg" alt="" />
            </div>
          </div>
  
      </div>
    </div>
  )
}

export default PreguntasFrecuentes;

