const db = require('./config/db');

(async () => {
    try {
        const result = await db.query('SELECT * FROM producto');
        console.log('Conexión exitosa. Fecha y hora actual:', result.rows[0]);
    } catch (error) {
        console.error('Error de conexión:', error);
    }
})();