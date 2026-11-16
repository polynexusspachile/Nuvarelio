# Acuerdo de trabajo SDD

## Fuente de verdad

Los documentos de `specs/<iniciativa>/` son la fuente de verdad de una iniciativa. Las conversaciones sirven para descubrir y decidir; las decisiones finales se registran en el artefacto correspondiente.

## Estados

Cada documento declara uno de estos estados: `borrador`, `en revision`, `aprobado`, `reemplazado` o `bloqueado`.

Estos estados son informativos. Los contratos JSON declaran estados de etapas en `workflow.json`, aprobaciones vigentes en `approvals.json` y evidencia verificable; son los que evalúa el CLI. Las vistas generadas de backlog y trazabilidad no necesitan un estado documental.

## Puertas de calidad

1. El área de Producto valida el problema, el resultado esperado y las reglas de negocio antes de abrir historias para desarrollo.
2. El área de Engineering refina historias y valida el diseño técnico, la protección de datos, seguridad y controles antes de implementar.
3. El área de Quality registra evidencia de aceptación, calidad, cumplimiento legal, protección de datos, seguridad y operación antes de recomendar la entrega.
4. Las decisiones legales, de cumplimiento y de aceptación de riesgo requieren una persona responsable identificada; un agente solo puede preparar evidencia y señalar bloqueos.

## Backlog de Jira

- `jira-manifest.json` es la fuente de tareas, criterios, dependencias, trazabilidad y sincronización. `jira render` genera `09-jira-backlog.md` como vista de consulta; editar el manifiesto y regenerarla.
- Producto crea Epic, historias iniciales y tareas de descubrimiento, negocio y revisión legal. Engineering refina esas historias y añade tareas de diseño, implementación y operación. Quality añade defectos, deuda de calidad y pruebas faltantes.
- Reutilizar el MCP Jira autorizado, buscar por marcador persistente `sddId`, crear/actualizar y verificar mediante lectura posterior. Registrar la clave y sync verified solo con evidencia real. Sin capacidad MCP, preparar tareas pending con su causa; no declarar la etapa completa. Todas las tareas de Producto deben estar verificadas para su puerta, las de Engineering para build y las de hallazgos para Quality.

## Reglas para agentes

- No inventar decisiones de negocio, datos legales ni interfaces externas. Registrar la duda como supuesto o bloqueo.
- No modificar código de producto durante discovery, requisitos o diseño, salvo que se solicite explícitamente un prototipo.
- Relacionar cada cambio de implementación con una historia y un criterio de aceptación.
- Mantener datos personales, secretos y credenciales fuera de especificaciones, logs y ejemplos.
