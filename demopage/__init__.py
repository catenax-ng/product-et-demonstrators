from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def start():
	return render_template('start.html')

@app.route("/fedml")
def demo_fedml():
	return render_template('demonstrator_fedml.html')

@app.route("/diffpriv")
def demo_diffpriv():
	return render_template('demonstrator_diffpriv.html')

@app.route("/mpc")
def demo_mpc():
	return render_template('demonstrator_mpc.html')


