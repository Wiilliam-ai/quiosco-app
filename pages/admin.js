import useSWR from "swr"
import AdminLayout from "../layout/AdminLayout"
import Orden from "../components/Orden"

export default function Admin() {
    const fetcher = async () => {
        const response = await fetch("/api/ordenes")
        return await response.json()
    }
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher,{refreshInterval:100})

  return (
    <AdminLayout pagina="Admin">
        <h1 className="text-4xl font-bold">Panel de administracion</h1>
        <p className="text-2xl">Administra las ordenes</p>
        <div className="grid lg:grid-cols-2 gap-2">
            {data && data.length ? data.map(orden => (
                <Orden key={orden.id} orden={orden}/>
            )):(
                <p>No hay</p>
            )}
        </div>
    </AdminLayout>
  )
}
