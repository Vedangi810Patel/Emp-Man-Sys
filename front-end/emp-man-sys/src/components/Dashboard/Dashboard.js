import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dashboard.css'; 

const Dashboard = () => {

  const handleLogOut = () => {
    window.location.replace('/');
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="sidebar p-3">
          <Nav className="flex-column">
            <Nav.Item className="mb-4 text-center">
              <Link to='/Dashboard' className="nav-link text-white fs-4 fw-bold">
                EMS Nav Bar
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/Dashboard' className="nav-link d-flex align-items-center">
                <i className="bi bi-speedometer2 me-2"></i>
                Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/Dashboard/Employee' className="nav-link d-flex align-items-center">
                <i className="bi bi-people me-2"></i>
                Manage Employee
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/Dashboard/Category' className="nav-link d-flex align-items-center">
                <i className="bi bi-list-ul me-2"></i>
                Category
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/Dashboard/Profile' className="nav-link d-flex align-items-center">
                <i className="bi bi-person me-2"></i>
                Profile
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/' className="nav-link   d-flex align-items-center" onClick={handleLogOut}>
                <i className="bi bi-box-arrow-right me-2"></i>
                Log Out
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={10} className="main-content p-3">
          <div className="header mb-4">
            <h4 className="fw-bold" style={{fixed: "true"}}>Employee Management System</h4>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;

