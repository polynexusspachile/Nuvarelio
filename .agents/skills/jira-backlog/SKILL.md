---
name: jira-backlog
description: Publica y reconcilia tareas trazables mediante Jira MCP; recupera fallos parciales sin duplicar issues.
---

# Backlog y sincronización Jira MCP

## Entradas
Contexto activo, specification.json y jira-manifest.json. La guía .sdd/guides/03-skill-contracts.md define los campos. El manifiesto es la fuente única; 09-jira-backlog.md se genera con jira render.

## Preparación

Antes de crear historias funcionales o una épica funcional, exige el documento 12-product-design.md entregado a humanos y su confirmación product-design/functional vigente sobre 02/12. No crees esos issues en el manifiesto ni en Jira mientras falte esa confirmación. Las tareas de discovery/revisión pueden existir antes. Cada issue Product funcional registra productDesignHash del fingerprint product-design aprobado y referencia el documento/diseño; si cambian, solicita nueva revisión antes de sincronizar. jira validate/render hacen esta comprobación local cuando hay issues Epic/story o trazados a historias. El CLI no intercepta llamadas MCP directas: el agente debe respetar el orden.
1. Valida cada tarea: resultado específico, contexto, alcance/exclusiones, criterios, dependencias, responsable/prioridad cuando se conozcan y referencias reales.
   Para funciones con interfaz, incluye escenario real, pantalla/frame y versión del prototipo acordado, campos/reglas y estados relevantes, o enlaces precisos a esas fichas en 02. Un título genérico no sustituye la descripción implementable.
2. Ejecuta jira validate antes de publicar. Corrige duplicados, referencias rotas y ciclos.
3. Descubre las herramientas disponibles del MCP autorizado y consulta proyecto, tipos, campos y permisos. Confirma cómo persistir sddId como campo o etiqueta buscable. No asumas nombres de herramientas.
4. Sin conexión o capacidad de buscar/escribir/leer, deja sync.status pending y lastError con la causa. Continúa preparando el backlog.

## Sincronización
1. Busca por clave conocida y marcador estable. Cero coincidencias permite crear; una permite actualizar; múltiples son conflict y requieren reconciliación humana.
2. Crea padres antes de hijos. Conserva sddId en Jira y modifica solo los campos que controla el manifiesto.
3. Tras timeout o respuesta ambigua, busca de nuevo antes de crear. Como máximo realiza un nuevo intento después de reconciliar; si sigue incierto, registra failed y solicita resolver la conexión.
4. Resuelve dependencies por sddId y verifica enlaces reales. Un issue creado con enlaces pendientes no queda verified.
5. Lee de vuelta campos y enlaces. Guarda jiraKey y sync con status, verifiedAt, contentHash y lastError después de cada issue. Solo verified demuestra que el estado deseado fue confirmado.
6. Reanuda una ejecución parcial desde los marcadores y claves persistidos. Regenera la vista Markdown después de actualizar el manifiesto.

## Salida y cierre
Cada issue informa verified, pending, failed o conflict y su causa. Reporta conteos y claves realmente verificadas. No borres issues para reconciliar ni publiques credenciales/datos personales. La aprobación del trabajo en el repositorio no autoriza acciones externas adicionales; sigue la autorización y permisos MCP de la sesión.
