// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const LogIn = () => {

//     const [values, setValues] = useState({  
//         email: '',
//         password: ''
//     });

//     const [loading, setLoading] = useState(false); 

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setLoading(true); 

//         axios.post('http://localhost:5000/adminlogin', values)
//             .then(result => {
//                 toast.success("Log In Successful!", {
//                     autoClose: 50, 
//                     onClose: () => {
//                         setLoading(false); 
//                         window.location.replace('/Dashboard');
//                     }
//                 });
//             })
//             .catch(err => {
//                 setLoading(false); 
//                 console.log(err);
//                 toast.error("Log In Failed! Please try again.");
//             });
//     }

//     return (
//         <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
//             <Row className="w-100">
//                 <Col md={4} className="mx-auto">
//                     <div className="p-4 border rounded shadow-sm bg-white">
//                         <h2 className="mb-4 text-center">Log In</h2>
//                         {loading ? (
//                             <div className="text-center">
//                                 <Spinner animation="border" role="status" variant="success" className="mb-3" style={{ width: '3rem', height: '3rem' }}>
//                                     <span className="visually-hidden">Logging in...</span>
//                                 </Spinner>
//                                 <p>Logging in...</p>
//                             </div>
//                         ) : (
//                             <Form onSubmit={handleSubmit}>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label><strong>Email:</strong></Form.Label>
//                                     <Form.Control name='email' onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" value={values.email} placeholder="abc123@gmail.com" autoComplete="off" />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                                     <Form.Label><strong>Password:</strong></Form.Label>
//                                     <Form.Control name='password' onChange={(e) => setValues({ ...values, password: e.target.value })} value={values.password} type="password" placeholder="Enter Your Password..." />
//                                 </Form.Group>
//                                 <Button variant="success" type="submit" className="w-100 mt-0">
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
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

const LogIn = () => {

    const [values, setValues] = useState({  
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false); 

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); 

        axios.post('http://localhost:5000/adminlogin', values)
            .then(result => {
                setTimeout(() => {
                    setLoading(false);
                    window.location.replace('/Dashboard');
                }, 1000); 
            })
            .catch(err => {
                setLoading(false); 
                console.log(err);
                alert("Log In Failed! Please try again.");
            });
    }

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <Row className="w-100">
                <Col md={4} className="mx-auto">
                    <div className="p-4 border rounded shadow-sm bg-white">
                        <h2 className="mb-4 text-center">Log In</h2>
                        {loading ? (
                            <div className="text-center">
                                <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <p className="mt-3">Logging in...</p>
                            </div>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><strong>Email:</strong></Form.Label>
                                    <Form.Control name='email' onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" value={values.email} placeholder="abc123@gmail.com" autoComplete="off" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label><strong>Password:</strong></Form.Label>
                                    <Form.Control name='password' onChange={(e) => setValues({ ...values, password: e.target.value })} value={values.password} type="password" placeholder="Enter Your Password..." />
                                </Form.Group>
                                <Button variant="success" type="submit" className="w-100 mt-0">
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
