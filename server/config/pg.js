var pgs = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/redux';

var client = new pg.Client(connectionString);
client.connect();