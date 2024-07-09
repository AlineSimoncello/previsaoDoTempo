// loadConfig.js
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const config = `
const CONFIG = {
  API_KEY: "${process.env.API_KEY}"
};
`;

fs.writeFileSync('./config.js', config);
console.log('Config file created.');
