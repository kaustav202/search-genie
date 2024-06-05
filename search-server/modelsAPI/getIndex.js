import { HfInference } from "@huggingface/inference";
import fetch from "node-fetch";
globalThis.fetch = fetch;


const accesstoken = "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";

const hfInference = new HfInference(accesstoken);


console.log(hfInference);

export default async function genEmbeddings(text){

const embeddings = await hfInference.featureExtraction({
    model: "intfloat/e5-small-v2",
    inputs: `passage: ${text}` 

}).then((res)=>{
    console.log("Embeddings Generated");
    return res;
}).catch((err)=>{
    console.log("Error ocurred while generating embeddings");
    console.log(err);
});

    return embeddings;
};

export async function genEmbeddingsQuery(text){

    const embeddings = await hfInference.featureExtraction({
        model: "intfloat/e5-small-v2",
        inputs: `query: ${text}` 
    
    }).then((res)=>{
        console.log("Embeddings Generated");
        return res;
    }).catch((err)=>{
        console.log("Error ocurred while generating embeddings");
        console.log(err);
    });
    
        return embeddings;
    };
