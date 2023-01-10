import os
import json
from PIL import Image
from flask import Flask, request, jsonify, make_response

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'message': 'File is missing'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400
    if file:
        # Open the image file and remove exif data
        image = Image.open(file)
        data = list(image.getdata())
        image_without_exif = Image.new(image.mode, image.size)
        image_without_exif.putdata(data)
        # Saving the cleaned image to a temp file
        file_path = os.path.join(os.getcwd(), 'temp_image.jpg')
        image_without_exif.save(file_path)
        with open(file_path, 'rb') as f:
            img_data = f.read()
        os.remove(file_path)
        response = make_response(img_data)
        response.headers.set('Content-Type', 'image/jpeg')
        response.headers.set(
            'Content-Disposition', 'attachment', filename='temp_image.jpg')
        return response

if __name__ == '__main__':
    app.run(debug=True, port=5000)
