import Image from "next/image"
import { formatDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"
import { useEffect, useState } from "react"

const ModalProducto = ({producto}) => {
  const {hanldeChangeModal,handleSetPedido,pedido} = useQuiosco()
  const [cantidad,setCantidad] = useState(1)
  const [edicion,setEdicion] = useState(false)

  useEffect(() => {
      // compprobar si el modal esta en el pedido
      if(pedido.some(pedidoState => pedidoState.id === producto.id)){
        const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
        setEdicion(true)
        setCantidad(productoEdicion.cantidad)
      }
  }, [producto,pedido])
  
  
  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image
                width={300}
                height={400}
                alt={`Imagen producto ${producto?.nombre}`}
                src={`/assets/img/${producto?.imagen}.jpg`}/>
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button className="bg-red-600 py-1 px-4 rounded-md text-white font-black transition-colors hover:bg-red-950"
                        onClick={() =>{
                            hanldeChangeModal()
                        }}>X</button>
            </div>
            <h3 className="text-3xl font-semibold mt-5">{producto?.nombre}</h3>
            <p className="text-4xl font-black text-amber-500 mt-5">{formatDinero(producto.precio)}</p>
            <div className="flex mt-5 gap-2">
                <button onClick={() => {
                    if (cantidad<=1) return
                    setCantidad(cantidad-1)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="text-3xl">
                    {cantidad}
                </div>
                <button onClick={() => {
                    if(cantidad >= 5) return
                    setCantidad(cantidad+1)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <button className="flex p-3 bg-indigo-600 mt-5 text-white gap-2 font-bold border-2 border-indigo-600 transition-colors hover:bg-white hover:text-indigo-600"
                    onClick={()=>{
                        if (cantidad === 0) return
                        handleSetPedido({...producto,cantidad})
                    }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                {edicion?'Guardar cambios':'Agregar al carrito'}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto