const obtenerCategorias = async () =>{
    const url = "/api/categorias"
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

const obtenerProductos = async (id) =>{
    const url = `/api/${id}/productos`
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error.message)
    }
}

const colocarPedido = async pedido =>{
    const url = "/api/ordenes"
    try {
        const response = await fetch(url,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido)
        })
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

const actualizarPedido = async id =>{
    const url = `/api/ordenes/${id}`
    try {
        const response = await fetch(url,{method:"PATCH"})
        const result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

export{
    obtenerCategorias,
    obtenerProductos,
    colocarPedido,
    actualizarPedido
}