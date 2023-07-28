import { useRouter } from "next/router"

const pasos = [
    {paso:1,nombre:"Menú",url:"/"},
    {paso:2,nombre:"Resumen",url:"/resumen"},
    {paso:3,nombre:"Datos y Total",url:"/total"}
]

const Pasos = () => {
  const router = useRouter()

  const calularProgreso = () =>{
    let progreso 
    switch (router.pathname) {
        case "/": progreso = "5%"
            break;
        case "/resumen": progreso = "50%"
            break;
        case "/total": progreso = "100%"
            break;
    }
    return progreso
  }

  return (
    <>
        <div className="flex flex-row justify-between mb-5">
            {pasos.map(paso => (
                <button className="text-3xl font-bold"
                        key={paso.paso}
                        onClick={()=>{
                            router.push(paso.url)
                        }}>
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className="bg-gray-100 mb-10">
            <div className="rounded-full bg-amber-500 text-xs leading-none text-center h-2 text-white"
                 style={{
                    width: calularProgreso(),
                 }}></div>
        </div>
    </>
  )
}

export default Pasos