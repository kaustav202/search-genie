
const { Client } = require('pg');


const client = new Client({
  user: 'kaustav',
  host: 'localhost',
  database: 'template1',
  password: 'kaustav123',
  port: 5432, 
});


client.connect()
  .then(() => {
    console.log('Connected to the database successfully.');
    

    const query = 'SELECT * FROM test';
  

    return client.query(query);
  })
  .then((result) => {

    console.log('Query result:', result.rows);
  })
  .catch((err) => {

    console.error('Error executing query', err.stack);
  })
  .finally(() => {
    client.end()
      .then(() => {
        console.log('Database connection closed.');
      })
      .catch((err) => {
        console.error('Error closing connection', err.stack);
      });
  });