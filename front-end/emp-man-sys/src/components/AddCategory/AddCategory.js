import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddCategory = () => {

    const [category, setCategory] = useState()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // const response = await axios.post('http://localhost:5000/adminlogin', values);
            await axios.post('http://localhost:5000/adminlogin', { category });

            setTimeout(() => {
                setLoading(false);
                window.location.replace('/Dashboard');
            }, 1000);
        } catch (err) {
            setLoading(false);
            if (err.response) {
                if (err.response.status === 400) {
                    setError("Bad request. Please check your input.");
                } else if (err.response.status === 401) {
                    setError("Unauthorized. Please check your email and password.");
                } else if (err.response.status === 500) {
                    setError("Server error. Please try again later.");
                } else {
                    setError(`Error: ${err.response.status}. ${err.response.data.message}`);
                }
            } else if (err.request) {
                setError("Network error. Please check your internet connection.");
            } else {
                setError(`Error: ${err.message}`);
            }
        }
    }

    return (
        <Container fluid className="min-vh-100 d-flex justify-content-center bg-light mt-5">
            <Row className="w-100 justify-content-center">
                <Col md={4}>
                    <div className="p-4 border rounded shadow-sm bg-white">
                        {error && <Alert variant="danger">{error}</Alert>}
                        <h2 className="mb-4 text-center">Add Category</h2>
                        {loading ? (
                            <div className="text-center">
                                <Spinner animation="border" role="status" variant="success" style={{ width: '3rem', height: '3rem' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <p className="mt-3">Adding Category...</p>
                            </div>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><strong>Category:</strong></Form.Label>
                                    <Form.Control
                                        name='category'
                                        onChange={(e) => setCategory(e.target.value)}
                                        type="text"
                                        value={category}
                                        placeholder="Enter Category ..."
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Button
                                    style={{ background: 'rgb(151, 112, 112)' }}
                                    className="w-100 mt-0"
                                    type='submit'
                                >
                                    Add Category
                                </Button>
                            </Form>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AddCategory;
