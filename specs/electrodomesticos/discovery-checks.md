# Comprobaciones de discovery — 2026-11-15

**Nota de vigencia:** las propuestas visuales de este registro se descartaron por solicitud del usuario. La revisión actual es UX R1, documentada en ux-r1-checks-2026-11-16.md y design/stitch-review.json. Sus capturas antiguas fueron eliminadas.

**Estado:** borrador; Producto no entregado a Engineering.

## Contexto y evidencia

- Iniciativa activa verificada: electrodomesticos; solo área Product instalada.
- Decisiones parciales del solicitante documentadas en 00/01/02: particulares en Chile; autos y equipos, PC inicial; prioridad orientación de fallas; dos semanas de discovery/prototipo; Stitch; teléfono; comprobaciones externas seguras sin desmontar.
- Se aplicaron los procedimientos de discovery, negocio, revisión legal inicial, backlog y soporte con el mismo agente. No constituyen revisión independiente.
- Proyecto Stitch privado creado y recuperado mediante MCP: projects/15119609733945067300.
- P-001 v0.2 creada, recuperada y exportada; inspección visual por el agente. Referencia estable y hash en design/stitch-review.json.
- Primera revisión de estructura/estilo, tipo de PC y forma de ingreso de datos solicitadas; todavía sin respuestas registradas al preparar esta comprobación.
- Un intento de edición de v0.1 devolvió operaciones de DOM, pero los exports recuperados conservaron el contenido anterior. No se acreditó esa edición. Se generó una nueva pantalla v0.2 y se inspeccionó su exportación.
- Capacidad Jira buscada en herramientas de la sesión: sin MCP Jira de búsqueda/escritura/lectura disponible. El catálogo ofrece Atlassian, no instalado/conectado al consultarlo. No se instalaron conexiones ni publicaron issues.
- Se conservan seis tareas de discovery/revisión pending, cero claves Jira verificadas y ninguna épica/historia funcional anticipada.
- No se modificó código de producto ni se eligió arquitectura.

## Comandos SDD realmente ejecutados

Desde C:\Users\pedro\OneDrive\Desktop\polynexus-sdd-framework, con PROJECT_PATH apuntando al proyecto y CLI aislado en Docker:

| Comando | Resultado |
|---|---|
| docker compose -f compose.framework.yml --profile bootstrap run --rm sdd assess electrodomesticos --project /workspace/project | Ejecutado dos veces tras escribir/actualizar fuentes; último exit 0. Generó sdd-scope.json/md, con integraciones pendientes |
| docker compose -f compose.framework.yml --profile bootstrap run --rm sdd jira validate electrodomesticos --project /workspace/project | Manifiesto válido. Esto comprueba estructura y trazabilidad local; no publicación |
| docker compose -f compose.framework.yml --profile bootstrap run --rm sdd jira render electrodomesticos --project /workspace/project | Manifiesto válido y 09-jira-backlog.md regenerado desde la fuente única |
| docker compose -f compose.framework.yml --profile bootstrap run --rm sdd check product electrodomesticos --project /workspace/project | Exit 1: puerta no superada |

## Alcance propuesto por assess

Obligatorios: visual, operations, privacy, legal y technical. Integrations pendiente. Migration propuesto no aplicable a esta idea nueva sin datos existentes/importación solicitada; no hay aprobación humana de esa exclusión. No se editó work manualmente ni se registró scope/product.

## Bloqueos que reportó check product

- Integraciones por resolver y falta aprobación scope/product del alcance vigente.
- Falta confirmación humana product-design/functional de 02/12 finales.
- Responsables legal, dataProtection y security sin identificar.
- Etapa product aún draft; faltan aprobaciones business y legal.
- Falta una obligación en el catálogo con aplicabilidad concretada.
- Faltan épica e historias iniciales: no se crean antes de la confirmación funcional.
- DISC-001 a DISC-006 carecen de publicación/readback verificados por MCP.

## Siguiente paso

Esperar la revisión del primer wireframe y respuestas de cobertura/entrada de datos, iterar el recorrido completo y resolver las decisiones de 01/02/12. Acordar expertos y responsables de operación/negocio/legal, revisar perfil y alcance, obtener confirmación final de 02/12 y solo después crear/sincronizar backlog funcional. Una autorización automática de herramienta no es revisión humana de producto.

No se han ejecutado puertas de Engineering/Quality ni existe handoff, baseline, lanzamiento, métricas reales o aprobaciones formales.

## Continuación — 2026-11-16

El solicitante indicó «sigue»; se continuó discovery sin registrar aprobación formal. Confirmó PC de escritorio, ingreso manual/foto sin OBD/lectura automática, preguntas breves con salida por insuficiencia, cuenta opcional, equipos/historial, resúmenes con medios solo por elección, mantenimiento consultable/registrable sin avisos iniciales y guías de conexión/configuración de PC/periféricos externos. Aceptó IA externa con fuentes verificadas y validación experta, con proveedor/costos/datos pendientes.

Se actualizaron 00/01/02/12, catálogo, manifiesto, perfil de datos y facts de alcance. No se creó código de producto, arquitectura, épica/historias ni aprobaciones. Se preparó design/expert-case-review.md para un caso real revisado; no es una revisión realizada.

### Prototipo y comprobación visual

- P-001 v0.2, P-002 v0.2, P-003 v0.2 y P-004 v0.1 recuperadas/exportadas; hashes en design/stitch-review.json y 02.
- Se inspeccionaron capturas; se corrigió cabecera truncada y texto redundante de las primeras versiones de P-002/P-003. El resumen largo de P-002 sigue necesitando lectura completa en el diseño final.
- El proyecto inicialmente mostraba en canvas solo P-001 anterior. Se añadieron las cuatro versiones actuales preservando el diseño anterior oculto y la biblioteca; se verificaron por lectura del proyecto. Compartición continúa privada.
- No se verificó navegación ejecutable, accesibilidad completa ni precisión del análisis.
- Se pidió revisar el conjunto, elegir primera guía de PC y aportar caso de auto revisado si existe. No se inventó una causa respaldada para llenar la pantalla faltante.

### CLI y estado

Primeros intentos de assess y validación no pudieron conectar: Docker estaba detenido. Se inició Docker Desktop ya instalado con ventana oculta; docker info confirmó disponibilidad. No se instalaron herramientas.

Después se ejecutaron en Docker, desde el repositorio del framework:
- assess electrodomesticos --project /workspace/project: exit 0; seis dimensiones required y migration propuesto not-applicable, todos los facts resueltos. Sin aprobación humana scope/product.
- jira validate: manifiesto local válido.
- jira render: vista 09 regenerada.
- check product: exit 1; faltan confirmación final de diseño, responsables y revisiones humanas, obligación concretada, épica/historias posteriores al diseño y seis tareas verificadas por MCP.

Tras limpiar la lista de decisiones pendientes de 02 se repitió assess: exit 0, mismas seis dimensiones required y migration propuesto not-applicable; fuentes actualizadas. El check anterior no acredita una aprobación ni una entrega.

### Pendientes de salida

Producto continúa draft. Cero claves Jira verificadas; no hay MCP Jira disponible en la sesión. Faltan revisor legal/privacidad/seguridad, negocio y validación de casos por mecánico/experto en PC. Los gatillos del perfil conservan valores iniciales sin dictamen; el hecho de resolver dimensiones de alcance no los valida. No hay handoff a Engineering.
