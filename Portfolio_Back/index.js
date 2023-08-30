const server = require('../Portfolio_Back/src/app') 
const { conn } = require('./src/db.js');

conn.sync({ force: false })
  .then(() => {
    server.listen(3001, () => {
      console.log('%s listening at 3001');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
