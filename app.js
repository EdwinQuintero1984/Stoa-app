const STORAGE_KEY = 'stoa_app_estado_v2';
const IMAGEN_GUIA_STOA = 'stoa-guia.png';

const PILARES = ['Sabiduría', 'Coraje', 'Justicia', 'Templanza'];

const RANGOS_NIVEL = [
    'Ciudadano de Atenas',
    'Discípulo del Pórtico',
    'Observador de la Razón',
    'Guardián del Juicio',
    'Caminante de la Impresión',
    'Artesano del Carácter',
    'Centinela de la Calma',
    'Intérprete de la Naturaleza',
    'Maestro de la Virtud',
    'Sabio Estoico'
];

const FRASES_PODEROSAS = [
    {
        cita: 'No es lo que nos ocurre lo que nos perturba, sino lo que decimos acerca de lo que nos ocurre.',
        autor: 'Epicteto',
        clave: 'El golpe no viene del evento, sino de la historia que le sumas.'
    },
    {
        cita: 'Tienes poder sobre tu mente, no sobre los acontecimientos externos. Comprende esto y encontrarás fortaleza.',
        autor: 'Marco Aurelio',
        clave: 'Suelta lo que no gobiernas y concentra toda tu fuerza en tu respuesta.'
    },
    {
        cita: 'Sufrimos más a menudo en la imaginación que en la realidad.',
        autor: 'Séneca',
        clave: 'No adelantes batallas que aún no han ocurrido; responde a lo real.'
    },
    {
        cita: 'El obstáculo en el camino se convierte en el camino. Nunca olvides que dentro de cada obstáculo hay una oportunidad para mejorar nuestra condición.',
        autor: 'Marco Aurelio',
        clave: 'Usa la fricción de hoy para afilar tu criterio y tu carácter.'
    },
    {
        cita: 'Nadie es más esclavo que quien se considera libre sin serlo, ni más prisionero que quien es esclavo de sus propios impulsos.',
        autor: 'Epicteto',
        clave: 'La verdadera libertad empieza cuando mandas sobre tus reacciones.'
    },
    {
        cita: 'No es porque las cosas sean difíciles que no nos atrevemos; es porque no nos atrevemos que son difíciles.',
        autor: 'Séneca',
        clave: 'Da el primer paso aunque haya incomodidad; la acción reduce el miedo.'
    },
    {
        cita: 'Cuando te despiertes por la mañana, di: hoy me encontraré con personas indiscretas, ingratas, soberbias, engañosas o envidiosas. Nada de eso puede dañarme si conservo mi razón.',
        autor: 'Marco Aurelio',
        clave: 'Entra al día blindado en calma, sin exigir que el mundo sea perfecto.'
    },
    {
        cita: 'El hombre que sufre antes de que sea necesario, sufre más de lo necesario.',
        autor: 'Séneca',
        clave: 'Vive el presente con lucidez en vez de gastar hoy la angustia de mañana.'
    },
    {
        cita: 'Primero di cómo quieres ser y luego haz lo que tengas que hacer.',
        autor: 'Epicteto',
        clave: 'Tu conducta diaria define tu identidad más que cualquier promesa.'
    },
    {
        cita: 'La mejor venganza es no parecerse a quien te hizo daño.',
        autor: 'Marco Aurelio',
        clave: 'Conserva tu dignidad y tu rectitud intactas pase lo que pase.'
    },
    {
        cita: 'No tenemos poco tiempo, sino que perdemos mucho.',
        autor: 'Séneca',
        clave: 'Cuida en qué entregas tu atención y tu energía cada hora.'
    },
    {
        cita: 'Que cada acción de tu vida sea como si pudieras ser la última.',
        autor: 'Marco Aurelio',
        clave: 'Actúa con limpieza, valentía y verdad en lo que haces ahora.'
    }
];

const FUNDAMENTO_PILARES = {
    'Sabiduría': 'Distinguir con claridad lo que depende de nosotros (juicios, intenciones, respuestas) de lo que no depende de nosotros (clima, opiniones ajenas, resultados externos), siguiendo a Epicteto.',
    'Coraje': 'Actuar con rectitud y firmeza frente al miedo, la incomodidad o la presión social, entrenando la resistencia física y mental antes de que llegue la adversidad.',
    'Justicia': 'Recordar que somos seres sociales hechos para cooperar, tratar a los demás con equidad y paciencia, y actuar en favor del bien común.',
    'Templanza': 'Gobernar los impulsos, el deseo desmedido, la ira y las distracciones para mantener el equilibrio interior y la serenidad en cualquier circunstancia.'
};

const TAREAS_POR_NIVEL = {
    'Sabiduría': {
        1: {
            titulo: 'Auditoría de lo que Depende de Ti',
            resumen: 'Separa un problema actual en dos columnas mentales: lo que controlas y lo que no.',
            pasos: [
                'Elige una situación que hoy te genere tensión o preocupación.',
                'Identifica qué partes dependen de ti (tu tono de voz, tu esfuerzo, tu honestidad) y cuáles no (la reacción de otra persona, tráfico, retrasos).',
                'Suelta mentalmente la parte externa y define una sola acción concreta sobre lo que sí controlas.'
            ],
            fundamento: 'Epicteto abre el Enquiridión recordando que unas cosas dependen de nosotros y otras no; mezclarlas produce angustia.',
            reflexion: '¿Qué energía estaba gastando hoy intentando controlar algo fuera de mi alcance?'
        },
        2: {
            titulo: 'Pausa ante la Primera Impresión',
            resumen: 'Detén el juicio automático antes de etiquetar un evento como bueno o malo.',
            pasos: [
                'Cuando ocurra algo molesto o inesperado, haz una pausa de 5 segundos antes de opinar.',
                'Describe el hecho en términos neutros, sin adjetivos dramáticos (por ejemplo: "Llegó tarde" en vez de "Me faltó al respeto").',
                'Pregúntate si ese juicio es un hecho objetivo o una interpretación tuya.'
            ],
            fundamento: 'Marco Aurelio señala que las cosas mismas no tocan el alma; los juicios que formamos sobre ellas son los que nos perturban.',
            reflexion: '¿Qué historia añadí hoy a un hecho que en realidad era neutral?'
        },
        3: {
            titulo: 'La Vista desde Arriba',
            resumen: 'Amplía la perspectiva espacial y temporal de un conflicto cotidiano.',
            pasos: [
                'Imagina que observas tu problema actual desde lo alto de tu ciudad o de un mapa.',
                'Pregúntate qué importancia tendrá este asunto dentro de un año o de cinco años.',
                'Elige la respuesta más serena y lúcida desde esa distancia.'
            ],
            fundamento: 'Marco Aurelio utiliza la perspectiva amplia para reducir el tamaño artificial de los dramas cotidianos.',
            reflexion: '¿Cómo cambia este problema si lo miro a escala de un año?'
        },
        4: {
            titulo: 'Examen de Juicios Prematuros',
            resumen: 'Identifica una creencia que das por segura sin haberla examinado a fondo.',
            pasos: [
                'Detecta una frase como "Siempre pasa lo mismo" o "Esto tiene que salir perfecto".',
                'Busca al menos dos excepciones reales o evidencias contrarias en tu experiencia.',
                'Reformula la idea con mayor precisión y realismo.'
            ],
            fundamento: 'La sabiduría práctica exige examinar las impresiones como el cambista examina una moneda antes de aceptarla.',
            reflexion: '¿Qué generalización estaba tomando como verdad absoluta?'
        },
        5: {
            titulo: 'El Abogado del Contrario',
            resumen: 'Analiza una postura o discusión tuya intentando entender el punto de vista opuesto.',
            pasos: [
                'Toma una opinión firme que tengas hoy sobre un tema o desacuerdo.',
                'Formula el argumento más sólido y razonable que defendería alguien que piensa distinto.',
                'Evalúa si tu postura resiste con calma o si se apoya solo en orgullo.'
            ],
            fundamento: 'La razón estoica busca la verdad y la coherencia, no ganar discusiones por vanidad.',
            reflexion: '¿Qué parte del punto contrario tiene lógica o buena intención?'
        },
        6: {
            titulo: 'Premeditatio Malorum Realista',
            resumen: 'Anticipa obstáculos probables de tu jornada para responder sin sobresaltos.',
            pasos: [
                'Revisa tus planes de hoy y señala dos contratiempos realistas que podrían surgir.',
                'Define de antemano cómo responderás con calma si ocurren.',
                'Mantén la mente abierta sin caer en el pesimismo catastrófico.'
            ],
            fundamento: 'Séneca aconseja prever las dificultades para que no golpeen por sorpresa a quien no las esperaba.',
            reflexion: 'Si hoy falla un plan, ¿cuál será mi primera reacción útil?'
        },
        7: {
            titulo: 'Separar Hecho de Intención',
            resumen: 'Revisa una molestia con alguien y distingue la acción de la intención.',
            pasos: [
                'Piensa en alguien que te haya incomodado recientemente.',
                'Separa el efecto que tuvo en ti de la intención real que pudo haber tenido.',
                'Considera si pudo actuar por ignorancia, cansancio o prisa más que por maldad.'
            ],
            fundamento: 'Los estoicos sostienen que nadie yerra a sabiendas creyendo hacer el mal, sino por falta de claridad.',
            reflexion: '¿Estoy asumiendo mala intención donde quizá solo hubo descuido?'
        },
        8: {
            titulo: 'Claridad en una Decisión Pendiente',
            resumen: 'Aplica un criterio objetivo a una decisión que vienes postergando.',
            pasos: [
                'Escribe o define en una frase la decisión que estás aplazando.',
                'Evalúa qué opción alinea mejor con tus valores esenciales y con tu paz mental.',
                'Toma un paso inicial claro hoy mismo.'
            ],
            fundamento: 'Postergar por indecisión prolonga la carga mental; decidir con criterio devuelve dirección.',
            reflexion: '¿Qué me impide dar hoy el primer paso de esta decisión?'
        },
        9: {
            titulo: 'Desmontar el Apego al Resultado',
            resumen: 'Haz tu mejor esfuerzo en una tarea sin condicionar tu calma al aplauso o al éxito.',
            pasos: [
                'Elige una tarea importante que vayas a realizar hoy.',
                'Pon todo tu esmero en la ejecución y en la calidad de tu trabajo.',
                'Acepta por adelantado que el resultado final puede ser distinto a lo esperado.'
            ],
            fundamento: 'La excelencia está en cómo juegas tu parte, no en controlar el marcador final.',
            reflexion: '¿Cómo cambia mi enfoque cuando mido mi éxito por mi esfuerzo y no por el resultado?'
        },
        10: {
            titulo: 'Síntesis Nocturna de Sabiduría',
            resumen: 'Cierra el día evaluando dónde actuaste con lucidez y dónde perdiste el centro.',
            pasos: [
                'Repasa las tres situaciones más intensas de tu día.',
                'Identifica en cuál mantuviste claridad y en cuál reaccionaste por impulso.',
                'Define una regla práctica para mañana basada en lo aprendido.'
            ],
            fundamento: 'Séneca describe el examen diario al final de la jornada como el hábito que consolida la sabiduría.',
            reflexion: '¿Qué aprendí hoy sobre mi propia mente que no sabía esta mañana?'
        }
    },
    'Coraje': {
        1: {
            titulo: 'Incomodidad Física Breve',
            resumen: 'Acepta una incomodidad física leve y segura para entrenar la tolerancia.',
            pasos: [
                'Elige un gesto sencillo de incomodidad controlada: terminar una ducha con agua fresca unos segundos, mantener una postura firme o caminar sin mirar el teléfono.',
                'Observa la resistencia inicial de tu cuerpo sin pelearte con ella.',
                'Respira lento hasta notar que la incomodidad deja de asustarte.'
            ],
            fundamento: 'Entrenar la incomodidad en lo pequeño prepara el carácter para cuando las pruebas reales no avisan.',
            reflexion: '¿Qué pasó cuando dejé de huir de la incomodidad por un momento?'
        },
        2: {
            titulo: 'Decir la Verdad con Respeto',
            resumen: 'Expresa una necesidad, límite o verdad pendiente con firmeza y serenidad.',
            pasos: [
                'Identifica algo que hayas callado por evitar incomodar o por temor.',
                'Prepara una frase breve, directa y respetuosa.',
                'Comunícala sin agresividad ni rodeos.'
            ],
            fundamento: 'El coraje estoico no es dureza vacía, sino integridad para sostener lo justo.',
            reflexion: '¿Qué alivio o claridad surge al hablar con honestidad?'
        },
        3: {
            titulo: 'Afrontar una Tarea Evitada',
            resumen: 'Dedica 10 minutos sin excusas a aquello que vienes postergando.',
            pasos: [
                'Elige esa tarea pendiente que te genera pereza o resistencia.',
                'Pon un temporizador de 10 minutos y trabaja solo en ella, sin buscar perfección inmediata.',
                'Al terminar los 10 minutos, decide si continúas o cierras el bloque.'
            ],
            fundamento: 'La fricción inicial suele ser mayor que la tarea misma; empezar rompe la inercia.',
            reflexion: '¿Era tan difícil empezar como parecía antes de dar el primer paso?'
        },
        4: {
            titulo: 'Respirar en Medio de la Presión',
            resumen: 'Sostén la calma ante un momento de apuro, crítica o urgencia.',
            pasos: [
                'Cuando sientas tensión o apuro, detente un instante y haz 4 respiraciones lentas.',
                'Afloja mandíbula, hombros y entrecejo.',
                'Responde desde la calma en vez de desde la urgencia.'
            ],
            fundamento: 'Quien conserva la cabeza fría en el apuro conserva el mando sobre sus actos.',
            reflexion: '¿Cómo cambia mi capacidad de resolver cuando bajo el ritmo interno?'
        },
        5: {
            titulo: 'Aceptar el Error sin Excusas',
            resumen: 'Reconoce un fallo propio de forma directa y enfócate en corregirlo.',
            pasos: [
                'Identifica un error o descuido reciente que te cueste admitir.',
                'Reconócelo sin culpar al entorno ni justificarlo de más.',
                'Aplica o planifica de inmediato la reparación.'
            ],
            fundamento: 'Asumir los propios errores exige humildad y valentía, y libera del peso de ocultar.',
            reflexion: '¿Qué gano al soltar las excusas y centrarme en corregir?'
        },
        6: {
            titulo: 'Sostener un Límite Sano',
            resumen: 'Di "no" o pon un límite claro a algo que desordena tu tiempo o tus valores.',
            pasos: [
                'Detecta un compromiso o petición que hoy te sobrecarga sin aportar propósito.',
                'Comunica tu límite con amabilidad pero sin pedir disculpas excesivas.',
                'Protege el espacio ganado para lo que sí importa.'
            ],
            fundamento: 'Decir "sí" a todo por miedo es decir "no" a tu propio orden y coherencia.',
            reflexion: '¿A qué le estoy diciendo "sí" hoy solo por temor a quedar mal?'
        },
        7: {
            titulo: 'Mirar de Frente el Peor Escenario',
            resumen: 'Enfrenta mentalmente un temor latente hasta quitarle su poder paralizante.',
            pasos: [
                'Nombra con claridad un temor que sueles evitar pensar.',
                'Pregúntate: si ocurriera, ¿cómo saldría adelante paso a paso?',
                'Comprueba que cuentas con recursos reales para responder.'
            ],
            fundamento: 'Séneca observaba que a menudo sufrimos más en la imaginación que en la realidad.',
            reflexion: '¿Qué parte de este temor es real y cuál es solo anticipación?'
        },
        8: {
            titulo: 'Actuar sin Necesidad de Aplauso',
            resumen: 'Haz lo correcto hoy aunque nadie lo vea ni lo reconozca.',
            pasos: [
                'Realiza una acción útil, ordenada o responsable de forma silenciosa.',
                'No busques validación ni mención por haberlo hecho.',
                'Valora el acto por su propio mérito.'
            ],
            fundamento: 'La virtud se sostiene por sí misma, no por la ovación del público.',
            reflexion: '¿Cómo se siente hacer lo correcto sin esperar reconocimiento?'
        },
        9: {
            titulo: 'Firmeza ante la Provocación',
            resumen: 'No entres al juego de una provocación, burla o comentario hostil.',
            pasos: [
                'Ante un comentario punzante o tenso, no respondas al instante.',
                'Observa la emoción que intenta encenderse en ti.',
                'Elige responder con mesura o retirarte con dignidad.'
            ],
            fundamento: 'La verdadera fuerza se demuestra cuando otro intenta moverte y no lo logra.',
            reflexion: '¿Qué habría perdido si hubiera reaccionado en caliente?'
        },
        10: {
            titulo: 'Prueba de Carácter del Día',
            resumen: 'Enfrenta hoy el reto más exigente de tu agenda con serenidad y constancia.',
            pasos: [
                'Identifica el momento más difícil o exigente de tu jornada.',
                'Enfréntalo paso a paso sin quejarte ni huir.',
                'Al terminar, anota qué fortaleció tu carácter.'
            ],
            fundamento: 'El coraje maduro se consolida cuando la acción firme se vuelve habitual.',
            reflexion: '¿De qué prueba de hoy me siento más firme y sereno?'
        }
    },
    'Justicia': {
        1: {
            titulo: 'Escucha Plena sin Interrumpir',
            resumen: 'Escucha a alguien hoy con atención total, sin preparar tu respuesta mientras habla.',
            pasos: [
                'En una conversación hoy, guarda silencio cuando el otro hable y no interrumpas.',
                'Escucha las palabras, el tono y lo que realmente necesita expresar.',
                'Resume su idea con tus palabras para confirmar que entendiste bien.'
            ],
            fundamento: 'Para los estoicos, la justicia empieza por reconocer la dignidad del otro y darle un lugar real.',
            reflexion: '¿Qué noté en la otra persona cuando dejé de apresurarme a responder?'
        },
        2: {
            titulo: 'Pequeño Acto de Utilidad Real',
            resumen: 'Haz algo concreto y útil para otra persona o para tu entorno compartido.',
            pasos: [
                'Observa qué necesita alguien cercano o qué espacio común está descuidado.',
                'Realiza una ayuda práctica y sencilla sin esperar nada a cambio.',
                'Hazlo con naturalidad y buena disposición.'
            ],
            fundamento: 'Marco Aurelio recuerda que nacimos para colaborar, como las manos, los pies o las filas de dientes.',
            reflexion: '¿Cómo aporté hoy al bienestar de mi entorno?'
        },
        3: {
            titulo: 'Paciencia con la Lentitud Ajena',
            resumen: 'Practica la paciencia cuando alguien avance más lento de lo que esperas.',
            pasos: [
                'Cuando alguien tarde más o necesite explicación extra, respira hondo.',
                'Recuerda que cada persona tiene ritmos, aprendizajes y cargas distintas.',
                'Acompaña con respeto en lugar de impaciencia.'
            ],
            fundamento: 'La benevolencia y la paciencia sostienen la convivencia justa en el día a día.',
            reflexion: '¿Dónde mostré paciencia hoy y dónde me faltó?'
        },
        4: {
            titulo: 'Cumplir un Compromiso con Rigor',
            resumen: 'Honra tu palabra en un acuerdo, horario o promesa pequeña.',
            pasos: [
                'Revisa los compromisos que asumiste para hoy.',
                'Cumple lo prometido en forma y tiempo, o avisa con anticipación y transparencia si algo cambia.',
                'Verifica que tu palabra valga lo que dices.'
            ],
            fundamento: 'La confianza social y personal se construye cumpliendo lo acordado.',
            reflexion: '¿Qué tan confiable es mi palabra en los detalles cotidianos?'
        },
        5: {
            titulo: 'Trato Equitativo Sin Favoritismos',
            resumen: 'Revisa si estás juzgando con distinta vara a distintas personas.',
            pasos: [
                'Piensa en dos personas involucradas en una situación o tarea.',
                'Comprueba si estás aplicando el mismo criterio de justicia y exigencia a ambas.',
                'Corrige cualquier sesgo o preferencia injusta.'
            ],
            fundamento: 'La justicia exige imparcialidad y medida equilibrada.',
            reflexion: '¿Estoy midiendo a todos con la misma regla justa?'
        },
        6: {
            titulo: 'Reconocer el Mérito Ajeno',
            resumen: 'Agradece y reconoce explícitamente el buen trabajo o apoyo de alguien.',
            pasos: [
                'Identifica a alguien que haya contribuido a que un día o tarea salga bien.',
                'Dile de forma clara y sincera qué valoras de su aporte.',
                'Evita restar mérito por ego.'
            ],
            fundamento: 'Dar a cada quien lo que le corresponde incluye reconocer lo bueno que otros hacen.',
            reflexion: '¿A quién le debo hoy un reconocimiento sincero?'
        },
        7: {
            titulo: 'Reparar un Descuido Propio',
            resumen: 'Corrige una falta de atención, orden o cortesía que hayas tenido con alguien.',
            pasos: [
                'Piensa si dejaste pasar un detalle que afectó a otra persona.',
                'Pide disculpas de manera sencilla y directa, sin adornos.',
                'Haz lo necesario para enmendarlo.'
            ],
            fundamento: 'La justicia no consiste en no equivocarse nunca, sino en reparar cuando se falla.',
            reflexion: '¿Qué gesto de reparación puedo hacer hoy?'
        },
        8: {
            titulo: 'Hablar Bien en Ausencia del Otro',
            resumen: 'Evita críticas destructivas o comentarios a espaldas de alguien.',
            pasos: [
                'Durante el día, evita sumarte a murmuraciones o descalificaciones.',
                'Si hay un problema real con alguien, canalízalo de forma constructiva o resérvalo.',
                'Cuida la integridad de tus palabras.'
            ],
            fundamento: 'La palabra justa protege la convivencia y evita dañar gratuitamente.',
            reflexion: '¿Mis comentarios sobre los demás construyen o deterioran?'
        },
        9: {
            titulo: 'Mediación con Calma',
            resumen: 'Ante un desacuerdo cercano, busca un punto de encuentro razonable.',
            pasos: [
                'Si surge fricción entre personas o ideas, baja la temperatura del intercambio.',
                'Pregunta qué necesita cada parte para encontrar una solución justa.',
                'Propón un acuerdo equilibrado.'
            ],
            fundamento: 'El estoico busca armonía fundada en la razón y el respeto mutuo.',
            reflexion: '¿Qué puedo aportar hoy para reducir una tensión?'
        },
        10: {
            titulo: 'Servicio Consciente a la Comunidad',
            resumen: 'Realiza una acción que beneficie a tu familia, equipo, barrio o entorno cercano.',
            pasos: [
                'Elige una necesidad real de tu comunidad o grupo cercano.',
                'Dedica tiempo o esfuerzo concreto para atenderla.',
                'Reflexiona sobre tu papel como parte de un todo mayor.'
            ],
            fundamento: 'La justicia alcanza su plenitud cuando el bienestar propio se integra con el bien común.',
            reflexion: '¿De qué manera serví hoy al bien común?'
        }
    },
    'Templanza': {
        1: {
            titulo: 'Espejo, Respiración de 10 Segundos y Afirmación Firme',
            resumen: 'Ponte frente al espejo, respira 10 segundos y háblate con firmeza y serenidad.',
            pasos: [
                'Párate frente a un espejo en un lugar tranquilo y observa tu postura.',
                'Respira profundo durante 10 segundos (inhala despacio, sostén un instante y exhala con calma).',
                'Mírate a los ojos y dite con voz firme y serena: "Soy poderoso, dueño de mi mente y capaz de actuar con calma y dominio".'
            ],
            fundamento: 'La templanza comienza anclando el cuerpo y la respiración para recuperar el gobierno sobre uno mismo.',
            reflexion: '¿Cómo cambió mi estado interno después de respirar y hablarme con firmeza?'
        },
        2: {
            titulo: 'Freno al Impulso Digital o de Consumo',
            resumen: 'Evita abrir redes, compras impulsivas o distracciones automáticas durante un bloque del día.',
            pasos: [
                'Elige un momento en el que sueles revisar el celular o picar algo sin hambre real.',
                'Espera 10 minutos antes de ceder al impulso.',
                'Observa cómo baja la urgencia cuando no la alimentas de inmediato.'
            ],
            fundamento: 'Dominar los pequeños deseos impide que el apetito dirija tu conducta.',
            reflexion: '¿Qué impulso noté hoy y qué ocurrió cuando esperé antes de ceder?'
        },
        3: {
            titulo: 'Comer con Atención y Medida',
            resumen: 'Come una comida con calma, sin pantallas y deteniéndote antes de sentir pesadez.',
            pasos: [
                'Siéntate a comer sin celular, televisión ni distracciones.',
                'Mastica con calma y nota las señales de saciedad.',
                'Detente cuando estés satisfecho, sin excederte.'
            ],
            fundamento: 'La moderación en el alimento y el placer es una de las bases clásicas de la templanza.',
            reflexion: '¿Cuál es la diferencia entre comer por necesidad y comer por costumbre o ansiedad?'
        },
        4: {
            titulo: 'Pausa de 6 Segundos Antes de Responder',
            resumen: 'Contén el impulso de contestar rápido cuando sientas molestia o irritación.',
            pasos: [
                'Al sentir irritación, haz una pausa consciente de 6 segundos antes de hablar o escribir.',
                'Suelta los hombros y baja el volumen mental.',
                'Elige una respuesta medida y proporcionada.'
            ],
            fundamento: 'Séneca compara la ira con una caída: es más fácil detenerse al principio que frenar a toda velocidad.',
            reflexion: '¿Qué respuesta impulsiva evité hoy gracias a la pausa?'
        },
        5: {
            titulo: 'Orden en un Espacio de Trabajo',
            resumen: 'Limpia y ordena tu escritorio, mesa o espacio inmediato en 5 minutos.',
            pasos: [
                'Dedica 5 minutos a despejar lo que sobra de tu espacio de trabajo o estudio.',
                'Deja solo lo necesario para tu actividad actual.',
                'Observa el efecto del orden exterior sobre tu enfoque.'
            ],
            fundamento: 'El orden externo acompaña y facilita el orden interior.',
            reflexion: '¿Cómo se siente trabajar en un espacio despejado frente a uno saturado?'
        },
        6: {
            titulo: 'Ayuno de Quejas por un Día',
            resumen: 'Pasa el día sin quejarte, ni en voz alta ni en comentarios innecesarios.',
            pasos: [
                'Proponte no quejarte durante el día.',
                'Cada vez que notes que vas a quejarte, cámbialo por una observación objetiva o una acción.',
                'Evalúa al final cómo cambió tu ánimo.'
            ],
            fundamento: 'La queja constante alimenta el descontento; la templanza cultiva aceptación y acción.',
            reflexion: '¿Cuántas veces estuve a punto de quejarme hoy y qué hice en su lugar?'
        },
        7: {
            titulo: 'Un Solo Foco a la Vez',
            resumen: 'Trabaja en una sola actividad durante 25 minutos cerrando pestañas y distracciones.',
            pasos: [
                'Elige una sola actividad y cierra distracciones cercanas.',
                'Trabaja enfocado durante 25 minutos.',
                'Cuando tu mente divague, regrésala con suavidad al tema.'
            ],
            fundamento: 'La dispersión debilita la voluntad; la templanza concentra la energía.',
            reflexion: '¿Cuánto avancé al concentrarme en una sola cosa?'
        },
        8: {
            titulo: 'Moderación en el Hablar',
            resumen: 'Habla menos y escucha más, evitando exageraciones o hablar por llenar silencios.',
            pasos: [
                'En tus conversaciones de hoy, procura decir lo esencial y con claridad.',
                'Acepta los silencios cómodos sin apresurarte a rellenarlos.',
                'Evita hipérboles o promesas exageradas.'
            ],
            fundamento: 'Zenón de Citio recordaba que tenemos dos oídos y una sola boca para escuchar el doble de lo que hablamos.',
            reflexion: '¿Qué ganó mi comunicación al hablar con más medida?'
        },
        9: {
            titulo: 'Cierre Sereno de la Jornada',
            resumen: 'Desconecta de pantallas y pendientes al menos 20 minutos antes de dormir.',
            pasos: [
                'Deja a un lado pendientes y pantallas al final del día.',
                'Haz respiraciones lentas y suelta las preocupaciones pendientes hasta mañana.',
                'Prepara el descanso con calma.'
            ],
            fundamento: 'Saber detenerse a tiempo es parte del dominio de uno mismo.',
            reflexion: '¿Qué me cuesta soltar al final del día para descansar de verdad?'
        },
        10: {
            titulo: 'Dominio del Centro en Día Exigente',
            resumen: 'Mantén equilibrio en emociones, deseos y palabras durante un día completo de actividad.',
            pasos: [
                'Aplica respiración y pausa consciente en los momentos de mayor movimiento del día.',
                'Evita excesos de impulso, comida, prisa o reacción.',
                'Cierra el día registrando tu balance de serenidad.'
            ],
            fundamento: 'La templanza plena se expresa cuando el equilibrio interior permanece firme en medio del movimiento.',
            reflexion: '¿Cuál fue mi mayor logro de autocontrol en esta jornada?'
        }
    }
};

const DILEMAS_PORTICO = [
    {
        pilar: 'Sabiduría',
        escenario: 'Un proyecto en el que trabajaste semanas se retrasa por una decisión externa que no puedes cambiar.',
        pregunta: '¿Cuál es la respuesta más alineada con la Sabiduría estoica?',
        opciones: [
            { texto: 'Reclamar con enojo y culpar a todos por el retraso.', correcta: false, feedback: 'La ira sobre lo que no controlas solo añade desgaste sin cambiar el hecho.' },
            { texto: 'Distinguir lo que no controlas, aceptar el retraso y enfocar tu energía en lo que sí depende de ti.', correcta: true, feedback: 'Exacto: separas lo externo de tu propio juicio y actúas sobre tu respuesta.' },
            { texto: 'Abandonar el proyecto porque las condiciones no fueron ideales.', correcta: false, feedback: 'La sabiduría busca adaptación lúcida, no rendirse ante el primer obstáculo.' }
        ]
    },
    {
        pilar: 'Coraje',
        escenario: 'Debes dar una retroalimentación difícil pero necesaria a un compañero o colaborador.',
        pregunta: '¿Cómo actúa el Coraje estoico en este momento?',
        opciones: [
            { texto: 'Evitar hablar del tema para no generar incomodidad.', correcta: false, feedback: 'Evitar por miedo o comodidad suele empeorar el problema con el tiempo.' },
            { texto: 'Decirlo con dureza o humillación para imponer autoridad.', correcta: false, feedback: 'La brusquedad no es coraje, es falta de control.' },
            { texto: 'Hablar con claridad, respeto y firmeza, asumiendo la incomodidad del momento con serenidad.', correcta: true, feedback: 'Muy bien: el coraje une firmeza en la verdad con serenidad en el trato.' }
        ]
    },
    {
        pilar: 'Justicia',
        escenario: 'Alguien comete un error que te perjudica ligeramente en una tarea compartida.',
        pregunta: '¿Qué postura refleja mejor la Justicia estoica?',
        opciones: [
            { texto: 'Responder con frialdad o devolver el golpe en la próxima ocasión.', correcta: false, feedback: 'Devolver mal por mal rompe la armonía y te rebaja al mismo impulso.' },
            { texto: 'Examinar el hecho con equidad, dialogar con calma y buscar una solución justa para ambos.', correcta: true, feedback: 'Correcto: la justicia busca equidad y cooperación sin perder la rectitud.' },
            { texto: 'Ignorar por completo el acuerdo sin decir nada.', correcta: false, feedback: 'Callar sin claridad puede generar resentimiento oculto.' }
        ]
    },
    {
        pilar: 'Templanza',
        escenario: 'Sientes frustración acumulada y ganas de reaccionar impulsivamente o caer en excesos para desconectar.',
        pregunta: '¿Qué práctica encarna mejor la Templanza?',
        opciones: [
            { texto: 'Hacer una pausa, respirar profundo, recuperar el centro y elegir una acción mesurada.', correcta: true, feedback: 'Así es: la templanza frena el impulso y devuelve el gobierno a la razón.' },
            { texto: 'Dejarse llevar sin freno por el impulso del momento.', correcta: false, feedback: 'Ceder sin medida al impulso suele dejar resaca emocional o arrepentimiento.' },
            { texto: 'Reprimir todo fingiendo que no sientes nada, sin revisar qué te pasa.', correcta: false, feedback: 'Observar y regular con calma es distinto a ignorar sin conciencia.' }
        ]
    }
];

const INSIGNIAS = [
    { id: 'primer_paso', nombre: 'Primer Paso en el Pórtico', desc: 'Completa tu primera tarea estoica.', check: (est) => est.tareasTotalesCompletadas >= 1 },
    { id: 'racha_3', nombre: 'Llama Constante', desc: 'Alcanza una racha de 3 días.', check: (est) => est.mejorRacha >= 3 },
    { id: 'portico_1', nombre: 'Aprobado en el Pórtico', desc: 'Supera al menos 1 prueba del Pórtico.', check: (est) => est.pruebasSuperadas >= 1 },
    { id: 'diez_ejercicios', nombre: 'Artesano de la Práctica', desc: 'Completa 10 ejercicios en total.', check: (est) => est.tareasTotalesCompletadas >= 10 },
    { id: 'equilibrio_4', nombre: 'Cuatro Virtudes', desc: 'Sube al menos al Nivel 2 en los 4 pilares.', check: (_, pilares) => PILARES.every(p => pilares[p].nivel >= 2) },
    { id: 'sabio_camino', nombre: 'Camino del Sabio', desc: 'Alcanza el Nivel 5 global.', check: (est, pilares) => calcularNivelGlobal(pilares) >= 5 }
];

function obtenerFechaHoyISO() {
    const ahora = new Date();
    const y = ahora.getFullYear();
    const m = String(ahora.getMonth() + 1).padStart(2, '0');
    const d = String(ahora.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function obtenerFechaAyerISO() {
    const ayer = new Date();
    ayer.setDate(ayer.getDate() - 1);
    const y = ayer.getFullYear();
    const m = String(ayer.getMonth() + 1).padStart(2, '0');
    const d = String(ayer.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function crearEstadoInicial() {
    const pilares = {};
    PILARES.forEach(p => {
        pilares[p] = {
            nivel: 1,
            xp: 0,
            xpNecesario: 100,
            tareasCompletadasNivel: []
        };
    });

    return {
        usuario: 'Filósofo',
        vistaActual: 'pilares',
        pilarSeleccionado: null,
        indiceDilema: 0,
        indiceFrase: 0,
        pilares,
        estadisticas: {
            rachaActual: 0,
            mejorRacha: 0,
            ultimaFechaPractica: null,
            tareasTotalesCompletadas: 0,
            pruebasSuperadas: 0
        },
        diario: []
    };
}

let state = cargarEstado();

function cargarEstado() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return crearEstadoInicial();
        const parsed = JSON.parse(raw);
        const base = crearEstadoInicial();

        const pilaresMerge = {};
        PILARES.forEach(p => {
            pilaresMerge[p] = {
                ...base.pilares[p],
                ...(parsed.pilares && parsed.pilares[p] ? parsed.pilares[p] : {})
            };
        });

        return {
            ...base,
            ...parsed,
            pilares: pilaresMerge,
            estadisticas: {
                ...base.estadisticas,
                ...(parsed.estadisticas || {})
            },
            diario: Array.isArray(parsed.diario) ? parsed.diario : []
        };
    } catch (e) {
        return crearEstadoInicial();
    }
}

function guardarEstado() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function sortearFraseApertura() {
    if (FRASES_PODEROSAS.length <= 1) {
        state.indiceFrase = 0;
        return;
    }
    const anterior = typeof state.indiceFrase === 'number' ? state.indiceFrase : -1;
    let nuevo = Math.floor(Math.random() * FRASES_PODEROSAS.length);
    if (nuevo === anterior) {
        nuevo = (nuevo + 1) % FRASES_PODEROSAS.length;
    }
    state.indiceFrase = nuevo;
    guardarEstado();
}

function rotarFraseManual() {
    sortearFraseApertura();
    renderizarApp();
}

function renderizarFrasePoderosa() {
    const idx = Math.abs(Number(state.indiceFrase) || 0) % FRASES_PODEROSAS.length;
    const item = FRASES_PODEROSAS[idx];

    return `
        <section aria-label="Frase Estoica" style="
            background: linear-gradient(160deg, rgba(26, 32, 46, 0.96) 0%, rgba(12, 15, 22, 0.98) 100%);
            border: 1px solid rgba(255, 209, 71, 0.5);
            border-left: 4px solid #ffd147;
            border-radius: 6px;
            padding: clamp(14px, 2.2vw, 22px);
            margin-bottom: clamp(18px, 3vw, 28px);
            box-shadow: 0 6px 0 #07080b, 0 12px 24px rgba(0, 0, 0, 0.8);
        ">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
                <span style="font-family:'Montserrat',sans-serif; font-weight:800; font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; color:#ffd147;">
                    Semilla de Razón • ${item.autor}
                </span>
                <button class="btn-small" style="margin-left:0; padding:5px 10px; font-size:0.7rem;" onclick="rotarFraseManual()">
                    Otra frase
                </button>
            </div>
            <blockquote style="
                margin:0 0 8px 0;
                font-style:italic;
                font-size:clamp(1.08rem, 2vw, 1.35rem);
                line-height:1.4;
                color:#f8fafc;
            ">
                “${item.cita}”
            </blockquote>
            <div style="font-size:clamp(0.95rem, 1.5vw, 1.08rem); color:#ffe47a;">
                <strong>Clave para hoy:</strong> ${item.clave}
            </div>
        </section>
    `;
}

function calcularNivelGlobal(pilaresObj = state.pilares) {
    const suma = PILARES.reduce((acc, p) => acc + pilaresObj[p].nivel, 0);
    return Math.max(1, Math.min(10, Math.round(suma / PILARES.length)));
}

function obtenerPilarMasFuerte() {
    let mejor = null;
    let maxScore = -1;
    const scores = PILARES.map(p => state.pilares[p].nivel * 100 + state.pilares[p].xp);

    if (scores.every(s => s === scores[0])) {
        return 'Equilibrado';
    }

    PILARES.forEach((p, idx) => {
        if (scores[idx] > maxScore) {
            maxScore = scores[idx];
            mejor = p;
        }
    });
    return mejor || 'Equilibrado';
}

function registrarPracticaHoy() {
    const hoy = obtenerFechaHoyISO();
    const ayer = obtenerFechaAyerISO();
    const est = state.estadisticas;

    if (est.ultimaFechaPractica === hoy) {
        return;
    }

    if (est.ultimaFechaPractica === ayer) {
        est.rachaActual += 1;
    } else {
        est.rachaActual = 1;
    }

    if (est.rachaActual > est.mejorRacha) {
        est.mejorRacha = est.rachaActual;
    }
    est.ultimaFechaPractica = hoy;
}

function mostrarCelebracion(mensaje) {
    const overlay = document.createElement('div');
    overlay.className = 'particula-overlay';
    overlay.innerHTML = `
        <div class="particula-core"></div>
        <div class="particula-mensaje">${mensaje}</div>
    `;
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.remove();
    }, 1200);
}

function actualizarPerfilCabecera() {
    const nivelGlobal = calcularNivelGlobal();
    const rango = RANGOS_NIVEL[Math.min(RANGOS_NIVEL.length - 1, nivelGlobal - 1)];
    const userEl = document.getElementById('display-user');
    const rankEl = document.getElementById('display-rank');
    const avatarBox = document.getElementById('equipped-avatar-box');

    if (userEl) userEl.textContent = state.usuario || 'Filósofo';
    if (rankEl) rankEl.textContent = `Nivel ${nivelGlobal}: ${rango}`;
    if (avatarBox) {
        avatarBox.innerHTML = `
            <img src="${IMAGEN_GUIA_STOA}" alt="STOA" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <svg style="display:none;" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" stroke="#d49b1a" stroke-width="2.5"/>
                <path d="M22 44 C24 37, 40 37, 42 44" stroke="#ffd147" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="32" cy="26" r="7" stroke="#ffd147" stroke-width="2.5"/>
            </svg>
        `;
    }
}

function cambiarUsuario() {
    const nuevo = prompt('¿Cómo deseas llamar a tu perfil estoico?', state.usuario || 'Filósofo');
    if (nuevo && nuevo.trim()) {
        state.usuario = nuevo.trim().slice(0, 28);
        guardarEstado();
        actualizarPerfilCabecera();
    }
}

function cambiarVista(vista) {
    state.vistaActual = vista;
    if (vista !== 'pilares') {
        state.pilarSeleccionado = null;
    }
    guardarEstado();

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const activo = document.getElementById(`nav-${vista}`);
    if (activo) activo.classList.add('active');

    renderizarApp();
}

function abrirPilar(pilar) {
    state.pilarSeleccionado = pilar;
    state.vistaActual = 'pilares';
    guardarEstado();
    renderizarApp();
}

function volverAPilares() {
    state.pilarSeleccionado = null;
    guardarEstado();
    renderizarApp();
}

function obtenerTareaDePilar(pilar, nivel) {
    const nivelSeguro = Math.max(1, Math.min(10, nivel));
    return TAREAS_POR_NIVEL[pilar][nivelSeguro];
}

function completarTareaPilar(pilar) {
    const datosPilar = state.pilares[pilar];
    const tarea = obtenerTareaDePilar(pilar, datosPilar.nivel);
    const idTarea = `${pilar}-n${datosPilar.nivel}`;

    if (datosPilar.tareasCompletadasNivel.includes(idTarea)) {
        datosPilar.xp += 25;
    } else {
        datosPilar.tareasCompletadasNivel.push(idTarea);
        datosPilar.xp += 60;
    }

    state.estadisticas.tareasTotalesCompletadas += 1;
    registrarPracticaHoy();

    let subioNivel = false;
    while (datosPilar.xp >= datosPilar.xpNecesario && datosPilar.nivel < 10) {
        datosPilar.xp -= datosPilar.xpNecesario;
        datosPilar.nivel += 1;
        datosPilar.xpNecesario = Math.round(datosPilar.xpNecesario * 1.2);
        datosPilar.tareasCompletadasNivel = [];
        subioNivel = true;
    }

    if (datosPilar.nivel === 10 && datosPilar.xp > datosPilar.xpNecesario) {
        datosPilar.xp = datosPilar.xpNecesario;
    }

    guardarEstado();
    renderizarApp();

    if (subioNivel) {
        mostrarCelebracion(`${pilar.toUpperCase()} — NIVEL ${datosPilar.nivel}`);
    } else {
        mostrarCelebracion(`PRÁCTICA COMPLETADA: ${tarea.titulo.toUpperCase()}`);
    }
}

function responderDilema(indiceOpcion) {
    const dilema = DILEMAS_PORTICO[state.indiceDilema % DILEMAS_PORTICO.length];
    const opcion = dilema.opciones[indiceOpcion];
    if (!opcion) return;

    registrarPracticaHoy();
    if (opcion.correcta) {
        state.estadisticas.pruebasSuperadas += 1;
        const datosPilar = state.pilares[dilema.pilar];
        datosPilar.xp += 50;
        while (datosPilar.xp >= datosPilar.xpNecesario && datosPilar.nivel < 10) {
            datosPilar.xp -= datosPilar.xpNecesario;
            datosPilar.nivel += 1;
            datosPilar.xpNecesario = Math.round(datosPilar.xpNecesario * 1.2);
        }
    }

    state.indiceDilema = (state.indiceDilema + 1) % DILEMAS_PORTICO.length;
    guardarEstado();
    renderizarApp();

    alert(`${opcion.correcta ? '✓ Respuesta sólida en el Pórtico.' : '• Oportunidad de ajuste estoico.'}\n\n${opcion.feedback}`);
}

function guardarEntradaDiario(event) {
    event.preventDefault();
    const pilar = document.getElementById('diario-pilar').value;
    const texto = document.getElementById('diario-texto').value.trim();
    if (!texto) return;

    registrarPracticaHoy();
    state.diario.unshift({
        id: Date.now(),
        fecha: new Date().toLocaleString('es-CO'),
        pilar,
        texto
    });

    const datosPilar = state.pilares[pilar];
    datosPilar.xp += 30;
    while (datosPilar.xp >= datosPilar.xpNecesario && datosPilar.nivel < 10) {
        datosPilar.xp -= datosPilar.xpNecesario;
        datosPilar.nivel += 1;
        datosPilar.xpNecesario = Math.round(datosPilar.xpNecesario * 1.2);
    }

    guardarEstado();
    renderizarApp();
}

function exportarProgreso() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', `stoa_respaldo_${obtenerFechaHoyISO()}.json`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

function importarProgreso(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && imported.pilares && imported.estadisticas) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
                state = cargarEstado();
                sortearFraseApertura();
                renderizarApp();
                alert('Respaldo restaurado correctamente.');
            } else {
                alert('El archivo no tiene un formato válido de STOA.');
            }
        } catch (err) {
            alert('No se pudo leer el archivo de respaldo.');
        }
    };
    reader.readAsText(file);
}

function renderizarBarraEstadisticas() {
    const est = state.estadisticas;
    const pilarDominante = obtenerPilarMasFuerte();
    const hoyPracticado = est.ultimaFechaPractica === obtenerFechaHoyISO();
    const nivelGlobal = calcularNivelGlobal();

    return `
        ${renderizarFrasePoderosa()}

        <div class="philosopher-avatar-container">
            <div class="stoa-guide-figure">
                <img src="${IMAGEN_GUIA_STOA}" alt="STOA — Guía Estoico" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; border:1px dashed var(--gold-primary); border-radius:6px; color:var(--gold-light); font-family:'Montserrat',sans-serif; font-size:0.8rem; padding:8px; text-align:center;">
                    Guarda stoa-guia.png en la carpeta del proyecto
                </div>
            </div>
            <div class="philosopher-info">
                <h3 class="gold-gradient-text">STOA — Tu Guía Estoico (Nivel ${nivelGlobal})</h3>
                <p>"La disciplina diaria moldea el alma como el fuego moldea el acero. Recorre cada pilar con calma y firmeza."</p>
            </div>
        </div>

        <div class="stats-ribbon">
            <div class="stat-box">
                <div class="stat-value">
                    <span class="streak-flame">${est.rachaActual > 0 ? '🔥' : '🕯️'}</span>
                    <span>${est.rachaActual} ${est.rachaActual === 1 ? 'Día' : 'Días'}</span>
                </div>
                <span class="stat-label">Racha (Récord: ${est.mejorRacha})</span>
                <small style="color:${hoyPracticado ? '#ffd147' : 'var(--text-muted)'}; font-size:0.78rem; margin-top:4px;">
                    ${hoyPracticado ? '✓ Práctica cumplida hoy' : 'Practica hoy para mantener tu racha'}
                </small>
            </div>
            <div class="stat-box">
                <div class="stat-value">${est.tareasTotalesCompletadas}</div>
                <span class="stat-label">Ejercicios Ejecutados</span>
            </div>
            <div class="stat-box">
                <div class="stat-value">${est.pruebasSuperadas}</div>
                <span class="stat-label">Pruebas del Pórtico</span>
            </div>
            <div class="stat-box">
                <div class="stat-value" style="font-size:1.15rem;">${pilarDominante}</div>
                <span class="stat-label">Virtud Predominante</span>
            </div>
        </div>
    `;
}

function renderizarDetallePilar(pilar) {
    const datos = state.pilares[pilar];
    const tarea = obtenerTareaDePilar(pilar, datos.nivel);
    const idTarea = `${pilar}-n${datos.nivel}`;
    const yaCompletada = datos.tareasCompletadasNivel.includes(idTarea);
    const progresoPct = Math.min(100, Math.round((datos.xp / datos.xpNecesario) * 100));
    const dilema = DILEMAS_PORTICO.find(d => d.pilar === pilar) || DILEMAS_PORTICO[0];

    return `
        ${renderizarBarraEstadisticas()}

        <div style="margin-bottom: 18px;">
            <button class="btn-small" style="margin-left:0;" onclick="volverAPilares()">← Volver a los Pilares</button>
        </div>

        <div class="portico-card" style="max-width: 100%; margin-bottom: 24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
                <h2 class="gold-gradient-text" style="margin:0; font-size:1.6rem;">${pilar} — Nivel ${datos.nivel} / 10</h2>
                <span style="color:#ffd147; font-family:'Montserrat',sans-serif; font-weight:800; font-size:0.9rem;">
                    XP: ${datos.xp} / ${datos.xpNecesario} (${progresoPct}%)
                </span>
            </div>
            <p style="color:var(--text-muted); font-size:1.1rem; margin-top:0; line-height:1.45;">
                ${FUNDAMENTO_PILARES[pilar]}
            </p>

            <hr style="border:none; border-top:1px solid var(--panel-border); margin: 18px 0;">

            <h3 class="gold-gradient-text" style="margin:0 0 8px 0; font-size:1.2rem;">
                Reto de Nivel ${datos.nivel}: ${tarea.titulo}
            </h3>
            <p style="font-size:1.15rem; margin:0 0 14px 0; line-height:1.45;">
                ${tarea.resumen}
            </p>

            <div style="background: rgba(8, 9, 12, 0.65); border: 1px solid var(--panel-border); border-radius: 4px; padding: 16px; margin-bottom: 16px;">
                <strong style="color:#ffe47a; display:block; margin-bottom:8px; font-size:1.05rem;">Cómo realizar este reto paso a paso:</strong>
                <ol style="margin:0; padding-left:20px; line-height:1.6; font-size:1.08rem;">
                    ${tarea.pasos.map(paso => `<li style="margin-bottom:6px;">${paso}</li>`).join('')}
                </ol>
            </div>

            <div style="background: rgba(212, 155, 26, 0.06); border-left: 3px solid var(--gold-primary); padding: 12px 14px; margin-bottom: 18px; border-radius: 0 4px 4px 0;">
                <div style="font-size:1rem; margin-bottom:6px;"><strong>Fundamento estoico:</strong> ${tarea.fundamento}</div>
                <div style="font-size:1rem; color:#ffe47a;"><strong>Pregunta para tu reflexión:</strong> ${tarea.reflexion}</div>
            </div>

            <button class="btn-small" style="margin-left:0; padding:11px 20px;" onclick="completarTareaPilar('${pilar}')">
                ${yaCompletada ? '✓ Reto Completado (Repetir para +25 XP)' : 'Marcar Reto como Realizado (+60 XP)'}
            </button>
        </div>

        <div class="portico-card" style="max-width: 100%;">
            <h3 class="gold-gradient-text" style="margin:0 0 10px 0; font-size:1.2rem;">Prueba del Pórtico — ${dilema.pilar}</h3>
            <p style="font-size:1.1rem; line-height:1.45;"><strong>Escenario:</strong> ${dilema.escenario}</p>
            <p style="font-size:1.1rem; color:#ffe47a;"><strong>${dilema.pregunta}</strong></p>
            ${dilema.opciones.map((op, i) => `
                <button class="dilema-option" onclick="responderDilema(${i})">${op.texto}</button>
            `).join('')}
        </div>
    `;
}

function renderizarPilares() {
    if (state.pilarSeleccionado && PILARES.includes(state.pilarSeleccionado)) {
        return renderizarDetallePilar(state.pilarSeleccionado);
    }

    const cardsHtml = PILARES.map(pilar => {
        const datos = state.pilares[pilar];
        const tareaActual = obtenerTareaDePilar(pilar, datos.nivel);
        const pct = Math.min(100, Math.round((datos.xp / datos.xpNecesario) * 100));

        return `
            <div class="pillar-card" onclick="abrirPilar('${pilar}')">
                <div>
                    <h3>${pilar}</h3>
                    <p style="margin: 6px 0;">Nivel: ${datos.nivel} / 10</p>
                    <p style="margin: 6px 0; color: var(--text-muted);">Progreso: ${pct}%</p>
                    <p style="margin: 10px 0 0 0; font-size: 0.98rem; color: #cbd5e1; line-height: 1.3;">
                        <em>Reto actual:</em> ${tareaActual.titulo}
                    </p>
                </div>
                <div style="margin-top: 14px;">
                    <span class="btn-small" style="display:inline-block; margin-left:0;">Practicar</span>
                </div>
            </div>
        `;
    }).join('');

    return `
        ${renderizarBarraEstadisticas()}
        <div class="pillar-grid">
            ${cardsHtml}
        </div>
        <div class="backup-bar">
            <button class="btn-small" onclick="exportarProgreso()">Exportar Respaldo</button>
            <label class="btn-small" style="cursor:pointer;">
                Importar Respaldo
                <input type="file" accept=".json" style="display:none;" onchange="importarProgreso(event)">
            </label>
        </div>
    `;
}

function renderizarDiario() {
    const entradasHtml = state.diario.length === 0
        ? `<p style="color:var(--text-muted); font-size:1.1rem;">Aún no has registrado reflexiones en tu bitácora. Escribe cómo aplicaste hoy un principio estoico.</p>`
        : state.diario.map(item => `
            <div class="task-item">
                <div>
                    <div style="color:#ffd147; font-family:'Montserrat',sans-serif; font-weight:800; font-size:0.85rem;">
                        ${item.pilar.toUpperCase()} — ${item.fecha}
                    </div>
                    <p style="margin:8px 0 0 0; font-size:1.1rem; line-height:1.45;">${item.texto}</p>
                </div>
            </div>
        `).join('');

    return `
        ${renderizarBarraEstadisticas()}
        <div class="portico-card" style="margin-bottom: 24px;">
            <h2 class="gold-gradient-text" style="margin-top:0; font-size:1.4rem;">Bitácora de Séneca</h2>
            <p style="color:var(--text-muted); font-size:1.08rem;">
                Revisa tu día: ¿qué hiciste bien, dónde reaccionaste por impulso y cómo actuarás mañana? (+30 XP al pilar elegido)
            </p>
            <form onsubmit="guardarEntradaDiario(event)">
                <div style="margin-bottom: 12px;">
                    <label for="diario-pilar" style="display:block; margin-bottom:6px; color:#ffe47a;">Pilar asociado:</label>
                    <select id="diario-pilar" style="width:100%; padding:10px; background:var(--bg-obsidian); color:var(--text-main); border:1px solid var(--panel-border); border-radius:4px; font-family:'Cormorant Garamond',serif; font-size:1.1rem;">
                        ${PILARES.map(p => `<option value="${p}">${p}</option>`).join('')}
                    </select>
                </div>
                <div style="margin-bottom: 14px;">
                    <label for="diario-texto" style="display:block; margin-bottom:6px; color:#ffe47a;">Tu reflexión:</label>
                    <textarea id="diario-texto" rows="4" required placeholder="Escribe aquí tu práctica, observación o lección del día..." style="width:100%; padding:12px; background:var(--bg-obsidian); color:var(--text-main); border:1px solid var(--panel-border); border-radius:4px; font-family:'Cormorant Garamond',serif; font-size:1.1rem;"></textarea>
                </div>
                <button type="submit" class="btn-small" style="margin-left:0;">Guardar en la Bitácora</button>
            </form>
        </div>
        <div>
            <h3 class="gold-gradient-text" style="font-size:1.2rem; margin-bottom:14px;">Entradas Guardadas</h3>
            ${entradasHtml}
        </div>
    `;
}

function renderizarInsignias() {
    const est = state.estadisticas;
    const cards = INSIGNIAS.map(ins => {
        const desbloqueada = ins.check(est, state.pilares);
        return `
            <div class="badge-card" style="opacity:${desbloqueada ? '1' : '0.55'}; border-color:${desbloqueada ? '#ffd147' : 'var(--panel-border)'};">
                <div class="badge-svg-wrapper">
                    <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" fill="#161a22" stroke="${desbloqueada ? '#ffd147' : '#64748b'}" stroke-width="2.5"/>
                        <circle cx="32" cy="32" r="11" stroke="${desbloqueada ? '#fff3b0' : '#64748b'}" stroke-width="2"/>
                    </svg>
                </div>
                <div style="font-family:'Montserrat',sans-serif; font-weight:800; font-size:0.85rem; color:${desbloqueada ? '#ffe47a' : 'var(--text-muted)'}; margin-bottom:6px;">
                    ${ins.nombre}
                </div>
                <div style="font-size:0.98rem; color:var(--text-muted); line-height:1.3;">
                    ${ins.desc}
                </div>
                <div style="margin-top:8px; font-size:0.8rem; color:${desbloqueada ? '#ffd147' : '#94a3b8'};">
                    ${desbloqueada ? '★ Desbloqueada' : 'Bloqueada'}
                </div>
            </div>
        `;
    }).join('');

    return `
        ${renderizarBarraEstadisticas()}
        <div class="badge-container">
            ${cards}
        </div>
    `;
}

function renderizarApp() {
    actualizarPerfilCabecera();
    const contenedor = document.getElementById('app-content');
    if (!contenedor) return;

    if (state.vistaActual === 'diario') {
        contenedor.innerHTML = renderizarDiario();
    } else if (state.vistaActual === 'insignias') {
        contenedor.innerHTML = renderizarInsignias();
    } else {
        contenedor.innerHTML = renderizarPilares();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    sortearFraseApertura();
    renderizarApp();
});