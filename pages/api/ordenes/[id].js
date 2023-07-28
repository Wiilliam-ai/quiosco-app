import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function  handler(req, res) {
    const {id} = req.query
    if (req.method === "PATCH") {
        try {
            const pedido = await prisma.orden.update({
                where:{ id: Number(id)},
                data:{
                    estado: true
                }
            })
            res.status(200).json({
                estado: pedido?.estado
            })
        } catch (error) {
            res.status(200).json({error:"error"})
        }
    }
}