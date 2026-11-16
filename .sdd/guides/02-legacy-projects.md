# Guía para proyectos existentes

## Objetivo

Cada proyecto existente debe evaluar de forma periódica sus runtimes, frameworks, dependencias, imágenes Docker y herramientas de entrega. Se actualiza cuando existe evidencia suficiente de que el comportamiento acordado se conserva y el cambio es compatible con la operación.

## Evaluación obligatoria

1. Inventariar versiones actuales, dependencias directas y transitivas, soporte, vulnerabilidades y componentes sin mantenimiento.
2. Identificar el motivo de la actualización: seguridad, fin de soporte, corrección, compatibilidad, costo, rendimiento o capacidad necesaria.
3. Leer documentación, guía de migración y cambios incompatibles de las versiones objetivo.
4. Clasificar el cambio como parche, menor, mayor o migración de plataforma.
5. Registrar alcance, riesgo, estrategia, responsable y decisión en `04-refinement.md` y `05-technical-design.md`.

## Condición para actualizar

Una actualización se aprueba solo cuando se puede demostrar, con evidencia adecuada al riesgo, que no rompe las funciones, integraciones, datos ni la operación acordada. La evidencia debe incluir según corresponda:

- Pruebas automatizadas de regresión y criterios de aceptación.
- Pruebas de integración con sistemas externos y contratos API.
- Migraciones de datos probadas con respaldo y reversión.
- Revisión de seguridad, privacidad, rendimiento y accesibilidad.
- Validación en un entorno equivalente al de producción.
- Plan de despliegue gradual, monitoreo y reversión probado.

Si no existe evidencia suficiente, se mantiene la versión actual, se documenta el riesgo y se crea un plan para cubrir las pruebas o dependencias faltantes. No se declara seguro un cambio solo porque compiló o porque las pruebas unitarias pasaron.

## Estrategia recomendada

- Priorizar actualizaciones pequeñas y frecuentes antes de acumular saltos de versión mayores.
- Separar una actualización técnica de cambios funcionales cuando sea posible.
- Hacer cambios mayores por etapas, manteniendo compatibilidad temporal entre componentes.
- Establecer una fecha de revisión para los componentes sin soporte, aunque una actualización aún no sea viable.
- Eliminar versiones antiguas y rutas de compatibilidad solo después de que la transición y la reversión hayan sido validadas.

## Puerta de entrega

La entrega de una actualización debe incluir en `08-validation.md`: versiones anterior y nueva, evidencia de no regresión, resultado de seguridad, plan de reversión, métricas observadas y riesgos residuales aceptados.

