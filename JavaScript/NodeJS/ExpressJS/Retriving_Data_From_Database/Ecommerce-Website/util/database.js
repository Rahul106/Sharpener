const sql = require('mysql2');

const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: 'Rahul@6160'
});

module.exports = pool.promise();