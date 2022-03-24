const fs = require('fs');

fs.WriteStream('./.env', `API=${process.env.API}\n`);