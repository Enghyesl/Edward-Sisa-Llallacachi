const ClientService = require('../services/clientService');
const AppError = require('../utils/AppError');

class ClientController {
    // Obtener todos los clientes
    async getClients(req, res, next) {
        try {
            const clients = await ClientService.getClients();
            res.json(clients);
        } catch (error) {
            next(error); // PASAMOS EL ERROR AL MIDDLEWARE
        }
    }

    // Obtener un cliente por DNI
    async getClientByDni(req, res, next) {
        const { dni } = req.params;
        try {
            const client = await ClientService.getClientByDni(dni);
            if (!client) {
                return next(new AppError('Cliente no encontrado', 404)); // Lanza un error si no existe el cliente
            }
            res.json(client);
        } catch (error) {
            next(error); // PASAMOS EL ERROR AL MIDDLEWARE
        }
    }

    // Crear un nuevo cliente
    async createClient(req, res, next) {
        try {
            const { dni, nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
            const newClient = await ClientService.addClient({
                dni,
                nombre,
                apellido_paterno,
                apellido_materno,
                fecha_nacimiento
            });
            res.status(201).json(newClient);
        } catch (error) {
            next(error); // PASAMOS EL ERROR AL MIDDLEWARE
        }
    }

    // Actualizar un cliente por DNI
    async updateClient(req, res, next) {
        try {
            const { dni } = req.params;
            const { nombre, apellido_paterno, apellido_materno, fecha_nacimiento } = req.body;
            const updatedClient = await ClientService.modifyClient(dni, {
                nombre,
                apellido_paterno,
                apellido_materno,
                fecha_nacimiento
            });
            if (!updatedClient) {
                return next(new AppError('Cliente no encontrado', 404)); // Lanza un error si no existe el cliente
            }
            res.json(updatedClient);
        } catch (error) {
            next(error); // PASAMOS EL ERROR AL MIDDLEWARE
        }
    }

    // Eliminar un cliente por DNI
    async deleteClient(req, res, next) {
        try {
            const { dni } = req.params;
            await ClientService.removeClient(dni);
            res.sendStatus(204);
        } catch (error) {
            next(error); // PASAMOS EL ERROR AL MIDDLEWARE
        }
    }
}

module.exports = new ClientController();
