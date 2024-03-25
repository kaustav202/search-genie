# Search Genie

#### A generative AI based smart information retrieval system featuring Hybrid Full-Text Search, contextual meaning and relevance.

<img src="https://github.com/kaustav202/search-genie/assets/89788120/8984e120-9b15-4f6c-9506-265d0b1b44f6" width="65%" />


<!-- <img src = "https://github.com/kaustav202/search-genie/assets/89788120/ea07883c-350e-4598-aad9-be6ea4e14f96" width="74%" /> -->


#### Vector databases store contextual representaion of data ( knowm as vectors ) in n-dimensional space. The vector representation allows the ability to preserve contextual information and also a huge scale of diversity in the data. Thus Vector databases store very accurate representation of thr data and can be used to accurately identify semantic similarity ( similarity search ) through it's fast andscalable ANN algorithm.

### LLMs for Information Retrieval and The problem with relying only on LLMs
LLMs are generative, meaning that they produce meaningful, coherent text in a sequential manner based on a user prompt and are very good as conversational agents. However, when using LLMs to answer a human’s questions, they often produce irrelevant or factually incorrect results.
- An LLM often hallucinates, i.e., it fabricates information, such as making up stuff that don’t exist
- LLMs learn/memorize a compressed version of their training data – some information is always “lost” in a model’s internal representation of the data
- An LLM cannot know facts that occurred after its training was completed

<img src="https://github.com/kaustav202/search-genie/assets/89788120/b4575358-7414-41bc-872c-5c1de97ef0b3" width="74%" />


Vector databases help address these problems, by functioning as the underlying storage layer that can be efficiently queried by an LLM to retrieve facts. Unlike traditional databases, vector DBs specialize in natively representing data as vectors. As a result, we can now build applications with an LLM sitting on top of a vector storage layer that contains recent, up-to-date, factual data (well past the LLM’s training date) and use them to “ground” the model, alleviating the hallucination problem.Because of their amenability to operating in embedding space, vector databases are proving to be very useful for semantic or similarity-based search for multiple forms of data


### Towards a Hybrid Approach

In many cases, traditional keyword search can yield more relevant results and increased user satisfaction4. It’s largely to do with the fact that ranking based on metrics like cosine similarity causes results that have a higher similarity score to appear above partial matches that may contain specific input keywords, reducing their relevance to the end user. However, pure keyword search also has its own limitations – in case the user enters a term that is semantically similar to the stored data (but is not exact), potentially useful and relevant results are not returned. As a result of this trade-off, real-world use cases for search & retrieval demand a combination of keyword and vector searches, of which vector databases form a key component (because they house the embeddings, enabling semantic similarity search and are able to scale to very large datasets).


### Generative QnA

Because vector DBs store the data to be queried as embeddings, and the LLM also encodes the knowledge within it as embeddings, they are a natural pairing when it comes to generative QA applications. The vector DB functions as a knowledge base, and the LLM can query a subset of the data directly in the embedding space. Further, because question-answering can involve more than just information retrieval (it may require parts of the data to be analyzed, not just queried), including an agent-based framework like LangChain in between the application UI and the vector DB can be effective and useful to retrieve relavant results.


- Similarity Search
- Keyword baased Semantic Search
- Topic Modelling
- Contextual Embeddings
- Knowledge Graphs / Semantic Graph Search
- Personalized Search ( Session )
- Conversational 


### Techniques

- Indexing
- Tokenization
- Embeddings
- Document Ranking
- Vector DB
- RAG
- LLMs
