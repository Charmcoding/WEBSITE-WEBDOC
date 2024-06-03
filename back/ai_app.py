import tensorflow as tf
import numpy as np
from PIL import Image
import tkinter as tk
from tkinter import filedialog, messagebox
import gdown
import os

class AIApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Interface pour modèle d'IA")
        self.model = self.load_model()
        
        self.open_button = tk.Button(root, text="Ouvrir une image", command=self.open_image)
        self.open_button.pack()
        self.segment_button = tk.Button(root, text="Segmenter", command=self.segment_image)
        self.segment_button.pack()
        
        self.result_label = tk.Label(root, text="")
        self.result_label.pack()
        
    def load_model(self):
        output = 'final_unet_model.h5'
        file_id = '1o7ykSm74ZvCt1-XgZT0LCmh-z9Dc8Yf_'
        model_url = f'https://drive.google.com/file/d/1o7ykSm74ZvCt1-XgZT0LCmh-z9Dc8Yf_/view?usp=drive_link'
        gdown.download(model_url, output, quiet=False)

        if not os.path.exists(output):
            raise Exception("Le téléchargement a échoué. Vérifiez l'ID du fichier et les autorisations de partage.")
        
        return tf.keras.models.load_model(output)
    
    def open_image(self):
        file_path = filedialog.askopenfilename()
        if file_path:
            img = Image.open(file_path).resize((150, 150))
            self.photo = tk.PhotoImage(img)
            self.label.configure(image=self.photo)
    
    def segment_image(self):
        # Dummy function for segmentation
        pass
    
    def predict_image(self, image):
        image = np.array(image) / 255.0
        image = np.expand_dims(image, axis=0)
        prediction = self.model.predict(image)
        self.result_label.config(text=f"Prediction: {prediction}")

# Running the app
if __name__ == "__main__":
    root = tk.Tk()
    app = AIApp(root)
    root.mainloop()
