from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import gdown
import os

app = FastAPI()

# Load your model
output = 'final_unet_model.h5'
file_id = '1o7ykSm74ZvCt1-XgZT0LCmh-z9Dc8Yf_'  
model_url = f'https://drive.google.com/file/d/1o7ykSm74ZvCt1-XgZT0LCmh-z9Dc8Yf_/view?usp=drive_link'

if not os.path.exists(output):
    gdown.download(model_url, output, quiet=False)

model = tf.keras.models.load_model(output)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(await file.read()))
    image = image.resize((150, 150))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)

    prediction = model.predict(image)
    return JSONResponse(content={"prediction": prediction.tolist()})

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)
