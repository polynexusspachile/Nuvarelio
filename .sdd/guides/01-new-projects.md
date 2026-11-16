# Guía para proyectos nuevos

## Objetivo

Todo proyecto nuevo debe comenzar con versiones actuales, estables y soportadas de las tecnologías que adopte. Una versión actual significa la última versión estable compatible con la arquitectura, licencia, seguridad y dependencias del proyecto en la fecha de la decisión; nunca una versión beta, RC, nightly o sin soporte.

## Antes de elegir una tecnología

1. Confirmar que resuelve un requisito real del producto o de la operación.
2. Consultar documentación y notas de versión oficiales para identificar la última versión estable y su período de soporte.
3. Evaluar compatibilidad con las demás tecnologías, Docker, despliegue, seguridad y licencias de la empresa.
4. Registrar la decisión, versión exacta, fuente consultada, alternativas y fecha de revisión en `05-technical-design.md`.
5. Fijar versiones reproducibles en los manifiestos y archivos de bloqueo del proyecto; no usar dependencias sin rango o imágenes Docker sin etiqueta explícita.

## Implementación

- Ejecutar las herramientas de desarrollo dentro de Docker. El equipo no instala runtimes ni gestores de paquetes del proyecto en Windows.
- Usar imágenes oficiales o mantenidas, con versión estable explícita. Preferir imágenes con digest fijado cuando el proceso de entrega lo permita.
- Activar actualización automatizada de dependencias solo mediante propuestas revisables; nunca actualizar en producción de forma implícita.
- Incorporar controles de calidad, seguridad, accesibilidad, observabilidad y reversión desde la primera especificación.
- Mantener un inventario de componentes y sus versiones en el repositorio o en el sistema de dependencias elegido.

## Puerta antes de desarrollo

El diseño técnico debe mostrar: tecnologías elegidas, versión estable, fecha de verificación, compatibilidad validada, política de actualizaciones y plan de reversión. Si falta cualquiera de estos elementos, la iniciativa sigue en diseño.

