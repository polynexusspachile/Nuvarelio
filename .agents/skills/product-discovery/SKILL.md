---
name: product-discovery
description: Descubre el producto con el usuario, concreta funciones y escenarios reales y acuerda un prototipo en Figma o Stitch antes del handoff.
---

# Descubrimiento de producto

## Entradas
Lee la iniciativa de `.sdd/active-feature.json`, `00-idea.md`, el brief, el perfil de cumplimiento y `.sdd/policies/structured-workflow.md`. Si la idea no define usuario o problema, registra la pregunta que impide evaluarla.

## Procedimiento
0. Lee `.sdd/policies/sdd-scope.md` y ejecuta assess después de escribir la idea. Resuelve facts con el responsable, referencia evidencia y repite assess. Muestra sdd-scope.md para revisar qué trabajo es obligatorio, reducido, no aplicable o pendiente; registra solo la aprobación humana real scope/product para fingerprint scope. Esta política precede a los pasos siguientes: las especialidades excluidas se justifican brevemente, visual no aplicable no exige prototipo y technical reducido concentra 05 en el cambio. No omitas etapas, seguridad o revisión funcional 02/12. Completa 01/02 y repite assess antes de las aprobaciones finales, porque son fuentes del alcance. Ante cambios de fuentes/alcance, renueva las revisiones afectadas.
1. Separa observaciones con fuente/fecha, hipótesis y decisiones. Conserva el contexto original en 00.
2. Define usuario, trabajo que necesita resolver, alternativas actuales y fricción observada.
   Trata la función solicitada como propuesta: pregunta qué resultado busca, contrasta alternativas (mejorar el proceso actual, reutilizar algo o no construir) y recomienda simplificar, aplazar o descartar cuando la evidencia lo justifique. Explica el motivo y confirma la decisión con el responsable; no cambies el objetivo por tu cuenta.
3. Establece un objetivo con indicador, línea base, meta, periodo y método de medición. Si faltan datos, abre una tarea de validación en lugar de inventarlos.
4. Delimita el mínimo alcance valioso y exclusiones. Registra restricciones y dependencias de negocio.
   Acuerda al menos una restricción real de plazo, presupuesto o capacidad. Prioriza funciones por problema/valor, evidencia, esfuerzo estimado con incertidumbre, riesgo y dependencias. Solicita estimación a Engineering cuando haga falta. Registra qué entra, qué queda después y qué se descarta en 01; ante una petición nueva, muestra qué desplaza o qué límite cambia y espera decisión. No trates todo como imprescindible.
   Para concretar funciones, pantallas y experiencia con el usuario, lee [Diseño y especificación de experiencia](references/product-experience.md). Este paso forma parte de discovery para productos con interfaz.
5. Crea objetivos, reglas, requisitos y obligaciones con IDs/links; completa 01/02 y, con sdd-support, los recorridos de operación. Entrega obligatoriamente `12-product-design.md`: qué se diseñó, frontend y versión del prototipo, qué hace cada función y cómo se comporta, permisos/errores, soporte y diagramas Mermaid útiles. Mostrarlo a las personas responsables para revisar el conjunto, sin depender del chat.
6. Espera confirmación humana explícita de 02/12; resuelve observaciones y vuelve a mostrar la versión corregida. Obtén `fingerprint product-design` y registra la aprobación real en approvals.json con area product-design, role functional, approver, approvedAt, scope y specificationHash. No uses una confirmación genérica anterior o el silencio como aprobación de esa versión.
7. Solo después crea las historias iniciales en 03/catálogo y los issues Epic/story en el manifiesto; referencia el hash aprobado en productDesignHash de esos issues Product. Usa backlogRole epic/story y riskTrigger para gatillos activos. Las tareas de discovery/revisión pueden prepararse antes, sin adelantar historias funcionales. Ejecuta jira validate antes de sincronizar, publica/readback con jira-backlog y genera la vista. Luego obtén negocio/legal para el hash Product final.

## Salida y cierre

Revisa por separado problema/evidencia, viabilidad/prioridad, experiencia y operación. Usa business-validation para los dos primeros, la referencia de experiencia para el tercero y sdd-support para el cuarto. Registra conclusión y pendientes por revisión; usar varias skills no equivale a obtener revisiones independientes.

Una confirmación del propietario valida intención/alcance, no demanda ni usabilidad real. Marca cada afirmación como observación de usuarios, dato medido, decisión del responsable o hipótesis. Si faltan usuarios reales, prepara el protocolo de validación con escenarios y criterios previos, reconoce esa limitación y acuerda la decisión/riesgo con el responsable; nunca simules entrevistas o resultados.
Entrega primero el documento 12 y requisitos 02 para confirmar con humanos; después historias, catálogo y Jira coherentes con ese diseño. Para productos con interfaz incluye el prototipo Figma/Stitch, su versión y pantallas; si faltan decisiones o acceso, conserva el bloqueo. Negocio/legal aprueban el hash Product final después del backlog. Marca complete solo con trabajo y revisiones concluidos; ejecuta check product y reporta pendientes. Si cambia 02/12, renueva la confirmación funcional antes de actualizar/publicar historias y sus vínculos al hash. No inventes aprobaciones ni estados.
