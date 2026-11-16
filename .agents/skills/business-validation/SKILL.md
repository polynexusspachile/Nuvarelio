---
name: business-validation
description: Evalúa demanda, viabilidad y prioridades con evidencia, y compara resultados reales después del lanzamiento para decidir qué mantener, mejorar o retirar.
---

# Validación de negocio

## Entradas
Brief, idea inicial, restricciones comerciales y evidencia disponible. Lee el contexto activo y la política estructurada.

## Procedimiento
1. Identifica hipótesis sobre necesidad, adopción, disposición a pagar, costos y capacidad operativa.
2. Prioriza por impacto de equivocarse y debilidad de evidencia; elige una comprobación apropiada: entrevistas autorizadas, datos existentes, prototipo o experimento.
3. Para cada comprobación registra hipótesis, método, muestra, criterio de éxito previo, resultado, fuente, fecha y limitaciones. No contactes clientes ni publiques experimentos sin autorización.
4. Concreta quién usa, quién compra/paga y quién decide; para productos internos identifica beneficiario y responsable del presupuesto. Explica por qué elegirían esta solución frente a alternativas, cómo la conocerían, probarían y seguirían usando. Evalúa precio/disposición a pagar o ahorro esperado según el caso; no impongas monetización a un servicio interno.
5. Estima viabilidad con rangos y supuestos visibles: ingresos/ahorros, adquisición, construcción, infraestructura, integración, atención/soporte y mantenimiento. Identifica volumen esperado, costo por usuario/transacción cuando sea útil y sensibilidad a los supuestos más inciertos. Separa datos reales de estimaciones e incluye fuente/fecha; no inventes cifras ni precisión.
6. Compara alternativas y prioriza el MVP dentro de la restricción acordada con el usuario: resultado esperado, confianza, esfuerzo/riesgo, dependencias y costo de oportunidad. Justifica incluido/postergado/descartado sin puntajes inventados. Recomienda go, hold o stop en 01-product-brief.md e indica qué evidencia cambiaría la decisión.
7. Crea tareas de investigación concretas en jira-manifest.json con criterios que permitan cerrar cada incertidumbre. Enlaza objetivos y reglas de negocio en specification.json. Las historias funcionales siguen esperando la revisión humana de 02/12.

## Evidencia y validación con usuarios

Clasifica las fuentes: observación/entrevista real, medición, decisión del responsable o hipótesis. La aprobación del diseño y las pruebas sintéticas no demuestran demanda o usabilidad. Para probar un prototipo, acuerda perfil de participantes, escenarios realistas, resultado esperado, criterio de evaluación y método de registro antes de observar; registra errores, abandonos, ayuda requerida y límites de la muestra. Usa datos anonimizados. Contactar personas o lanzar experimentos externos requiere autorización de esa actividad.

Prioriza las hipótesis cuya falsedad haría inviable el producto. Si no pueden comprobarse aún, deja incertidumbre, impacto, siguiente prueba y responsable; explica si recomiendas un piloto limitado o esperar. Una decisión de avanzar con incertidumbre debe quedar explícita, nunca como evidencia positiva.

## Volver después del lanzamiento

Antes del handoff, acuerda en 01 objetivo, línea base, meta, fuente/eventos, segmento, ventana de medición, fecha o disparador de revisión y responsable. Añade indicadores de efectos negativos relevantes (errores, abandono, carga de soporte o costo). Define qué resultado llevaría a mantener, mejorar, ampliar, detener o retirar; entrega las necesidades de instrumentación a Engineering y sdd-support con minimización de datos.

Cuando el responsable retome la revisión o entregue datos de un lanzamiento real, registra en 13-product-results.md la versión/fecha del lanzamiento, objetivo original, datos/fuentes/periodo, comparación, limitaciones y recomendación. Contrasta feedback y problemas de soporte; no confundas correlación con impacto probado. Si no hay datos suficientes, marca inconcluso y concreta cómo obtenerlos. No inventes un despliegue, una métrica o una conclusión para cerrar el ciclo.

El responsable confirma la decisión. Lleva las mejoras a change-management o a una nueva iniciativa; cambios funcionales vuelven a diseño/revisión humana antes de crear historias Jira. Conserva los objetivos aprobados como referencia; añadir observaciones en 13 no reescribe la baseline ni modifica aprobaciones históricas. Planificar una fecha de revisión no programa un recordatorio ni habilita monitoreo continuo: configurar automatizaciones o comunicaciones solo con autorización explícita.

## Salida y cierre
Producto tiene una recomendación sustentada, métricas medibles y riesgos con responsable. Una hipótesis importante no comprobada queda como pendiente, con tarea y siguiente acción; no se convierte en hecho. La decisión final y su aprobación business corresponden al responsable del producto.

Si el responsable decide hold o stop, registra la razón y la condición para retomar; no crees backlog funcional ni declares completada la puerta de entrega a Engineering para forzar continuidad. Un piloto limitado necesita alcance/riesgos acordados y las revisiones correspondientes.
