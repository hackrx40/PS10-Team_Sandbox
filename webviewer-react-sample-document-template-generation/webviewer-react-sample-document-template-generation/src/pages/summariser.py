from transformers import pipeline
from flask import Flask, render_template, request
app = Flask(__name__)
# Import the required modules

# Load the summarizer model


def load_summarizer():
    model_name = "sshleifer/distilbart-cnn-12-6"
    model = pipeline("summarization", model=model_name, device='cpu')
    return model


summarizer = load_summarizer()

# Define the Flask routes


@app.route('/')
def index():
    return render_template('summariser.html')


@app.route('/summarize', methods=['POST'])
def summarize():
    sentence = request.form['sentence']
    max_length = int(request.form['max_length'])
    min_length = int(request.form['min_length'])
    do_sample = True if request.form.get('do_sample') else False

    chunks = generate_chunks(sentence)
    res = summarizer(chunks,
                     max_length=max_length,
                     min_length=min_length,
                     do_sample=do_sample)
    text = ' '.join([summ['summary_text'] for summ in res])

    return render_template('summariser.html', text=text)


def generate_chunks(inp_str):
    max_chunk = 500
    inp_str = inp_str.replace('.', '.<eos>')
    inp_str = inp_str.replace('?', '?<eos>')
    inp_str = inp_str.replace('!', '!<eos>')

    sentences = inp_str.split('<eos>')
    current_chunk = 0
    chunks = []
    for sentence in sentences:
        if len(chunks) == current_chunk + 1:
            if len(chunks[current_chunk]) + len(sentence.split(' ')) <= max_chunk:
                chunks[current_chunk].extend(sentence.split(' '))
            else:
                current_chunk += 1
                chunks.append(sentence.split(' '))
        else:
            chunks.append(sentence.split(' '))

    for chunk_id in range(len(chunks)):
        chunks[chunk_id] = ' '.join(chunks[chunk_id])
    return chunks


# Run the Flask application
if __name__ == '__main__':
   app.run(port=5001)