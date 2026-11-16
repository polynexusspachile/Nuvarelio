---
name: change-management
description: Gestiona cambios posteriores a aprobación o baseline y conserva revisión, impacto y trazabilidad.
---

# Gestión de cambios

## Entradas
Especificación actual, baseline, aprobaciones, cambio solicitado y contexto activo.

## Procedimiento
1. Ejecuta drift y determina qué intención, contratos, obligaciones, controles y pruebas cambian.
2. Registra impacto en negocio, leyes, datos, seguridad, estimación, Jira y evidencias en 11-change-requests.md.
   Para cambios de Producto, indica qué función/resultado desplaza o qué restricción de plazo, presupuesto o capacidad cambia. Si el origen son resultados posteriores al lanzamiento, enlaza la revisión de 13-product-results.md y conserva la meta original; no la cambies para aparentar éxito.
3. Actualiza los artefactos fuente y relaciones explícitas, conservando IDs de elementos existentes. No resuelvas una ampliación de alcance sin el responsable correspondiente.
4. Solicita las aprobaciones de las etapas afectadas usando fingerprint. El catálogo forma parte de todos los hashes: cambiarlo puede requerir renovar revisiones anteriores.
5. Antes de reemplazar baseline, registra en change-requests.json requests con previousHash, nextHash, approvedBy, impact y jiraKey. La nueva baseline archiva la anterior.
6. Sincroniza Jira por MCP y vuelve a comprobar las pruebas afectadas; no reutilices resultados incompatibles con el nuevo commit.

## Salida y cierre
Cambio aprobado y rastreable, línea base conservada, tareas y pruebas actualizadas. Si falta aprobación o impacto, deja la etapa pendiente e identifica quién decide. No edites un hash antiguo para aparentar vigencia.
