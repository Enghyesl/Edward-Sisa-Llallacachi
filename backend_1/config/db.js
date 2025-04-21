// Importamos el objeto `Pool` desde el paquete `pg` para trabajar con la base de datos PostgreSQL
const { Pool } = require('pg');

// Definimos la clase `Database` para encapsular la lógica de conexión y ejecución de consultas
class Database {
    constructor() {
        // Creamos una nueva instancia del Pool con la configuración de conexión
        this.pool = new Pool({
            user: 'postgres', // Usuario de la base de datos
            host: 'localhost', // Dirección del servidor de la base de datos (localhost en este caso)
            database: 'ventasdb', // Nombre de la base de datos a la que nos conectamos
            password: 'admin', // Contraseña del usuario
            port: 5433, // Puerto utilizado para la conexión, en este caso 5433 en lugar de 5432 (que es el puerto por defecto)
        });
    }

    // Método para realizar consultas SQL a la base de datos
    query(text, params) {
        // Utilizamos el método `.query` del Pool para ejecutar la consulta con los parámetros proporcionados
        return this.pool.query(text, params);
    }
}

// Exportamos una instancia única de la clase `Database` para que sea utilizada en otras partes de la aplicación
module.exports = new Database();