---
name: area-coordination
description: Coordina los roles de un área, ejecuta puertas y prepara el handoff con evidencia y pendientes.
---

# Coordinación por área

## Entradas
Iniciativa activa, instalación, estado de workflow, contratos y conexiones existentes. Las conexiones ya disponibles se descubren; no pedir configuración adicional por defecto.

## Procedimiento
1. Identifica el primer bloqueo real con status/check y determina qué rol debe resolverlo.
2. Coordina solo los roles instalados y necesarios mediante capacidades del entorno disponibles. Si no hay delegación, proporciona el siguiente trabajo concreto al agente correspondiente.
3. **Product (sdd-product):** discovery con preguntas al usuario, negocio y legal; acuerda funciones/escenarios y un prototipo Figma/Stitch para interfaces, con versión y confirmación en 02. Termina con Epic, historias iniciales y tareas específicas publicadas en Jira. Historias iniciales pueden quedar draft; decisiones esenciales de experiencia pendientes bloquean discovery.
   Coordina sdd-support para los recorridos completos, atención, dashboards y alertas. Devuelve requisitos operativos y tareas trazables a Engineering. Si el entorno no permite delegación, realiza el traspaso explícito a la sesión de sdd-support y conserva sus pendientes.
   Entrega 12-product-design.md con frontend, comportamiento y Mermaid a revisión humana antes del backlog funcional. Espera confirmación vigente product-design/functional de 02/12; solo entonces crea Epic/historias Jira. Negocio/legal de salida Product se revisan después sobre el hash final.
4. **Engineering (sdd-engineering):** refinement → design → build → revisión independiente del PR → handoff. Define la estrategia de QA desde diseño. No encargues implementación antes de design/baseline.
   sdd-platform y arquitectura diseñan los requisitos de soporte de 02 en 05/07 y tareas específicas; aplicar support-readiness y requerir pruebas operations cuando haya esos requisitos.
5. **Quality (sdd-quality):** confirma PR/head/CI, coordina QA y seguridad, abre hallazgos Jira y devuelve correcciones a Engineering. Coordina nueva prueba antes de cierre.
   Verifica también dashboards, alertas, accesos, runbooks y recuperación con evidencia operations del commit evaluado.
6. Actualiza workflow.handoffs con from, to, commit cuando corresponda, artifactPaths, jiraKeys, pullRequestUrls, blockers y checkedAt. Registra comandos realmente ejecutados.
7. Solicita las revisiones humanas de la etapa/hash. Cambiar status no equivale a aprobar. Si una puerta falla, conserva el bloqueo y su próxima acción.
8. Producto coordina revisiones diferenciadas de problema/evidencia, viabilidad/prioridad, experiencia y operación. Registra conclusión, incertidumbres y responsable por revisión; no atribuyas independencia a varias skills ejecutadas por el mismo agente. Usa sdd-support para costos/carga operativa y solicita a Engineering estimaciones técnicas cuando estén disponibles.
9. Tras un lanzamiento real, al retomar la revisión acordada, sdd-product aplica business-validation y registra resultados frente a objetivos originales en 13-product-results.md. Recoge evidencia de soporte/medición con fuentes, recomienda mantener/mejorar/ampliar/detener/retirar y pide decisión del responsable. Nuevas funciones vuelven a diseño y revisión humana antes de historias; el plan de seguimiento no inicia automáticamente monitoreo ni mensajes.

## Salida y cierre
El cierre de área informa resultado, artefactos, claves Jira verificadas, PR/commit, puertas ejecutadas y responsable de la siguiente acción. Quality no realiza merges ni despliega por coordinación implícita.
