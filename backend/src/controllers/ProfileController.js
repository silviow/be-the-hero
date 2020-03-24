const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        
        const ngo_id = req.headers.authorization;

        const incidents = await connection('incidents')
            .where('ngo_id', ngo_id)
            .limit(10)
            .offset((page -1) * 10)
            .select('*');
        
        return res.json(incidents);
    }
}