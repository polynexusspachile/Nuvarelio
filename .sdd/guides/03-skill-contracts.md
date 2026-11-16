# Contratos y uso de skills

## Adaptadores y roles

Leer `.sdd/policies/agent-runtime.md`. El CLI instala `kiro-crew`, `codex` o `claude-code` con `--adapter`; los contratos y comandos son compartidos. Kiro conserva agentes JSON y skills en .kiro; Codex instala roles como skills en .agents/skills e instrucciones en AGENTS.md (AGENTS.override.md si existe); Claude Code instala agentes Markdown, skills de invocación y procedimientos en .claude e instrucciones en CLAUDE.md. Usar los procedimientos del adaptador activo y sus conexiones autorizadas. Una skill de rol no acredita revisión independiente; usar otro agente/sesión para sdd-reviewer.

Aplicar `.sdd/policies/sdd-scope.md` antes de las exigencias generales de aprobación de esta guía. Producto ejecuta assess y obtiene scope/product; las exclusiones y hashes se rigen por esa política. `fingerprint product-design` incluye sdd-scope.json cuando existe.

## Contexto y comandos

Las skills se ejecutan en la iniciativa indicada por .sdd/active-feature.json. Leer la política structured-workflow antes de trabajar. Los nombres cortos de comandos en las skills se refieren al CLI aislado: no instalar runtimes en Windows.

Desde el repositorio del framework, usar el project path real:

```powershell
$env:PROJECT_PATH = 'C:\work\proyecto'
docker compose -f compose.framework.yml --profile bootstrap run --rm sdd check product iniciativa --project /workspace/project
```

Si el agente no tiene el repositorio o Docker disponibles, comunicar el comando y dejar la comprobación como no ejecutada. No afirmar que pasó.

## Catálogo y criterios

specification.json contiene schemaVersion, feature, items y testStrategy. Cada item tiene id, kind, description y links. Los valores kind aceptados son objective, businessRule, requirement, obligation, story, control, decision y test.

```json
{
  "id": "US-001",
  "kind": "story",
  "description": "La persona autorizada consulta su solicitud",
  "links": ["RF-001"],
  "status": "ready",
  "acceptanceCriteria": ["AC-001: Dado un usuario autorizado, cuando consulta su solicitud, entonces ve únicamente sus propios datos"]
}
```

La referencia RF-001 debe existir. Los criterios completos se copian literalmente a quality-evidence.json.checks[].criteria; traceability contiene IDs de story/control. No reemplazar el criterio completo por AC-001 si la fuente guarda el texto completo.

## Aprobaciones

Producto tiene una revisión previa al backlog: `fingerprint product-design <iniciativa>` calcula el hash de 02-requirements.md y 12-product-design.md. Entregar el documento 12 con frontend, comportamiento y Mermaid; esperar confirmación humana explícita y registrar en approvals.json area `product-design`, role `functional`, approver/fecha/alcance y specificationHash. Solo después crear Epic/historias funcionales; los issues Product incluyen `productDesignHash` con ese hash. La revisión funcional no incluye catálogo/manifiesto, por lo que crear historias después no la invalida; cambiar 02/12 sí. La aprobación product/business y legal se obtiene después del backlog para el hash final. Nunca registrar revisión humana ficticia.

fingerprint <etapa> <iniciativa> obtiene el hash revisable. approvals.json.approvals incluye registros como:

```json
{
  "area": "design",
  "role": "dataProtection",
  "approver": "identificador de la persona revisora",
  "approvedAt": "fecha ISO de la revisión",
  "specificationHash": "hash devuelto por fingerprint",
  "scope": "alcance de la revisión"
}
```

El ejemplo describe campos, no una aprobación válida. Las revisiones necesarias son product/business y legal; refinement/requirements; design/architecture, dataProtection y security; build y handoff/engineering; quality/qa, legal, dataProtection y security.

El catálogo completo y el perfil participan en todos los hashes; cambiarlos puede invalidar aprobaciones anteriores. Los campos heredados legalReviewRequired/dataProtectionReviewRequired/securityReviewRequired no desactivan ninguna aprobación obligatoria. Los estados Markdown no sustituyen workflow.stages.<etapa>.status complete y las revisiones del hash vigente.

## Jira y evidencia

jira-manifest.json es la fuente única. Cada issue tiene sddId estable, issueType real, summary, description, acceptanceCriteria, dependencies (otros sddIds), area y traceability (IDs existentes). priority, owner y demás campos opcionales se mapean a los campos reales del proyecto MCP; no inventar su compatibilidad.

La sync usa pending, failed, conflict o verified; verified requiere readback del MCP. Conservar jiraKey, verifiedAt, contentHash y lastError. El contentHash corresponde al SHA-256 de los campos deseados normalizados, no a la fecha o resultado de sincronización.

Un check de Quality tiene id, category, command, result, reportUrlOrHash, traceability y criteria. reportPath requiere un hash comprobable del archivo local. Reportes remotos requieren verifiedBy y verifiedAt desde una verificación CI/MCP. Revisiones manuales registran el procedimiento y el reporte.

## Límites de comprobación

Las puertas validan relaciones, aprobaciones, categorías y registros de evidencia. No autentican personas ni ejecutan pruebas de producto automáticamente. La CLI valida estado y condiciones de cierre de workflow.findings; el historial de transiciones lo verifica el agente. Mantener evidencia de nueva prueba y riesgos explícitos antes de recomendar cierre.

## Circuito GitHub y Jira

Producto usa backlogRole epic y story, independientemente del nombre real del tipo Jira, y conserva sync verified de todas sus tareas. Cada historia tiene un issue inicial Product y se refina sin perder ese vínculo.

github-delivery.json tiene schemaVersion, feature, repository y pullRequests. Solo un PR tiene current true; debe contener number, url, branch, headSha, author, verifiedAt y sddIds de las tareas. build.commit es un SHA de 40 caracteres. PR anteriores quedan current false.

requiredChecks contiene name, conclusion success, commit igual al headSha, runUrl y verifiedAt. reviews contiene agent sdd-reviewer, reviewer distinto de author, commit, result approved, reviewUrl, verifiedAt y findings. Una revisión pendiente de publicación no cierra handoff. No confundir revisión del agente con aprobación humana de una especificación.
