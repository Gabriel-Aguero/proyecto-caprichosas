import React from 'react';
import { Spinner } from 'react-bootstrap';


const SpinnerComponents = () => {
    return (
        <div className='text-center my-5'>
            <Spinner animation="grow" variant="danger"/>
        </div>
    )
}

export default SpinnerComponents;