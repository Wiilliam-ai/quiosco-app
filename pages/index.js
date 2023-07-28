import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import Producto from "../components/Producto"
export default function Home() {
  const {categoriaActual} = useQuiosco()
  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {
          categoriaActual?.productos?.map(producto =>(
            <Producto key={producto.id} producto={producto} />
          ))
        }
      </div>
    </Layout>
  )
}