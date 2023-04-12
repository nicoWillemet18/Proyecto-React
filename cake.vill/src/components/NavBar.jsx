import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg" variant="dark">
            <Container className="nav">
                <Link to={'/'}><img src="/imagenes/logo.jpg" alt="" /></Link>
                <Nav>
                    <Link to={'/'}>Premium</Link>
                    <Link to={'/'}>Regular</Link>
                </Nav>
                <Nav>
                    3
                    <CartWidget />
                </Nav>
            </Container>
        </Navbar>

  )
}

export default NavBar