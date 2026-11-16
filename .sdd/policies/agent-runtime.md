# Ejecución del SDD en un entorno de agentes

El proceso es compartido por Kiro Crew, Codex y Claude Code. La instalación crea archivos locales; el usuario abre el proyecto en su herramienta y elige un rol o skill para ejecutar trabajo. Docker aloja únicamente el CLI de instalación y validación; no ejecuta ni instala los asistentes.

Antes de trabajar, leer iniciativa activa, specification.json, workflow.json, jira-manifest.json, perfil de cumplimiento y las políticas sdd-scope/structured-workflow. Los roles y procedimientos son compartidos; cada adaptador los presenta en el formato del entorno. No usar archivos de configuración de otro adaptador para definir MCP, permisos o modelos.

Producto descubre y especifica; Engineering refina, diseña, implementa y entrega un PR con CI y revisión independiente; Quality verifica evidencia y hallazgos. Ejecutar check y registrar los comandos realmente ejecutados. Si Docker o el repositorio del framework no están disponibles, dejar el comando pendiente y comunicarlo. No acreditar independencia con un cambio de nombre de rol o skill en una misma conversación.

Las conexiones MCP pertenecen al entorno activo. Buscar capacidades reales de Jira/GitHub y reutilizar accesos autorizados; los adaptadores Codex/Claude no escriben credenciales, endpoints, permisos o modelos. Sin publicación/readback, las puertas correspondientes quedan pendientes. Seguir el protocolo de jira-backlog y github-delivery. Aprobaciones humanas, merges, despliegues y mensajes requieren la autorización real aplicable; el instalador no los concede.

Varias herramientas pueden continuar la misma iniciativa leyendo los contratos comunes. No trabajar simultáneamente sobre los mismos artefactos sin coordinar cambios. Activar otra iniciativa es una selección compartida por el proyecto; verificarla antes de retomar una sesión.
