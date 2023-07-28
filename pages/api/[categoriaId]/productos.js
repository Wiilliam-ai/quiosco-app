import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function  handler(req, res) {
    const {categoriaId} = req.query
  const productos = await prisma.producto.findMany({
    include: {
      categoria:true
    },
    where:{
      categoria:{
        id:Number(categoriaId)
      }
    }
  })
  res.status(200).json(productos)
}
