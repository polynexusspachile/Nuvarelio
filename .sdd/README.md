# Núcleo portable del SDD

Este directorio no conoce Kiro Crew, Claude ni ningún modelo. Define el contrato de trabajo de la empresa: artefactos, calidad y puertas de decisión.

## Guías según el tipo de proyecto

- Para una iniciativa o producto nuevo, aplicar [Guía para proyectos nuevos](guides/01-new-projects.md).
- Para un producto existente, aplicar [Guía para proyectos existentes](guides/02-legacy-projects.md).

La arquitectura debe registrar cuál guía aplica a la iniciativa. Las dos guías forman parte de la puerta de diseño técnico.

## Artefactos por iniciativa

Cada iniciativa se crea en `specs/<nombre>/` con estos archivos:

| Archivo | Responsable principal | Puerta de salida |
|---|---|---|
| `00-idea.md` | Producto | Propuesta original y supuestos registrados |
| `01-product-brief.md` | Producto y negocio | Problema, cliente, objetivo y alcance acordados |
| `02-requirements.md` | Producto y negocio | Requisitos trazables y reglas de negocio claras |
| `03-user-stories.md` | Producto y refinamiento | Historias priorizadas y criterios de aceptación comprobables |
| `04-refinement.md` | Refinamiento | Dependencias, riesgos, casos límite y decisiones resueltos |
| `05-technical-design.md` | Arquitectura | Diseño viable, decisiones y contratos técnicos documentados |
| `06-security-privacy.md` | Seguridad y privacidad | Riesgos y controles definidos; datos personales protegidos |
| `07-delivery-plan.md` | Desarrollo y plataforma | Tareas, pruebas, despliegue y reversión planificados |
| `08-validation.md` | QA | Evidencia de aceptación, seguridad y operación registrada |
| `09-jira-backlog.md` | Todas las áreas | Vista generada del manifiesto; la publicación se verifica mediante MCP |
| `10-traceability.md` | Todas las áreas | Notas manuales de trazabilidad; `trace` genera un archivo separado |
| `specification.json` | Todas las áreas | Catálogo de IDs, relaciones, criterios y estrategia de pruebas |
| `workflow.json` | Coordinadores de área | Estados de etapas, commit, hallazgos, riesgos y traspasos |
| `jira-manifest.json` | Todas las áreas | Fuente del backlog, dependencias, claves y lectura verificada de Jira |
| `github-delivery.json` | Engineering | PR actual, tareas, SHA completo, CI y revisión independiente |
| `approvals.json` | Personas responsables | Aprobaciones auditables por rol, fecha, hash y alcance |
| `baseline.json` | Engineering | Línea base de la especificación antes de programar |
| `quality-evidence.json` | Quality | Evidencia ejecutable de CI, commit, entorno, comandos y reportes |
| `11-change-requests.md` | Todas las áreas | Cambios posteriores a la línea base, impacto y aprobación |
| `12-product-design.md` | Producto y soporte | Entrega de diseño funcional con frontend, comportamiento y Mermaid confirmada por humanos antes de las historias Jira |
| `13-product-results.md` | Producto y responsable humano | Resultados reales frente a objetivos originales y decisión de mantener, mejorar, ampliar, detener o retirar |
| `change-requests.json` | Todas las áreas | Aprobación y hashes anterior/nuevo para reemplazar la línea base |
| `adr/README.md` y ADRs | Arquitectura | Registro de decisiones técnicas |

Antes de programar deben pasar refinement y design con sus aprobaciones vigentes y crearse la línea base de diseño. El plan 07 se prepara antes de implementar y se actualiza durante build; la aprobación de build ocurre con el commit y PR implementados. Las áreas se instalan progresivamente: Producto, Engineering y Quality. Quality exige el handoff completo de Engineering, con CI y revisión independiente del head actual.

Las explicaciones Markdown complementan los contratos JSON; marcar un documento aprobado no hace pasar una puerta. Producto necesita negocio y legal, refinement necesita requirements, design necesita architecture/dataProtection/security, build y handoff necesitan engineering, y Quality necesita qa/legal/dataProtection/security. Las tareas pendientes pueden prepararse, pero Producto exige todas sus tareas verificadas en Jira, build exige las de Engineering y Quality exige las de sus hallazgos.

## Principios

- Producto determina el alcance con assess y la política `policies/sdd-scope.md`: documenta aplicabilidad, profundidad y aprobación humana antes de cerrar su puerta. Esta política precede a la tabla general de roles cuando existe alcance aprobado; sin contrato se mantiene el flujo completo.

- Escribir evidencia y decisiones en los artefactos, no solo en la conversación.
- Mantener la trazabilidad entre objetivo, requisito, historia, tarea y prueba.
- Tratar seguridad, privacidad, accesibilidad, operación y calidad como requisitos desde el diseño.
- Marcar los supuestos y riesgos abiertos con responsable y fecha de revisión.
- Configurar `.sdd/compliance-profile.json` con jurisdicciones, categorías de datos, gatillos de alto riesgo y responsables antes de avanzar desde Producto.
