import tkinter as tk
from tkinter import ttk
import chat

# Función para enviar mensajes
def enviar():
    mensaje = EntryBox.get("1.0", 'end-1c').strip()  # Obtener el texto ingresado
    EntryBox.delete("0.0", tk.END)  # Limpiar el cuadro de entrada

    if mensaje:
        # Mostrar mensaje del usuario como burbuja
        agregar_burbuja("Tú", mensaje, "e", "#2B3A42")  # Fondo azul grisáceo oscuro

        # Obtener respuesta del chatbot
        respuesta = chat.chatbot_response(mensaje)
        agregar_burbuja("Emily", respuesta, "w", "#3B4F61")  # Fondo gris azulado oscuro

        # Desplazar automáticamente hacia abajo
        ChatCanvas.update_idletasks()
        ChatCanvas.yview_moveto(1)

# Función para enviar mensajes al presionar Enter
def enviar_con_enter(event):
    enviar()
    return "break"

# Función para agregar burbujas de texto
def agregar_burbuja(origen, mensaje, alineacion, color):
    """Crea una burbuja de mensaje con estilo."""
    # Crear un frame para la burbuja
    burbuja = tk.Frame(ChatFrame, bg=color, pady=5, padx=5)
    burbuja.grid(sticky=alineacion, padx=10, pady=5)

    # Etiqueta del remitente (Emily o Tú)
    etiqueta_origen = tk.Label(burbuja, text=origen, font=("Verdana", 8, "bold"), fg="#A1AAB3",  # Texto gris claro
                               bg=color, anchor="w")
    etiqueta_origen.pack(fill="x")

    # Etiqueta del mensaje
    mensaje_texto = tk.Label(
        burbuja, text=mensaje, font=("Verdana", 10), wraplength=500,  # Ajustar ancho máximo
        justify="left", bg="#1E262C", fg="#FFFFFF", bd=1, relief="solid", padx=10, pady=5
    )  # Fondo oscuro para los mensajes
    mensaje_texto.pack(fill="both")

# Función para reiniciar el chat
def nuevo_chat():
    """Reinicia el chat con el mensaje inicial."""
    for widget in ChatFrame.winfo_children():
        widget.destroy()
    agregar_burbuja("Emily", MENSAJE_INICIAL, "w", "#3B4F61")  # Fondo del mensaje inicial

# Función para borrar el chat
def borrar_chat():
    """Borra todos los mensajes del chat."""
    for widget in ChatFrame.winfo_children():
        widget.destroy()

# Mensaje inicial
MENSAJE_INICIAL = "Emily: ¡Hola! Soy Emily, un chatbot asistente en Python, JavaScript, Libros y Música. ¿En qué puedo ayudarte?"

# Configuración de la ventana principal
base = tk.Tk()
base.title("Emily ChatBot")
base.geometry("800x900")
base.configure(bg="#1E262C")  # Fondo principal oscuro
base.resizable(width=False, height=False)

# Panel lateral para botones
PanelLateral = tk.Frame(base, bg="#1E262C", width=100)
PanelLateral.grid(row=0, column=0, sticky="ns")

# Botón "Nuevo Chat"
BotonNuevo = tk.Button(PanelLateral, text="Nuevo Chat", font=("Verdana", 10, "bold"), bg="#4A90E2", fg="white",
                       activebackground="#357ABD", command=nuevo_chat)
BotonNuevo.pack(fill="x", padx=10, pady=(20, 10))

# Botón "Borrar Chat"
BotonBorrar = tk.Button(PanelLateral, text="Borrar Chat", font=("Verdana", 10, "bold"), bg="#D64545", fg="white",
                        activebackground="#BD3A3A", command=borrar_chat)
BotonBorrar.pack(fill="x", padx=10, pady=10)

# Área de chat con scrollbar
ChatCanvas = tk.Canvas(base, bg="#1E262C", bd=0, highlightthickness=0)
scrollbar = ttk.Scrollbar(base, orient="vertical", command=ChatCanvas.yview)
ChatCanvas.configure(yscrollcommand=scrollbar.set)

ChatFrame = tk.Frame(ChatCanvas, bg="#1E262C")
ChatCanvas.create_window((0, 0), window=ChatFrame, anchor="nw")

ChatCanvas.grid(row=0, column=1, sticky="nsew")
scrollbar.grid(row=0, column=2, sticky="ns")

# Permitir scroll con la rueda del mouse
def scroll_con_rueda(event):
    ChatCanvas.yview_scroll(int(-1 * (event.delta / 120)), "units")

ChatCanvas.bind_all("<MouseWheel>", scroll_con_rueda)  # Windows/macOS
ChatCanvas.bind_all("<Button-4>", lambda e: ChatCanvas.yview_scroll(-1, "units"))  # Linux scroll up
ChatCanvas.bind_all("<Button-5>", lambda e: ChatCanvas.yview_scroll(1, "units"))   # Linux scroll down

def ajustar_scroll(event=None):
    ChatCanvas.configure(scrollregion=ChatCanvas.bbox("all"))

ChatFrame.bind("<Configure>", ajustar_scroll)

# Cuadro de entrada de texto
EntryFrame = tk.Frame(base, bg="#1E262C")
EntryFrame.grid(row=1, column=0, columnspan=3, sticky="ew", pady=10)

EntryBox = tk.Text(EntryFrame, bd=1, bg="#2B3A42", fg="#FFFFFF", font=("Verdana", 12), wrap=tk.WORD, height=3)
EntryBox.grid(row=0, column=0, padx=10, pady=5, sticky="ew")
EntryBox.bind("<Return>", enviar_con_enter)

BotonEnviar = tk.Button(EntryFrame, text="Enviar", font=("Verdana", 12, 'bold'), bg="#4CAF50", fg="#FFFFFF",
                        activebackground="#45A049", activeforeground="#FFFFFF", command=enviar)
BotonEnviar.grid(row=0, column=1, padx=10, pady=5)

# Configurar pesos para ajustar tamaños
base.grid_rowconfigure(0, weight=1)  # El área de chat se expande
base.grid_columnconfigure(1, weight=1)
EntryFrame.grid_columnconfigure(0, weight=1)  # El cuadro de entrada se expande

# Iniciar con el mensaje inicial
nuevo_chat()

base.mainloop()
