import { categorias } from "./data/categorias"
import { productos } from "./data/productos"
import { PrismaClient } from "@prisma/client"

const primsa = new PrismaClient()

const main = async () : Promise<void> =>{
    try {
      await primsa.categoria.createMany({
        data: categorias
      })
      await primsa.producto.createMany({
        data: productos
      })
    } catch (error) {
        console.log(error)
    }
}

main()