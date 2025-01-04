from setuptools import setup, find_packages

setup(
    name="my_chatbot_app",
    version="1.0.0",
    author="Tu Nombre",
    description="Aplicación de chatbot basada en Python",
    packages=find_packages(where="."),  # Busca paquetes en el directorio actual
    package_dir={"": "."},  # La raíz es el directorio actual
    include_package_data=True,  # Incluye archivos no Python (como JSON)
    install_requires=[
        "tensorflow",
        "numpy",
        "nltk"
    ],
    entry_points={
        "console_scripts": [
            "chatbot=main:main",  # Apunta a `main.py` para iniciar la app
        ],
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "Operating System :: OS Independent",
    ],
)
