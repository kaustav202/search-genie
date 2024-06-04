
import pkg from 'pg';
const {Client} = pkg;


const client = new Client({
  user: 'kaustav',
  host: 'localhost',
  database: 'vectordb',
  password: 'kaustav123',
  port: 5432, 
});


export default async function instertEmbeddings(text, embeddings){


    let em = JSON.stringify(embeddings);

    client.connect()
   .then(() => {
    console.log('Connected to the database successfully.');

    const query = 'INSERT INTO articles( text, embedding ) VALUES( $1 , $2)';
    return client.query(query, [text , em]);
  })
  .then((result) => {

    console.log("Embeddings Inserted Successfully");
    return result;
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


export async function querySimilarity(embeddings){

  if(embeddings){
    console.log("Embedding recieved");
  }

    let em = JSON.stringify(embeddings);

    client.connect()
    .then(() => {
     console.log('Connected to the database successfully.');
 
     const query = 'SELECT text,  1 - (embedding <=> $1) AS cosine_similarity FROM articles ORDER BY cosine_similarity desc LIMIT 5';
     return client.query(query, [em]);
   })
   .then((result) => {
 
     console.log("Query Success");
     console.log('Query result:', result.rows);
     return result.rows;
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