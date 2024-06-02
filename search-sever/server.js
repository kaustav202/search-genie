import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.post('/process/:s_id', async (req,res)=>{

    const {text} = req.body;
    const sessionId = req.params.s_id;

    res.status(200).send('ingestion success');
})

app.get('/search', async (req, res)=>{

    const {sTerm} = req.body;


    res.status(200).send('okay');
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server Running On Port ${port}`);
})