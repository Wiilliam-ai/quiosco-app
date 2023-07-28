import { toast } from "react-toastify"
import { formatDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"
import Layout from "../layout/Layout"

export default function Total() {
  const {pedido,handleColocarOrden,nombre,setNombre} = useQuiosco()

  const calcularTotal = () =>{
    if (pedido.length <=0) return 0
    const numeros = pedido.map(value =>value.precio * value.cantidad)
    const totalPago = numeros.reduce((acc,val) => acc = acc+val)
    return totalPago
  }

  const handleSubmmit = e =>{
    e.preventDefault()
    if (pedido.length <= 0) {
      toast.error('No hay pedidos agregados',{
        icon:"🤡"
      })
      return
    }
    if (!nombre.trim())return
    const objeto = {
      nombre,
      total: Number.parseFloat(calcularTotal()).toFixed(2),
      pedido
    }
    handleColocarOrden(objeto)
  }

  return (
    <Layout pagina="Total y confirmar Pedido">
        <h1 className="text-4xl font-semibold">Total y confirmar pedido</h1>
        <p className="text-2xl my-10">Confirma tu pedido a continuación</p>
        <form onSubmit={handleSubmmit} className="space-y-2">
              <div>
                <label className="text-2xl uppercase font-semibold text-gray-700 block" 
                      htmlFor="nombre">Nombre</label>
                <input className="border-2 mt-2 text-xl p-2 outline-none rounded w-full md:max-w-xs disabled:opacity-70"
                      type="text"
                      placeholder="Ingrese su nombre"
                      id="nombre"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                      name="nombre"/>
                <div>
                  {!nombre.trim()&&<p>Ingrese su nombre</p>}
                </div>
              </div>
              <div>
                <p className="text-xl text-gray-700">Total a pagar: <span className="text-amber-600 font-semibold">{formatDinero(calcularTotal())}</span> </p>
              </div>
              <div>
                <input className="py-2 px-5 w-max text-xl font-bold text-white bg-indigo-600 cursor-pointer transition-colors hover:bg-indigo-900"
                       type="submit" 
                       value="Confirmar Pago" />
              </div>
        </form>
    </Layout>
  )
}