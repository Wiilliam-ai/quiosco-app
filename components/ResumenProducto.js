import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { formatDinero } from "../helpers"

const ResumenProducto = ({producto}) => {
  const {hanldeEditarCantidades,handleEliminarProducto} = useQuiosco()
  const {imagen,nombre,cantidad,precio,id} = producto
  const subTotal = cantidad * precio
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:1/6">
        <Image width={250}  
               height={300}
               src={`/assets/img/${imagen}.jpg`}
               alt={`Imagen producto ${nombre}`} />
      </div>
      <div className="md:w-4/6 flex flex-col justify-start">
        <p className="text-3xl font-black">{nombre}</p>
        <p className="text-xl">
          Cantidad : {cantidad}
        </p>
        <p className="text-xl text-gray-700">
          Precio : {formatDinero(precio)}
        </p>
        <p className="text-2xl font-semibold text-amber-500">
          Subtotal : {formatDinero(subTotal)}
        </p>
      </div>
      <div >
        <button className="bg-sky-700 flex gap-2 px-5 py-2 text-white font-bold rounded-md uppercase shadow-md w-full transition-colors hover:bg-sky-900"
                type="button"
                onClick={()=> {
                  hanldeEditarCantidades(id)
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>

          Editar
        </button>
        <button className="bg-red-700 mt-5 flex gap-2 px-5 py-2 text-white font-bold rounded-md uppercase shadow-md w-full transition-colors hover:bg-red-900"
                type="button"
                onClick={()=>{
                  handleEliminarProducto(id)
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                  </svg>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default ResumenProducto