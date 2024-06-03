import tkinter as tk
import requests

class App:
    def __init__(self, root):
        self.root = root
        self.root.title("Tkinter App")

        self.status_label = tk.Label(root, text="Segmenter Status: OFF")
        self.status_label.pack()

        self.check_button = tk.Button(root, text="Check Segmenter Status", command=self.check_status)
        self.check_button.pack()

    def check_status(self):
        response = requests.get("http://localhost:3000/segmenter-status")
        status = response.json().get('status')
        self.status_label.config(text=f"Segmenter Status: {'ON' if status else 'OFF'}")

if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()
