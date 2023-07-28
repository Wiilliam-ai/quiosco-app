import { toast } from "react-toastify"
import { actualizarPedido } from "../data/fetch"
import {formatDinero} from "../helpers/index"

const Orden = ({orden}) => {
  const {id,nombre,fecha,total,pedido} = orden

  const hanldeClickAtender = async pedidoId =>{
    const {estado} = await actualizarPedido(pedidoId)
    if (estado) {
      toast.success("Pedido atendido")
    }
  }

  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-3xl font-bold">Orden:{id}</h3>
      <p className=" text-2xl font-semibold">Cliente: {nombre}</p>
      <div>
        <p className="inline-block">Fecha: {fecha}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {
          pedido.map(v =>(
            <div className="border p-2" key={v.id}>
              <p className="text-blue-900 font-bold">{v.nombre}</p>
              <p className="text-gray-900 font-bold">Cantidad: {v.cantidad}</p>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <p className="text-2xl font-bold text-amber-500">Total a pagar: {formatDinero(total)}</p>
        <button className="border py-1 px-4 text-white bg-indigo-700 font-bold text-xl cursor-pointer transition-colors duration-300 rounded-md hover:bg-indigo-950"
                type="button"
                onClick={()=> hanldeClickAtender(id)}
        >Atender</button>
      </div>
    </div>
  )
}

export default Orden