export const faqData = [
    // Saludos básicos
    { question: "Hola", answer: "¡Hola! Puedo ayudarte en preguntas sobre JavaScript y Python. ¿En qué te puedo ayudar?" },
    { question: "Buenas noches", answer: "¡Buenas noches! ¿Tienes alguna pregunta sobre JavaScript o Python?" },
    { question: "Buenos días", answer: "¡Buenos días! ¿Te gustaría aprender algo nuevo de JavaScript o Python?" },
    { question: "¿Cómo estás?", answer: "¡Estoy listo para ayudarte! ¿Qué necesitas saber sobre JavaScript o Python?" },
    { question: "¿Qué haces?", answer: "Soy un asistente virtual diseñado para responder preguntas sobre JavaScript y Python. ¿Cómo puedo ayudarte?" },

    // Consultas sobre quién es el chatbot
    { question: "¿Quién eres?", answer: "Soy un asistente virtual aquí para ayudarte con dudas sobre JavaScript y Python." },
    { question: "¿Qué puedes hacer?", answer: "Puedo responder preguntas sobre JavaScript y Python, desde conceptos básicos hasta temas más avanzados. ¿Qué necesitas saber?" },

    // Conceptos básicos de JavaScript
    { question: "¿Qué es JavaScript?", answer: "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas e interactivas." },
    { question: "¿que es javaScript?", answer: "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas e interactivas." },
    { question: "Que es javaScript?", answer: "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas e interactivas." },
    { question: "¿Para qué sirve JavaScript?", answer: "JavaScript sirve para desarrollar sitios web interactivos, crear aplicaciones web, manejar eventos en navegadores y mucho más. ¿Quieres aprender algún concepto específico?" },
    { question: "¿Para que sirve javaScript?", answer: "JavaScript sirve para desarrollar sitios web interactivos, crear aplicaciones web, manejar eventos en navegadores y mucho más. ¿Quieres aprender algún concepto específico?" },
    { question: "Para qué sirve JavaScript?", answer: "JavaScript sirve para desarrollar sitios web interactivos, crear aplicaciones web, manejar eventos en navegadores y mucho más. ¿Quieres aprender algún concepto específico?" },
    { question: "para que sirve javaScript?", answer: "JavaScript sirve para desarrollar sitios web interactivos, crear aplicaciones web, manejar eventos en navegadores y mucho más. ¿Quieres aprender algún concepto específico?" },
    { question: "¿Qué es el DOM en JavaScript?", answer: "El DOM (Document Object Model) es una interfaz que permite a JavaScript interactuar y modificar el contenido, la estructura y los estilos de una página web. ¿Necesitas ejemplos prácticos?" },
    { question: "¿Qué es el DOM?", answer: "El DOM (Document Object Model) es una interfaz que permite a JavaScript interactuar y modificar el contenido, la estructura y los estilos de una página web. ¿Necesitas ejemplos prácticos?" },
    { question: "¿Qué son las promesas en JavaScript?", answer: "Las promesas son una forma de manejar operaciones asíncronas en JavaScript. Te permiten trabajar con tareas que toman tiempo, como solicitudes a servidores. ¿Quieres un ejemplo?" },
    { question: "¿Que son las promesas en JavaScript?", answer: "Las promesas son una forma de manejar operaciones asíncronas en JavaScript. Te permiten trabajar con tareas que toman tiempo, como solicitudes a servidores. ¿Quieres un ejemplo?" },
    { question: "Que son las promesas en javaScript?", answer: "Las promesas son una forma de manejar operaciones asíncronas en JavaScript. Te permiten trabajar con tareas que toman tiempo, como solicitudes a servidores. ¿Quieres un ejemplo?" },
    { question: "que son las promesas en javaScript?", answer: "Las promesas son una forma de manejar operaciones asíncronas en JavaScript. Te permiten trabajar con tareas que toman tiempo, como solicitudes a servidores. ¿Quieres un ejemplo?" },
    { question: "¿Qué es async/await en JavaScript?", answer: "Async/await es una forma más sencilla de trabajar con promesas, haciendo que el código asíncrono parezca más lineal. ¿Te gustaría ver un ejemplo?" },
    { question: "¿Cuál es la diferencia entre var, let y const?", answer: "En JavaScript, la diferencia entre var, let y const es que var es una palabra clave que define variables mutables, let define variables mutables con un alcance de bloque, y const define variables inmutables" },
    { question: "Cual es la diferencia entre var, let y const?", answer: "En JavaScript, la diferencia entre var, let y const es que var es una palabra clave que define variables mutables, let define variables mutables con un alcance de bloque, y const define variables inmutables" },
    { question: "cual es la diferencia entre var, let y const?", answer: "En JavaScript, la diferencia entre var, let y const es que var es una palabra clave que define variables mutables, let define variables mutables con un alcance de bloque, y const define variables inmutables" },
    { question: "cual es la diferencia entre var y const?", answer: "En JavaScript, la diferencia entre var, let y const es que var es una palabra clave que define variables mutables, let define variables mutables con un alcance de bloque, y const define variables inmutables" },
    { question: "cual es la diferencia entre var y let?", answer: "En JavaScript, la diferencia entre var, let y const es que var es una palabra clave que define variables mutables, let define variables mutables con un alcance de bloque, y const define variables inmutables" },
    { question: "¿Qué son los tipos de datos en JavaScript?", answer: "Los tipos de datos en JavaScript son una forma de categorizar los datos en función de su uso y comportamiento, ¿deseas un ejemplo?" },
    { question: "que son los tipos de datos en JavaScript?", answer: "Los tipos de datos en JavaScript son una forma de categorizar los datos en función de su uso y comportamiento, ¿deseas un ejemplo?" },
    { question: "Tipos de datos en javascript", answer: "String, Number, Boolean" },
    { question: "Dame los tipos de datos en javascript", answer: "String, Number, Boolean" },
    { question: "datos en javascript", answer: "String, Number, Boolean" },
    { question: "¿Qué es una función en JavaScript?", answer: "Una función en JavaScript es un conjunto de instrucciones que se define una vez y se puede ejecutar varias veces, ¿quieres un ejemplo?" },
    { question: "¿Qué es un objeto en JavaScript?", answer: "Un objeto en JavaScript es una colección de propiedades que se utiliza para almacenar datos y entidades complejas" },
    {
        question: "ejemplo de datos en javascript", answer: `numero = 10
    nombre = "variable Cadena"
    es_activo = True
    `},
    {
        question: "¿como se define una variable en Javascript?", answer: `numero = 10
    nombre = "variable Cadena"
    es_activo = True
    `},


    //ejemplos promesas
    {
        question: "Si, dame un ejemplo de promesas", answer: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Éxito!"), 1000);
});` },
    {
        question: "claro, dame un ejemplo de promesas", answer: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Éxito!"), 1000);
});` },
    {
        question: "Claro, dame un ejemplo de promesas", answer: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Éxito!"), 1000);
});` },
    {
        question: "si, dame un ejemplo de promesas", answer: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Éxito!"), 1000);
});` },
    {
        question: "dame un ejemplo de promesas", answer: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Éxito!"), 1000);
});` },
    {
        question: "ejemplo de promesas", answer: `const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("¡Éxito!"), 1000);
});` },

    {
        question: "Ejemplo de Funcion en javascript", answer: `function areaCuadrado(lado) {
    return lado * lado;
  }` },

    {
        question: "si, Ejemplo de funcion en javascript", answer: `function areaCuadrado(lado) {
    return lado * lado;
    }` },


    // Conceptos básicos de Python
    { question: "¿Qué es Python?", answer: "Python es un lenguaje de programación fácil de aprender, popular por su simplicidad y versatilidad. Se utiliza en ciencia de datos, inteligencia artificial, desarrollo web y más." },
    { question: "que es Python?", answer: "Python es un lenguaje de programación fácil de aprender, popular por su simplicidad y versatilidad. Se utiliza en ciencia de datos, inteligencia artificial, desarrollo web y más." },
    { question: "Que es Python?", answer: "Python es un lenguaje de programación fácil de aprender, popular por su simplicidad y versatilidad. Se utiliza en ciencia de datos, inteligencia artificial, desarrollo web y más." },
    { question: "python?", answer: "Python es un lenguaje de programación fácil de aprender, popular por su simplicidad y versatilidad. Se utiliza en ciencia de datos, inteligencia artificial, desarrollo web y más." },
    { question: "¿Para qué sirve Python?", answer: "Python se utiliza para crear scripts, análisis de datos, inteligencia artificial, desarrollo web y más." },
    { question: "para que sirve Python?", answer: "Python se utiliza para crear scripts, análisis de datos, inteligencia artificial, desarrollo web y más." },
    { question: "para qué sirve python?", answer: "Python se utiliza para crear scripts, análisis de datos, inteligencia artificial, desarrollo web y más." },
    { question: "¿Qué son las listas en Python?", answer: "Las listas en Python son colecciones ordenadas y mutables que permiten almacenar elementos heterogéneos. ¿Te gustaría saber cómo se usan?" },
    { question: "¿Que son las listas en Python?", answer: "Las listas en Python son colecciones ordenadas y mutables que permiten almacenar elementos heterogéneos. ¿Te gustaría saber cómo se usan?" },
    { question: "que son las listas en python?", answer: "Las listas en Python son colecciones ordenadas y mutables que permiten almacenar elementos heterogéneos. ¿Te gustaría saber cómo se usan?" },
    { question: "¿Qué son los diccionarios en Python?", answer: "Los diccionarios son estructuras de datos que almacenan pares clave-valor, ideales para buscar datos rápidamente." },
    { question: "¿Qué es un bucle for en Python?", answer: "El bucle for en Python se utiliza para iterar sobre secuencias como listas, cadenas o rangos. ¿Quieres un ejemplo?" },
    { question: "¿Qué son los tipos de datos en Python?", answer: "int, float, str, bool, list..." },
    { question: "Que son los tipos de datos en Python?", answer: "int, float, str, bool, list..." },
    { question: "que son los tipos de datos en python?", answer: "int, float, str, bool, list..." },
    { question: "tipos de datos en python", answer: "int, float, str, bool, list..." },
    { question: "¿Qué es un diccionario en Python?", answer: "Es una estructura de datos que almacena pares clave-valor" },
    {
        question: "ejemplo datos en Python", answer: `numero = 10
        nombre = "variable Cadena"
        es_activo = True
    `},
    {
        question: "¿como se define una variable en Python?", answer: `numero = 10
        nombre = "variable Cadena"
        es_activo = True
    `},

    //ejemplos blucle
    {
        question: "dame ejemplo for en Python", answer: `for i in range(5): 
    print(i)` },
    {
        question: "for en Python", answer: `for i in range(5): 
    print(i)` },
    {
        question: "dame un ejemplo diccionarios en Python", answer: `diccionario = {"nombre": "Jhon", "edad": 25}
        print(diccionario["nombre"]) 
    ` },
    {
        question: "dame ejemplo lista en python", answer: `lista = [1, 2, 3]`
    },


    // Comparación entre JavaScript y Python
    { question: "¿Cuál es mejor, JavaScript o Python?", answer: "Depende de tus objetivos. JavaScript es ideal para desarrollo web interactivo, mientras que Python es excelente para tareas de análisis de datos, inteligencia artificial y scripting. ¿Quieres saber cuándo usar cada uno?" },
    { question: "Se puede usar Python para web como JavaScript?", answer: "Sí, con frameworks como Django o Flask puedes usar Python para desarrollo web. Sin embargo, JavaScript es esencial para crear interactividad en navegadores. ¿Te interesa aprender alguno de estos frameworks?" },

    // Temas avanzados en JavaScript
    { question: "¿Qué es un closure en JavaScript?", answer: "Un closure es una función que recuerda el ámbito donde se creó, incluso después de que ese ámbito haya terminado. ¿Quieres un ejemplo para entenderlo mejor?" },
    { question: "¿Cómo funciona la herencia en JavaScript?", answer: "La herencia en JavaScript funciona a través de prototipos. Cada objeto puede heredar propiedades y métodos de otro objeto. ¿Te gustaría un ejemplo práctico?" },
    { question: "¿Qué es un callback en JavaScript?", answer: "Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que esta última termine. ¿Necesitas un ejemplo sencillo?" },

    // Temas avanzados en Python
    { question: "¿Qué son los decoradores en Python?", answer: "Los decoradores son funciones que modifican el comportamiento de otras funciones o métodos. Son útiles para reutilizar código. ¿Te gustaría saber cómo se usan?" },
    { question: "¿Cómo manejar errores en Python?", answer: "Puedes manejar errores en Python con bloques try-except. Esto te permite capturar y gestionar excepciones. ¿Quieres un ejemplo básico?" },
    { question: "¿Qué es un generador en Python?", answer: "Un generador es una función que devuelve un iterador y utiliza la palabra clave 'yield' en lugar de 'return'. ¿Te gustaría ver un ejemplo práctico?" },

    // Buenas prácticas y aprendizaje
    { question: "¿Cómo aprender JavaScript?", answer: "Te recomiendo empezar con los conceptos básicos como variables, funciones y eventos en el DOM. Luego puedes avanzar hacia temas como promesas y async/await. ¿Quieres recursos específicos?" },
    { question: "¿Cómo aprender Python?", answer: "Puedes empezar con los fundamentos como variables, listas y bucles, y luego explorar bibliotecas como NumPy o Django según tus intereses. ¿Quieres ejemplos básicos?" },
    { question: "¿Cuáles son las mejores prácticas en JavaScript?", answer: "Algunas mejores prácticas son: mantener el código limpio, usar funciones puras, evitar variables globales y escribir pruebas unitarias. ¿Quieres que te explique alguna en detalle?" },
    { question: "¿Cuáles son las mejores prácticas en Python?", answer: "Algunas mejores prácticas en Python incluyen: usar nombres de variables descriptivos, seguir PEP 8, manejar excepciones correctamente y escribir pruebas. ¿Te interesa algún tema en particular?" },

    // Preguntas de ayuda directa
    { question: "Me puedes ayudar con JavaScript?", answer: "¡Claro que sí! Dime, ¿qué necesitas aprender o resolver en JavaScript?" },
    { question: "Me puedes ayudar con Python?", answer: "¡Por supuesto! ¿Qué duda tienes sobre Python?" },
    { question: "Tienes ejemplos de código en JavaScript?", answer: "¡Sí! Dime qué necesitas, y te proporcionaré ejemplos en JavaScript." },
    { question: "Tienes ejemplos de código en Python?", answer: "¡Claro! Dime qué tema necesitas, y te proporcionaré ejemplos en Python." },

    // Despedidas
    { question: "Adiós", answer: "¡Hasta pronto! Que tengas un buen día." },
    { question: "Gracias", answer: "¡De nada! Estoy aquí para ayudarte siempre que lo necesites." },
    { question: "Nos vemos", answer: "¡Claro! Espero verte de nuevo." },
    { question: "Chao", answer: "¡Adiós! Cuídate." },

    // Curiosidades
    { question: "Dame un dato curioso sobre Python", answer: "Python fue nombrado así en honor al grupo cómico británico 'Monty Python', no por la serpiente." },
    { question: "Dame un dato curioso sobre JavaScript", answer: "JavaScript fue creado en solo 10 días por Brendan Eich en 1995." },
    { question: "¿Sabes algo interesante sobre Python?", answer: "Python se utiliza en muchas películas para efectos visuales, como en 'Avatar'." },
    { question: "¿Sabes algo interesante sobre JavaScript?", answer: "JavaScript no tiene relación con Java, a pesar de su nombre." },

    // Preguntas cotidianas
    { question: "¿Qué día es hoy?", answer: `Hoy es ${new Date().toLocaleDateString()}.` },
    { question: "¿Qué hora es?", answer: `Son aproximadamente las ${new Date().toLocaleTimeString()}.` },
    { question: "¿Qué hago si estoy aburrido?", answer: "Puedes aprender algo nuevo como JavaScript o Python. ¿Te interesa?" },
    { question: "¿Qué me recomiendas para ver?", answer: "¿Qué tal un tutorial sobre JavaScript o Python? ¡Es divertido y útil!" },


    /** 
     * en ingles 
     * */

    // Basic greetings
    { question: "Hello?", answer: "Hi! I can help you with questions about JavaScript and Python. How can I assist you?" },
    { question: "Good evening?", answer: "Good evening! Do you have any questions about JavaScript or Python?" },
    { question: "Good morning?", answer: "Good morning! Would you like to learn something new about JavaScript or Python?" },
    { question: "How are you?", answer: "I'm ready to help! What do you need to know about JavaScript or Python?" },
    { question: "What are you doing?", answer: "I'm a virtual assistant designed to answer questions about JavaScript and Python. How can I help you?" },

    // Questions about the chatbot
    { question: "Who are you?", answer: "I am a virtual assistant here to help you with questions about JavaScript and Python." },
    { question: "What can you do?", answer: "I can answer questions about JavaScript and Python, from basic concepts to more advanced topics. What do you need to know?" },

    // Basic JavaScript Concepts
    { question: "What is JavaScript?", answer: "JavaScript is a programming language primarily used to create dynamic and interactive web pages." },
    { question: "what is JavaScript?", answer: "JavaScript is a programming language primarily used to create dynamic and interactive web pages." },
    { question: "What is javaScript?", answer: "JavaScript is a programming language primarily used to create dynamic and interactive web pages." },
    { question: "What is JavaScript used for?", answer: "JavaScript is used to develop interactive websites, build web applications, handle browser events, and much more. Would you like to learn about any specific concept?" },
    { question: "what is javaScript used for?", answer: "JavaScript is used to develop interactive websites, build web applications, handle browser events, and much more. Would you like to learn about any specific concept?" },
    { question: "What is the DOM in JavaScript?", answer: "The DOM (Document Object Model) is an interface that allows JavaScript to interact with and modify the content, structure, and styles of a web page. Do you need practical examples?" },
    { question: "What is the DOM?", answer: "The DOM (Document Object Model) is an interface that allows JavaScript to interact with and modify the content, structure, and styles of a web page. Do you need practical examples?" },
    { question: "What are promises in JavaScript?", answer: "Promises are a way to handle asynchronous operations in JavaScript. They allow you to work with tasks that take time, such as server requests. Would you like an example?" },
    { question: "what are promises in JavaScript?", answer: "Promises are a way to handle asynchronous operations in JavaScript. They allow you to work with tasks that take time, such as server requests. Would you like an example?" },
    { question: "What are promises in javaScript?", answer: "Promises are a way to handle asynchronous operations in JavaScript. They allow you to work with tasks that take time, such as server requests. Would you like an example?" },
    { question: "What is async/await in JavaScript?", answer: "Async/await is a simpler way to work with promises, making asynchronous code look more linear. Would you like to see an example?" },
    { question: "What is the difference between var, let, and const?", answer: "In JavaScript, the difference is that var defines mutable variables, let defines block-scoped mutable variables, and const defines immutable variables." },
    { question: "what is the difference between var, let, and const?", answer: "In JavaScript, the difference is that var defines mutable variables, let defines block-scoped mutable variables, and const defines immutable variables." },
    { question: "What is the difference between var and const?", answer: "In JavaScript, var defines mutable variables while const defines immutable variables." },
    { question: "What is the difference between var and let?", answer: "In JavaScript, var defines mutable variables while let defines block-scoped mutable variables." },
    { question: "What are data types in JavaScript?", answer: "Data types in JavaScript are ways to categorize data based on their use and behavior." },
    { question: "what are data types in JavaScript?", answer: "Data types in JavaScript are ways to categorize data based on their use and behavior." },
    { question: "Data types in JavaScript", answer: "String, Number, Boolean" },
    { question: "Give me the data types in JavaScript", answer: "String, Number, Boolean" },
    { question: "Data in JavaScript", answer: "String, Number, Boolean" },
    { question: "What is a function in JavaScript?", answer: "A function in JavaScript is a set of instructions that is defined once and can be executed multiple times." },
    { question: "What is an object in JavaScript?", answer: "An object in JavaScript is a collection of properties used to store data and complex entities." },
    {
        question: "Example of data in JavaScript", answer: `number = 10
    name = "String variable"
    isActive = true
    `},
    {
        question: "How do you define a variable in JavaScript?", answer: `number = 10
    name = "String variable"
    isActive = true
    `},

    // Promises Examples
    {
        question: "Yes, give me an example of promises", answer: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});` },
    {
        question: "Sure, give me an example of promises", answer: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});` },
    {
        question: "sure, give me an example of promises", answer: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});` },
    {
        question: "Give me an example of promises", answer: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});` },
    {
        question: "example of promises", answer: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});` },

    {
        question: "Example of a function in JavaScript", answer: `function squareArea(side) {
    return side * side;
  }` },

    {
        question: "Yes, example of a function in JavaScript", answer: `function squareArea(side) {
    return side * side;
    }` },

    // Basic Python Concepts
    { question: "What is Python?", answer: "Python is an easy-to-learn programming language, popular for its simplicity and versatility. It is used in data science, artificial intelligence, web development, and more." },
    { question: "what is Python?", answer: "Python is an easy-to-learn programming language, popular for its simplicity and versatility. It is used in data science, artificial intelligence, web development, and more." },
    { question: "What is python?", answer: "Python is an easy-to-learn programming language, popular for its simplicity and versatility. It is used in data science, artificial intelligence, web development, and more." },
    { question: "python?", answer: "Python is an easy-to-learn programming language, popular for its simplicity and versatility. It is used in data science, artificial intelligence, web development, and more." },
    { question: "What is Python used for?", answer: "Python is used for scripting, data analysis, artificial intelligence, web development, and more. What would you like to focus on?" },
    { question: "what is Python used for?", answer: "Python is used for scripting, data analysis, artificial intelligence, web development, and more. What would you like to focus on?" },
    { question: "What is Python for?", answer: "Python is used for scripting, data analysis, artificial intelligence, web development, and more. What would you like to focus on?" },
    { question: "What are lists in Python?", answer: "Lists in Python are ordered and mutable collections that allow you to store heterogeneous elements. Would you like to know how to use them?" },
    { question: "What are dictionaries in Python?", answer: "Dictionaries are data structures that store key-value pairs, ideal for quickly looking up data." },
    { question: "What is a for loop in Python?", answer: "The for loop in Python is used to iterate over sequences such as lists, strings, or ranges. Would you like an example?" },
    { question: "What are data types in Python?", answer: "int, float, str, bool, list..." },
    { question: "What is a dictionary in Python?", answer: "A dictionary in Python is a data structure that stores key-value pairs, ideal for fast lookups." },


    {
        question: "example of data in Python", answer: `number = 10
            name = "string variable"
            is_active = True
        `},
    {
        question: "how to define a variable in Python?", answer: `number = 10
            name = "string variable"
            is_active = True
        `},

    // loop examples
    {
        question: "example of for loop in Python", answer: `for i in range(5): 
        print(i)` },
    {
        question: "for loop in Python", answer: `for i in range(5): 
        print(i)` },
    {
        question: "Yes, give me an example of dictionaries in Python", answer: `dictionary = {"name": "John", "age": 25}
            print(dictionary["name"]) 
        ` },
    {
        question: "example of list in Python", answer: `list = [1, 2, 3]`
    },

    // Comparison between JavaScript and Python
    { question: "Which is better, JavaScript or Python?", answer: "It depends on your goals. JavaScript is great for interactive web development, while Python excels in data analysis, artificial intelligence, and scripting. Would you like to know when to use each?" },
    { question: "Can Python be used for the web like JavaScript?", answer: "Yes, with frameworks like Django or Flask, you can use Python for web development. However, JavaScript is essential for creating interactivity in browsers. Are you interested in learning any of these frameworks?" },

    // Advanced topics in JavaScript
    { question: "What is a closure in JavaScript?", answer: "A closure is a function that remembers the scope where it was created, even after that scope has ended. Would you like an example to understand it better?" },
    { question: "How does inheritance work in JavaScript?", answer: "Inheritance in JavaScript works through prototypes. Each object can inherit properties and methods from another object. Would you like a practical example?" },
    { question: "What is a callback in JavaScript?", answer: "A callback is a function passed as an argument to another function and executed after the latter finishes. Do you need a simple example?" },

    // Advanced topics in Python
    { question: "What are decorators in Python?", answer: "Decorators are functions that modify the behavior of other functions or methods. They're useful for reusing code. Would you like to know how they work?" },
    { question: "How to handle errors in Python?", answer: "You can handle errors in Python using try-except blocks. This allows you to capture and manage exceptions. Would you like a basic example?" },
    { question: "What is a generator in Python?", answer: "A generator is a function that returns an iterator and uses the 'yield' keyword instead of 'return'. Would you like a practical example?" },

    // Best practices and learning
    { question: "How to learn JavaScript?", answer: "I recommend starting with basic concepts like variables, functions, and DOM events. Then you can move on to topics like promises and async/await. Do you want specific resources?" },
    { question: "How to learn Python?", answer: "You can start with fundamentals like variables, lists, and loops, then explore libraries like NumPy or Django based on your interests. Do you want basic examples?" },
    { question: "What are the best practices in JavaScript?", answer: "Some best practices include: keeping code clean, using pure functions, avoiding global variables, and writing unit tests. Would you like me to explain one in detail?" },
    { question: "What are the best practices in Python?", answer: "Some best practices in Python include: using descriptive variable names, following PEP 8, handling exceptions properly, and writing tests. Are you interested in any specific topic?" },

    // Direct help requests
    { question: "Can you help me with JavaScript?", answer: "Of course! Tell me, what do you need to learn or solve in JavaScript?" },
    { question: "Can you help me with Python?", answer: "Absolutely! What question do you have about Python?" },
    { question: "Do you have code examples in JavaScript?", answer: "Yes! Let me know what you need, and I'll provide examples in JavaScript." },
    { question: "Do you have code examples in Python?", answer: "Sure! Let me know what topic you need, and I'll provide examples in Python." },

    // Farewells
    { question: "Goodbye", answer: "See you soon! Have a great day." },
    { question: "Thanks", answer: "You're welcome! I'm here to help whenever you need." },
    { question: "See you", answer: "Sure! I hope to see you again." },
    { question: "Bye", answer: "Goodbye! Take care." },

    // Curiosities
    { question: "Tell me an interesting fact about Python", answer: "Python was named after the British comedy group 'Monty Python', not the snake." },
    { question: "Tell me an interesting fact about JavaScript", answer: "JavaScript was created in just 10 days by Brendan Eich in 1995." },
    { question: "Did you know something interesting about Python?", answer: "Python is used in many movies for visual effects, such as in 'Avatar'." },
    { question: "Did you know something interesting about JavaScript?", answer: "JavaScript has no relation to Java, despite its name." },

    // Everyday questions
    { question: "What day is it today?", answer: `Today is ${new Date().toLocaleDateString()}.` },
    { question: "What time is it?", answer: `It's approximately ${new Date().toLocaleTimeString()}.` },
    { question: "What should I do if I'm bored?", answer: "You can learn something new like JavaScript or Python. Are you interested?" },
    { question: "What do you recommend to watch?", answer: "How about a tutorial on JavaScript or Python? It's fun and useful!" },
];
