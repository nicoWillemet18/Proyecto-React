import React from 'react'
import { Container } from "reactstrap";

function ItemListContainer (props) {
    return (
        <Container className="container-fluid">
            <h2>Bienvenidos a {props.nombre}👋🏼</h2>
            
        </Container>
    )
}

export default ItemListContainer