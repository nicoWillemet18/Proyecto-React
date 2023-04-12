let productos = [
    { id: '1' , categoria: 'Premium', name: "Sacher", stock:20, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/shacher.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '2' , categoria: 'Premium', name: "Lemon Pie", stock:10, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/lemon-pie.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '3' , categoria: 'Premium', name: "Saint Honoré", stock:35, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/par%C3%ADs.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '4' , categoria: 'Premium', name: "Tarta Tatin", stock:15, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/tatin.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '5' , categoria: 'Premium', name: "Victoria Sponge Cake", stock:25, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/victoria.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '6' , categoria: 'Regular', name: "Selva Negra", stock:40, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/selva-negra.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '7' , categoria: 'Regular', name: "Tiramisú", stock:6, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/tiramis%C3%BA.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '8' , categoria: 'Regular', name: "Tarta de Santiago", stock:12, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/trata-santiago.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '9' , categoria: 'Regular', name: "Carrot Cake", stock:18, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/carrot-cake.jpg`, colores:[{nombre:'rojo', clase:''}] },
    { id: '10', categoria: 'Regular', name: "Tarte aux pralines", stock:30, price: "$12.000", foto: `https://waynabox.com/wp-content/uploads/2016/08/lyon-1.jpg`, colores:[{nombre:'rojo', clase:''}] }, 
]

export let mockFetch = (id) =>{
    return new Promise( (resolve, reject)=>{    
        setTimeout(()=>{
            resolve(id ? productos.find(prod=>prod.id === id): productos)        
        }, 1000)
    } )
}
