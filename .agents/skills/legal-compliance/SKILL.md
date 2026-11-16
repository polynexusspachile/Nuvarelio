---
name: legal-compliance
description: Evalúa obligaciones aplicables en Producto, deriva controles en Engineering y revisa evidencia en Quality.
---

# Evaluación legal y cumplimiento

## Entradas
Contexto activo, perfil de cumplimiento, países de operación, industria, categorías de datos, contratos y alcance. No presupongas una jurisdicción por el idioma del proyecto.

## Procedimiento por área
- **Product:** verifica fuentes oficiales vigentes y su fecha de consulta. Registra obligación, jurisdicción, aplicabilidad razonada, fuente, acción y persona revisora en 01. En specification.json usa kind obligation y links a objetivos/requisitos. Las dudas de interpretación quedan para legal.
- **Engineering:** transforma obligaciones confirmadas en controles con resultado comprobable. Registra kind control, links hacia las obligaciones y acceptanceCriteria en el catálogo; describe diseño y responsables en 06.
- **Quality:** comprueba cada obligación mediante controles y evidencia del commit evaluado. Registra compliance en quality-evidence.json y vincula controles/criterios. Si una revisión documental no puede ejecutarse como comando, command describe el procedimiento y el reporte conserva el resultado de la revisión.

## Riesgo
Evalúa explícitamente los siete gatillos del perfil: externalDataTransfers, childrenData, automatedDecisions, highRiskProcessing, sensitiveData, biometricData y largeScaleProcessing. Cada valor true exige una tarea de Product con riskTrigger igual al nombre del gatillo. No lo cambies a false para pasar la puerta.

## Salida y cierre
Deja fuentes, aplicabilidad, controles y preguntas trazables. Solicita la aprobación legal para el área y hash correspondientes. Una búsqueda o declaración del agente no constituye aprobación legal; evidencia insuficiente abre un hallazgo o tarea y mantiene la etapa pendiente.
