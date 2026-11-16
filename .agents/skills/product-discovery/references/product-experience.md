# Experiencia y requisitos concretos de Producto

## Descubrir con la persona solicitante

Trabaja por rondas de una a tres preguntas relacionadas. Primero pregunta quién usa el producto, qué intenta conseguir y cómo realiza ese trabajo hoy en la vida real. Después concreta funciones y pantallas a partir de ese recorrido. Propón opciones con consecuencias y una recomendación cuando ayude a decidir; espera la respuesta antes de fijar decisiones que cambien alcance, negocio o experiencia. Mientras esperas, documenta lo conocido y las preguntas pendientes. No conviertas silencio, ejemplos del agente o preferencias supuestas en decisiones confirmadas.

Para cada recorrido pide un ejemplo concreto: actor, situación inicial, información que recibe, acciones, resultado, excepciones y tareas de otras personas. Incluye trabajo fuera del sistema, integraciones y quién responde cuando algo falla. Registra las decisiones y su confirmación en 01/02; vuelve al usuario ante contradicciones.

Coordina con sdd-support la operación completa: administración, aprobaciones, reclamaciones y trabajo manual, además de cancelaciones/devoluciones si aplican. Incluye en el diseño las vistas de soporte y dashboards acordados, con sus roles, estados y acciones; aplica support-readiness para convertirlos en requisitos y tareas de Engineering.

## Mostrar y acordar el diseño

Para una interfaz visual, crea y revisa con el usuario un prototipo en **Figma o Stitch** usando capacidades autorizadas disponibles. Si no indicó herramienta, presenta ambas y acuerda la elección antes de crear el archivo. Descubre herramientas y permisos reales; no inventes un MCP, enlace, pantalla o creación de archivo. Reutiliza la identidad visual y componentes existentes cuando corresponda.

Comienza por un recorrido principal y wireframes; pide revisión antes de desarrollar el resto de pantallas. Luego muestra composición, jerarquía, navegación, textos, componentes y versiones para los dispositivos acordados. Usa las respuestas para iterar y registra lo aceptado y lo pendiente. No se necesita aprobación para cada ajuste cosmético dentro de la dirección acordada; sí para cambios de función, flujo o alcance.

Si no puedes operar la herramienta, prepara el brief y los prompts importables, registra una tarea y solicita el archivo/enlace creado por el usuario o el acceso necesario. Esa preparación es un borrador; no permite afirmar que existe un Figma/Stitch ni que fue revisado. Para iniciativas sin interfaz (por ejemplo una API), confirma con el usuario la no aplicabilidad del prototipo visual y especifica contratos/recorridos de consumidores; registra esa decisión.

En 02 conserva herramienta, URL real, versión o revisión, IDs de pantallas/frames, fecha, quién confirmó y decisiones pendientes. Guarda una referencia estable de la versión revisada (enlace versionado o export con ruta y hash cuando esté disponible). Los enlaces externos mutables no congelan su contenido: anota cambios posteriores y renueva las revisiones afectadas. El CLI incluye 02 en el hash, pero no descarga ni inspecciona diseños remotos.

## Especificar cada función y pantalla

Usa la ficha de 02 con IDs estables y referencias al prototipo. Define:

- Propósito, actor/rol y permisos; punto de entrada, precondiciones y resultado observable.
- Cada campo: nombre, tipo, obligatoriedad, valores válidos, límites, formato, origen y ejemplo ficticio.
- Cada acción: evento que la dispara, regla de negocio, respuesta visible y efecto en datos; navegación, persistencia y reversibilidad si corresponde.
- Estados aplicables: inicial, carga, vacío, éxito, validación, error, acceso denegado; alternativas ante desconexión, duplicados o concurrencia cuando el recorrido los requiera.
- Textos y mensajes acordados, accesibilidad, dispositivos, notificaciones y comportamiento de integraciones con fallos/reintentos cuando aplique.
- Criterios Dado/Cuando/Entonces con valores y resultados comprobables; límites medibles para requisitos no funcionales que importen al recorrido.

No dejes expresiones como "gestionar usuarios", "fácil", "rápido" o "seguro" sin comportamiento y condiciones verificables. No inventes límites, plazos o permisos: pregunta los relevantes y documenta supuestos pendientes. Una maqueta por sí sola no explica reglas de negocio; texto y diseño deben coincidir.

## Entregar a Engineering y Jira

Enlaza requisito → historia → pantalla/frame → criterios. Mantén IDs del catálogo en specification.json.links; los IDs de pantalla y URLs se explican en los documentos y no se inventan como kinds del catálogo. En cada issue incluye escenario, campos/reglas, estados, dependencias, exclusiones, criterios y referencias a la versión del diseño. Divide por resultado comprobable y conserva detalles compartidos mediante enlaces precisos.

Presenta obligatoriamente 12-product-design.md: un documento legible con lo que se terminó diseñando, frontend/frames, funciones y su comportamiento, flujos y diagramas Mermaid, estados/errores y soporte. Recorre el MVP con las personas responsables, recoge observaciones y espera confirmación explícita de la versión final de 02/12. Registra product-design/functional sobre fingerprint product-design antes de crear las historias/épica funcional en Jira. Los issues Product incluyen productDesignHash vigente; si cambia 02/12 renueva la revisión y los vínculos. Esta confirmación no sustituye las aprobaciones business/legal posteriores sobre el hash Product final. Engineering conserva el comportamiento acordado; Quality comprueba también los estados y criterios visuales.
