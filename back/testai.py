import unittest
from tkinter import Tk
from ai_app import AIApp

class TestAIApp(unittest.TestCase):
    def setUp(self):
        self.root = Tk()
        self.app = AIApp(self.root)
    
    def test_model_loading(self):
        self.assertIsNotNone(self.app.model, "Model should be loaded")

    def test_image_opening(self):
        
        self.app.open_image('patient1.jpg')
        self.assertIsNotNone(self.app.photo, "Photo should be loaded into the label")
    
    def test_prediction(self):
        img = Image.open('path_to_test_image.jpg').resize((256, 256))
        self.app.predict_image(img)
        prediction_text = self.app.result_label.cget("text")
        self.assertTrue("Prediction:" in prediction_text, "This is your lesions ")

    def tearDown(self):
        self.root.destroy()

if __name__ == "__main__":
main()
