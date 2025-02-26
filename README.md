Reame
Este apartado es parte de una evaluación de los conocimientos adquiridos en el curso de programación de Alura, llamado "Challenger: Amigo Secreto".
Archivos incluidos
•	HTML
•	CSS
•	JavaScript
Ficha 1: Contenidos aplicados en el entorno de JavaScript
•	Lógica de programación
•	Declaración de variables
•	Creación y uso de funciones
•	Implementación de alertas
•	Manipulación de arrays
•	Vínculo con HTML
•	Uso de estructuras condicionales (if-else)
•	Empleo de signos y caracteres especiales (; $)
•	Inclusión de comentarios en el código
Ficha 2: Proceso realizado
Quisiera comenzar mencionando que este desafío no fue sencillo para mí. Mi nivel de programación es básico y, aunque tenía algunos conocimientos adquiridos de forma autodidacta, no sabía cómo integrarlos correctamente.
Para completar el reto, recurrí a diversas fuentes, entre ellas el curso de Alura, videos instructivos, Luri (IA del curso), otras inteligencias artificiales, comentarios de mis compañeros y, sobre todo, la práctica mediante el método de ensayo y error.
Dividí el desarrollo en tres etapas:
1.	Definir variables e ingresar nombres de amigos mediante el botón "Añadir".
2.	Utilizar un array para almacenar los nombres ingresados y mostrarlos en pantalla.
3.	Realizar el sorteo entre los participantes registrados.
Este proceso me permitió afianzar mis conocimientos y mejorar mi comprensión de la programación en JavaScript.
El curso nos proporcionó los archivos HTML y CSS para el desafío, permitiéndonos enfocarnos en la implementación de JavaScript.










Explicación del funcionamiento
1.	El usuario ingresa el nombre de un amigo y presiona el botón "Añadir".
2.	Los nombres ingresados se muestran en pantalla uno a uno.
3.	Una vez completada la lista, se realiza el sorteo aleatorio al presionar el botón "Sorteo".

Desafíos y optimización
Algunos de estos desafíos lo pude implementar , con un poco mas de practica en el futuro espero lograr optimizar al 100%.
1.	Claridad en la interfaz: Al probar con amigos y familiares, algunos no comprendieron el funcionamiento con la información disponible en la página.
Solución: Implementar una alerta informativa con instrucciones claras.
2.	Cantidad de participantes: Dependiendo del nivel de interés o socialización, los usuarios añadían una cantidad variable de amigos.
Solución: Establecer un mínimo y un máximo de participantes para asegurar una mejor experiencia.
3.	Validación de entrada: Algunos usuarios presionaban el botón sin ingresar un nombre.
Solución: Incluir una alerta que indique la necesidad de escribir un nombre antes de continuar.
4.	Orden visual post-sorteo: Los nombres ingresados permanecían en pantalla tras el sorteo, restando protagonismo al nombre ganador.
Solución: Ocultar los nombres previos al sorteo y eliminarlos tras un tiempo determinado.
5.	Diferenciación del ganador: El nombre del ganador aparecía con un formato similar al de otros elementos de la página.
Solución: Modificar el CSS para resaltar el nombre ganador con un tamaño, fuente y color distintivos.
6.	Accesibilidad: El programa puede no ser completamente accesible para personas con discapacidad visual o problemas de motricidad.
Solución: Asegurar que los botones sean fácilmente clickeables, usar etiquetas ARIA y permitir ingreso por teclado.
7.	Reinicio del sorteo: Actualmente, si un usuario quiere volver a realizar el sorteo, no hay una opción clara para hacerlo.
Solución: Agregar un botón de “Reiniciar” que borre los datos y permita comenzar de nuevo sin recargar la página.
8.	Prevención de nombres duplicados: No se verifica si los nombres ingresados se repiten.
Solución: Implementar una verificación que evite duplicados y notifique al usuario.
