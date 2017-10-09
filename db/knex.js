const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

// LOG ============================================
console.log(`loading environment: ${environment}`);

if (environment === 'development') {
    console.log(`with settings:\n${JSON.stringify(config)}`);
}
// ================================================

module.exports = require('knex')(config);
