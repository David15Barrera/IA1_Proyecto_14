# Chatbot - Proyecto IA1

Este proyecto es un chatbot desarrollado como parte del curso de Inteligencia Artificial 1. Este archivo guía a los usuarios para instalar y ejecutar el chatbot en su sistema.

---

## **Requisitos Previos**
Antes de instalar y ejecutar el chatbot, asegúrate de cumplir con los siguientes requisitos:

1. **Sistema Operativo:** Linux (Ubuntu recomendado).
2. **Python:** Versión 3.8 o superior.
3. **Pip:** Asegúrate de tener `pip` instalado.
   ```bash
   sudo apt update
   sudo apt install python3-pip

## **Clona el repositorio
git clone[ https://github.com/tu_usuario/tu_repositorio.git](https://github.com/David15Barrera/IA1_Proyecto_14)

## **cd tu_repositorio
**Crea un entorno virtual**
``` bash 
virtualenv venv
source venv/bin/activate
```

Instala las dependencias Asegúrate de que las dependencias del proyecto estén instaladas.
```bash
pip install -r requirements.txt
```
Empaqueta e instala el proyecto Ejecuta los siguientes comandos para crear e instalar el paquete.
```bash
python setup.py sdist bdist_wheel
pip install dist/tu_chatbot-1.0.0-py3-none-any.whl
```

## **Configuraciones Adicionales
Asegúrate de que el script sea ejecutable Exporta el directorio de scripts locales a tu variable PATH (si es necesario).
```bash
export PATH=$PATH:/home/tu_usuario/.local/bin
```
Verifica que el comando chatbot esté disponible Ejecuta el siguiente comando para confirmar:
```bash
chatbot
```

## **Cómo Usar el Chatbot
Una vez instalado, simplemente ejecuta el comando:
```bash
chatbot
```

## **Resolución de Problemas
**Error ModuleNotFoundError: No module named 'main':**

Asegúrate de que el archivo setup.py está correctamente configurado con la sección entry_points. Por ejemplo:
```bash
entry_points={
    'console_scripts': [
        'chatbot=nombre_del_paquete.main:main',
    ],
},
```
**Error chatbot: orden no encontrada:**
Asegúrate de que el directorio ~/.local/bin está en tu PATH
```bash
export PATH=$PATH:/home/tu_usuario/.local/bin
```

**Dependencias faltantes:**
Asegúrate de haber instalado todas las dependencias con:
```bash
pip install -r requirements.txt
```
