# Alcance SDD — electrodomesticos

Actualizar facts en sdd-scope.json con respuestas y evidencia, ejecutar assess y solicitar aprobación scope/product para fingerprint scope.

| Trabajo | Estado | Justificación |
|---|---|---|
| Diseño visual/prototipo | required | El solicitante pidió el 2026-11-16 eliminar las propuestas previas, mejorar UX y continuar. Se retiró el canvas anterior, se eliminaron7capturas y se verificaron12vistas UX R1 nuevas en el proyecto Stitch projects/15119609733945067300. Referencias: 00,02,12 y design/stitch-review.json. Responsable de solicitud: solicitante en conversación; diseño/inspección por agente de Producto. Nueva propuesta pendiente de revisión humana; no es aprobación funcional final. |
| Contratos de integración | required | El solicitante aceptó el 2026-11-16 IA externa apoyada en fuentes verificadas y validación experta, dejando proveedor/costos/tratamiento de datos pendientes antes de implementar. También confirmó ingreso manual/foto sin OBD ni lectura automática de equipos. Referencias: decisiones de continuación en 00/01/02 y DEC-003/DEC-005. Responsable de decisión: solicitante en esta conversación; registro por Producto. Integraciones requiere contratos y manejo de fallos; no se elige proveedor/arquitectura ni se autoriza envío de archivos reales. |
| Migración y recuperación de datos | not-applicable | Evaluación documental de Producto el 2026-11-15: el repositorio contiene solo AGENTS.md, .agents, .sdd y specs; se solicita desarrollar una idea nueva y no se pidió importar ni transformar datos de un producto existente. Referencias: inventario local y 00-idea.md. Responsable: agente de Producto; exclusión propuesta pendiente de revisión humana scope/product. Si aparece importación/histórico se reevalúa. |
| Soporte y observabilidad | required | La guía orientará fallas y derivará a expertos; necesita resolver consejos cuestionados, corrección de contenido y fallos de consulta. Referencias: solicitud original en 00 y Operación en 02. Responsable: Producto (evaluación de recorridos, 2026-11-15); responsables/horarios humanos por acordar. |
| Protección de datos | required | El perfil de cumplimiento exige esta revisión. |
| Revisión de obligaciones legales | required | Chile confirmado por el solicitante el 2026-11-15; orientación con medios y posibles efectos físicos/materiales requiere revisar datos personales, consumo, responsabilidad y límites de instalación. Fuentes oficiales y aplicabilidad preliminar en 01-product-brief.md. Responsable: Producto (investigación inicial); persona revisora legal por identificar. No se declara aprobación legal. |
| Diseño técnico | required | Se solicita app nueva con captura de medios, cuenta opcional, historial, mantenimiento y guías; requiere diseño técnico posterior a Producto. Referencias: 00 y RF-001 a RF-006 en02. Responsable: Producto, 2026-11-16. El HTML editado es solo export de prototipo; no se elige arquitectura ni proveedor. |

## Preguntas para Producto

Sin preguntas pendientes.

## Núcleo obligatorio

Objetivo, requisitos/criterios, historias, revisión funcional de 02/12, seguridad, plan, implementación, CI/revisión independiente y evidencia permanecen obligatorios. En technical reduced, 05 documenta componentes afectados, decisión, riesgos y validación. Las secciones no aplicables se justifican brevemente; no se requieren prototipos, migraciones o dashboards excluidos. Legal/privacy excluidos no requieren aprobación especializada ni su categoría de evidencia. Mantener los archivos base para conservar trazabilidad.
