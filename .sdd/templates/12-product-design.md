# Diseño funcional para revisión humana — {{feature_name}}

**Estado:** borrador

**Responsable de Producto:**

**Personas que deben revisar:**

**Versión y fecha:**

## Qué se terminó diseñando

Explicar el problema, usuarios, alcance acordado, funciones incluidas/excluidas y decisiones pendientes con sus responsables. Este documento es la entrega de Producto para revisión humana antes de crear las historias Jira; debe poder entenderse sin leer el chat.

Resumir de 01 por qué se eligió esta solución, las alternativas consideradas, evidencia frente a hipótesis, restricción del MVP y razones para incluir/postergar funciones. La confirmación humana del diseño no demuestra por sí sola demanda ni facilidad de uso; mostrar las limitaciones de validación y el plan para medir resultados.

## Diseño del frontend

**Figma o Stitch, URL real y versión revisada:**

**Export o referencia estable:**

**Dispositivos, navegación, lenguaje visual y accesibilidad acordados:**

| Pantalla/estado | Qué muestra y para quién | Qué puede hacer el usuario | Comportamiento y navegación | Frame/versión | Requisito |
|---|---|---|---|---|---|

Incluir pantallas de soporte, administración y dashboards cuando correspondan. Para productos sin interfaz, explicar la no aplicabilidad acordada y el comportamiento de consumidores/integraciones.

## Qué hace cada función y cómo debe hacerlo

| Función/requisito | Actor/permisos | Entrada y validación | Acción y reglas | Respuesta visible/efecto en datos | Errores y recuperación | Criterios comprobables |
|---|---|---|---|---|---|---|

Describir el comportamiento funcional paso a paso con ejemplos ficticios, estados de carga/vacío/éxito/error, restricciones y resultados observables. Enlazar las fichas específicas de 02. Las decisiones de arquitectura e implementación técnica se refinan en Engineering.

## Recorridos y diagramas Mermaid

Incluir diagramas Mermaid reales que expliquen navegación y flujo principal, actores/interacciones y estados del negocio relevantes. Usar flowchart para pasos/pantallas, sequenceDiagram para interacciones y stateDiagram-v2 para transiciones cuando ayuden. Complementar cada diagrama con una explicación legible y mostrar errores/alternativas esenciales; evitar diagramas de relleno.

## Operación completa y soporte

Explicar trabajo manual, administración, aprobaciones y reclamaciones pertinentes; responsables de atención, permisos, auditoría, dashboards, alertas y procedimientos de recuperación. Referenciar los requisitos de soporte en 02 y las tareas técnicas que deberá concretar Engineering.

## Recorrido guiado de revisión

| Escenario | Pasos que revisará la persona | Resultado esperado | Evidencia/pantallas | Pregunta o decisión pendiente |
|---|---|---|---|---|

## Confirmación humana y siguiente paso

| Persona y rol | Alcance revisado | Decisión y fecha | Observaciones resueltas/pendientes |
|---|---|---|---|

Entregar y mostrar el documento a las personas responsables. Esperar su confirmación explícita de la versión final; silencio o una respuesta del agente no es aprobación. Después registrar en approvals.json la revisión product-design/functional sobre el hash de fingerprint product-design (documentos 02 y 12). Solo entonces crear historias/épica funcional en el manifiesto y publicarlas en Jira. Las tareas de discovery/revisión pueden existir antes. Las aprobaciones business/legal de salida Product se obtienen posteriormente para el hash final del backlog/catálogo.
