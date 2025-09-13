// Importar express y librerias
import express from "express"

// Crear una instancia de express
const app = express()
const PORT = 3000

// Especificar las rutas
app.get("/", (req, res) => {
  res.send("Hola, mundo!")
})

//  listener en el puerto 3000
app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto 3000")
})
