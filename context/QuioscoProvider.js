import {createContext,useState,useEffect} from 'react'
import { colocarPedido, obtenerCategorias} from '../data/fetch'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto,setProducto] = useState({})
    const [modal,setMdal] = useState(false)
    const [pedido,setPedido] = useState([])
    const [nombre,setNombre] = useState('')
    const router = useRouter()

    useEffect(() => {
        const llamarApiCategorias = async () =>{
            setCategorias(await obtenerCategorias())
        }
        llamarApiCategorias()
    }, [])

    useEffect(() => {
      setCategoriaActual(categorias[0])
    }, [categorias])

    const hanldeClickCategoria = id =>{
      const categoria = categorias.filter(value => value.id === id)
      setCategoriaActual(categoria[0])
      router.push("/")
    }

    const handleSetProducto = producto =>{
      setProducto(producto)
    }

    const hanldeChangeModal = () =>{
      setMdal(!modal)
    }

    const handleSetPedido = ({categoriaId,...producto}) =>{
      if (pedido.some(productoState => productoState.id === producto.id)) {
        //  Actualizar
        const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
        setPedido(pedidoActualizado)
        toast.info('Se actualizo',{
          icon: "🧟‍♂️"
        });
      }else{
        setPedido([...pedido,producto])
        toast.success('Se agrego al carrito',{
          icon: "🧟‍♀️"
        });
      }
      setMdal(false)
    }

    const hanldeEditarCantidades = id =>{
      const productoActualizar = pedido.filter(pro => pro.id === id)
      setProducto(productoActualizar[0])
      setMdal(!modal)
    }

    const handleEliminarProducto = id =>{
      const productoEliminado = pedido.filter(pro => pro.id !== id)
      setPedido(productoEliminado)
    }

    const handleColocarOrden = async objeto =>{
      const respuesta = await colocarPedido(objeto)
      if (respuesta?.status === "ok") {
        toast.success(respuesta?.message)
        setCategoriaActual(categorias[0])
        setPedido([])
        setNombre("")
        setTimeout(() => {
          router.push("/")
        }, 1500);
      }else{
        toast.error(respuesta?.message)
      }
    }
    
  return (
    <QuioscoContext.Provider value={{
      categorias,
      categoriaActual,
      hanldeClickCategoria,
      handleSetProducto,
      hanldeChangeModal,
      modal,
      producto,
      handleSetPedido,
      pedido,
      hanldeEditarCantidades,
      handleEliminarProducto,
      handleColocarOrden,
      nombre,
      setNombre
    }}>
        {children}
    </QuioscoContext.Provider>
  )
}
export {QuioscoProvider}

export default QuioscoContext