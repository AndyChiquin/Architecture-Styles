from flask import Flask, jsonify

# Crear la instancia de Flask
app = Flask(__name__)

# Ruta principal de la API
@app.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello, World!"})

if __name__ == '__main__':
    app.run(debug=True)
