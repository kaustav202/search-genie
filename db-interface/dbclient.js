
import pkg from 'pg';
const {Client} = pkg;


const client = new Client({
  user: 'kaustav',
  host: 'localhost',
  database: 'template1',
  password: 'kaustav123',
  port: 5432, 
});


export default async function instertEmbeddings(text, embeddings){

    let em = JSON.stringify(embeddings);

    client.connect()
   .then(() => {
    console.log('Connected to the database successfully.');

    const query = `insert into articles(text, embedding) VALUES(${text} , ${em});`
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

}


export async function query(embeddings){

    let em = JSON.stringify(embeddings);

    client.connect()
    .then(() => {
     console.log('Connected to the database successfully.');
 
     const query = `SELECT text,  1 - (embedding <=> ${em}) AS cosine_similarity FROM Articles ORDER BY cosine_similarity desc LIMIT 5;`
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
}