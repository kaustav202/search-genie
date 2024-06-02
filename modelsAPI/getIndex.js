import { HfInference } from "@huggingface/inference";
import fetch from "node-fetch";
globalThis.fetch = fetch


const accesstoken = "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"

const hfInference = new HfInference(accesstoken);

const text ='The rise of artificial intelligence (AI) marks one of the most transformative periods in human history, revolutionizing industries, economies, and daily life. From its early conceptual stages in the mid-20th century, AI has evolved into a sophisticated network of technologies capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation. This surge is driven by advances in machine learning, neural networks, and vast amounts of data, enabling AI systems to learn and improve over time. In healthcare, AI aids in diagnostics and personalized treatment plans; in finance, it enhances fraud detection and investment strategies. AI-powered automation is reshaping manufacturing and logistics, while smart assistants and recommendation algorithms improve user experiences in consumer technology.  Despite its benefits, the rapid growth of AI also raises ethical and societal concerns, including job displacement, privacy issues, and the need for robust regulatory frameworks to ensure responsible development and deployment. As AI continues to integrate into various facets of life, it promises to unlock unprecedented opportunities and challenges, defining the future of human progress.'

console.log(hfInference);

(async function genEmbeddings(){

const embeddings = await hfInference.featureExtraction({
    model: "intfloat/e5-small-v2",
    inputs: `passage: ${text}` 
}).then((res)=>{
    console.log("Embeddings Generated");
    console.log(typeof(res));
}).catch((err)=>{
    console.log("Error ocurred while generating embeddings");
    console.log(err);
});


})();