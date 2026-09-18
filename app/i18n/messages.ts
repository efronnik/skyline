import { pdp } from './pdp'

export const localeList = [
  { id: 'ru', label: 'RU' },
  { id: 'uk', label: 'UA' },
  { id: 'es', label: 'ES' },
  { id: 'en', label: 'EN' }
] as const

export type Locale = (typeof localeList)[number]['id']

function L<T>(ru: T, uk: T, es: T, en: T) {
  return { ru, uk, es, en } as const
}

export const messages = {
  skip: L('К содержанию', 'До змісту', 'Saltar al contenido', 'Skip to content'),
  brandAria: L('LIMEN — на главную', 'LIMEN — на головну', 'LIMEN — inicio', 'LIMEN — home'),
  navAria: L('Основная навигация', 'Основна навігація', 'Navegación principal', 'Main navigation'),
  menuAria: L('Меню', 'Меню', 'Menú', 'Menu'),
  menuOpen: L('Открыть меню', 'Відкрити меню', 'Abrir menú', 'Open menu'),
  menuClose: L('Закрыть меню', 'Закрити меню', 'Cerrar menú', 'Close menu'),
  langAria: L('Язык', 'Мова', 'Idioma', 'Language'),

  nav: {
    collection: L('Наша продукция', 'Наша продукція', 'Nuestra producción', 'Our products'),
    finished: L('Отделка', 'Оздоблення', 'Acabado', 'Finish'),
    size: L('Размер', 'Розмір', 'Medida', 'Size'),
    hardware: L('Фурнитура', 'Фурнітура', 'Herrajes', 'Hardware'),
    technology: L('Технология', 'Технологія', 'Tecnología', 'Technology'),
    projects: L('Проекты', 'Проєкти', 'Proyectos', 'Projects'),
    contact: L('Заявка', 'Заявка', 'Consulta', 'Inquiry'),
    quote: L('Рассчитать проект', 'Розрахувати проєкт', 'Calcular el proyecto', 'Request a quote'),
    ask: L('Задать вопрос', 'Задати питання', 'Hacer una pregunta', 'Ask a question'),
    about: L('О студии', 'Про студію', 'Estudio', 'Studio'),
    partners: L('Партнёрам', 'Партнерам', 'Partners', 'Partners')
  },

  footer: {
    studio: L('Студия', 'Студія', 'Estudio', 'Studio'),
    collection: L('Наша продукция', 'Наша продукція', 'Nuestra producción', 'Our products'),
    contact: L('Контакт', 'Контакт', 'Contacto', 'Contact'),
    directions: L('Как добраться', 'Як дістатися', 'Cómo llegar', 'Directions'),
    addressNote: L('Адрес появится после заполнения карточки студии.', 'Адреса з’явиться після заповнення картки студії.', 'La dirección aparecerá cuando se complete la ficha del estudio.', 'The address will appear once the studio card is filled in.')
  },

  seo: {
    homeTitle: L('Двери скрытого монтажа iDOORS', 'Двері прихованого монтажу iDOORS', 'Puertas de instalación oculta iDOORS', 'iDOORS flush doors'),
    homeDesc: L(
      'Двери скрытого монтажа iDOORS под финишную отделку: короб из анодированного алюминия, скрытые петли, полотно вровень со стеной.',
      'Двері прихованого монтажу iDOORS під фінішне оздоблення: короб з анодованого алюмінію, приховані петлі, полотно врівень зі стіною.',
      'Puertas de instalación oculta iDOORS para el acabado: marco de aluminio anodizado, bisagras ocultas, hoja al ras del muro.',
      'iDOORS flush doors for finishing: anodized aluminium frame, concealed hinges, leaf flush with the wall.'
    )
  },

  hero: {
    spec: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
    title: L('Двери скрытого монтажа', 'Двері прихованого монтажу', 'Puertas de instalación oculta', 'Flush doors'),
    lead: L(
      'Под ваши желания.',
      'Під ваші бажання.',
      'A medida de lo que queréis.',
      'Made to what you want.'
    ),
    cta1: L('Задать вопрос', 'Задати питання', 'Hacer una pregunta', 'Ask a question'),
    cta2: L('Рассчитать заказ', 'Розрахувати замовлення', 'Calcular el pedido', 'Request an order'),
    alt: L(
      'Скрытая дверь iDOORS в интерьере',
      'Приховані двері iDOORS в інтер’єрі',
      'Puerta oculta iDOORS en un interior',
      'iDOORS flush door in an interior'
    )
  },

  studio: {
    kicker: L('iDOORS', 'iDOORS', 'iDOORS', 'iDOORS'),
    spec: L('Испания · Португалия', 'Іспанія · Португалія', 'España · Portugal', 'Spain · Portugal'),
    title: L('О компании iDOORS', 'Про компанію iDOORS', 'Sobre iDOORS', 'About iDOORS'),
    paragraphs: L(
      [
        'iDOORS — официальное представительство одного из крупнейших дверных производств Украины и Восточной Европы на территории Испании и Португалии.',
        'Мы специализируемся на проектировании, комплектации и прямых поставках современных систем дверей скрытого монтажа (под отделку, шпон, зеркало, стекло) — как в стандартных габаритах, так и по индивидуальным размерам высотой до 2400 мм.',
        'Объединяя мощности высокотехнологичного европейского завода, итальянскую фурнитуру и локальный склад в Испании, мы обеспечиваем строительный сектор Пиренейского полуострова надёжными инженерными решениями «под ключ».'
      ],
      [
        'iDOORS — офіційне представництво одного з найбільших дверних виробництв України та Східної Європи на території Іспанії та Португалії.',
        'Ми спеціалізуємося на проєктуванні, комплектації та прямих поставках сучасних систем дверей прихованого монтажу (під оздоблення, шпон, дзеркало, скло) — як у стандартних габаритах, так і за індивідуальними розмірами висотою до 2400 мм.',
        'Об’єднуючи потужності високотехнологічного європейського заводу, італійську фурнітуру та локальний склад в Іспанії, ми забезпечуємо будівельний сектор Піренейського півострова надійними інженерними рішеннями «під ключ».'
      ],
      [
        'iDOORS es la representación oficial en España y Portugal de una de las mayores fábricas de puertas de Ucrania y Europa del Este.',
        'Nos especializamos en el diseño, la configuración y el suministro directo de sistemas contemporáneos de puertas de instalación oculta (para acabado, chapa, espejo, vidrio), tanto en medidas estándar como a medida, con altura hasta 2400 mm.',
        'Al unir la capacidad de una fábrica europea de alta tecnología, herrajes italianos y un almacén local en España, damos al sector de la construcción de la península ibérica soluciones de ingeniería llave en mano y fiables.'
      ],
      [
        'iDOORS is the official representation in Spain and Portugal of one of the largest door manufacturers in Ukraine and Eastern Europe.',
        'We specialise in design, specification and direct supply of contemporary flush door systems (for finishing, veneer, mirror, glass) — in standard sizes and made to measure, with height up to 2400 mm.',
        'Combining a high-tech European factory, Italian hardware and a local warehouse in Spain, we supply the Iberian construction sector with reliable turnkey engineering solutions.'
      ]
    )
  },

  philosophy: {
    kicker: L('Философия', 'Філософія', 'Filosofía', 'Philosophy'),
    spec: L('01 — iDOORS Prime', '01 — iDOORS Prime', '01 — iDOORS Prime', '01 — iDOORS Prime'),
    not: L('Не дверь.', 'Не двері.', 'No es una puerta.', 'Not a door.'),
    title: L('Продолжение архитектуры.', 'Продовження архітектури.', 'Continuación de la arquitectura.', 'A continuation of architecture.'),
    text: L(
      'Скрытый монтаж убирает коробку, наличник и видимые петли. Полотно стоит заподлицо со стеной и может быть окрашено в тот же цвет.',
      'Прихований монтаж прибирає коробку, лиштву й видимі петлі. Полотно стоїть запідлицо зі стіною і може бути пофарбоване в той самий колір.',
      'La instalación oculta elimina marco, tapajuntas y bisagras vistas. La hoja queda al ras y puede pintarse del mismo color.',
      'Concealed installation removes the frame, architrave and visible hinges. The leaf sits flush and can be painted the same colour.'
    ),
    points: L(
      ['Плоскость стены и полотна совпадают', 'Коробка спрятана в конструкции', 'Петли не видны с фасада', 'Зазор читается как шов, а не как рама'],
      ['Площина стіни і полотна збігаються', 'Коробка схована в конструкції', 'Петлі не видно з фасаду', 'Зазор читається як шов, а не як рама'],
      ['El muro y la hoja quedan en el mismo plano', 'El marco queda dentro del muro', 'Las bisagras no se ven de frente', 'La junta se lee como una costura, no como un marco'],
      ['Wall and leaf share one plane', 'The frame is hidden in the construction', 'Hinges are invisible from the front', 'The gap reads as a joint, not a frame']
    ),
    cap: L('Стена → дверь → одна поверхность', 'Стіна → двері → одна поверхня', 'Muro → puerta → una superficie', 'Wall → door → one surface'),
    alt: L('Стена с интегрированной скрытой дверью после отделки', 'Стіна з інтегрованими прихованими дверима після оздоблення', 'Muro con puerta oculta integrada tras el acabado', 'Wall with an integrated flush door after finishing')
  },

  collection: {
    kicker: L('IDOORS', 'IDOORS', 'IDOORS', 'IDOORS'),
    spec: L('02 — iDOORS Prime', '02 — iDOORS Prime', '02 — iDOORS Prime', '02 — iDOORS Prime'),
    title: L('iDOORS Prime.', 'iDOORS Prime.', 'iDOORS Prime.', 'iDOORS Prime.'),
    hint: L(
      'Под финишную отделку. На себя (Outside) или от себя / реверс (Inside). Кромка и короб: натуральный алюминий (серебро) или чёрный матовый (RAL 9005).',
      'Під фінішне оздоблення. На себе (Outside) або від себе / реверс (Inside). Крайка і короб: натуральний алюміній (срібло) або чорний матовий (RAL 9005).',
      'Para el acabado. Hacia sí (Outside) o reverso (Inside). Canto y marco: aluminio natural (plata) o negro mate (RAL 9005).',
      'For finishing. Towards you (Outside) or reverse (Inside). Edge and frame: natural aluminium (silver) or matt black (RAL 9005).'
    ),
    shelfAria: L('Четыре варианта iDOORS Prime, листайте в сторону', 'Чотири варіанти iDOORS Prime, гортайте вбік', 'Cuatro variantes iDOORS Prime, deslice hacia el lado', 'Four iDOORS Prime variants, swipe sideways'),
    doorColor: L('Цвет двери', 'Колір дверей', 'Color de la puerta', 'Door colour'),
    edgeColor: L('Цвет кромки', 'Колір кромки', 'Color del canto', 'Edge colour'),
    trioAlt: L(
      'iDOORS Prime: открывание от себя, закрытое положение и открывание на себя',
      'iDOORS Prime: відчиняння від себе, закрите положення і відчиняння на себе',
      'iDOORS Prime: apertura inversa, posición cerrada y apertura hacia sí',
      'iDOORS Prime: reverse opening, closed position and opening towards you'
    ),
    interiors: L('В интерьере', 'В інтер’єрі', 'En el interior', 'In interiors'),
    views: {
      inside: L('INSIDE · обратное', 'INSIDE · зворотне', 'INSIDE · inversa', 'INSIDE · reverse'),
      closed: L('Закрыто', 'Закрито', 'Cerrada', 'Closed'),
      direct: L('Standard · прямое', 'Standard · пряме', 'Standard · directa', 'Standard · direct')
    },
    interiorAlts: {
      pair: L('Две белые скрытые двери с чёрной кромкой', 'Дві білі приховані двері з чорною кромкою', 'Dos puertas ocultas blancas con canto negro', 'Two white flush doors with black edging'),
      corner: L('Угол с двумя белыми скрытыми дверями', 'Кут із двома білими прихованими дверима', 'Rincón con dos puertas ocultas blancas', 'Corner with two white flush doors'),
      corridor: L('Коридор с белыми скрытыми дверями', 'Коридор із білими прихованими дверима', 'Pasillo con puertas ocultas blancas', 'Corridor with white flush doors'),
      room: L('Белая скрытая дверь в жилом холле', 'Білі приховані двері в житловому холі', 'Puerta oculta blanca en un hall residencial', 'White flush door in a residential hall')
    },
    facts: {
      leaf: L('Заводской грунт under-paint', 'Заводський ґрунт under-paint', 'Imprimación under-paint de fábrica', 'Factory under-paint primer'),
      frame: L('Анодированный короб Prime', 'Анодований короб Prime', 'Marco Prime anodizado', 'Anodized Prime frame'),
      swing: L('Outside / Inside', 'Outside / Inside', 'Outside / Inside', 'Outside / Inside'),
      wall: L('Гипсокартон или кирпич', 'Гіпсокартон або цегла', 'Pladur o ladrillo', 'Drywall or brick')
    }
  },

  offers: {
    primed: {
      kicker: L('iDOORS', 'iDOORS', 'iDOORS', 'iDOORS'),
      spec: L('01 — Finish', '01 — Finish', '01 — Finish', '01 — Finish'),
      title: L(
        'Двери скрытого монтажа iDOORS под финишную отделку',
        'Двері прихованого монтажу iDOORS під фінішне оздоблення',
        'Puertas de instalación oculta iDOORS para el acabado',
        'iDOORS flush doors for finishing'
      ),
      text: L(
        'Идеальное решение для стильных современных интерьеров, где важна каждая деталь. Прочный короб из анодированного алюминия и скрытые петли позволяют установить дверь абсолютно вровень со стеной. Воплощайте любые дизайнерские задумки — полотно полностью готово под покраску, декоративную штукатурку или обои. Создайте эффект безупречной монолитной стены и визуально расширьте пространство вашего дома!',
        'Ідеальне рішення для стильних сучасних інтер’єрів, де важлива кожна деталь. Міцний короб з анодованого алюмінію і приховані петлі дають встановити двері абсолютно врівень зі стіною. Втілюйте будь-які дизайнерські задуми — полотно повністю готове під фарбування, декоративну штукатурку або шпалери. Створіть ефект бездоганної монолітної стіни і візуально розширіть простір вашого дому!',
        'La solución para interiores contemporáneos donde cuenta cada detalle. Un marco robusto de aluminio anodizado y bisagras ocultas permiten instalar la puerta totalmente al ras del muro. Cualquier idea de diseño: la hoja llega lista para pintura, enlucido decorativo o papel. El efecto de un muro monolítico impecable, y el espacio de la casa se agranda a la vista.',
        'The solution for precise contemporary interiors. A robust anodized aluminium frame and concealed hinges let the door sit fully flush with the wall. Carry any design through — the leaf is ready for paint, decorative plaster or wallpaper. A seamless monolithic wall, and the house reads larger.'
      ),
      alt: L(
        'Скрытая дверь iDOORS в плоскости стены после отделки',
        'Приховані двері iDOORS у площині стіни після оздоблення',
        'Puerta oculta iDOORS al ras del muro tras el acabado',
        'iDOORS flush door in the wall plane after finishing'
      )
    },
    finished: {
      kicker: L('iDOORS', 'iDOORS', 'iDOORS', 'iDOORS'),
      spec: L('02 — Surface', '02 — Surface', '02 — Surface', '02 — Surface'),
      title: L(
        'Скрытые двери iDOORS с готовой отделкой',
        'Приховані двері iDOORS із готовою обробкою',
        'Puertas ocultas iDOORS con acabado de fábrica',
        'iDOORS flush doors with factory finish'
      ),
      text: L(
        'Превратите двери в ключевой акцент вашего интерьера или сделайте их элегантным продолжением стен. Мы предлагаем готовые премиальные решения: благородный натуральный шпон, стильные зеркальные полотна, визуально расширяющие пространство, или безупречное окрашивание в любой цвет по каталогу RAL. Безупречное заводское качество покрытия, алюминиевая кромка и надёжные скрытые механизмы для тех, кто не компрометирует стиль.',
        'Перетворіть двері на ключовий акцент інтер’єру або зробіть їх елегантним продовженням стін. Пропонуємо готові преміальні рішення: шляхетний натуральний шпон, стильні дзеркальні полотна, що візуально розширюють простір, або бездоганне фарбування в будь-який колір за каталогом RAL. Заводська якість покриття, алюмінієва крайка і надійні приховані механізми для тих, хто не поступається стилем.',
        'Convierta la puerta en el acento del interior o en la continuación elegante del muro. Soluciones premium listas: chapa natural, hojas de espejo que agrandan el espacio, o lacado en cualquier color RAL. Calidad de fábrica, canto de aluminio y herrajes ocultos para quien no cede en el estilo.',
        'Make the door the accent of the room, or an elegant continuation of the wall. Ready premium options: natural veneer, mirror leaves that widen the space, or a factory paint in any RAL colour. Factory coating, aluminium edge and concealed hardware for interiors that do not compromise on style.'
      ),
      alt: L(
        'Скрытая дверь iDOORS с готовой отделкой в интерьере',
        'Приховані двері iDOORS із готовою обробкою в інтер’єрі',
        'Puerta oculta iDOORS con acabado de fábrica en un interior',
        'Factory-finished iDOORS flush door in an interior'
      )
    },
    size: {
      kicker: L('iDOORS', 'iDOORS', 'iDOORS', 'iDOORS'),
      spec: L('03 — Size', '03 — Size', '03 — Size', '03 — Size'),
      title: L(
        'Двери скрытого монтажа iDOORS — Под ваш размер',
        'Двері прихованого монтажу iDOORS — Під ваш розмір',
        'Puertas de instalación oculta iDOORS — A su medida',
        'iDOORS flush doors — Made to your size'
      ),
      text: L(
        'Создавайте архитектурные решения без стандартных ограничений! Мы изготавливаем двери скрытого монтажа по индивидуальным габаритам высотой до 2400 мм. Высокие дверные полотна визуально приподнимают потолки, вытягивают пространство и придают интерьеру премиальный статус. Идеальное решение для нестандартных проёмов и масштабных дизайнерских проектов.',
        'Створюйте архітектурні рішення без стандартних обмежень. Виготовляємо двері прихованого монтажу за індивідуальними габаритами висотою до 2400 мм. Високі полотна візуально піднімають стелі, витягують простір і надають інтер’єру преміальний статус. Ідеальне рішення для нестандартних прорізів і масштабних дизайнерських проєктів.',
        'Arquitectura sin el límite del estándar. Fabricamos puertas de instalación oculta a medida, de hasta 2400 mm de altura. Las hojas altas elevan el techo a la vista, alargan el espacio y dan al interior un carácter premium. La solución para huecos fuera de norma y encargos de escala.',
        'Architecture without the standard limit. We build flush doors to individual sizes, up to 2400 mm high. Tall leaves lift the ceiling, stretch the room and give the interior a premium register. The solution for non-standard openings and large design projects.'
      ),
      alt: L(
        'Высокая скрытая дверь iDOORS в проёме',
        'Високі приховані двері iDOORS у прорізі',
        'Puerta oculta iDOORS de gran altura en el hueco',
        'Tall iDOORS flush door in an opening'
      )
    },
    hardware: {
      kicker: L('Spinoff', 'Spinoff', 'Spinoff', 'Spinoff'),
      spec: L('04 — Hardware', '04 — Hardware', '04 — Hardware', '04 — Hardware'),
      title: L(
        'Дверные ручки и замки Spinoff',
        'Дверні ручки і замки Spinoff',
        'Manillas y cerraduras Spinoff',
        'Spinoff handles and locks'
      ),
      text: L(
        'Идеальное дополнение к дверям скрытого монтажа — премиальная фурнитура Spinoff. Итальянский минимализм, чёткая геометрия и безупречная эргономика. Замки Spinoff с магнитным язычком обеспечивают абсолютно бесшумное закрывание, а ручки с износостойким galvanic-покрытием сохраняют первозданный вид даже при активном ежедневном использовании. Подчеркните стиль вашего интерьера надёжными деталями.',
        'Ідеальне доповнення до дверей прихованого монтажу — преміальна фурнітура Spinoff. Італійський мінімалізм, чітка геометрія і бездоганна ергономіка. Замки Spinoff з магнітним язичком забезпечують абсолютно безшумне зачинення, а ручки зі зносостійким galvanic-покриттям зберігають первісний вигляд навіть за щоденного користування. Підкресліть стиль інтер’єру надійними деталями.',
        'El complemento de la puerta oculta: herrajes premium Spinoff. Minimalismo italiano, geometría clara y ergonomía precisa. Las cerraduras Spinoff con pestillo magnético cierran en silencio, y las manillas con recubrimiento galvanic resisten el uso diario. El estilo del interior, en los detalles que duran.',
        'The counterpart to a flush door: Spinoff premium hardware. Italian minimalism, clear geometry, exact ergonomics. Spinoff locks with a magnetic latch close in silence, and handles with a wear-resistant galvanic finish keep their look in daily use. The interior, carried by the details.'
      ),
      alt: L(
        'Дверная ручка Spinoff на полотне скрытой двери',
        'Дверна ручка Spinoff на полотні прихованих дверей',
        'Manilla Spinoff en una hoja de puerta oculta',
        'Spinoff handle on a flush-door leaf'
      ),
      comingSoon: L(
        'Каталог ручек и замков Spinoff скоро появится здесь. Пока напишите нам — подберём под ваш проект.',
        'Каталог ручок і замків Spinoff незабаром з'явиться тут. Поки напишіть нам — підберемо під ваш проєкт.',
        'El catálogo de manillas y cerraduras Spinoff estará aquí pronto. Por ahora escríbanos — lo seleccionamos para su proyecto.',
        'The Spinoff handles and locks catalogue is coming soon. Write to us in the meantime — we will match it to your project.'
      )
    }
  },

  materials: {
    kicker: L('Материалы', 'Матеріали', 'Materiales', 'Materials'),
    spec: L('02 — Surface', '02 — Surface', '02 — Surface', '02 — Surface'),
    title: L('Сначала поверхность, потом проём.', 'Спочатку поверхня, потім проріз.', 'Primero la superficie, luego el hueco.', 'Surface first, opening second.'),
    items: {
      paint: {
        name: L('Грунт / окраска', 'Ґрунт / фарбування', 'Imprimación / pintura', 'Primer / paint'),
        category: L('Paint', 'Paint', 'Paint', 'Paint'),
        summary: L(
          'Базовый финиш: та же краска, что и стена. Предпочтительны водные акриловые и акрил-силиконовые эмульсии.',
          'Базовий фініш: та сама фарба, що й стіна. Краще водні акрилові та акрил-силіконові емульсії.',
          'Acabado base: la misma pintura que el muro. Preferibles emulsiones acrílicas o acrílico-siliconadas al agua.',
          'The base finish: the same paint as the wall. Water-based acrylic and acrylic-silicone emulsions are preferred.'
        ),
        notes: L('Финиш выполняется вместе с отделкой стен. Цвет задаёт проект, не каталог.', 'Фініш виконується разом з оздобленням стін. Колір задає проєкт, не каталог.', 'El acabado se ejecuta con los muros. El color lo define el proyecto, no el catálogo.', 'The finish is done with the walls. Colour comes from the project, not a catalogue.')
      },
      wallpaper: {
        name: L('Обои', 'Шпалери', 'Papel', 'Wallpaper'),
        category: L('Wallpaper', 'Wallpaper', 'Wallpaper', 'Wallpaper'),
        summary: L(
          'Тяжелее краски: сначала алкидный грунт, затем обычная поклейка. Если обои только с одной стороны — два выпрямителя в полотне.',
          'Важчі за фарбу: спочатку алкідний ґрунт, далі звичайне наклеювання. Якщо шпалери лише з одного боку — два випрямлячі в полотні.',
          'Más peso que la pintura: imprimación alquídica y luego el papel. Si es solo por una cara, dos tensores en la hoja.',
          'Heavier than paint: alkyd primer first, then a normal hang. Wallpaper on one face only needs two leaf straighteners.'
        ),
        notes: L('Односторонняя поклейка без второго выпрямителя снимает гарантию на прогиб.', 'Однобічне наклеювання без другого випрямляча знімає гарантію на прогин.', 'El empapelado a una cara sin el segundo tensor anula la garantía de alabeo.', 'One-sided hanging without the second straightener voids the warp warranty.')
      },
      plaster: {
        name: L('Декоративная штукатурка', 'Декоративна штукатурка', 'Enlucido decorativo', 'Decorative plaster'),
        category: L('Plaster', 'Plaster', 'Plaster', 'Plaster'),
        summary: L(
          'Слой до 1,5 мм — не выше алюминиевой кромки. Толще — без гарантии на прогиб. Жидкие обои считаются штукатуркой.',
          'Шар до 1,5 мм — не вище алюмінієвої кромки. Товстіший — без гарантії на прогин. Рідкі шпалери рахуються як штукатурка.',
          'Capa de hasta 1,5 mm, sin rebasar el canto de aluminio. Más espesor anula la garantía de alabeo. El papel líquido cuenta como enlucido.',
          'Coat up to 1.5 mm — not proud of the aluminium edge. Thicker voids the warp warranty. Liquid wallpaper counts as plaster.'
        ),
        notes: L('Односторонняя штукатурка — два выпрямителя, независимо от высоты полотна.', 'Однобічна штукатурка — два випрямлячі, незалежно від висоти полотна.', 'Enlucido a una cara: dos tensores, da igual la altura de la hoja.', 'One-sided plaster needs two straighteners, whatever the leaf height.')
      }
    }
  },

  technology: {
    kicker: L('Технология', 'Технологія', 'Tecnología', 'Technology'),
    spec: L('04 — Construction', '04 — Construction', '04 — Construction', '04 — Construction'),
    title: L('Алюминиевый короб iDoors.', 'Алюмінієвий короб iDoors.', 'Marco de aluminio iDoors.', 'iDoors aluminium frame.'),
    lead: L(
      'Standard открывается в сторону плоскости. INSIDE — заподлицо с одной стороны, открывается в другую. Рядом, закрытые, выглядят одинаково.',
      'Standard відчиняється в бік площини. INSIDE — запідлицо з одного боку, відчиняється в інший. Поруч, зачинені, виглядають однаково.',
      'Standard abre hacia el plano. INSIDE queda al ras por un lado y abre al contrario. Cerradas, juntas, se ven iguales.',
      'Standard opens toward the flush face. INSIDE is flush on one side and opens the other way. Closed, side by side, they look the same.'
    ),
    wall: L('Гипсокартон · кирпич / штукатурка', 'Гіпсокартон · цегла / штукатурка', 'Pladur · ladrillo / yeso', 'Drywall · brick / plaster'),
    hProfile: L('Соединительный H-профиль для расширителей', 'З’єднувальний H-профіль для розширювачів', 'Perfil H de unión para ensanches', 'Connecting H-profile for extensions'),
    facts: {
      leaf: L('Полотно', 'Полотно', 'Hoja', 'Leaf'),
      opening: L('Проём', 'Проріз', 'Hueco', 'Opening'),
      mdf: L('МДФ', 'МДФ', 'MDF', 'MDF'),
      fill: L('Заполнение', 'Заповнення', 'Relleno', 'Core'),
      fillValue: L('Соты или вспененный полиэтилен', 'Соти або спінений поліетилен', 'Nido de abeja o polietileno expandido', 'Honeycomb or expanded polyethylene'),
      sound: L('Звук', 'Звук', 'Sonido', 'Sound'),
      cycles: L('Циклы', 'Цикли', 'Ciclos', 'Cycles')
    },
    frames: {
      out: {
        title: L('Standard · наружу', 'Standard · назовні', 'Standard · fuera', 'Standard · outward'),
        alt: L(
          'Алюминиевый короб iDoors Standard, наружное открывание, гипсокартон и кирпич',
          'Алюмінієвий короб iDoors Standard, зовнішнє відкривання, гіпсокартон і цегла',
          'Marco de aluminio iDoors Standard, apertura exterior, pladur y ladrillo',
          'iDoors Standard aluminium frame, external opening, drywall and brick'
        )
      },
      in: {
        title: L('INSIDE · внутрь', 'INSIDE · всередину', 'INSIDE · dentro', 'INSIDE · inward'),
        alt: L(
          'Алюминиевый короб iDoors INSIDE, обратное открывание, гипсокартон и кирпич',
          'Алюмінієвий короб iDoors INSIDE, зворотне відкривання, гіпсокартон і цегла',
          'Marco de aluminio iDoors INSIDE, apertura inversa, pladur y ladrillo',
          'iDoors INSIDE aluminium frame, reverse opening, drywall and brick'
        )
      }
    },
    diagram: L('Скрытая коробка · петли · flush-полотно', 'Прихована коробка · петлі · flush-полотно', 'Marco oculto · bisagras · hoja flush', 'Hidden frame · hinges · flush leaf'),
    diagramAria: L('Схема скрытой двери', 'Схема прихованих дверей', 'Esquema de la puerta oculta', 'Flush door diagram'),
    steps: {
      frame: {
        title: L('Hidden Frame', 'Hidden Frame', 'Hidden Frame', 'Hidden Frame'),
        text: L(
          'Анодированный алюминиевый короб. Штукатурная сетка на стыке со стеной. Пластиковые заглушки в местах петель.',
          'Анодований алюмінієвий короб. Штукатурна сітка на стику зі стіною. Пластикові заглушки в місцях петель.',
          'Marco de aluminio anodizado. Malla de yeso en el encuentro con el muro. Tapones de plástico en las bisagras.',
          'Anodized aluminium frame. Plaster mesh at the wall joint. Plastic plugs at the hinge seats.'
        )
      },
      hinges: {
        title: L('Invisible Hinges', 'Invisible Hinges', 'Invisible Hinges', 'Invisible Hinges'),
        text: L(
          'Скрытые петли ANSELMI. Хром, чёрный, белый, матовое золото.',
          'Приховані петлі ANSELMI. Хром, чорний, білий, матове золото.',
          'Bisagras ocultas ANSELMI. Cromo, negro, blanco, oro mate.',
          'ANSELMI concealed hinges. Chrome, black, white, matt gold.'
        )
      },
      leaf: {
        title: L('Flush Leaf', 'Flush Leaf', 'Flush Leaf', 'Flush Leaf'),
        text: L(
          'Каркас из переклеенного массива, соты, МДФ 6 мм (Standard) или 8 мм (INSIDE). Торец — анод серебро или чёрный. Выпрямители в стойках.',
          'Каркас із переклеєного масиву, соти, МДФ 6 мм (Standard) або 8 мм (INSIDE). Торець — анод срібло або чорний. Випрямлячі в стояках.',
          'Bastidor de madera laminada, nido de abeja, MDF de 6 mm (Standard) u 8 mm (INSIDE). Canto anodizado plata o negro. Tensores en los montantes.',
          'Laminated timber core, honeycomb, 6 mm MDF (Standard) or 8 mm (INSIDE). Anodized silver or black edge. Straighteners in the stiles.'
        )
      },
      install: {
        title: L('Precise Install', 'Precise Install', 'Precise Install', 'Precise Install'),
        text: L(
          'Зазор 30 мм по высоте, 30–40 мм по ширине. Наличника нет — проём должен быть ровным. Край короба работает как маяк.',
          'Зазор 30 мм по висоті, 30–40 мм по ширині. Лиштви немає — проріз має бути рівним. Край короба працює як маяк.',
          'Junta de 30 mm en altura y 30–40 mm en ancho. Sin tapajuntas: el hueco tiene que estar a plomo. El canto del marco hace de maestra.',
          '30 mm height clearance, 30–40 mm on width. No architrave — the opening must be true. The frame edge acts as a screed bead.'
        )
      },
      finish: {
        title: L('Final Finish', 'Final Finish', 'Final Finish', 'Final Finish'),
        text: L(
          'Покраска, обои или штукатурка по праймированной плёнке. Штукатурка до 1,5 мм. Односторонний финиш — два выпрямителя.',
          'Фарбування, шпалери або штукатурка по праймованій плівці. Штукатурка до 1,5 мм. Однобічний фініш — два випрямлячі.',
          'Pintura, papel o enlucido sobre la lámina imprimada. Enlucido hasta 1,5 mm. Acabado a una cara: dos tensores.',
          'Paint, wallpaper or plaster on the primed film. Plaster up to 1.5 mm. One-sided finish needs two straighteners.'
        )
      }
    }
  },

  beforeAfter: {
    kicker: L('Сравнение', 'Порівняння', 'Comparación', 'Compare'),
    spec: L('05 — Before / After', '05 — Before / After', '05 — Before / After', '05 — Before / After'),
    title: L('Обычная дверь. Затем — стена.', 'Звичайні двері. Потім — стіна.', 'Una puerta convencional. Luego, el muro.', 'A conventional door. Then — the wall.'),
    before: L('Дверь', 'Двері', 'Puerta', 'Door'),
    after: L('Стена', 'Стіна', 'Muro', 'Wall'),
    aria: L('Сравнить дверь и стену', 'Порівняти двері і стіну', 'Comparar puerta y muro', 'Compare door and wall'),
    altAfter: L('Скрытая дверь в цвет стены в конце коридора', 'Приховані двері в колір стіни в кінці коридору', 'Puerta oculta del color del muro al fondo del pasillo', 'Flush door in the wall colour at the end of the corridor'),
    altBefore: L('Скрытые двери: одно полотно приоткрыто', 'Приховані двері: одне полотно прочинене', 'Puertas ocultas: una hoja entreabierta', 'Flush doors with one leaf slightly open')
  },

  projects: {
    kicker: L('Сценарии', 'Сценарії', 'Escenarios', 'Scenarios'),
    spec: L('06 — Spaces', '06 — Spaces', '06 — Spaces', '06 — Spaces'),
    title: L('Дверь в пространстве, не в каталоге.', 'Двері в просторі, не в каталозі.', 'La puerta en el espacio, no en el catálogo.', 'The door in the room, not in a catalogue.'),
    lead: L(
      'Белое полотно, алюминиевая кромка.',
      'Біле полотно, алюмінієва кромка.',
      'Hoja blanca, canto de aluminio.',
      'White leaf, aluminium edge.'
    ),
    open: L('Открыть', 'Відкрити', 'Abrir', 'Open'),
    story: L('История', 'Історія', 'Historia', 'Story'),
    solution: L('Решение', 'Рішення', 'Solución', 'Solution'),
    result: L('Результат', 'Результат', 'Resultado', 'Result'),
    meta: {
      type: L('Тип', 'Тип', 'Tipo', 'Type'),
      setting: L('Контекст', 'Контекст', 'Contexto', 'Setting'),
      system: L('Система', 'Система', 'Sistema', 'System'),
      finish: L('Отделка', 'Оздоблення', 'Acabado', 'Finish'),
      size: L('Размеры', 'Розміри', 'Medidas', 'Dimensions'),
      status: L('Статус', 'Статус', 'Estado', 'Status')
    },
    items: {
      anfilade: {
        title: L('Жилая квартира', 'Житлова квартира', 'Vivienda', 'Apartment'),
        typology: L('Квартира', 'Квартира', 'Vivienda', 'Apartment'),
        setting: L('Объект', 'Об’єкт', 'Obra', 'Project'),
        yearLabel: L('Объект', 'Об’єкт', 'Obra', 'Installed'),
        product: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Два проёма на смежных стенах. Полотно белое, в плоскости штукатурки.',
          'Два прорізи на суміжних стінах. Полотно біле, у площині штукатурки.',
          'Dos huecos en muros contiguos. Hoja blanca, al ras del enlucido.',
          'Two openings on adjacent walls. White leaf, flush with the plaster.'
        ),
        solution: L(
          'iDOORS Prime с чёрной алюминиевой кромкой. Наличник отсутствует.',
          'iDOORS Prime із чорною алюмінієвою кромкою. Лиштви немає.',
          'iDOORS Prime con canto de aluminio negro. Sin tapajuntas.',
          'iDOORS Prime with a black aluminium edge. No architrave.'
        ),
        result: L(
          'Стена читается целиком. Дверь — шов и ручка.',
          'Стіна читається цілком. Двері — шов і ручка.',
          'El muro se lee entero. La puerta es junta y manilla.',
          'The wall reads as a whole. The door is a joint and a handle.'
        )
      },
      gallery: {
        title: L('Коридор', 'Коридор', 'Pasillo', 'Corridor'),
        typology: L('Коридор', 'Коридор', 'Pasillo', 'Corridor'),
        setting: L('Объект', 'Об’єкт', 'Obra', 'Project'),
        yearLabel: L('Объект', 'Об’єкт', 'Obra', 'Installed'),
        product: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Длинный объём. Белые полотна стоят в плоскости стен, коробка не читается.',
          'Довгий об’єм. Білі полотна стоять у площині стін, коробка не читається.',
          'Un volumen largo. Hojas blancas al ras; el marco no se lee.',
          'A long volume. White leaves sit in the wall plane; the frame does not read.'
        ),
        solution: L(
          'iDOORS Prime с чёрной кромкой. Проёмы на торце и по ходу коридора.',
          'iDOORS Prime із чорною кромкою. Прорізи на торці й уздовж коридору.',
          'iDOORS Prime con canto negro. Huecos al fondo y a lo largo del pasillo.',
          'iDOORS Prime with a black edge. Openings at the end and along the corridor.'
        ),
        result: L(
          'Коридор остаётся архитектурой, а не набором дверных блоков.',
          'Коридор лишається архітектурою, а не набором дверних блоків.',
          'El pasillo sigue siendo arquitectura, no una serie de bloques de puerta.',
          'The corridor stays architecture, not a set of door blocks.'
        )
      },
      cabinet: {
        title: L('Угол проёмов', 'Кут прорізів', 'Rincón de huecos', 'Corner openings'),
        typology: L('Квартира', 'Квартира', 'Vivienda', 'Apartment'),
        setting: L('Объект', 'Об’єкт', 'Obra', 'Project'),
        yearLabel: L('Объект', 'Об’єкт', 'Obra', 'Installed'),
        product: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Два полотна сходятся в углу. Белая плоскость, чёрный шов.',
          'Два полотна сходяться в куті. Біла площина, чорний шов.',
          'Dos hojas se encuentran en el rincón. Plano blanco, junta negra.',
          'Two leaves meet in a corner. White plane, black joint.'
        ),
        solution: L(
          'Одинаковая система iDOORS Prime на обеих стенах. Кромка чёрная.',
          'Однакова система iDOORS Prime на обох стінах. Кромка чорна.',
          'El mismo sistema iDOORS Prime en ambos muros. Canto negro.',
          'The same iDOORS Prime system on both walls. Black edge.'
        ),
        result: L(
          'Угол собирается без порталов. Проёмы читаются как швы.',
          'Кут збирається без порталів. Прорізи читаються як шви.',
          'El rincón se resuelve sin portales. Los huecos se leen como juntas.',
          'The corner is resolved without portals. Openings read as joints.'
        )
      },
      bedroom: {
        title: L('Холл', 'Хол', 'Hall', 'Hall'),
        typology: L('Квартира', 'Квартира', 'Vivienda', 'Apartment'),
        setting: L('Объект', 'Об’єкт', 'Obra', 'Project'),
        yearLabel: L('Объект', 'Об’єкт', 'Obra', 'Installed'),
        product: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Один проём в белой стене. Полотно под покраску, кромка чёрная.',
          'Один проріз у білій стіні. Полотно під фарбування, кромка чорна.',
          'Un hueco en un muro blanco. Hoja para pintar, canto negro.',
          'One opening in a white wall. Leaf for painting, black edge.'
        ),
        solution: L(
          'iDOORS Prime стоит заподлицо. Ручка и шов — единственные акценты.',
          'iDOORS Prime стоїть запідлицо. Ручка і шов — єдині акценти.',
          'iDOORS Prime queda al ras. Manilla y junta son los únicos acentos.',
          'iDOORS Prime sits flush. Handle and joint are the only accents.'
        ),
        result: L(
          'Стена непрерывна. Дверь не собирает на себе взгляд.',
          'Стіна безперервна. Двері не збирають на собі погляд.',
          'El muro es continuo. La puerta no atrae la mirada.',
          'The wall is continuous. The door does not gather the eye.'
        )
      }
    }
  },

  process: {
    kicker: L('Процесс', 'Процес', 'Proceso', 'Process'),
    spec: L('07 — Sequence', '07 — Sequence', '07 — Sequence', '07 — Sequence'),
    title: L('От разговора до плоскости.', 'Від розмови до площини.', 'De la conversación al plano.', 'From conversation to plane.'),
    steps: L(
      [
        { title: 'Разговор', text: 'Чертежи, материал стен, высота, сценарий открывания.' },
        { title: 'Замер', text: 'Проём и примыкания снимаются на объекте, не по эскизу.' },
        { title: 'Спецификация', text: 'Модель, отделка, петли, ручка, сторона открывания.' },
        { title: 'Производство', text: 'Полотно и скрытая система собираются под конкретный проём.' },
        { title: 'Монтаж', text: 'Короб на уголках, клинья, пена, петли ANSELMI, уплотнитель, проверка плоскости.' },
        { title: 'Финиш', text: 'Отделка вместе со стеной. Передача объекта.' }
      ],
      [
        { title: 'Розмова', text: 'Креслення, матеріал стін, висота, сценарій відкривання.' },
        { title: 'Обмір', text: 'Проріз і примикання знімаються на об’єкті, не за ескізом.' },
        { title: 'Специфікація', text: 'Модель, оздоблення, петлі, ручка, бік відкривання.' },
        { title: 'Виробництво', text: 'Полотно і прихована система збираються під конкретний проріз.' },
        { title: 'Монтаж', text: 'Короб на кутниках, клини, піна, петлі ANSELMI, ущільнювач, перевірка площини.' },
        { title: 'Фініш', text: 'Оздоблення разом зі стіною. Передача об’єкта.' }
      ],
      [
        { title: 'Conversación', text: 'Planos, material de muros, altura, sentido de apertura.' },
        { title: 'Medición', text: 'El hueco y los encuentros se levantan en obra, no del croquis.' },
        { title: 'Especificación', text: 'Modelo, acabado, bisagras, manilla, sentido de apertura.' },
        { title: 'Producción', text: 'Hoja y sistema oculto se fabrican para ese hueco.' },
        { title: 'Montaje', text: 'Marco con escuadras, cuñas, espuma, bisagras ANSELMI, junta, plano.' },
        { title: 'Acabado', text: 'Acabado junto al muro. Entrega.' }
      ],
      [
        { title: 'Conversation', text: 'Drawings, wall material, height, opening scenario.' },
        { title: 'Survey', text: 'The opening and junctions are taken on site, not from a sketch.' },
        { title: 'Specification', text: 'Model, finish, hinges, handle, handing.' },
        { title: 'Production', text: 'Leaf and concealed system are built for that opening.' },
        { title: 'Install', text: 'Frame on corner brackets, wedges, foam, ANSELMI hinges, seal, plane check.' },
        { title: 'Finish', text: 'Finishing with the wall. Handover.' }
      ]
    )
  },

  quality: {
    kicker: L('Детали', 'Деталі', 'Detalles', 'Details'),
    spec: L('08 — Precision', '08 — Precision', '08 — Precision', '08 — Precision'),
    title: L('Точность в деталях.', 'Точність у деталях.', 'La precisión está en el detalle.', 'Precision is in the details.'),
    metrics: L(
      '25 дБА · 50 000 циклов · плоскость ≤ 2 мм/м',
      '25 дБА · 50 000 циклів · площина ≤ 2 мм/м',
      '25 dBA · 50 000 ciclos · plano ≤ 2 mm/m',
      '25 dBA · 50,000 cycles · plane ≤ 2 mm/m'
    ),
    items: {
      gap: {
        title: L('Зазор', 'Зазор', 'Junta', 'Gap'),
        text: L('Тонкая тень вместо наличника.', 'Тонка тінь замість лиштви.', 'Una sombra fina en lugar del tapajuntas.', 'A thin shadow instead of an architrave.')
      },
      hinge: {
        title: L('Петля', 'Петля', 'Bisagra', 'Hinge'),
        text: L('Скрытые петли ANSELMI в кромке.', 'Приховані петлі ANSELMI в крайці.', 'Bisagras ocultas ANSELMI en el canto.', 'ANSELMI concealed hinges in the edge.')
      },
      handle: {
        title: L('Ручка', 'Ручка', 'Manilla', 'Handle'),
        text: L('Магнитный AGB Polaris: защёлка, WC или PZ.', 'Магнітний AGB Polaris: клямка, WC або PZ.', 'AGB Polaris magnético: picaporte, WC o PZ.', 'Magnetic AGB Polaris: latch, WC or PZ.')
      }
    }
  },

  size: {
    kicker: L('Размер', 'Розмір', 'Medida', 'Size'),
    spec: L('03 — Opening', '03 — Opening', '03 — Opening', '03 — Opening'),
    title: L('Ваш размер.', 'Ваш розмір.', 'A su medida.', 'Your size.')
  },

  architects: {
    kicker: L('Для бюро', 'Для бюро', 'Para estudios', 'For practices'),
    spec: L('09 — Practice', '09 — Practice', '09 — Practice', '09 — Practice'),
    title: L('Для архитекторов и дизайнеров.', 'Для архітекторів і дизайнерів.', 'Para arquitectos y diseñadores.', 'For architects and designers.'),
    text: L(
      'Стандартные размеры, узел стыка и сетка — по запросу. Наличника нет: проём должен быть ровным.',
      'Стандартні розміри, вузол стику і сітка — на запит. Лиштви немає: проріз має бути рівним.',
      'Medidas estándar, nudo de encuentro y malla — a petición. Sin tapajuntas: el hueco tiene que estar a plomo.',
      'Standard sizes, junction detail and mesh — on request. No architrave: the opening must be true.'
    ),
    points: L(
      [
        'Standard 2000 мм / INSIDE 2012 мм · ширина 610–910',
        'Проём: +30 мм по высоте, 30–40 мм по ширине',
        'ГКЛ: усиленный профиль или брус в стойке',
        'Штукатурная сетка на коробе · край короба как маяк',
        'Штукатурка ≤ 1,5 мм · два выпрямителя при одностороннем финише'
      ],
      [
        'Standard 2000 мм / INSIDE 2012 мм · ширина 610–910',
        'Проріз: +30 мм по висоті, 30–40 мм по ширині',
        'ГКЛ: посилений профіль або брус у стійці',
        'Штукатурна сітка на коробі · край короба як маяк',
        'Штукатурка ≤ 1,5 мм · два випрямлячі при однобічному фініші'
      ],
      [
        'Standard 2000 mm / INSIDE 2012 mm · ancho 610–910',
        'Hueco: +30 mm en altura, 30–40 mm en ancho',
        'Pladur: perfil reforzado o madera en el montante',
        'Malla de yeso en el marco · el canto hace de maestra',
        'Enlucido ≤ 1,5 mm · dos tensores si el acabado es a una cara'
      ],
      [
        'Standard 2000 mm / INSIDE 2012 mm · width 610–910',
        'Opening: +30 mm on height, 30–40 mm on width',
        'Drywall: reinforced stud or a timber insert',
        'Plaster mesh on the frame · frame edge as a screed bead',
        'Plaster ≤ 1.5 mm · two straighteners for a one-sided finish'
      ]
    ),
    cta: L('Запросить комплект', 'Запросити комплект', 'Solicitar el dossier', 'Request the pack')
  },

  partners: {
    kicker: L('Партнёрам', 'Партнерам', 'Partners', 'Partners'),
    spec: L('iDOORS', 'iDOORS', 'iDOORS', 'iDOORS'),
    title: L('Стать партнёром', 'Стати партнером', 'Hacerse partner', 'Become a partner'),
    lead: L(
      'Для дилеров, дизайнеров, архитекторов, магазинов дверей и бригадиров строительных бригад.',
      'Для дилерів, дизайнерів, архітекторів, магазинів дверей і бригадирів будівельних бригад.',
      'Para distribuidores, diseñadores, arquitectos, tiendas de puertas y jefes de brigada.',
      'For dealers, designers, architects, door shops and construction crew leaders.'
    ),
    note: L(
      'Заявка только от компаний. Обсудим сотрудничество, скидки и поставки.',
      'Заявка лише від компаній. Обговоримо співпрацю, знижки та поставки.',
      'Solo empresas. Hablamos de colaboración, descuentos y suministro.',
      'Companies only. We will talk cooperation, discounts and supply.'
    ),
    audience: L(
      ['Дилеры', 'Дизайнеры', 'Архитекторы', 'Магазины дверей', 'Бригадиры строительных бригад'],
      ['Дилери', 'Дизайнери', 'Архітектори', 'Магазини дверей', 'Бригадири будівельних бригад'],
      ['Distribuidores', 'Diseñadores', 'Arquitectos', 'Tiendas de puertas', 'Jefes de brigada'],
      ['Dealers', 'Designers', 'Architects', 'Door shops', 'Construction crew leaders']
    ),
    paragraphs: L(
      [] as string[],
      [] as string[],
      [] as string[],
      [] as string[]
    ),
    cta: L('Стать партнёром', 'Стати партнером', 'Hacerse partner', 'Become a partner'),
    modalTitle: L('Заявка на партнёрство', 'Заявка на партнерство', 'Solicitud de partnership', 'Partnership inquiry'),
    modalLead: L(
      'Юридические данные компании. С частными лицами по этому каналу не работаем.',
      'Юридичні дані компанії. З приватними особами цим каналом не працюємо.',
      'Datos jurídicos de la empresa. Este canal no es para particulares.',
      'Company legal details. This channel is not for private individuals.'
    ),
    role: L('Тип компании', 'Тип компанії', 'Tipo de empresa', 'Company type'),
    roleErr: L('Укажите тип', 'Вкажіть тип', 'Indique el tipo', 'Choose a type'),
    dealer: L('Дилер', 'Дилер', 'Distribuidor', 'Dealer'),
    designer: L('Дизайнер', 'Дизайнер', 'Diseñador', 'Designer'),
    architect: L('Архитектор', 'Архітектор', 'Arquitecto', 'Architect'),
    shop: L('Магазин дверей', 'Магазин дверей', 'Tienda de puertas', 'Door shop'),
    foreman: L('Бригадир строительной бригады', 'Бригадир будівельної бригади', 'Jefe de brigada', 'Construction crew leader'),
    company: L('Юридическое название', 'Юридична назва', 'Razón social', 'Legal company name'),
    companyErr: L('Укажите компанию', 'Вкажіть компанію', 'Indique la empresa', 'Enter the company'),
    taxId: L('NIF / CIF', 'NIF / CIF', 'NIF / CIF', 'NIF / CIF'),
    taxErr: L('Укажите NIF/CIF', 'Вкажіть NIF/CIF', 'Indique el NIF/CIF', 'Enter the NIF/CIF'),
    address: L('Юридический адрес', 'Юридична адреса', 'Domicilio social', 'Registered address'),
    addressErr: L('Укажите адрес', 'Вкажіть адресу', 'Indique el domicilio', 'Enter the address'),
    city: L('Город', 'Місто', 'Ciudad', 'City'),
    country: L('Страна', 'Країна', 'País', 'Country'),
    countryEs: L('Испания', 'Іспанія', 'España', 'Spain'),
    countryPt: L('Португалия', 'Португалія', 'Portugal', 'Portugal'),
    person: L('Контактное лицо', 'Контактна особа', 'Persona de contacto', 'Contact person'),
    position: L('Должность', 'Посада', 'Cargo', 'Position'),
    comment: L('О сотрудничестве', 'Про співпрацю', 'Sobre la colaboración', 'About the cooperation'),
    success: L(
      'Заявку приняли. Свяжемся по сотрудничеству.',
      'Заявку прийняли. Зв’яжемося щодо співпраці.',
      'Solicitud recibida. Hablaremos de la colaboración.',
      'Request received. We will be in touch about working together.'
    )
  },

  contact: {
    kicker: L('Контакт', 'Контакт', 'Contacto', 'Contact'),
    spec: L('10 — Request', '10 — Request', '10 — Request', '10 — Request'),
    title: L('Форма обратной связи', 'Форма зворотного зв’язку', 'Formulario de contacto', 'Feedback form'),
    lead: L(
      'Имя, телефон, почта и сообщение.',
      'Ім’я, телефон, пошта і повідомлення.',
      'Nombre, teléfono, correo y mensaje.',
      'Name, phone, email and a message.'
    ),
    close: L('Закрыть', 'Закрити', 'Cerrar', 'Close'),
    open: L('Открыть форму', 'Відкрити форму', 'Abrir el formulario', 'Open the form')
  },

  form: {
    name: L('Имя', 'Ім’я', 'Nombre', 'Name'),
    phone: L('Телефон', 'Телефон', 'Teléfono', 'Phone'),
    email: L('Почта', 'Пошта', 'Correo', 'Email'),
    message: L('Сообщение', 'Повідомлення', 'Mensaje', 'Message'),
    submit: L('Отправить', 'Надіслати', 'Enviar', 'Send'),
    sending: L('Отправка…', 'Надсилання…', 'Enviando…', 'Sending…'),
    nameErr: L('Укажите имя', 'Вкажіть ім’я', 'Indique el nombre', 'Enter a name'),
    contactErr: L('Телефон или почта', 'Телефон або пошта', 'Teléfono o correo', 'Phone or email'),
    emailErr: L('Проверьте почту', 'Перевірте пошту', 'Revise el correo', 'Check the email'),
    fieldsErr: L('Проверьте обязательные поля.', 'Перевірте обов’язкові поля.', 'Revise los campos obligatorios.', 'Check the required fields.'),
    success: L('Сообщение отправлено. Мы свяжемся с вами.', 'Повідомлення надіслано. Ми зв’яжемося з вами.', 'Mensaje enviado. Nos pondremos en contacto.', 'Message sent. We will get in touch.'),
    error: L('Сервер не ответил. Повторите отправку.', 'Сервер не відповів. Повторіть надсилання.', 'El servidor no respondió. Inténtelo de nuevo.', 'The server did not respond. Please try again.')
  },

  pdp,

  products: {
    'prime-base': {
      name: L('iDOORS Prime (Под финишную отделку)', 'iDOORS Prime (Під фінішне оздоблення)', 'iDOORS Prime (Para el acabado)', 'iDOORS Prime (For finishing)'),
      latin: L('iD-PRIME-BASE', 'iD-PRIME-BASE', 'iD-PRIME-BASE', 'iD-PRIME-BASE'),
      kicker: L('Под финишную отделку', 'Під фінішне оздоблення', 'Para el acabado', 'For finishing'),
      summary: L(
        'Дверь скрытого монтажа iDOORS Prime под финишную отделку',
        'Двері прихованого монтажу iDOORS Prime під фінішне оздоблення',
        'Puerta de instalación oculta iDOORS Prime para el acabado',
        'iDOORS Prime flush door for finishing'
      ),
      description: L(
        'Полотно с заводской полиуретановой грунтовкой under-paint. Короб Prime, скрытые петли Anselmi / Simonswerk.',
        'Полотно із заводським поліуретановим ґрунтом under-paint. Короб Prime, приховані петлі Anselmi / Simonswerk.',
        'Hoja con imprimación de poliuretano under-paint de fábrica. Marco Prime, bisagras ocultas Anselmi / Simonswerk.',
        'Leaf with factory polyurethane under-paint primer. Prime frame, concealed Anselmi / Simonswerk hinges.'
      ),
      features: L(
        ['Грунт under-paint', 'Короб Prime', 'Anselmi / Simonswerk', 'Магнитный замок'],
        ['Ґрунт under-paint', 'Короб Prime', 'Anselmi / Simonswerk', 'Магнітний замок'],
        ['Imprimación under-paint', 'Marco Prime', 'Anselmi / Simonswerk', 'Cerradura magnética'],
        ['Under-paint primer', 'Prime frame', 'Anselmi / Simonswerk', 'Magnetic lock']
      )
    },
    'prime-finish': {
      name: L('iDOORS Prime (Шпон / Зеркало)', 'iDOORS Prime (Шпон / Дзеркало)', 'iDOORS Prime (Chapa / Espejo)', 'iDOORS Prime (Veneer / Mirror)'),
      latin: L('iD-PRIME-FINISH', 'iD-PRIME-FINISH', 'iD-PRIME-FINISH', 'iD-PRIME-FINISH'),
      kicker: L('Шпон / Зеркало', 'Шпон / Дзеркало', 'Chapa / Espejo', 'Veneer / Mirror'),
      summary: L(
        'Дверь скрытого монтажа iDOORS Prime (Шпон / Зеркало)',
        'Двері прихованого монтажу iDOORS Prime (Шпон / Дзеркало)',
        'Puerta de instalación oculta iDOORS Prime (Chapa / Espejo)',
        'iDOORS Prime flush door (Veneer / Mirror)'
      ),
      description: L(
        'Готовая отделка: натуральный шпон или влагостойкое зеркало. Алюминиевая кромка в цвет короба.',
        'Готове оздоблення: натуральний шпон або вологостійке дзеркало. Алюмінієва крайка в колір короба.',
        'Acabado de fábrica: chapa natural o espejo resistente a la humedad. Canto de aluminio al color del marco.',
        'Factory finish: natural veneer or moisture-resistant mirror. Aluminium edge matching the frame.'
      ),
      features: L(
        ['Натуральный шпон', 'Зеркало 4 мм', 'Кромка алюминий', 'Короб Prime'],
        ['Натуральний шпон', 'Дзеркало 4 мм', 'Крайка алюміній', 'Короб Prime'],
        ['Chapa natural', 'Espejo 4 mm', 'Canto de aluminio', 'Marco Prime'],
        ['Natural veneer', '4 mm mirror', 'Aluminium edge', 'Prime frame']
      )
    },
    'prime-custom': {
      name: L('iDOORS Prime (Индивидуальный размер)', 'iDOORS Prime (Індивідуальний розмір)', 'iDOORS Prime (Medida individual)', 'iDOORS Prime (Custom size)'),
      latin: L('iD-PRIME-CUSTOM', 'iD-PRIME-CUSTOM', 'iD-PRIME-CUSTOM', 'iD-PRIME-CUSTOM'),
      kicker: L('До 2400 мм', 'До 2400 мм', 'Hasta 2400 mm', 'Up to 2400 mm'),
      summary: L(
        'Дверь скрытого монтажа iDOORS Prime (Индивидуальный размер до 2400 мм)',
        'Двері прихованого монтажу iDOORS Prime (Індивідуальний розмір до 2400 мм)',
        'Puerta de instalación oculta iDOORS Prime (Medida individual hasta 2400 mm)',
        'iDOORS Prime flush door (Custom size up to 2400 mm)'
      ),
      description: L(
        'Полотно по индивидуальным габаритам. Три скрытые петли Anselmi / Simonswerk в базовом комплекте.',
        'Полотно за індивідуальними габаритами. Три приховані петлі Anselmi / Simonswerk у базовому комплекті.',
        'Hoja a medida. Tres bisagras ocultas Anselmi / Simonswerk en el kit base.',
        'Leaf to individual sizes. Three concealed Anselmi / Simonswerk hinges in the base kit.'
      ),
      features: L(
        ['Высота до 2400 мм', 'Ширина до 1000 мм', '3 петли', 'Короб Prime'],
        ['Висота до 2400 мм', 'Ширина до 1000 мм', '3 петлі', 'Короб Prime'],
        ['Altura hasta 2400 mm', 'Ancho hasta 1000 mm', '3 bisagras', 'Marco Prime'],
        ['Height up to 2400 mm', 'Width up to 1000 mm', '3 hinges', 'Prime frame']
      )
    },
    'prime-al': {
      name: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
      latin: L('iD-PRIME-BASE', 'iD-PRIME-BASE', 'iD-PRIME-BASE', 'iD-PRIME-BASE'),
      kicker: L('Под финишную отделку', 'Під фінішне оздоблення', 'Para el acabado', 'For finishing'),
      summary: L(
        'Дверь скрытого монтажа iDOORS Prime под финишную отделку',
        'Двері прихованого монтажу iDOORS Prime під фінішне оздоблення',
        'Puerta de instalación oculta iDOORS Prime para el acabado',
        'iDOORS Prime flush door for finishing'
      ),
      description: L(
        'Полотно с заводской полиуретановой грунтовкой under-paint. Короб Prime, скрытые петли Anselmi / Simonswerk.',
        'Полотно із заводським поліуретановим ґрунтом under-paint. Короб Prime, приховані петлі Anselmi / Simonswerk.',
        'Hoja con imprimación de poliuretano under-paint de fábrica. Marco Prime, bisagras ocultas Anselmi / Simonswerk.',
        'Leaf with factory polyurethane under-paint primer. Prime frame, concealed Anselmi / Simonswerk hinges.'
      ),
      features: L(
        ['Грунт under-paint', 'Короб Prime', 'Anselmi / Simonswerk', 'Магнитный замок'],
        ['Ґрунт under-paint', 'Короб Prime', 'Anselmi / Simonswerk', 'Магнітний замок'],
        ['Imprimación under-paint', 'Marco Prime', 'Anselmi / Simonswerk', 'Cerradura magnética'],
        ['Under-paint primer', 'Prime frame', 'Anselmi / Simonswerk', 'Magnetic lock']
      )
    },
    'prime-al-c': {
      name: L('На себя (Outside)', 'На себе (Outside)', 'Hacia sí (Outside)', 'Towards you (Outside)'),
      latin: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
      kicker: L('Натуральный алюминий (Серебро)', 'Натуральний алюміній (Срібло)', 'Aluminio natural (Plata)', 'Natural aluminium (Silver)'),
      summary: L(
        'На себя (Outside). Натуральный алюминий (Серебро).',
        'На себе (Outside). Натуральний алюміній (Срібло).',
        'Hacia sí (Outside). Aluminio natural (Plata).',
        'Towards you (Outside). Natural aluminium (Silver).'
      ),
      description: L(
        'iDOORS Prime под финишную отделку. Открывание на себя, кромка и короб — натуральный алюминий (серебро).',
        'iDOORS Prime під фінішне оздоблення. Відчиняння на себе, крайка і короб — натуральний алюміній (срібло).',
        'iDOORS Prime para el acabado. Apertura hacia sí, canto y marco de aluminio natural (plata).',
        'iDOORS Prime for finishing. Opening towards you, edge and frame in natural aluminium (silver).'
      ),
      features: L(
        ['На себя (Outside)', 'Натуральный алюминий (Серебро)', 'Короб Prime', 'Грунт under-paint'],
        ['На себе (Outside)', 'Натуральний алюміній (Срібло)', 'Короб Prime', 'Ґрунт under-paint'],
        ['Hacia sí (Outside)', 'Aluminio natural (Plata)', 'Marco Prime', 'Imprimación under-paint'],
        ['Towards you (Outside)', 'Natural aluminium (Silver)', 'Prime frame', 'Under-paint primer']
      )
    },
    'prime-al-c-inside': {
      name: L('От себя / Реверс (Inside)', 'Від себе / Реверс (Inside)', 'Hacia fuera / Reverso (Inside)', 'Away / Reverse (Inside)'),
      latin: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
      kicker: L('Натуральный алюминий (Серебро)', 'Натуральний алюміній (Срібло)', 'Aluminio natural (Plata)', 'Natural aluminium (Silver)'),
      summary: L(
        'От себя / Реверс (Inside). Натуральный алюминий (Серебро).',
        'Від себе / Реверс (Inside). Натуральний алюміній (Срібло).',
        'Hacia fuera / Reverso (Inside). Aluminio natural (Plata).',
        'Away / Reverse (Inside). Natural aluminium (Silver).'
      ),
      description: L(
        'iDOORS Prime под финишную отделку. Открывание от себя / реверс, кромка и короб — натуральный алюминий (серебро).',
        'iDOORS Prime під фінішне оздоблення. Відчиняння від себе / реверс, крайка і короб — натуральний алюміній (срібло).',
        'iDOORS Prime para el acabado. Apertura inversa, canto y marco de aluminio natural (plata).',
        'iDOORS Prime for finishing. Reverse opening, edge and frame in natural aluminium (silver).'
      ),
      features: L(
        ['От себя / Реверс (Inside)', 'Натуральный алюминий (Серебро)', 'Короб Prime', 'Грунт under-paint'],
        ['Від себе / Реверс (Inside)', 'Натуральний алюміній (Срібло)', 'Короб Prime', 'Ґрунт under-paint'],
        ['Hacia fuera / Reverso (Inside)', 'Aluminio natural (Plata)', 'Marco Prime', 'Imprimación under-paint'],
        ['Away / Reverse (Inside)', 'Natural aluminium (Silver)', 'Prime frame', 'Under-paint primer']
      )
    },
    'prime-al-ch': {
      name: L('На себя (Outside)', 'На себе (Outside)', 'Hacia sí (Outside)', 'Towards you (Outside)'),
      latin: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
      kicker: L('Чёрный матовый (RAL 9005)', 'Чорний матовий (RAL 9005)', 'Negro mate (RAL 9005)', 'Matt black (RAL 9005)'),
      summary: L(
        'На себя (Outside). Чёрный матовый (RAL 9005).',
        'На себе (Outside). Чорний матовий (RAL 9005).',
        'Hacia sí (Outside). Negro mate (RAL 9005).',
        'Towards you (Outside). Matt black (RAL 9005).'
      ),
      description: L(
        'iDOORS Prime под финишную отделку. Открывание на себя, кромка и короб — чёрный матовый (RAL 9005).',
        'iDOORS Prime під фінішне оздоблення. Відчиняння на себе, крайка і короб — чорний матовий (RAL 9005).',
        'iDOORS Prime para el acabado. Apertura hacia sí, canto y marco negro mate (RAL 9005).',
        'iDOORS Prime for finishing. Opening towards you, edge and frame matt black (RAL 9005).'
      ),
      features: L(
        ['На себя (Outside)', 'Чёрный матовый (RAL 9005)', 'Короб Prime', 'Грунт under-paint'],
        ['На себе (Outside)', 'Чорний матовий (RAL 9005)', 'Короб Prime', 'Ґрунт under-paint'],
        ['Hacia sí (Outside)', 'Negro mate (RAL 9005)', 'Marco Prime', 'Imprimación under-paint'],
        ['Towards you (Outside)', 'Matt black (RAL 9005)', 'Prime frame', 'Under-paint primer']
      )
    },
    'prime-al-ch-inside': {
      name: L('От себя / Реверс (Inside)', 'Від себе / Реверс (Inside)', 'Hacia fuera / Reverso (Inside)', 'Away / Reverse (Inside)'),
      latin: L('iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime', 'iDOORS Prime'),
      kicker: L('Чёрный матовый (RAL 9005)', 'Чорний матовий (RAL 9005)', 'Negro mate (RAL 9005)', 'Matt black (RAL 9005)'),
      summary: L(
        'От себя / Реверс (Inside). Чёрный матовый (RAL 9005).',
        'Від себе / Реверс (Inside). Чорний матовий (RAL 9005).',
        'Hacia fuera / Reverso (Inside). Negro mate (RAL 9005).',
        'Away / Reverse (Inside). Matt black (RAL 9005).'
      ),
      description: L(
        'iDOORS Prime под финишную отделку. Открывание от себя / реверс, кромка и короб — чёрный матовый (RAL 9005).',
        'iDOORS Prime під фінішне оздоблення. Відчиняння від себе / реверс, крайка і короб — чорний матовий (RAL 9005).',
        'iDOORS Prime para el acabado. Apertura inversa, canto y marco negro mate (RAL 9005).',
        'iDOORS Prime for finishing. Reverse opening, edge and frame matt black (RAL 9005).'
      ),
      features: L(
        ['От себя / Реверс (Inside)', 'Чёрный матовый (RAL 9005)', 'Короб Prime', 'Грунт under-paint'],
        ['Від себе / Реверс (Inside)', 'Чорний матовий (RAL 9005)', 'Короб Prime', 'Ґрунт under-paint'],
        ['Hacia fuera / Reverso (Inside)', 'Negro mate (RAL 9005)', 'Marco Prime', 'Imprimación under-paint'],
        ['Away / Reverse (Inside)', 'Matt black (RAL 9005)', 'Prime frame', 'Under-paint primer']
      )
    }
  },

  specs: {
    finish: L('Отделка', 'Оздоблення', 'Acabado', 'Finish'),
    opening: L('Открывание', 'Відкривання', 'Apertura', 'Handing'),
    height: L('Высота', 'Висота', 'Altura', 'Height'),
    color: L('Цвет', 'Колір', 'Color', 'Colour'),
    edge: L('Окантовка', 'Окантовка', 'Canto', 'Edging'),
    threshold: L('Выпадающий порог', 'Випадний поріг', 'Umbral automático', 'Drop seal'),
    leafSize: L('Полотно', 'Полотно', 'Hoja', 'Leaf'),
    openingSize: L('Проём', 'Проріз', 'Hueco', 'Opening'),
    mdf: L('Облицовка МДФ', 'Облицювання МДФ', 'Revestimiento MDF', 'MDF skin'),
    fill: L('Заполнение', 'Заповнення', 'Relleno', 'Core'),
    fillValue: L('Соты или вспененный полиэтилен', 'Соти або спінений поліетилен', 'Nido de abeja o polietileno expandido', 'Honeycomb or expanded polyethylene'),
    sound: L('Звук / ресурс', 'Звук / ресурс', 'Sonido / ciclos', 'Sound / cycles'),
    cycles: L('циклов', 'циклів', 'ciclos', 'cycles'),
    mm: L('мм', 'мм', 'mm', 'mm'),
    dba: L('дБА', 'дБА', 'dBA', 'dBA'),
    leafFinish: L('Полиуретановый грунт under-paint', 'Поліуретановий ґрунт under-paint', 'Imprimación de poliuretano under-paint', 'Polyurethane under-paint primer'),
    edges: {
      silver: L('Натуральный алюминий (Серебро)', 'Натуральний алюміній (Срібло)', 'Aluminio natural (Plata)', 'Natural aluminium (Silver)'),
      black: L('Чёрный матовый (RAL 9005)', 'Чорний матовий (RAL 9005)', 'Negro mate (RAL 9005)', 'Matt black (RAL 9005)')
    },
    openings: {
      left: L('Левое', 'Ліве', 'Izquierda', 'Left'),
      right: L('Правое', 'Праве', 'Derecha', 'Right'),
      in: L('От себя / Реверс (Inside)', 'Від себе / Реверс (Inside)', 'Hacia fuera / Reverso (Inside)', 'Away / Reverse (Inside)'),
      out: L('На себя (Outside)', 'На себе (Outside)', 'Hacia sí (Outside)', 'Towards you (Outside)')
    }
  },

  legal: {
    privacyTitle: L('Конфиденциальность', 'Конфіденційність', 'Privacidad', 'Privacy'),
    privacyLead: L(
      'Как LIMEN обрабатывает данные на этом сайте. Базовый текст — его заменят после правовой вычитки и заполнения реквизитов студии.',
      'Як LIMEN обробляє дані на цьому сайті. Базовий текст — його замінять після правового вичитування і заповнення реквізитів студії.',
      'Cómo LIMEN trata los datos en este sitio. Texto básico: se sustituirá tras revisión jurídica y cuando esté la ficha del estudio.',
      'How LIMEN handles data on this site. A basic notice — it will be replaced after legal review and once the studio details are filled in.'
    ),
    privacyUpdated: L('Обновлено: сентябрь 2026', 'Оновлено: вересень 2026', 'Actualizado: septiembre 2026', 'Updated: September 2026'),
    privacySections: L(
      [
        {
          title: 'Кто обрабатывает',
          text: 'Сайт ведёт LIMEN. Почта: studio@limen.example. Instagram: @idoors.es. Адрес и полные реквизиты появятся, когда будет заполнена карточка студии.'
        },
        {
          title: 'Какие данные',
          text: 'В форме обратной связи: имя, телефон, почта и сообщение.'
        },
        {
          title: 'Зачем',
          text: 'Чтобы ответить на запрос, уточнить проём и посчитать систему. Данные не продаём и не используем для рекламных рассылок, пока вы сами об этом не попросите.'
        },
        {
          title: 'Как храним',
          text: 'Сейчас форма в тестовом режиме: заявка принимается на сайте и в CRM не уходит. Когда канал отправки подключат, данные будут храниться столько, сколько нужно для ответа и учёта проекта, затем удаляться или архивироваться.'
        },
        {
          title: 'Кому передаём',
          text: 'Хостинг может видеть технические логи запроса (IP, браузер, время) — это обычная работа сервера. Рекламных пикселей нет. Переход в Instagram регулируется политикой Meta.'
        },
        {
          title: 'Cookies',
          text: 'Сохраняем только язык интерфейса (cookie limen-locale). Счётчиков и рекламных cookies нет. Подробности — на странице Cookies.'
        },
        {
          title: 'Ваши права',
          text: 'Можно запросить доступ, исправление или удаление данных из заявки: напишите на studio@limen.example. Если вы в ЕС, можете также обратиться в надзорный орган своей страны.'
        },
        {
          title: 'Изменения',
          text: 'Текст обновим, когда появятся реквизиты, живая отправка заявок или аналитика.'
        }
      ],
      [
        {
          title: 'Хто обробляє',
          text: 'Сайт веде LIMEN. Пошта: studio@limen.example. Instagram: @idoors.es. Адреса й повні реквізити з’являться, коли буде заповнена картка студії.'
        },
        {
          title: 'Які дані',
          text: 'У формі зворотного зв’язку: ім’я, телефон, пошта і повідомлення.'
        },
        {
          title: 'Навіщо',
          text: 'Щоб відповісти на запит, уточнити проріз і порахувати систему. Дані не продаємо і не використовуємо для рекламних розсилок, поки ви самі про це не попросите.'
        },
        {
          title: 'Як зберігаємо',
          text: 'Зараз форма в тестовому режимі: заявка приймається на сайті і в CRM не йде. Коли канал надсилання підключать, дані зберігатимуться стільки, скільки потрібно для відповіді й обліку проєкту, потім видалятимуться або архівуватимуться.'
        },
        {
          title: 'Кому передаємо',
          text: 'Хостинг може бачити технічні логи запиту (IP, браузер, час) — це звичайна робота сервера. Рекламних пікселів немає. Перехід в Instagram регулює політика Meta.'
        },
        {
          title: 'Cookies',
          text: 'Зберігаємо лише мову інтерфейсу (cookie limen-locale). Лічильників і рекламних cookies немає. Подробиці — на сторінці Cookies.'
        },
        {
          title: 'Ваші права',
          text: 'Можна запросити доступ, виправлення або видалення даних із заявки: напишіть на studio@limen.example. Якщо ви в ЄС, можете також звернутися до наглядового органу своєї країни.'
        },
        {
          title: 'Зміни',
          text: 'Текст оновимо, коли з’являться реквізити, живе надсилання заявок або аналітика.'
        }
      ],
      [
        {
          title: 'Quién trata los datos',
          text: 'El sitio lo opera LIMEN. Correo: studio@limen.example. Instagram: @idoors.es. La dirección y los datos fiscales aparecerán cuando esté completa la ficha del estudio.'
        },
        {
          title: 'Qué datos',
          text: 'En el formulario: nombre, teléfono, correo y mensaje.'
        },
        {
          title: 'Para qué',
          text: 'Para responder, precisar el hueco y calcular el sistema. No vendemos los datos ni los usamos para publicidad, salvo que usted lo pida.'
        },
        {
          title: 'Cómo se guardan',
          text: 'El formulario está ahora en modo de prueba: la consulta se recibe en el sitio y no va a un CRM. Cuando haya un canal de envío, los datos se conservarán el tiempo necesario para responder y llevar el proyecto, y luego se eliminarán o archivarán.'
        },
        {
          title: 'A quién se ceden',
          text: 'El hosting puede ver registros técnicos (IP, navegador, hora): es el funcionamiento habitual del servidor. No hay píxeles publicitarios. Si entra en Instagram, rige la política de Meta.'
        },
        {
          title: 'Cookies',
          text: 'Solo guardamos el idioma de la interfaz (cookie limen-locale). No hay contadores ni cookies publicitarias. Más detalle en la página Cookies.'
        },
        {
          title: 'Sus derechos',
          text: 'Puede pedir acceso, corrección o supresión de los datos de una consulta en studio@limen.example. Si está en la UE, también puede acudir a la autoridad de su país.'
        },
        {
          title: 'Cambios',
          text: 'Actualizaremos el texto cuando haya ficha fiscal, envío real de consultas o analítica.'
        }
      ],
      [
        {
          title: 'Who processes data',
          text: 'This site is run by LIMEN. Email: studio@limen.example. Instagram: @idoors.es. Address and legal details will appear once the studio card is filled in.'
        },
        {
          title: 'What we collect',
          text: 'The feedback form collects name, phone, email and a message.'
        },
        {
          title: 'Why',
          text: 'To reply, confirm the opening and price the system. We do not sell the data or use it for marketing unless you ask us to.'
        },
        {
          title: 'How we store it',
          text: 'The form is in test mode: inquiries stay on the site and are not sent to a CRM. Once a live channel is connected, data will be kept for as long as needed to reply and run the project, then deleted or archived.'
        },
        {
          title: 'Who we share with',
          text: 'Hosting may see technical logs (IP, browser, time) as part of normal server operation. There are no advertising pixels. If you open Instagram, Meta’s policy applies.'
        },
        {
          title: 'Cookies',
          text: 'We only store the interface language (cookie limen-locale). There are no counters or advertising cookies. See the Cookies page for more.'
        },
        {
          title: 'Your rights',
          text: 'You can ask to access, correct or delete inquiry data at studio@limen.example. If you are in the EU, you may also contact your national authority.'
        },
        {
          title: 'Changes',
          text: 'We will update this notice when studio details, live inquiry delivery or analytics are in place.'
        }
      ]
    ),
    cookiesLink: L('Cookies', 'Cookies', 'Cookies', 'Cookies'),
    cookiesTitle: L('Cookies', 'Cookies', 'Cookies', 'Cookies'),
    cookies1: L('Сайт не подключает рекламные трекеры. Технические cookies появятся здесь после выбора аналитики.', 'Сайт не підключає рекламні трекери. Технічні cookies з’являться тут після вибору аналітики.', 'El sitio no conecta rastreadores publicitarios. Las cookies técnicas aparecerán aquí tras elegir analítica.', 'The site does not connect advertising trackers. Technical cookies will appear here after analytics is chosen.'),
    cookies2: L('Пока сторонние счётчики не установлены, отдельное согласие не запрашивается.', 'Поки сторонні лічильники не встановлені, окрема згода не запитується.', 'Mientras no haya contadores de terceros, no se pide un consentimiento aparte.', 'While third-party counters are not installed, separate consent is not requested.'),
    privacyNav: L('Конфиденциальность', 'Конфіденційність', 'Privacidad', 'Privacy')
  },

  error: {
    code: L('Ошибка', 'Помилка', 'Error', 'Error'),
    notFound: L('Такой плоскости нет.', 'Такої площини немає.', 'Ese plano no existe.', 'That plane is not here.'),
    fail: L('Страница не собралась.', 'Сторінка не зібралася.', 'La página no se ha construido.', 'The page did not build.'),
    notFoundLead: L('Проверьте адрес или вернитесь на главную.', 'Перевірте адресу або поверніться на головну.', 'Revise la dirección o vuelva al inicio.', 'Check the address or return home.'),
    failLead: L('Попробуйте обновить страницу.', 'Спробуйте оновити сторінку.', 'Intente actualizar la página.', 'Try refreshing the page.'),
    home: L('На главную', 'На головну', 'Al inicio', 'Home')
  },

  cta: {
    title: L('Обсудить проект.', 'Обговорити проєкт.', 'Hablar del proyecto.', 'Discuss the project.'),
    text: L('Чертеж, фото стены или задача. Считаем систему под архитектуру.', 'Креслення, фото стіни або задача. Рахуємо систему під архітектуру.', 'Plano, foto del muro o encargo. Calculamos el sistema para la arquitectura.', 'A drawing, a wall photo, or the brief. We size the system to the architecture.'),
    consult: L('Получить консультацию', 'Отримати консультацію', 'Pedir consulta', 'Get a consultation'),
    ask: L('Задать вопрос', 'Задати питання', 'Hacer una pregunta', 'Ask a question'),
    quote: L('Получить просчёт', 'Отримати прорахунок', 'Pedir cálculo', 'Request a quote'),
    price: L('Запросить стоимость', 'Запросити вартість', 'Pedir presupuesto', 'Request pricing'),
    more: L('Узнать больше', 'Дізнатися більше', 'Saber más', 'Learn more')
  },

  pages: {
    notFoundProduct: L('Система не найдена', 'Систему не знайдено', 'Sistema no encontrado', 'System not found'),
    notFoundProject: L('Сценарий не найден', 'Сценарій не знайдено', 'Escenario no encontrado', 'Scenario not found')
  }
} as const
