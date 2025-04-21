const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routers/clientRouters');
const errorHandler = require('./middlewares/errorHandler'); // IMPORTACIÓN

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.middlewares(); // Usar middlewares al final
  }

  config() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/clientes', clientRoutes);
  }

  middlewares() {
    this.app.use(errorHandler); // MIDDLEWARE DE ERRORES AL FINAL
  }

  start() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  }
}

const server = new Server();
server.start();
