# Requisitos — Guía de orientación para autos y PC

**Estado:** borrador  
**Versión:** 0.3 — UX R1, 2026-11-16  
**Responsable:** Producto; identidad humana para aprobaciones pendiente

El solicitante pidió eliminar las propuestas visuales anteriores, mejorar la experiencia y continuar. Se retiraron del canvas y se eliminaron sus siete capturas locales. Este documento sustituye la propuesta visual anterior; conserva las decisiones de producto acordadas. No hay aprobación funcional final.

## Decisiones confirmadas

| Tema | Decisión del solicitante |
|---|---|
| Usuario/país | Particulares en Chile |
| Cobertura inicial | Autos y PC de escritorio; notebook fuera de la primera cobertura |
| Prioridad | Orientar fallas desde síntomas/fotos/audio/video |
| Datos del equipo | Ingreso manual o foto; sin OBD ni lectura automática |
| Límites | Guía; comprobaciones externas apropiadas, sin desmontar; experto cuando corresponde |
| Incertidumbre | Preguntas breves; reconocer cuando no se puede determinar la causa |
| Análisis | Considerar IA externa con fuentes verificadas y validación experta; proveedor/costos/datos pendientes |
| Cuenta | Opcional; consultar sin registro, guardar equipos e historial con cuenta |
| Historial | Resúmenes; medios solo por elección, desactivados por defecto |
| Mantenimiento | Consultar recomendaciones y registrar trabajos realizados; avisos posteriores |
| Guías iniciales | Conectar/configurar PC y periféricos externos; primero monitor, teclado y mouse |
| Plazo | Dos semanas de discovery/prototipo; no plazo de construcción |
| Caso del mecánico | Pendiente por decisión explícita del solicitante; seguir otras funciones sin inventar diagnóstico |
| Visual | Stitch, teléfono; propuestas anteriores descartadas; UX R1 todavía por revisar |

La nueva paleta, tarjetas, navegación y distribución por pasos son propuestas de diseño del agente dentro de la solicitud de mejorar UX; no se atribuyen como preferencias visuales ya aprobadas.

## Objetivo y reglas

OBJ-001: ayudar a decidir el siguiente paso entendiendo qué se sabe, qué falta y cuándo consultar a un experto.

| ID | Regla |
|---|---|
| RN-001 | Orientar no equivale a confirmar una avería ni sustituye al experto |
| RN-002 | Comprobaciones externas apropiadas, sin desmontaje y sin provocar el síntoma para aportar medios |
| RN-003 | El ejemplo Mazda6/bomba/250.000km no es evidencia ni umbral real de reemplazo |
| RN-004 | Mantenimiento/guías/posibilidades requieren fuente aplicable al equipo/variante; no inventar intervalos o compatibilidad |
| RN-005 | Ausencia de causa identificada o de peligro reportado no certifica seguridad ni autoriza posponer una revisión |
| RN-006 | Consultar sin cuenta; guardar biblioteca/historial requiere cuenta propia; sin acceso cruzado |
| RN-007 | Resúmenes guardados por elección; medios no conservados en historial por defecto; tratamiento temporal y plazos por revisar |
| RN-008 | IA externa apoyada en fuentes verificadas y validación experta; su capacidad multimodal no demuestra precisión sobre fallas |

No prometer prevención de daños, guardado, procesamiento o borrado si no se puede confirmar. No incluir afirmaciones sobre almacenamiento local, cifrado, entrenamiento o países que todavía no estén decididas/verificadas.

## Diseño visual vigente

**Herramienta:** Stitch; proyecto privado `projects/15119609733945067300`.  
**URL:** https://stitch.withgoogle.com/projects/15119609733945067300  
**Propuesta:** UX R1; nuevo sistema `assets/13789972946781811835`, Guía Clara (nombre de trabajo).  
**Referencia estable:** capturas `design/R1-UX-01.png` a `design/R1-UX-12.png`; recursos y hashes en `design/stitch-review.json`.  
**Estado de revisión humana:** pendiente. Ni «sigue» ni la solicitud de rediseño constituyen confirmación de la versión final de 02/12.

**SHA-256 del índice de esta revisión:** `25232cf8f84a6ad63383e5a4ab4ee3a11519a64abfbfe9bcdadee582fe1b7a23`.

| Pantalla | Propósito | Entrada/salida propuesta | Requisitos |
|---|---|---|---|
| UX-01 Inicio | Elegir tarea, sin formulario ni registro obligatorio | Falla→UX-02; mantenimiento→UX-07; conectar→UX-08; biblioteca→UX-10/12 según cuenta | RF-001/003/004/005/006 |
| UX-02 Equipo | Auto/PC, marca/modelo o desconocido, seguridad antes de captura | Continuar→UX-03; peligro→UX-06; identidad incompleta conservada | RF-001/002/003 |
| UX-03 Síntoma | Describir o aportar medios opcionales | Aclaración→UX-04; orientación/insuficiencia→UX-05; editar→UX-02 | RF-002/003 |
| UX-04 Un dato más | Una pregunta concreta, «No lo recuerdo» válido | Continuar sin exigir nueva prueba; volver conserva datos | RF-003 |
| UX-05 Siguiente paso | Ejemplo de información insuficiente y siguiente acción humana | Corregir→UX-02/03; guardar→UX-09; inicio→UX-01 | RF-003/006 |
| UX-06 Seguridad | Detener pruebas/captura si corresponde; explicar límite | Terminar o leer lo ya aportado; no reabrir pruebas desde esta salida | RF-003 |
| UX-07 Mantenimiento | Consultar pauta con datos suficientes y acceder a registros | Completar equipo; manual pertinente; registrar→UX-11 o cuenta opcional antes de guardar | RF-004/006 |
| UX-08 Conectar PC | Seleccionar monitor/teclado/mouse y guía compatible | Cambiar/identificar equipo, fuente del fabricante, empezar guía aplicable | RF-005 |
| UX-09 Guardar | Elegir cuenta y contenido a conservar después de orientar | Entrar/crear cuenta, selección explícita de medios, Ahora no vuelve sin guardar | RF-006 |
| UX-10 Equipos | Biblioteca de identidad propia | Añadir/ver equipo, mantenimiento, historial | RF-001/004/006 |
| UX-11 Registro | Declarar trabajo realizado | Guardar confirmado o error recuperable; cancelar con protección de cambios | RF-004/006 |
| UX-12 Historial | Consultas y trabajos propios con filtros | Ver detalle, cambiar filtros/equipo; estados vacío/error/acceso por concretar | RF-006 |

Las capturas son propuestas reales de interfaz. No demuestran navegación ejecutable, análisis de archivos, autenticación, guardado ni compatibilidad de hardware. Los datos de ejemplo no son casos, métricas o resultados reales.

## Actores y permisos

| Actor | Acciones | Límite |
|---|---|---|
| Visitante | Consultar fallas, pautas y guías disponibles sin cuenta | Sin biblioteca/historial personal persistente; tratamiento temporal de consulta por definir |
| Persona con cuenta | Lo anterior y guardar/consultar/corregir sus equipos y registros | No acceder a otra cuenta; medios requieren elección separada |
| Soporte/contenido | Roles y acciones por acordar | No acceso automático a medios ni cambios en el historial del usuario por tener rol de soporte |
| Mecánico/experto PC | Validación de fuentes/casos cuando se identifique y realice revisión | No es atención profesional incluida en la app ni revisión ya ejecutada |

## RF-001 — Identificar el equipo

**Propósito:** pedir lo mínimo para la tarea, con desconocido explícito. Visitante o persona con cuenta. No pedir kilometraje en la entrada general; solicitarlo cuando sea pertinente para mantenimiento.

| Campo | Origen/tipo | Obligación y validación propuesta | Error/alternativa |
|---|---|---|---|
| Categoría | Selección Auto/PC de escritorio | Requerida; elección explícita | Pedir selección; ejemplo seleccionado en wireframe no es valor por defecto |
| Marca/modelo | Texto manual o dato extraído de foto por confirmar | Permitir «No lo sé»; no inventar valor | Conservar desconocido y limitar recomendaciones específicas |
| Foto de identificación | Medio opcional del equipo | Seguridad revisada antes de habilitar captura; confirmar datos reconocidos | Elegir archivo existente o seguir manualmente |
| Año/versión/motor | Información de auto cuando la fuente lo requiera | Año de cuatro dígitos si se conoce; valores y variantes por fuente | Pedir dato faltante; no asumir compatibilidad |
| Kilometraje | Entero opcional según tarea | No negativo; unidad km; no convertirlo por sí solo en probabilidad de falla | Mostrar validación y permitir desconocido |
| Alias | Texto al guardar equipo | Opcional; no cambia marca/modelo | Campo por concretar en detalle de equipo |

**Acciones/datos:** elegir/corregir categoría o identidad actualiza el contexto y obliga a revisar una guía/pauta previa si deja de corresponder. No importar datos automáticamente del auto/PC.

**Estados:** inicial, datos parciales, identificación no reconocida, fuente/variante no cubierta, error de medio y edición. Datos desconocidos no bloquean por sí solos la consulta genérica; sí impiden presentar una pauta específica sin respaldo.

**Criterio:** dado un modelo desconocido, al continuar se conserva explícitamente esa condición y no se afirma que una guía de otro modelo le corresponde.

## RF-002 — Aportar observaciones y medios

**Entrada:** texto y/o medios que la persona ya pueda aportar sin exponerse. UX-03 muestra una tarea clara y captura opcional. Propuesta: pedir al menos una observación antes de solicitar orientación; no analizar una consulta vacía.

| Campo/acción | Regla propuesta | Recuperación |
|---|---|---|
| Descripción | Texto libre; no exige jerga ni diagnóstico | Conservar al volver/ante un error; mensaje si no hay observación ni medio |
| Foto/audio/video | Opcionales; formatos/cantidad/tamaño/duración aún por acordar | Cancelar, retirar adjunto, archivo incompatible o carga fallida sin borrar otros datos |
| Seguridad | Sí/No/No sé antes de cámara, micrófono o instrucciones | Sí dirige a seguridad; No sé conserva incertidumbre y no habilita pruebas como si fuese No |
| Cámara/micrófono | Solicitar permiso al usar la acción correspondiente | Permiso denegado→archivo existente/texto; no pedir acceso para navegar |
| Información de uso | Visible antes de enviar medios | Falta concretar proveedor, finalidad, países, conservación, derechos y controles |

**Criterios:** si un medio no se procesó, indicarlo; la respuesta no puede decir que vio/escuchó su contenido. Un fallo de carga no es conclusión sobre el equipo. No pedir provocar el síntoma ni grabar conduciendo. Cancelar captura no equivale a borrar medios del historial.

## RF-003 — Orientar, aclarar o derivar

**Acción:** resumir las observaciones conocidas, solicitar solo aclaraciones pertinentes y decidir una respuesta con respaldo o reconocer insuficiencia. Cada posibilidad futura necesita fuente aplicable, razón para considerarla, limitación y siguiente paso apropiado. No porcentajes de certeza no calibrados.

| Estado | Qué ve/hace la persona | Efecto y límite |
|---|---|---|
| Contexto incompleto | UX-04 pregunta breve y opción de desconocido | Desconocido válido; no inferir respuesta ni exigir otra prueba |
| Información insuficiente | UX-05 explica que no puede determinar causa | Corregir datos conocidos o consultar experto; no «equipo sano» |
| Peligro reportado | UX-06 detiene pruebas/capturas | Leer lo aportado o terminar; no promesa de evitar daños |
| Fuente no aplicable/ausente | Explica el límite y qué dato falta | No inventar causa, intervalo o compatibilidad |
| Fallo del servicio externo | Mensaje de que no se obtuvo análisis | Recuperación/texto/derivación apropiada; no confundirlo con resultado diagnóstico |
| Orientación con respaldo | Posibilidades y fuente, incertidumbre, siguiente paso | Falta caso revisado y pantalla específica; el solicitante dejó el caso mecánico pendiente |

**Criterios:** tras aclaraciones sin evidencia suficiente, decir que no se puede determinar la causa. No afirmar que será seguro usar el equipo o retrasar revisión. Señalar qué parte de la entrada se examinó efectivamente. Cualquier comprobación concreta requiere validación experta.

## RF-004 — Mantenimiento y registro

UX-07 separa recomendaciones de lo que la persona declara haber realizado. Sin datos/fuente suficientes muestra cómo completarlos o acceder al manual, sin inventar pauta. No avisos en la primera versión.

| Campo de registro | Validación propuesta | Efecto |
|---|---|---|
| Equipo propio | Requerido para guardar | Registro asociado a su cuenta/equipo |
| Qué se hizo | Texto no vacío | Declaración del usuario, no diagnóstico ni certificación |
| Fecha | Fecha de trabajo realizado; no futura | Fecha visible/corregible; validación clara |
| Kilometraje | Opcional, entero no negativo, solo auto | Dato declarado; no regla automática de sustitución |
| Notas | Opcionales | Corregibles; no incluir datos de terceros innecesarios |

**Acciones:** consultar, completar datos, crear registro, corregir/borrar con confirmación pertinente y consultar historial. Guardar exige cuenta por decisión de biblioteca; consultar no.

**Estados:** sin pauta aplicable, historial vacío, edición, guardando, guardado confirmado, error recuperable y acceso ajeno denegado. No limpiar una alerta/recomendación por el solo hecho de marcar un trabajo.

**Criterios:** no mostrar éxito de guardado sin confirmación; recuperar sin duplicar el registro. Registrar un trabajo no demuestra reparación exitosa. Campos/corrección/borrado finales pendientes de revisión humana.

## RF-005 — Conectar monitor, teclado y mouse

Primera guía elegida por el solicitante: monitor, teclado y mouse externos de PC de escritorio, sin desmontar. Identificar modelo y conexión antes de mostrar instrucciones específicas; si se desconoce, ayudar a identificar o remitir al fabricante, sin declarar compatibilidad.

UX-08 usa un ejemplo documental Dell P2422H/DisplayPort. Se consultó la [guía oficial de Dell Chile](https://www.dell.com/support/kbdoc/es-cl/000187780/dell-p2422h-monitor-usage-and-troubleshooting-guide), sección de conexión al PC, el 2026-11-16. Solo ilustra una guía correspondiente a ese modelo; no acredita compatibilidad con el equipo real del usuario.

Para teclado/mouse USB se identificó la [guía de inicio oficial Logitech MK120](https://www.logitech.com/assets/33798/desktop-mk120-gsw.pdf), consulta 2026-11-16. Son referencias concretas, no cobertura universal ni permiso automático de reproducir contenidos/imágenes.

**Campos:** periférico, marca/modelo, tipo de conexión y guía/fuente/versión aplicable. **Acciones:** cambiar equipo, verificar correspondencia, ver fuente, avanzar/retroceder/cancelar. «Paso completado» declara la acción de la persona; no es detección automática del hardware.

**Estados:** compatibilidad pendiente, modelo no cubierto, instrucción no comprendida, paso fallido, señal de peligro y fuente desactualizada/no accesible. Ante peligro no continuar pruebas. No añadir montaje, intervención eléctrica del inmueble, apertura de carcasas ni reinstalación con borrado de datos.

**Pendientes:** revisión de contenido por experto PC, pasos finales por modelo/conexión, teclado/mouse en detalle, resultado y recuperación. El prototipo presenta preparación de guía, no una instalación real completada.

## RF-006 — Cuenta e historial opcionales

UX-09 aparece al decidir guardar; no interrumpe la consulta previa. UX-10/12 son propuestas de biblioteca para persona autenticada; ejemplos ficticios de identidad y registro.

| Dato/acción | Regla | Pendiente |
|---|---|---|
| Entrar/crear cuenta | Después de decidir guardar o entrar a biblioteca | Identificador, método de acceso, recuperación y cierre de sesión |
| Guardar resumen | Mostrar equipo/contenido antes de confirmar | Conservación, edición y borrado |
| Guardar medios | Desactivado por defecto; elección y selección separadas | Plazos, revocación y tratamiento por terceros |
| Equipos/historial | Solo propios; filtros por equipo/tipo | Detalle, estados de carga/vacío/error y confirmaciones |
| Ahora no | Volver al resultado sin guardar biblioteca | Tratamiento temporal de consulta por revisar |

No elegir almacenamiento local/nube ni prometer sincronización, cifrado, acceso exclusivo absoluto o borrado inmediato desde una maqueta. Eso se concretará en diseño/controles posteriores con revisión de datos.

**Criterios:** visitante llega a orientación sin cuenta. Intentar abrir equipos ajenos se deniega. Un fallo de acceso/guardado preserva contexto visible cuando corresponda y no muestra éxito falso. No vincular automáticamente una consulta de visitante a una cuenta sin una confirmación visible.

## Accesibilidad, errores y operación

Objetivos de diseño R1: texto de cuerpo legible, etiquetas visibles, áreas táctiles amplias, cabeceras completas y síntomas sin cortes irrecuperables. La intención de16px/48px del sistema visual no constituye auditoría de accesibilidad. Verificar teclado/foco, lector de pantalla, contraste, escalado y dispositivos con Engineering/Quality.

Faltan límites acordados de medios, respuesta, disponibilidad, retención y recuperación. No inventar umbrales ni SLA.

| Recorrido operativo propuesto | Resultado y permiso por acordar | Pendiente real |
|---|---|---|
| Consejo cuestionado/peligroso | Reportar, revisar por experto, decidir corrección/retiro y cerrar el caso | Canal, responsables/suplente, plazos y vista de soporte |
| Medio/análisis/guardado fallido | Explicar lo que falló y recuperar sin duplicar ni perder contexto injustificadamente | Retención temporal, reintentos y diagnóstico |
| Datos personales/historial | Atender petición legitimada con trazabilidad y minimización | Responsable, canal, plazos y auditoría |
| Fuente desactualizada | Identificar contenido/casos afectados y revisar actualización | Propietario de contenido y aprobación |

Paneles propuestos: fallos de consulta/guardado por modalidad, casos sin fuente y reclamaciones de contenido; cada indicador deberá permitir acción y mostrar actualización/ausencia de datos. Alertas todavía sin condición, ventana, destinatario/horario, reconocimiento o recuperación acordados. No hay guardias ni automatizaciones activas. No existe atención mecánica o reservas prestadas por la app.

## Estado y confirmación

Faltan caso/fuentes revisados para orientación con causas, experto PC, alcance definitivo de modelos/guías, acceso/cuenta y recuperación, límites/retención/proveedor/costos, operación, métricas y responsables de negocio/legal/privacidad/seguridad.

Revisar el conjunto R1, resolver pendientes y presentar 02/12 finales antes de registrar product-design/functional. No crear épica/historias funcionales antes de esa confirmación. Diseño visual, alcance, negocio y legal tienen revisiones diferenciadas; ninguna se inventa. Producto continúa draft.
