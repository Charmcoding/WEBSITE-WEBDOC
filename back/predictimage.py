import tensorflow as tf
import numpy as np
from PIL import Image
import tkinter as tk
from tkinter import filedialog, messagebox
import gdown


model_url = 'https://drive.google.com/file/d/1o7ykSm74ZvCt1-XgZT0LCmh-z9Dc8Yf_/view?usp=drive_link'
output = 'final_unet_model.h5'
gdown.download(model_url, output, quiet=False)


model = tf.keras.models.load_model(output)

def predict_image(image_path):
    image = Image.open(image_path)
    image = image.resize((150, 150))  
    image = np.array(image) / 255.0 
    image = np.expand_dims(image, axis=0)
    prediction = model.predict(image)
    return prediction

def open_image():
    file_path = filedialog.askopenfilename()
    if file_path:
        prediction = predict_image(file_path)
        messagebox.showinfo("Prediction", f"IA prédit: {prediction}")

root = tk.Tk()
root.title("Interface pour modèle d'IA")

open_button = tk.Button(root, text="Ouvrir une image", command=open_image)
open_button.pack()
open_button2 = tk.Button(root, text="Segmenter", command=open_image)
open_button2.pack()

root.mainloop()
