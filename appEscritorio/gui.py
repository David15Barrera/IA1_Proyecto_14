# -*- coding: utf-8 -*-
"""
Created on Tue May 25 18:06:21 2021

@author: shrey
"""

#Creating GUI with tkinter
import tkinter
from tkinter import *
import chat
import speech_recognition as s
from google_trans_new import google_translator
from googletrans import Translator

translator = google_translator()
translator = Translator()

def enviar():
    mensaje = EntryBox.get("1.0", 'end-1c').strip()
    EntryBox.delete("0.0", END)

    if mensaje:
        ChatLog.config(state=NORMAL)
        ChatLog.insert(END, "Tú: " + mensaje + '\n\n')
        ChatLog.config(foreground="#442265", font=("Verdana", 12))

        respuesta = chat.chatbot_response(mensaje)

        ChatLog.insert(END, "Bot: " + respuesta + '\n\n')
        ChatLog.config(state=DISABLED)
        ChatLog.yview(END)

base = Tk()
base.title("Chatbot")
base.geometry("400x500")
base.resizable(width=FALSE, height=FALSE)

ChatLog = Text(base, bd=0, bg="white", height="8", width="50", font="Arial")
ChatLog.config(state=DISABLED)

scrollbar = Scrollbar(base, command=ChatLog.yview, cursor="heart")
ChatLog['yscrollcommand'] = scrollbar.set

BotonEnviar = Button(base, font=("Verdana", 12, 'bold'), text="Enviar", width="12", height=5,
                     bd=0, bg="#32de97", activebackground="#3c9d9b", fg='#ffffff',
                     command=enviar)

EntryBox = Text(base, bd=0, bg="white", width="29", height="5", font="Arial")

scrollbar.place(x=376, y=6, height=386)
ChatLog.place(x=6, y=6, height=386, width=370)
EntryBox.place(x=128, y=401, height=90, width=265)
BotonEnviar.place(x=6, y=401, height=90)

base.mainloop()