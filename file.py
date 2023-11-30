from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def task11():
    return render_template('task11.html')

@app.route("/PassUsingModel")
def model():
    return render_template('PassUsingModel.html')

@app.route("/PassUsingViewData")
def viewdata():
    return render_template('PassUsingViewData.html')

@app.route("/PassUsingViewBag")
def viewbag():
    return render_template('PassUsingViewBag.html')

@app.route("/AccessServiceDirectly")
def serviceinjection():
    return render_template('AccessServiceDirectly.html')

if __name__ == "__main__":
    app.run( debug=True)