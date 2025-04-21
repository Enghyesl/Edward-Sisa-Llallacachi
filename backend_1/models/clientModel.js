const db = require('../config/db');

class ClientModel {
    // Obtener todos los clientes
    async getAllClients() {
        const result = await db.query('SELECT * FROM clientes');
        return result.rows;
    }

    // Obtener un cliente por DNI
    async getClientByDni(dni) {
        const result = await db.query('SELECT * FROM clientes WHERE dni = $1', [dni]);
        return result.rows[0];
    }

    // Crear un nuevo cliente
    async createClient({ dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
        const result = await db.query(
            'INSERT INTO clientes(dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento]
        );
        return result.rows[0];
    }

    // Actualizar un cliente por DNI
    async updateClient(dni, { nombre, apellido_paterno, apellido_materno, fecha_nacimiento }) {
        const result = await db.query(
            'UPDATE clientes SET nombre = $1, apellido_paterno = $2, apellido_materno = $3, fecha_nacimiento = $4 WHERE dni = $5 RETURNING *',
            [nombre, apellido_paterno, apellido_materno, fecha_nacimiento, dni]
        );
        return result.rows[0];
    }

    // Eliminar un cliente por DNI
    async deleteClient(dni) {
        await db.query('DELETE FROM clientes WHERE dni = $1', [dni]);
    }
}

module.exports = new ClientModel();
