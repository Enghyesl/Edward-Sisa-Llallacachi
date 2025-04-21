// server.js
//importamos las dependencias
const express = require('express'); //para el manejo de solicitudes http
const cors = require('cors'); //habilita los cors en la aplicacion para la comunic
const productRoutes = require('../backend/routers/productRouters');

class Server { // clase para encapsular la configuracion y 1 arranque de l servidor
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() { //metodo config
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() { // metodo router
    // Todas las rutas de productos se alojarán en /productos
    this.app.use('/productos', productRoutes);
  }

  start() { // metodo star
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  }
}

const server = new Server();
server.start();