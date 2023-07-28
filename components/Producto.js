import Image from "next/image"
import { formatDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const Producto = ({producto}) => {
  const {nombre,imagen,precio} = producto 
  const {handleSetProducto,hanldeChangeModal} = useQuiosco()
  return (
    <div className="border">
      <Image src={`/assets/img/${imagen}.jpg`} 
             alt={`Imagen ${nombre}`}
             loading="lazy" 
             width={400} 
             height={500} />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-10 font-black text-4xl text-amber-500">
          {formatDinero(precio)}
        </p>
        <button className="bg-indigo-600 p-3 w-full mt-3 text-white font-bold rounded-sm text-2xl transition-colors hover:bg-indigo-900" 
                type="button" 
                onClick={() => {
                  hanldeChangeModal()
                  handleSetProducto(producto)
                } }>
          Agregar
        </button>
      </div>
    </div>
  )
}

export default Producto