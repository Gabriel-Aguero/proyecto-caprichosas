import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Ingresar = () => {
    
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = ({ target: { name, value } }) =>
        setUser({ ...user, [name]: value})
             

    const handleSubmit = async (e) => {
        e.preventDefault() 
        setError("");       
        try {
            await login(user.email, user.password)
            navigate("/UpdatePrice");            
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center my-5">
            <Form onSubmit={handleSubmit} className="border border-ligth p-4 p-sm-3 shadow p-3 mb-5 bg-body rounded">                
                {error && <span> message={error} </span> }
                <h4>Formulario de Ingreso</h4>
                <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Label>Ingresa tu Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Ingresa tu email"
                        onChange={handleChange} 
                        name="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        onChange={handleChange} 
                        name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        </div>

    )
}

export default Ingresar