import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function NavigationBar() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Patient Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/AddPatient" className="nav-link">Add Patient</Link>
            <Link to="/patient" className="nav-link">View Patient</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
