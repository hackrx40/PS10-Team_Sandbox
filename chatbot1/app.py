import csv
from flask import Flask, render_template, request
import openai

app = Flask(__name__)

openai.api_key = "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"

messages = [{"role": "system",
             "content": "An Artificial Lawyer To Solve Your Legal Troubles"}]


def CustomChatGPT(input):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    ChatGPT_reply = response["choices"][0]["message"]["content"]
    messages.append({"role": "assistant", "content": ChatGPT_reply})
    return ChatGPT_reply


def ask_questions(loaded_data):
    global messages
    for question in loaded_data:
        user_input = question
        # User message
        messages.append({"role": "user", "content": user_input})

        # Get AI response
        ai_response = CustomChatGPT(user_input)


@app.route("/", methods=["GET", "POST"])
def index():
    global messages

    if request.method == "POST":
        user_input = request.form["user_input"]
        try:
            # User message
            messages.append({"role": "user", "content": user_input})

            # Get AI response
            ai_response = CustomChatGPT(user_input)

            # Pass the entire messages list to the template
            return render_template("index.html", messages=messages)
        except Exception as e:
            # Print the traceback to the console for debugging
            import traceback
            traceback.print_exc()
            return "An error occurred. Please try again later."
    else:
        # Ask questions from the loaded data
        loaded_data = [
            "Question 1: What is the plaintiff's name?",
            "Question 2: What is the defendant's name?",
            "Question 3: What is the nature of the legal dispute?",
            "Question 4: When did the incident occur?",
            "Question 5: Are there any witnesses?"
        ]

        ask_questions(loaded_data)

        # Pass the entire messages list to the template
        return render_template("index.html", messages=messages)


@app.route("/flag_response", methods=["POST"])
def flag_response():
    if request.method == "POST":
        user_input = request.form["user_input"]
        ai_response = request.form["ai_response"]
        save_to_csv(user_input, ai_response)
    return "Response flagged successfully."


def save_to_csv(user_input, ai_response):
    with open("responses.csv", mode="a", newline="", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow([user_input, ai_response])


if __name__ == "__main__":
    app.run(debug=False,port =5003)