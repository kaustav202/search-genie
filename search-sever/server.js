import express from "express";
import cors from "cors";

import instertEmbeddings from "./db-interface/dbclient.js";
import { querySimilarity } from "./db-interface/dbclient.js";

import genEmbeddings from "./modelsAPI/getIndex.js";
import { genEmbeddingsQuery } from "./modelsAPI/getIndex.js";

const app = express();

app.use(express.json());

app.use(cors());

app.post('/process/:s_id', async (req,res)=>{

    const {text} = req.body;
    const sessionId = req.params.s_id;

    // console.log(text);
    console.log(sessionId);

    if(sessionId == 0){

        try{
            const dataEmbeddings = await genEmbeddings(text);

            await instertEmbeddings(text, dataEmbeddings);

            res.status(200).send("Data Ingestion Success");

        }catch{
            console.log('Could Not Resolve Model Inference or DB Handlers');
        }

    }else{

        res.status(400).send("Invalid Session!");
    }

})

app.post('/search', async (req, res)=>{

    const {sTerm} = req.body;

    try{

        const quesEmbeddings = await genEmbeddingsQuery(sTerm);
        console.log(quesEmbeddings);
        const ans =  await querySimilarity(quesEmbeddings);

        res.status(200).send(ans);
    }catch(err){
        console.log('Could Not Resolve Model Inference or DB Handlers');
        console.log(err);
    }

})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Running On Port ${port}`);
})