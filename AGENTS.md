
<!-- polynexus-sdd:start -->
## Polynexus SDD — Codex

Para trabajo sobre una iniciativa SDD, lee `.sdd/active-feature.json` y `.sdd/policies/agent-runtime.md`. Sus contratos viven en `.sdd/` y `specs/<iniciativa>/`.

Los roles están instalados como skills en `.agents/skills/`: `$sdd-product`, `$sdd-engineering` y `$sdd-quality` coordinan las áreas disponibles. Usa los procedimientos pertinentes de esa misma carpeta. Los roles se acumulan por área; instala Engineering y Quality después de pasar sus puertas previas.

Antes de empezar, lee las políticas de alcance y workflow. Producto ejecuta assess y resuelve el alcance con el responsable; las revisiones humanas se registran solo desde confirmaciones reales. Una skill de rol ejecutada en la conversación actual no constituye revisión independiente: sdd-reviewer requiere otra sesión o agente distinto del implementador, con revisión publicada del head actual.

Ejecuta el CLI mediante Docker desde el repositorio del framework según `.sdd/guides/03-skill-contracts.md`. Reutiliza las conexiones autorizadas del entorno para Jira/GitHub; una capacidad ausente conserva el bloqueo. No configures conexiones, instales herramientas ni publiques mensajes por el mero hecho de leer estas instrucciones.
<!-- polynexus-sdd:end -->
