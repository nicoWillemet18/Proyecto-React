import Item from "./Item"


const ItemList = ({productos}) => {
    const objStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
    return (
        <div style={objStyle}>
            {productos.map( producto =>  <Item  key={producto.id} producto={producto}/>)}
        </div>
    )
}

export default ItemList
