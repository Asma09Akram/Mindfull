import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        {/* Add the scrolling animation class */}
        <BootstrapNavbar.Brand className="scrolling-text">
          Mindful Me - Your Personal Mindfulness Companion
        </BootstrapNavbar.Brand>
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            {currentUser ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/meditation">Meditation</Nav.Link>
                <Nav.Link as={Link} to="/breathing">Breathing</Nav.Link>
                <Nav.Link as={Link} to="/journal">Journal</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                       </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
/*
16 <Nav.Link as={Link} to="/">Home</Nav.Link>

27
<Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
       */