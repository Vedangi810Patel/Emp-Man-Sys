import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const LogIn = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/adminlogin', values)
            .then(result => {
                window.location.replace('/Dashboard');
            })
            .catch(err => console.log(err))
    }

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100">
            <Row className="w-100">
                <Col md={4} className="mx-auto">
                    <div className="p-4 border rounded shadow-sm">
                        <h2 className="mb-4">Log In</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><strong>Email:</strong></Form.Label>
                                <Form.Control name='email' onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" value={values.email} placeholder="Enter Email..." autoComplete="off" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><strong>Password:</strong></Form.Label>
                                <Form.Control name='password' onChange={(e) => setValues({ ...values, password: e.target.value })} value={values.password} type="password" placeholder="Enter Password..." />
                            </Form.Group>
                            <Button variant="success" type="submit" className="w-100 mt-0">
                                Log In
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;