import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"

const Categoria = ({categoria}) => {
  const {hanldeClickCategoria,categoriaActual} = useQuiosco()

  return (
    <div className={`${categoriaActual?.id === categoria.id ?"bg-amber-400":""} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
        <Image className="mr-5"
               src={`/assets/img/icono_${categoria?.icono}.svg`}
               alt={`Imagen ${categoria.nombre}`}
               width={70}
               height={70}/>
        <button className="text-2xl font-bold hover:cursor-pointer"
                type="button"
                onClick={()=> hanldeClickCategoria(categoria.id)}>
                {categoria.nombre}
        </button>
    </div>
  )
}

export default Categoria