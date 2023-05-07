import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import { useCartContext } from "../CartContext/CartContext"

const NavBar = () => {
    const { 
        cantidadTotal
    } = useCartContext()

  return (
    <Navbar className="navbar" expand="lg" variant="dark">
            <Container className="nav">
                <Link to={'/'}><img src="/imagenes/logo.jpg" className="logo" /></Link>
                <Nav className="nav">
                    <Link to={'/categoria/Premium'}>Premium</Link>
                    <Link to={'/categoria/Regular'}>Regular</Link>
                </Nav>
                <Nav>
                    <Link to={'/carrito'}>{cantidadTotal()}<CartWidget/></Link>
                </Nav>
            </Container>
        </Navbar>

  )
}

export default NavBar