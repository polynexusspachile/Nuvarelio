# Idea inicial — electrodomesticos

**Estado:** borrador  
**Persona que propone:** persona solicitante en esta conversación; identidad para aprobaciones pendiente  
**Fecha:** 2026-11-15 (America/Santiago)

## Idea en una frase

Una app de orientación para particulares en Chile que ayuda a entender posibles fallas, necesidades de mantenimiento e instalación de autos y equipos del hogar mediante síntomas, información del equipo, fotos, audio y video, reconociendo sus límites y derivando a expertos.

## Contexto original del solicitante

> Una app que permita descubrir desperfectos en autos u electrodomesticos con fotos, con audio, con videos, información del electrodomestico u auto. En caso de autos ver fallas posibles en base a la informacion del auto, tipo al mazda 6 falla la bomba a los 250 mil km tu auto tiene 249 mil cambiala o echale una revision. Lo mismo con los electrodomesticos. Debe ser una guia mas no un mecanico ni reparador cuando sea necesario debe informar que se debe visitar un experto. Ademas para instalar debe hacer guias de instalacion.

El ejemplo Mazda 6/bomba/250.000 km es ilustrativo del comportamiento deseado; **no es evidencia de una falla ni un umbral de reemplazo verificado**.

## Problema observado

El solicitante quiere ayudar a una persona a entender una posible falla y cuándo corresponde mantenimiento. No se aportaron incidentes reales, entrevistas, mediciones, presupuestos de reparaciones ni diagnósticos confirmados. La intensidad y frecuencia del problema son hipótesis de discovery.

## Para quién

Decisión del solicitante: particulares que cuidan su auto o sus equipos, inicialmente en Chile. Quién paga y cómo se financia todavía no están definidos.

## Resultado que se espera conseguir

Que la persona entienda qué se sabe y qué falta, elija un siguiente paso apropiado y reconozca cuándo necesita a un profesional. La app no acredita seguridad de uso ni confirma una avería.

## Decisiones confirmadas en la conversación

| Decisión | Fuente y fecha | Límite |
|---|---|---|
| Incluir autos y electrodomésticos desde la primera versión | Respuesta del solicitante, 2026-11-15 | No implica cobertura de todas las marcas/modelos |
| Empezar el diseño por orientación de fallas | Respuesta del solicitante, 2026-11-15 | Mantenimiento e instalación siguen como necesidades por concretar |
| Primer país: Chile | Respuesta del solicitante, 2026-11-15 | Sin extensión territorial acordada |
| Dos semanas para discovery y prototipo | Respuesta explícita del solicitante, 2026-11-15 | No es plazo de construcción o lanzamiento; inicio/calendario y presupuesto pendientes |
| Prototipo en Stitch; uso principal desde el teléfono con cámara/micrófono | Respuestas del solicitante, 2026-11-15 | Sin decisión de arquitectura o distribución |
| Permitir comprobaciones externas seguras, sin desmontar | Respuesta del solicitante, 2026-11-15 | Catálogo de comprobaciones y excepciones requiere validación experta |
| Segundo equipo de referencia: un PC; elección del auto delegada al agente | Respuesta del solicitante, 2026-11-15 | PC de escritorio confirmado el 2026-11-16; marca/modelo pendientes |
| El solicitante tiene un mecánico que puede validar | Declaración del solicitante, 2026-11-15 | No consta revisión realizada, identidad ni disponibilidad comprometida |

Se elige Mazda 3 modelo 2020 como **ejemplo ficticio de diseño**, por existir una referencia de manual 2019–2020 en Mazda Chile. Motor, versión y correspondencia del manual necesitan verificación antes de recomendar mantenimiento.

## Evidencia disponible

| Fuente | Hallazgo | Fecha | Enlace o referencia |
|---|---|---|---|
| Conversación actual | Intención y decisiones de producto arriba indicadas | 2026-11-15 | Mensajes del solicitante; no prueba demanda |
| Mazda Chile | Publica manuales de referencia y advierte variaciones por vehículo | Consulta 2026-11-15 | https://www.mazda.cl/manuales-de-propiedad/ |

## Supuestos que se deben validar

| ID | Supuesto | Impacto si es falso | Método de validación | Responsable |
|---|---|---|---|---|
| H-001 | Los particulares necesitan esta orientación frente a sus alternativas actuales | Producto sin demanda | Recoger casos reales y comparar manual/buscador/experto; acordar participantes y criterios antes de observar | Producto + solicitante; participantes pendientes |
| H-002 | Síntomas y medios aportados permiten una orientación útil en una cobertura acotada | Falsas causas o falsa tranquilidad | Casos con diagnóstico de referencia y revisión del mecánico y experto en PC | Revisores por identificar |
| H-003 | Hay fuentes pertinentes y derechos de uso suficientes para cada variante cubierta | Recomendaciones incorrectas o contenido no reutilizable | Verificar manual, región, versión, permisos y actualización | Producto + legal; por asignar |
| H-004 | Se puede operar y financiar el servicio con el nivel de revisión necesario | Costos o carga de soporte inviables | Modelo de costos/volumen, soporte y disposición a pagar; sin cifras inventadas | Responsable de negocio por identificar |

## Continuación confirmada — 2026-11-16

El solicitante indicó «sigue», autorizando continuar discovery; no se interpreta como aprobación funcional final ni revisión experta.

| Decisión | Confirmación del solicitante | Límite |
|---|---|---|
| PC de escritorio | «Solo PC de escritorio» | Notebook fuera de la primera cobertura; marcas/modelos por concretar |
| Ingreso manual o foto de identificación | «sin conexión automática al equipo» | Sin OBD ni lectura automática del PC en el primer alcance |
| Preguntas breves cuando falta información y reconocimiento de insuficiencia | Aceptación explícita del comportamiento propuesto | No inventar causa ni prolongar preguntas que exijan pruebas |
| Cuenta opcional | Consulta sin registro; con cuenta guardar equipos e historial | Proceso de registro, borrado y retención aún por detallar |
| Historial con resúmenes | Conservar fotos/audio/video solo si el usuario lo elige | Conservación desactivada por defecto; plazos y tratamiento temporal pendientes |
| Instalación inicial | Conectar/configurar el PC y periféricos externos | Sin desmontaje; no instalar accesorios de auto en esta primera guía |
| Mantenimiento inicial | Consultar recomendaciones y registrar trabajos realizados | Avisos/recordatorios quedan para después |
| IA externa apoyada en fuentes verificadas y validación experta | Enfoque aceptado; proveedor/costos/datos por revisar antes de implementar | No autoriza enviar archivos reales; no se eligió arquitectura ni proveedor |

## Revisión de experiencia solicitada — 2026-11-16

El solicitante pidió: «Mejora la experiencia de usuario, Elimina las propuestas actuales y dps sigue». Se descartan las propuestas visuales previas y se autoriza rehacer/continuar la experiencia, conservando las decisiones funcionales acordadas. No es confirmación del rediseño final.

Confirmó monitor, teclado y mouse como primera guía; pidió dejar pendiente el caso del mecánico. No insistir con el caso para poder avanzar en otras funciones ni inventar un diagnóstico de ejemplo.
