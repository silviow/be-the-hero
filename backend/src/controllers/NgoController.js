const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ngos = await connection('ngos').select('*');

        return res.json(ngos);
    },
    async store(req, res) {
        const { name, email, whatsapp, city, state } = req.body;

        const id = crypto.randomBytes(6).toString('HEX');

        await connection('ngos').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            state,
        });

        return res.json({ id });
    },
}