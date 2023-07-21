from flask import Flask, render_template, request
from dotenv import load_dotenv
import os
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain import HuggingFaceHub

app = Flask(__name__)
load_dotenv()


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        text = request.form['text']

        if text:
            # Split into chunks
            text_splitter = CharacterTextSplitter(
                separator="\n",
                chunk_size=5000,
                chunk_overlap=200,
                length_function=len
            )
            chunks = text_splitter.split_text(text)

            # Create embedding
            embeddings = HuggingFaceEmbeddings()

            knowledge_base = FAISS.from_texts(chunks, embeddings)

            user_question = request.form['question']
            if user_question:
                docs = knowledge_base.similarity_search(user_question)

                # Provide the Hugging Face API token
                api_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

                llm = HuggingFaceHub(repo_id="google/flan-t5-large",
                                     model_kwargs={
                                         "temperature": 2, "max_length": 256},
                                     huggingfacehub_api_token=api_token)
                chain = load_qa_chain(llm, chain_type="stuff")
                response = chain.run(input_documents=docs,
                                     question=user_question)

                return render_template('index.html', response=response)

    return render_template('index.html')


if __name__ == '__main__':
    app.run(port=5002)









# experiment
# from flask import Flask, render_template, request
# from dotenv import load_dotenv
# import os
# from langchain.text_splitter import CharacterTextSplitter
# from langchain.embeddings.huggingface import HuggingFaceEmbeddings
# from langchain.vectorstores import FAISS
# from langchain.chains.question_answering import load_qa_chain
# from langchain import HuggingFaceHub

# app = Flask(__name__)
# load_dotenv()


# @app.route('/', methods=['GET', 'POST'])
# def home():
#     if request.method == 'POST':
#         text = request.form['text']

#         if text:
#             # Split into chunks
#             text_splitter = CharacterTextSplitter(
#                 separator="\n",
#                 chunk_size=5000,
#                 chunk_overlap=200,
#                 length_function=len
#             )
#             chunks = text_splitter.split_text(text)

#             # Create embedding
#             embeddings = HuggingFaceEmbeddings()

#             knowledge_base = FAISS.from_texts(chunks, embeddings)

#             user_question = request.form['question']
#             if user_question:
#                 docs = knowledge_base.similarity_search(user_question)

#                 # Provide the Hugging Face API token
#                 api_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

#                 llm = HuggingFaceHub(repo_id="google/flan-t5-large",
#                                      model_kwargs={
#                                          "temperature": 2, "max_length": 256},
#                                      huggingfacehub_api_token=api_token)
#                 chain = load_qa_chain(llm, chain_type="stuff")
#                 response = chain.run(input_documents=docs,
#                                      question=user_question)

#                 tid = request.form.get('tid')
#             if tid:
#                 # Fetch the specific doc data for the given tid (Replace this with your actual method to get the doc data)
#                 specific_doc_data = fetch_specific_doc_data(tid)

#                 # Pass the specific doc data to the template
#                 return render_template('index.html', response=response, specific_doc_data=specific_doc_data)

#     return render_template('index.html')


# if __name__ == '__main__':
#     app.run(port=5002)