# Backlog de Jira — {{feature_name}}

**Estado:** borrador  
**Responsable:**  
**Proyecto Jira:**  
**Última sincronización:**

> Esta plantilla es una vista inicial. `jira-manifest.json` es la fuente; `jira render` reemplaza este documento con su vista generada. Registrar campos completos y sincronización en el manifiesto. Una clave solo se considera verificada después de la lectura posterior del MCP. Tareas pendientes de Producto bloquean su puerta; las de Engineering bloquean build y los hallazgos sin tarea verificada bloquean Quality.

| Estado Jira | SDD ID | Clave Jira | Tipo | Resumen | Descripción específica | Criterios de aceptación | Dependencias | Etiquetas | Área origen | Artefacto de trazabilidad |
|---|---|---|---|---|---|---|---|---|---|---|
| pendiente de publicar |  |  | Tarea |  |  |  |  | `sdd` | Producto |  |

## Reglas para publicar

- Cada issue del manifiesto usa un `sddId` estable y único, persistido como marcador buscable en Jira. Buscarlo antes de crear, incluso después de un timeout, evita duplicados.
- Todo resumen identifica una acción concreta y un resultado verificable.
- Toda tarea incluye contexto, alcance, exclusiones, criterios de aceptación, dependencias y enlace al artefacto de origen.
- Usar Epic, Historia, Tarea, Bug o Subtarea según la configuración real del proyecto Jira.
- No resolver identidad solo por resumen: buscar el marcador, contrastar la clave existente y bloquear coincidencias múltiples. Verificar tarea y dependencias mediante lectura posterior.

## Registro de sincronización

| Fecha | Acción | Resultado | Responsable |
|---|---|---|---|
