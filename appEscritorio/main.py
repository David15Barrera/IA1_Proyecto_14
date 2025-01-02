import tkinter as tk
from tkinter import scrolledtext  # Para el área de chat con scroll
import chat  # Tu módulo de chatbot

# Mensaje inicial del chat
MENSAJE_INICIAL = "Emily: ¡Hola! Soy Emely, un chatbot asistente en Python, JavaScript, Libros y Música. ¿En qué puedo ayudarte?\n"

def enviar_mensaje():
    mensaje = entrada.get("1.0", tk.END).strip()
    entrada.delete("1.0", tk.END)  # Limpia el campo de entrada
    
    if mensaje:
        # Muestra el mensaje del usuario
        area_chat.config(state=tk.NORMAL)
        print(mensaje)
        area_chat.insert(tk.END, f"Tú: {mensaje}\n", "user")
        area_chat.tag_add("align_right", "end-2l", "end-1l")  # Alinea a la derecha

        # Lógica del chatbot
        respuesta = chat.chatbot_response(mensaje)
        
        # Muestra la respuesta del bot
        area_chat.insert(tk.END, f"Emily: {respuesta}\n", "bot")
        area_chat.tag_add("align_left", "end-2l", "end-1l")  # Alinea a la izquierda
        area_chat.config(state=tk.DISABLED)
        area_chat.see(tk.END)  # Hace scroll hasta el final

def reiniciar_chat():
    """Reinicia el área de texto con el mensaje inicial."""
    area_chat.config(state=tk.NORMAL)
    area_chat.delete("1.0", tk.END)
    area_chat.insert(tk.END, MENSAJE_INICIAL, "bot")
    area_chat.tag_add("align_left", "1.0", "end-1l")  # Alinear el mensaje inicial a la izquierda
    area_chat.config(state=tk.DISABLED)

def enviar_mensaje_enter(event):
    """Manejador para enviar el mensaje al presionar Enter."""
    enviar_mensaje()
    return "break"

# Configuración de la ventana principal
root = tk.Tk()
root.title("Emely Chat Bot IA1-EDV")
root.configure(bg="#232529")  # Fondo oscuro similar

# Tamaño y posición de la ventana
window_width = 1000
window_height = 600
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
x_centrado = (screen_width - window_width) // 2
y_centrado = (screen_height - window_height) // 2
root.geometry(f"{window_width}x{window_height}+{x_centrado}+{y_centrado}")

# Panel lateral
panel_lateral = tk.Frame(root, bg="#2C2F33", width=500)
panel_lateral.pack(side=tk.LEFT, fill=tk.Y)

# Botones del panel lateral
boton_nuevo = tk.Button(panel_lateral, text="Nuevo Chat", bg="#2C2F33", fg="white",
                        font=("Arial", 12), anchor="w", bd=0, highlightthickness=0,
                        padx=10, relief="flat", command=reiniciar_chat)
boton_nuevo.pack(pady=(20, 5), padx=10, fill=tk.X)

boton_borrar = tk.Button(panel_lateral, text="Borrar Chat", bg="#2C2F33", fg="white",
                        font=("Arial", 12), anchor="w", bd=0, highlightthickness=0,
                        padx=10, relief="flat", command=reiniciar_chat)
boton_borrar.pack(pady=(0, 20), padx=10, fill=tk.X)

copyright_label = tk.Label(panel_lateral, text="© 2024 Emily", bg="#2C2F33", fg="white",
                           font=("Arial", 10), anchor="center")
copyright_label.pack(side=tk.BOTTOM, pady=10)

# Área principal de chat
frame_chat = tk.Frame(root, bg="#2C2F33")
frame_chat.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)

header = tk.Frame(frame_chat, bg="#2C2F33")
header.pack(fill=tk.X)
header_label = tk.Label(header, text="Emily ChatBot de Python y Javascript",
                        bg="#2C2F33", fg="white", font=("Arial", 14))
header_label.pack(pady=10)

# Área de texto con scroll
area_chat = scrolledtext.ScrolledText(frame_chat, bg="#2C2F33", fg="white", font=("Arial", 12),
                                      wrap=tk.WORD, relief="flat", bd=0)
area_chat.tag_configure("user", foreground="#00BFFF", spacing1=5)  # Color del usuario
area_chat.tag_configure("bot", foreground="#FFD700", spacing1=5)   # Color del bot
area_chat.tag_configure("align_right", justify="right")  # Alinear a la derecha
area_chat.tag_configure("align_left", justify="left")    # Alinear a la izquierda
area_chat.pack(fill=tk.BOTH, expand=True, padx=10, pady=(10, 10))
area_chat.insert(tk.END, MENSAJE_INICIAL, "bot")
area_chat.tag_add("align_left", "1.0", "end-1l")
area_chat.configure(state=tk.DISABLED)

# Área de entrada de texto
frame_entrada = tk.Frame(frame_chat, bg="#2C2F33")
frame_entrada.pack(fill=tk.X, padx=10, pady=(10, 10))

entrada = tk.Text(frame_entrada, bg="#40444B", fg="white", height=2, bd=0, font=("Arial", 12), relief="flat")
entrada.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
entrada.bind("<Return>", enviar_mensaje_enter)

boton_enviar = tk.Button(frame_entrada, text="Enviar", command=enviar_mensaje, bg="#5865F2",
                         font=("Arial", 11), fg="white", bd=0, highlightthickness=0)
boton_enviar.pack(side=tk.RIGHT, padx=(5, 0))

root.mainloop()