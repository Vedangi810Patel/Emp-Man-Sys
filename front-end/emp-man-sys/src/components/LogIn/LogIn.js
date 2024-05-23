// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
// import axios from 'axios';

// const LogIn = () => {
//     const [values, setValues] = useState({  
//         email: '',
//         password: ''
//     });

//     const [loading, setLoading] = useState(false); 
//     const [error, setError] = useState(null);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setLoading(true); 

//         axios.post('http://localhost:5000/adminlogin', values)
//             .then(result => {
//                 setTimeout(() => {
//                     setLoading(false);
//                     window.location.replace('/Dashboard');
//                 }, 1000); 
//             })
//             .catch(err => {
//                 setLoading(false); 
//                 console.log(err);
//                 setError("Log In Failed! Please try again.");
//             });
//     }

//     return (
//         <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
//             <Row className="w-100">
//                 <Col md={4} className="mx-auto">
//                     <div className="p-4 border rounded shadow-sm bg-white">
//                         {error && <div className='text-danger'>{error}</div>}
//                         <h2 className="mb-4 text-center">Log In</h2>
//                         {loading ? (
//                             <div className="text-center">
//                                 <Spinner animation="border" role="status" variant="success" style={{ width: '3rem', height: '3rem' }}>
//                                     <span className="visually-hidden">Loading...</span>
//                                 </Spinner>
//                                 <p className="mt-3">Logging in...</p>
//                             </div>
//                         ) : (
//                             <Form onSubmit={handleSubmit}>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label><strong>Email:</strong></Form.Label>
//                                     <Form.Control 
//                                         name='email' 
//                                         onChange={(e) => setValues({ ...values, email: e.target.value })} 
//                                         type="email" 
//                                         value={values.email} 
//                                         placeholder="abc123@gmail.com" 
//                                         autoComplete="off" 
//                                     />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label><strong>Password:</strong></Form.Label>
//                                     <Form.Control 
//                                         name='password' 
//                                         onChange={(e) => setValues({ ...values, password: e.target.value })} 
//                                         value={values.password} 
//                                         type="password" 
//                                         placeholder="Enter Your Password..." 
//                                     />
//                                 </Form.Group>
//                                 <Button 
//                                     style={{ background: 'rgb(151, 112, 112)' }} 
//                                     type="submit" 
//                                     className="w-100 mt-0"
//                                 >
//                                     Log In
//                                 </Button>
//                             </Form>
//                         )}
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default LogIn;



import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const LogIn = () => {
    const [values, setValues] = useState({  
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); 
        setError(null); // Reset the error state before making a request

        try {
            const response = await axios.post('http://localhost:5000/adminlogin', values);
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
        <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Row className="w-100">
                <Col md={4} className="mx-auto">
                    <div className="p-4 border rounded shadow-sm bg-white">
                        {error && <Alert variant="danger">{error}</Alert>}
                        <h2 className="mb-4 text-center">Log In</h2>
                        {loading ? (
                            <div className="text-center">
                                <Spinner animation="border" role="status" variant="success" style={{ width: '3rem', height: '3rem' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <p className="mt-3">Logging in...</p>
                            </div>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><strong>Email:</strong></Form.Label>
                                    <Form.Control 
                                        name='email' 
                                        onChange={(e) => setValues({ ...values, email: e.target.value })} 
                                        type="email" 
                                        value={values.email} 
                                        placeholder="abc123@gmail.com" 
                                        autoComplete="off" 
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><strong>Password:</strong></Form.Label>
                                    <Form.Control 
                                        name='password' 
                                        onChange={(e) => setValues({ ...values, password: e.target.value })} 
                                        value={values.password} 
                                        type="password" 
                                        placeholder="Enter Your Password..." 
                                    />
                                </Form.Group>
                                <Button 
                                    style={{ background: 'rgb(151, 112, 112)' }} 
                                    type="submit" 
                                    className="w-100 mt-0"
                                >
                                    Log In
                                </Button>
                            </Form>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;
