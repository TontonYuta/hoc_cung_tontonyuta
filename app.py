from flask import Flask, render_template, request, jsonify, send_file
import io

app = Flask(__name__)

# ================================
# Trang chính
# ================================
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/toan12")
def toan12():
    return render_template("toan12.html")

@app.route("/sat")
def sat():
    return render_template("sat.html")

@app.route("/tsa")
def tsa():
    return render_template("tsa.html")

@app.route("/hsa")
def hsa():
    return render_template("hsa.html")


# ================================
# Khởi động server
# ================================
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
