---
name: support-readiness
description: Define soporte y operación desde Producto, concreta monitoreo, dashboards, alertas y runbooks, y los entrega a Engineering y Quality.
---

# Soporte y operación desde el diseño

## Entradas

Iniciativa activa, escenarios de uso, requisitos, prototipo, perfil de cumplimiento y operación existente. En Producto la aplica sdd-support con sdd-product; en Engineering sdd-platform y arquitectura; en Quality QA y seguridad. Lee la guía compartida de contratos.

## Producto: acordar qué necesita operación

1. Recorre con el usuario un caso completo, incluyendo lo que ocurre fuera del sistema y quién atiende cada excepción. Identifica administración, aprobaciones, reclamaciones, cancelaciones, devoluciones, conciliación y trabajo manual **cuando correspondan al producto**. Registra no aplicabilidad razonada y no añadas funciones ajenas al alcance.
2. Concreta canales de atención, horarios, clasificación de incidencias, responsable principal/suplente y ruta de escalamiento. Pregunta tiempos objetivo de respuesta y recuperación; registra acuerdos o pendientes, sin inventar un equipo de guardia ni prometer un SLA.
3. Define qué necesita ver/hacer cada rol de soporte: búsqueda de casos, historial, estado, motivo del fallo y acciones de recuperación. Las acciones sensibles (reembolso, reintento, cambio de estado, acceso a datos) tienen autorización, confirmación, límites y auditoría según riesgo. Incorpora estas pantallas al prototipo acordado.
4. Especifica dashboards por audiencia: salud del servicio, colas/casos pendientes, fallos de recorridos importantes e integraciones y cumplimiento de tiempos acordados. Cada indicador declara significado, fuente esperada, unidad, periodo, filtros y actualización; cada panel muestra última actualización, datos ausentes/desactualizados y enlace al diagnóstico o siguiente acción. Distingue indicadores de negocio de señales técnicas.
5. Define alertas por síntoma e impacto en usuarios. Cada alerta tiene condición y ventana, severidad, destinatario/canal, horario, cómo reconocerla, escalamiento, recuperación y enlace a instrucciones. Acuerda umbrales; evita notificar cada evento sin acción. Especifica deduplicación, silencio por mantenimiento y reaviso cuando proceda. Una alerta sin responsable o acción no está lista.
6. Define diagnóstico mínimo: ID de caso/correlación, eventos de negocio, errores e historial de acciones. Acordar acceso, retención y redacción de datos sensibles con legal/seguridad; no convertir logs, dashboards o tickets en depósitos de datos personales.
7. Registra en 02 fichas operativas con criterios observables y contribuye a 12-product-design.md para revisión humana. Añade requisitos al catálogo y tareas discovery/revisión si hacen falta. Espera product-design/functional de 02/12 antes de crear historias o épica funcional; después concreta los issues Product y tareas Engineering para paneles, instrumentación, alertas, permisos/auditoría, runbooks y pruebas. No declares verificadas las tareas que el MCP no confirmó.

## Engineering: diseñar y convertir en tareas

Traduce cada requisito operativo acordado a 05: fuente de señales, instrumentación, correlación, agregación, permisos/retención, dashboards y enrutamiento de alertas. Decide tecnologías aquí y registra consecuencias/costos cuando sean relevantes. Conecta requisitos → historias → tareas concretas en 07/manifiesto, con dependencias, dueño y criterios que cubran también recuperación y ausencia de datos.

Prepara runbooks proporcionales al riesgo: síntoma, diagnóstico, acción segura, verificación, escalamiento y reversión. Confirma responsables reales, configuración necesaria y capacitación/documentación. Si existen requisitos operativos, incluye `operations` en testStrategy.requiredCategories desde design y define pruebas de paneles, alertas, permisos y recuperación. No esperes al despliegue para descubrir que faltan accesos o rutas de atención.

## Quality: comprobar preparación

Con evidencia del commit/entorno actual, simula escenarios acordados: fallo de integración, cola bloqueada, dato ausente, señal de alerta y recuperación. Comprueba contenido del panel, destinatario, deduplicación/silencios aplicables, permisos, auditoría y utilidad del runbook. Usa entornos y canales de prueba autorizados; no generes avisos reales de guardia o reembolsos de producción para validar.

Registra checks `operations` y criterios exactos en quality-evidence.json, con reportes verificados. Accesos y acciones sensibles también requieren cobertura privacy/security. Brechas se convierten en hallazgos Jira para Engineering y se cierran con retest. Un plan escrito no demuestra que la alerta llegó ni que el procedimiento funciona.

## Salida y cierre

Producto entrega operación y soporte concretos, pantallas/roles acordados, responsables o bloqueos y backlog trazable. Engineering entrega diseño, tareas, runbooks y estrategia de pruebas. Quality entrega evidencia y pendientes. El agente prepara el proceso; no presta soporte continuo, monitorea producción ni programa automatizaciones por el mero hecho de instalarlo. Los contratos actuales verifican relaciones y categorías/evidencia, pero no inspeccionan remotamente dashboards o el contenido de los runbooks.
