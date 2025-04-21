const ClientModel = require('../models/clientModel');

class ClientService {
    // Obtener todos los clientes
    async getClients() {
        return await ClientModel.getAllClients();
    }

    // Obtener un cliente por DNI
    async getClientByDni(dni) {
        return await ClientModel.getClientByDni(dni);
    }

    // Crear un nuevo cliente
    async addClient(data) {
        return await ClientModel.createClient(data);
    }

    // Actualizar un cliente por DNI
    async modifyClient(dni, data) {
        return await ClientModel.updateClient(dni, data);
    }

    // Eliminar un cliente por DNI
    async removeClient(dni) {
        await ClientModel.deleteClient(dni);
    }
}

module.exports = new ClientService();
