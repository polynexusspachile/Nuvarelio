# Product brief — {{feature_name}}

**Estado:** borrador  
**Responsable:**  
**Última actualización:**

## Problema

## Cliente o usuario objetivo

## Objetivo y resultado esperado

## Métricas de éxito

| Objetivo/indicador | Línea base | Meta y criterio de decisión | Segmento y ventana | Fuente/eventos necesarios | Responsable y fecha/disparador de revisión |
|---|---|---|---|---|---|

Incluir indicadores de efectos negativos relevantes, como errores, abandono, costo o carga de soporte. Definir qué resultados llevarían a mantener, mejorar, ampliar o detener. Revisar resultados reales en 13-product-results.md.

## Problema, evidencia y alternativas

| Afirmación | Tipo: observación / medición / decisión / hipótesis | Fuente y fecha | Alcance/limitaciones | Incertidumbre y siguiente comprobación |
|---|---|---|---|---|

| Alternativa (incluido proceso actual/no construir) | Resultado que resuelve | Evidencia | Costo/riesgo estimado | Recomendación y razón |
|---|---|---|---|---|

La confirmación del propietario acredita una decisión; no sustituye evidencia de usuarios reales. Registrar lo que se desconoce.

## Alcance

### Incluye

### No incluye

## Restricción y prioridad del MVP

**Plazo, presupuesto o capacidad acordados y responsable:**

| Función/resultado | Problema y valor | Evidencia/confianza | Esfuerzo estimado e incertidumbre | Riesgo/dependencias | Incluida / después / descartada | Razón y costo de oportunidad |
|---|---|---|---|---|---|---|

Una nueva función requiere explicar qué desplaza o qué restricción cambia y confirmar esa decisión; no ampliar el alcance automáticamente.

## Supuestos, riesgos y preguntas abiertas

| Tema | Descripción | Responsable | Fecha de revisión |
|---|---|---|---|

## Validación de negocio

| Decisión o hipótesis | Evidencia | Resultado | Persona revisora | Fecha |
|---|---|---|---|---|

### Viabilidad y adopción

**Usuario, comprador/pagador y decisor (o beneficiario/presupuesto interno):**

**Alternativas actuales y motivo para elegir esta solución:**

**Cómo la conocerán, probarán y seguirán usando:**

| Ingreso/ahorro o costo (construcción, adquisición, operación, soporte, mantenimiento) | Rango y unidad | Volumen/supuesto | Fuente y fecha | Dato real o estimación | Sensibilidad/riesgo |
|---|---|---|---|---|---|

### Hipótesis y validación con usuarios

| Hipótesis crítica | Perfil de usuarios/método | Escenario y criterio previo | Evidencia/resultado real | Limitaciones | Próxima acción y responsable |
|---|---|---|---|---|---|

**Recomendación go / hold / stop, razones y qué evidencia cambiaría la decisión:**

**Incertidumbres aceptadas para un piloto limitado, persona y fecha:**

### Revisiones diferenciadas

| Revisión | Conclusión y evidencia | Pendientes/responsable | Persona o agente que la realizó |
|---|---|---|---|
| Problema y evidencia | | | |
| Viabilidad y prioridad | | | |
| Experiencia funcional/visual | | | |
| Operación y soporte | | | |

Usar varias skills con el mismo agente no constituye revisión independiente. Las aprobaciones formales siguen registrándose en approvals.json.

## Revisión legal inicial

| Tema legal o regulatorio aplicable | Aplicabilidad | Evidencia o fuente | Acción requerida | Persona revisora |
|---|---|---|---|---|

Producto identifica las obligaciones aplicables, prepara evidencia y registra las preguntas para revisión. La conclusión legal y la aceptación de riesgo corresponden a una persona responsable.

## Puerta hacia Engineering

- [ ] Problema, usuario y resultado esperado están definidos.
- [ ] Se cuestionó la solución, compararon alternativas y diferenciaron datos reales, decisiones e hipótesis.
- [ ] El MVP tiene restricción acordada y prioridades justificadas; viabilidad/adopción e incertidumbres críticas son explícitas.
- [ ] Hay plan de medición y revisión posterior con responsable, criterio y fecha/disparador; los resultados futuros no se presentan como hechos.
- [ ] Las reglas de negocio necesarias están registradas en `02-requirements.md`.
- [ ] Funciones y recorridos reales se concretaron mediante preguntas y confirmaciones del usuario; no quedan decisiones esenciales supuestas.
- [ ] El prototipo en Figma o Stitch y sus pantallas/estados fueron revisados con el usuario; 02 conserva versión, referencias y confirmación (o no aplicabilidad justificada para una iniciativa sin interfaz).
- [ ] Los requisitos describen campos, acciones, permisos, reglas, errores y resultados comprobables; las tareas Jira enlazan al diseño acordado.
- [ ] Se entregó 12-product-design.md con frontend, comportamiento por función, operación y Mermaid; humanos confirmaron la versión de 02/12 en approvals.json (product-design/functional) antes de crear las historias Jira.
- [ ] Soporte revisó los recorridos completos y sus excepciones: atención, roles, dashboards, alertas, diagnóstico y recuperación están especificados en 02 y tienen tareas trazables para Engineering o no aplicabilidad justificada.
- [ ] El perfil de cumplimiento está completo y el catálogo incluye objetivo, reglas, requisitos, obligaciones e historias iniciales trazables.
- [ ] Epic, historias iniciales y tareas de Producto están en `jira-manifest.json`, publicadas y verificadas mediante MCP; se regeneró `09-jira-backlog.md`.
- [ ] Las obligaciones legales y regulatorias aplicables fueron identificadas y tienen responsable de revisión.
- [ ] Negocio y legal aprobaron el hash actual en `approvals.json`.
- [ ] `workflow.stages.product.status` es `complete` y `check product` pasa.
