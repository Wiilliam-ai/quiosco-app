import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fechaActual = new Date();
const dia = String(fechaActual.getDate()).padStart(2, '0');
const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
const anio = fechaActual.getFullYear();
const fechaEnFormatoTexto = `${anio}-${mes}-${dia}`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, total, pedido } = req.body;
    try {
      const result = await prisma.orden.create({
        data: {
          nombre,
          fecha: fechaEnFormatoTexto,
          total: Number.parseFloat(total),
          pedido,
        },
      });
      res.status(200).json({ status: "ok", message: "Su pedido fue realizado" });
    } catch (error) {
      res.status(404).json({ status: error.message, message: "Hubo un error" });
    }
  } else if (req.method === "GET") {
    try {
      const ordenes = await prisma.orden.findMany({
        where: {
          estado: false,
        },
      });
      res.status(200).json(ordenes);
    } catch (error) {
      res.status(500).json({ status: "error", message: "Hubo un error al obtener las órdenes" });
    }
  }
}
