// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery', // database name
    host: 'localhost', // where to find database
    port: 5432, // port for database
    max: 10, // max number of connections
    idleTimeoutMillis: 30000 // 30 seconds until timeout
});

// Listener setup on the pool
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;