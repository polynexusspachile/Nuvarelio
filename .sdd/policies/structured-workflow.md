# Puertas estructuradas

Aplicar primero [Alcance proporcional](sdd-scope.md). Producto propone el alcance con assess, resuelve hechos y obtiene scope/product. Las exclusiones aprobadas regulan especialidades y profundidad según esa política.

Antes de trabajar, confirmar la iniciativa activa y leer specification.json, workflow.json, jira-manifest.json y el perfil de cumplimiento. Mantener las explicaciones en los documentos Markdown y registrar IDs/relaciones en el catálogo estructurado.

Producto cuestiona propuestas, compara alternativas y diferencia evidencia real, decisiones e hipótesis. Acuerda restricciones/prioridades del MVP, viabilidad y plan de medición/revisión en 01 antes del handoff. La aprobación humana del diseño no acredita validación con usuarios reales. Después del lanzamiento, al retomar la revisión con datos, registra resultados y decisión humana en 13 sin cambiar objetivos históricos; las mejoras de alcance requieren nuevas revisiones. Estas revisiones de contenido corresponden a agentes/personas: el CLI no comprueba la calidad de la investigación ni programa seguimiento.

Producto descubre funciones y recorridos reales mediante preguntas y confirmaciones del usuario. Para interfaces crea un prototipo en Figma o Stitch y registra en 02 la versión revisada, pantallas, estados y requisitos concretos. Si falta acceso, diseño o decisiones esenciales, mantiene discovery pendiente. La confirmación de experiencia no reemplaza negocio/legal. El CLI valida contratos y hashes; la revisión del diseño externo corresponde al agente y las personas responsables.

Antes de crear el backlog funcional, Producto entrega 12-product-design.md para revisión humana con frontend, funciones/comportamiento, operación y diagramas Mermaid. Espera confirmación explícita registrada como product-design/functional para fingerprint product-design (02 y 12); solo después crea Epic/historias funcionales con productDesignHash vigente. Las tareas de discovery/revisión pueden existir antes. jira validate/render y las puertas comprueban la revisión local y vínculos al hash; no interceptan el MCP ni autentican identidades humanas. Cambios de 02/12 requieren renovar esa confirmación y revisar historias afectadas.

sdd-support participa en Producto para definir operación completa, atención, responsables, dashboards, alertas, diagnóstico y recuperación, con no aplicabilidad razonada cuando corresponda. Sus requisitos/criterios en 02 y tareas Jira pasan a arquitectura/sdd-platform para diseño en 05 y ejecución/runbooks en 07. Cuando existen requisitos operativos, Engineering incluye operations en las categorías requeridas de pruebas; Quality verifica su evidencia y devuelve brechas como hallazgos. El instalador no inicia monitoreo de producción.

Engineering tiene cuatro etapas: refinement, design, build y handoff. Ejecutar check refinement antes del diseño y check design antes de programar. Crear baseline después del diseño aprobado. Ejecutar check build antes de preparar el handoff y check engineering antes de instalar Quality. Una etapa solo pasa con las aprobaciones para su hash actual.

Quality consume el commit implementado y la estrategia definida en design. Registrar resultados de CI y revisión con referencias verificadas; cualquier fallo o criterio sin cobertura bloquea la entrega. Registrar cambios, riesgos aceptados y tareas de seguimiento. Nunca rellenar aprobaciones en nombre de una persona.

El perfil incompleto bloquea avance. Cada gatillo de alto riesgo exige una tarea de Producto con riskTrigger. Las obligaciones tienen controles enlazados y los controles tienen evidencia de Quality.

Jira se sincroniza exclusivamente mediante el MCP autorizado del entorno del agente. El CLI aislado valida/genera artefactos; no llama a Jira. Antes de publicar, leer el protocolo descrito en la skill jira-backlog.
