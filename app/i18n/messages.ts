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
    collection: L('Система', 'Система', 'Sistema', 'System'),
    configurator: L('Конфигуратор', 'Конфігуратор', 'Configurador', 'Configurator'),
    materials: L('Материалы', 'Матеріали', 'Materiales', 'Materials'),
    projects: L('Проекты', 'Проєкти', 'Proyectos', 'Projects'),
    contact: L('Заявка', 'Заявка', 'Consulta', 'Inquiry'),
    about: L('О студии', 'Про студію', 'Estudio', 'Studio')
  },

  footer: {
    studio: L('Студия', 'Студія', 'Estudio', 'Studio'),
    collection: L('Система', 'Система', 'Sistema', 'System'),
    contact: L('Контакт', 'Контакт', 'Contacto', 'Contact'),
    directions: L('Как добраться', 'Як дістатися', 'Cómo llegar', 'Directions'),
    addressNote: L('Адрес появится после заполнения карточки студии.', 'Адреса з’явиться після заповнення картки студії.', 'La dirección aparecerá cuando se complete la ficha del estudio.', 'The address will appear once the studio card is filled in.')
  },

  seo: {
    homeTitle: L('Двери скрытого монтажа', 'Двері прихованого монтажу', 'Puertas de instalación oculta', 'Flush doors'),
    homeDesc: L(
      'Архитектурные двери скрытого монтажа: полотно в плоскости стены, скрытая коробка, минимальный зазор.',
      'Архітектурні двері прихованого монтажу: полотно в площині стіни, прихована коробка, мінімальний зазор.',
      'Puertas arquitectónicas de instalación oculta: hoja al ras del muro, marco oculto, junta mínima.',
      'Architectural flush doors: leaf in the plane of the wall, hidden frame, minimal gap.'
    )
  },

  hero: {
    spec: L('Flush · Hidden frame · Prime-AL', 'Flush · Hidden frame · Prime-AL', 'Flush · Marco oculto · Prime-AL', 'Flush · Hidden frame · Prime-AL'),
    title: L('Стена продолжается.', 'Стіна продовжується.', 'El muro continúa.', 'The wall continues.'),
    lead: L(
      'Полотно в плоскости стены — часть архитектуры.',
      'Полотно в площині стіни — частина архітектури.',
      'La hoja al ras del muro: arquitectura.',
      'The leaf in the wall plane — architecture.'
    ),
    cta1: L('Собрать дверь', 'Зібрати двері', 'Configurar la puerta', 'Build the door'),
    cta2: L('Рассчитать проект', 'Розрахувати проєкт', 'Calcular el proyecto', 'Request a quote'),
    alt: L(
      'Производство скрытых дверей: полотно и алюминиевый профиль',
      'Виробництво прихованих дверей: полотно й алюмінієвий профіль',
      'Fabricación de puertas ocultas: hoja y perfil de aluminio',
      'Flush-door production: leaf and aluminium profile'
    )
  },

  philosophy: {
    kicker: L('Философия', 'Філософія', 'Filosofía', 'Philosophy'),
    spec: L('01 — Prime-AL', '01 — Prime-AL', '01 — Prime-AL', '01 — Prime-AL'),
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
    spec: L('02 — Collection', '02 — Collection', '02 — Collection', '02 — Collection'),
    title: L('Prime-AL.', 'Prime-AL.', 'Prime-AL.', 'Prime-AL.'),
    configure: L('Настроить', 'Налаштувати', 'Configurar', 'Configure'),
    hint: L(
      'Праймированная плёнка (Германия) под краску, обои и штукатурку. Кромка серая или чёрная. Standard или INSIDE.',
      'Праймована плівка (Німеччина) під фарбу, шпалери й штукатурку. Кромка сіра або чорна. Standard або INSIDE.',
      'Lámina imprimada (Alemania) para pintura, papel y enlucido. Canto gris o negro. Standard o INSIDE.',
      'Primed film (Germany) for paint, wallpaper and plaster. Grey or black edge. Standard or INSIDE.'
    ),
    shelfAria: L('Четыре модели Prime-AL, листайте в сторону', 'Чотири моделі Prime-AL, гортайте вбік', 'Cuatro modelos Prime-AL, deslice hacia el lado', 'Four Prime-AL models, swipe sideways'),
    doorColor: L('Цвет двери', 'Колір дверей', 'Color de la puerta', 'Door colour'),
    edgeColor: L('Цвет кромки', 'Колір кромки', 'Color del canto', 'Edge colour'),
    trioAlt: L(
      'Prime-AL: обратное открывание, закрытое положение и прямое открывание',
      'Prime-AL: зворотне відкривання, закрите положення і пряме відкривання',
      'Prime-AL: apertura inversa, posición cerrada y apertura directa',
      'Prime-AL: reverse opening, closed position and direct opening'
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
      leaf: L('Праймированная плёнка', 'Праймована плівка', 'Lámina imprimada', 'Primed film'),
      frame: L('Анодированный короб и торец', 'Анодований короб і торець', 'Marco y canto anodizados', 'Anodized frame and edge'),
      swing: L('Standard / INSIDE', 'Standard / INSIDE', 'Standard / INSIDE', 'Standard / INSIDE'),
      wall: L('Гипсокартон или кирпич', 'Гіпсокартон або цегла', 'Pladur o ladrillo', 'Drywall or brick')
    }
  },

  config: {
    kicker: L('Конфигуратор', 'Конфігуратор', 'Configurador', 'Configurator'),
    spec: L('03 — Spec', '03 — Spec', '03 — Spec', '03 — Spec'),
    title: L('Собрать систему.', 'Зібрати систему.', 'Configurar el sistema.', 'Specify the system.'),
    lead: L(
      'Праймированная плёнка. Кромка анодированная. Нажмите на дверь, чтобы открыть.',
      'Праймована плівка. Кромка анодована. Натисніть на двері, щоб відкрити.',
      'Lámina imprimada. Canto anodizado. Pulse la puerta para abrir.',
      'Primed film. Anodized edge. Click the door to open.'
    ),
    liveAria: L('Кромка, сторона и направление', 'Кромка, сторона і напрямок', 'Canto, lado y sentido', 'Edge, side and swing'),
    clickDoor: L('Нажмите на полотно, чтобы открыть или закрыть', 'Натисніть на полотно, щоб відкрити або закрити', 'Pulse la hoja para abrir o cerrar', 'Click the leaf to open or close'),
    openDoor: L('Открыть', 'Відкрити', 'Abrir', 'Open'),
    closeDoor: L('Закрыть', 'Закрити', 'Cerrar', 'Close'),
    clickHandle: L('Положение ручки', 'Положення ручки', 'Posición de la manilla', 'Handle position'),
    clickSill: L('Выпадающий порог', 'Випадний поріг', 'Umbral automático', 'Drop seal'),
    picking: L('Цвет кромки', 'Колір кромки', 'Color del canto', 'Edge colour'),
    loading: L('Загрузка модели…', 'Завантаження моделі…', 'Cargando el modelo…', 'Loading the model…'),
    type: L('Тип', 'Тип', 'Tipo', 'Type'),
    opening: L('Открывание', 'Відкривання', 'Apertura', 'Handing'),
    side: L('Сторона', 'Сторона', 'Lado', 'Side'),
    swing: L('Направление', 'Напрямок', 'Sentido', 'Swing'),
    height: L('Высота', 'Висота', 'Altura', 'Height'),
    handle: L('Ручка', 'Ручка', 'Manilla', 'Handle'),
    handlePos: L('Положение ручки', 'Положення ручки', 'Posición de la manilla', 'Handle position'),
    edge: L('Окантовка', 'Окантовка', 'Canto', 'Edging'),
    wall: L('Стена', 'Стіна', 'Muro', 'Wall'),
    floor: L('Пол', 'Підлога', 'Suelo', 'Floor'),
    leaf: L('Полотно', 'Полотно', 'Hoja', 'Leaf'),
    wallPick: L('Цвет стены', 'Колір стіни', 'Color del muro', 'Wall colour'),
    floorPick: L('Цвет пола', 'Колір підлоги', 'Color del suelo', 'Floor colour'),
    leaf: L('Цвет двери', 'Колір дверей', 'Color de la puerta', 'Door colour'),
    leafFinish: L('Праймированная плёнка (Германия)', 'Праймована плівка (Німеччина)', 'Lámina imprimada (Alemania)', 'Primed film (Germany)'),
    finishes: {
      paint: L('Праймированная плёнка (Германия)', 'Праймована плівка (Німеччина)', 'Lámina imprimada (Alemania)', 'Primed film (Germany)')
    },
    threshold: L('Выпадающий порог', 'Випадний поріг', 'Umbral automático', 'Drop seal'),
    finish: L('Отделка', 'Оздоблення', 'Acabado', 'Finish'),
    color: L('Цвет', 'Колір', 'Color', 'Colour'),
    discuss: L('Обсудить это решение', 'Обговорити це рішення', 'Consultar esta solución', 'Discuss this spec'),
    summary: L('Спецификация', 'Специфікація', 'Especificación', 'Specification'),
    types: {
      single: L('Одностворчатая', 'Одностулкова', 'De una hoja', 'Single'),
      double: L('Двустворчатая', 'Двостулкова', 'De dos hojas', 'Double'),
      sliding: L('Раздвижная', 'Розсувна', 'Corredera', 'Sliding')
    },
    openings: {
      left: L('Левое', 'Ліве', 'Izquierda', 'Left'),
      right: L('Правое', 'Праве', 'Derecha', 'Right'),
      in: L('INSIDE · внутрь', 'INSIDE · всередину', 'INSIDE · dentro', 'INSIDE · inward'),
      out: L('Standard · наружу', 'Standard · назовні', 'Standard · fuera', 'Standard · outward'),
      inLive: L('INSIDE', 'INSIDE', 'INSIDE', 'INSIDE'),
      outLive: L('STD', 'STD', 'STD', 'STD')
    },
    heights: {
      standard: L('Стандарт', 'Стандарт', 'Estándar', 'Standard'),
      ceiling: L('До потолка', 'До стелі', 'Hasta el techo', 'To ceiling'),
      custom: L('По проекту', 'За проєктом', 'A medida', 'Bespoke')
    },
    handles: {
      linear: L('Линейная', 'Лінійна', 'Lineal', 'Linear'),
      hidden: L('Скрытая', 'Прихована', 'Oculta', 'Concealed'),
      none: L('Без ручки', 'Без ручки', 'Sin manilla', 'No handle')
    },
    handlePositions: {
      standard: L('Стандарт', 'Стандарт', 'Estándar', 'Standard'),
      high: L('Высокая', 'Висока', 'Alta', 'High'),
      custom: L('По проекту', 'За проєктом', 'A medida', 'Bespoke')
    },
    edges: {
      silver: L('Анодированный серый', 'Анодований сірий', 'Anodizado gris', 'Anodized grey'),
      black: L('Анодированный чёрный', 'Анодований чорний', 'Anodizado negro', 'Anodized black')
    },
    thresholds: {
      yes: L('Есть', 'Є', 'Sí', 'Yes'),
      no: L('Нет', 'Немає', 'No', 'No')
    },
    colors: {
      white: L('Белый', 'Білий', 'Blanco', 'White'),
      plaster: L('Штукатурка', 'Штукатурка', 'Yeso', 'Plaster'),
      chalk: L('Мел', 'Крейда', 'Tiza', 'Chalk'),
      linen: L('Лён', 'Льон', 'Lino', 'Linen'),
      sand: L('Песок', 'Пісок', 'Arena', 'Sand'),
      mineral: L('Минерал', 'Мінерал', 'Mineral', 'Mineral'),
      clay: L('Глина', 'Глина', 'Arcilla', 'Clay'),
      sage: L('Шалфей', 'Шавлія', 'Salvia', 'Sage'),
      graphite: L('Графит', 'Графіт', 'Grafito', 'Graphite'),
      ink: L('Чернила', 'Чорнило', 'Tinta', 'Ink'),
      oak: L('Дуб', 'Дуб', 'Roble', 'Oak'),
      oakLight: L('Дуб светлый', 'Дуб світлий', 'Roble claro', 'Light oak'),
      oakWarm: L('Дуб тёплый', 'Дуб теплий', 'Roble cálido', 'Warm oak'),
      oakGrey: L('Дуб серый', 'Дуб сірий', 'Roble gris', 'Grey oak'),
      oakDark: L('Дуб тёмный', 'Дуб темний', 'Roble oscuro', 'Dark oak'),
      oakSmoke: L('Дуб дымчатый', 'Дуб димчастий', 'Roble ahumado', 'Smoked oak'),
      oakDeep: L('Дуб глубокий', 'Дуб глибокий', 'Roble profundo', 'Deep oak'),
      oakBleached: L('Дуб белёный', 'Дуб білений', 'Roble blanqueado', 'Bleached oak'),
      oakMocha: L('Дуб мокка', 'Дуб мокка', 'Roble mocha', 'Mocha oak'),
      paint: L('Грунт / краска', 'Ґрунт / фарба', 'Imprimación / pintura', 'Primer / paint'),
      walnut: L('Орех', 'Горіх', 'Nogal', 'Walnut'),
      stone: L('Камень', 'Камінь', 'Piedra', 'Stone'),
      concrete: L('Бетон', 'Бетон', 'Hormigón', 'Concrete'),
      charcoal: L('Уголь', 'Вугілля', 'Carbón', 'Charcoal'),
      frost: L('Матовое', 'Матове', 'Mate', 'Frosted'),
      clear: L('Прозрачное', 'Прозоре', 'Transparente', 'Clear'),
      custom: L('По образцу', 'За зразком', 'Según muestra', 'To sample')
    }
  },

  materials: {
    kicker: L('Материалы', 'Матеріали', 'Materiales', 'Materials'),
    spec: L('04 — Surface', '04 — Surface', '04 — Surface', '04 — Surface'),
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
    spec: L('05 — Construction', '05 — Construction', '05 — Construction', '05 — Construction'),
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
    spec: L('06 — Before / After', '06 — Before / After', '06 — Before / After', '06 — Before / After'),
    title: L('Обычная дверь. Затем — стена.', 'Звичайні двері. Потім — стіна.', 'Una puerta convencional. Luego, el muro.', 'A conventional door. Then — the wall.'),
    before: L('Дверь', 'Двері', 'Puerta', 'Door'),
    after: L('Стена', 'Стіна', 'Muro', 'Wall'),
    aria: L('Сравнить дверь и стену', 'Порівняти двері і стіну', 'Comparar puerta y muro', 'Compare door and wall'),
    altAfter: L('Скрытая дверь в цвет стены в конце коридора', 'Приховані двері в колір стіни в кінці коридору', 'Puerta oculta del color del muro al fondo del pasillo', 'Flush door in the wall colour at the end of the corridor'),
    altBefore: L('Скрытые двери: одно полотно приоткрыто', 'Приховані двері: одне полотно прочинене', 'Puertas ocultas: una hoja entreabierta', 'Flush doors with one leaf slightly open')
  },

  projects: {
    kicker: L('Сценарии', 'Сценарії', 'Escenarios', 'Scenarios'),
    spec: L('07 — Spaces', '07 — Spaces', '07 — Spaces', '07 — Spaces'),
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
        product: L('Prime-AL', 'Prime-AL', 'Prime-AL', 'Prime-AL'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Два проёма на смежных стенах. Полотно белое, в плоскости штукатурки.',
          'Два прорізи на суміжних стінах. Полотно біле, у площині штукатурки.',
          'Dos huecos en muros contiguos. Hoja blanca, al ras del enlucido.',
          'Two openings on adjacent walls. White leaf, flush with the plaster.'
        ),
        solution: L(
          'Prime-AL с чёрной алюминиевой кромкой. Наличник отсутствует.',
          'Prime-AL із чорною алюмінієвою кромкою. Лиштви немає.',
          'Prime-AL con canto de aluminio negro. Sin tapajuntas.',
          'Prime-AL with a black aluminium edge. No architrave.'
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
        product: L('Prime-AL', 'Prime-AL', 'Prime-AL', 'Prime-AL'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Длинный объём. Белые полотна стоят в плоскости стен, коробка не читается.',
          'Довгий об’єм. Білі полотна стоять у площині стін, коробка не читається.',
          'Un volumen largo. Hojas blancas al ras; el marco no se lee.',
          'A long volume. White leaves sit in the wall plane; the frame does not read.'
        ),
        solution: L(
          'Prime-AL с чёрной кромкой. Проёмы на торце и по ходу коридора.',
          'Prime-AL із чорною кромкою. Прорізи на торці й уздовж коридору.',
          'Prime-AL con canto negro. Huecos al fondo y a lo largo del pasillo.',
          'Prime-AL with a black edge. Openings at the end and along the corridor.'
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
        product: L('Prime-AL', 'Prime-AL', 'Prime-AL', 'Prime-AL'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Два полотна сходятся в углу. Белая плоскость, чёрный шов.',
          'Два полотна сходяться в куті. Біла площина, чорний шов.',
          'Dos hojas se encuentran en el rincón. Plano blanco, junta negra.',
          'Two leaves meet in a corner. White plane, black joint.'
        ),
        solution: L(
          'Одинаковая система Prime-AL на обеих стенах. Кромка чёрная.',
          'Однакова система Prime-AL на обох стінах. Кромка чорна.',
          'El mismo sistema Prime-AL en ambos muros. Canto negro.',
          'The same Prime-AL system on both walls. Black edge.'
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
        product: L('Prime-AL', 'Prime-AL', 'Prime-AL', 'Prime-AL'),
        finish: L('Белое полотно, чёрный анод', 'Біле полотно, чорний анод', 'Hoja blanca, anodizado negro', 'White leaf, black anodized'),
        dimensions: L('По проекту', 'За проєктом', 'A medida', 'Bespoke'),
        story: L(
          'Один проём в белой стене. Полотно под покраску, кромка чёрная.',
          'Один проріз у білій стіні. Полотно під фарбування, кромка чорна.',
          'Un hueco en un muro blanco. Hoja para pintar, canto negro.',
          'One opening in a white wall. Leaf for painting, black edge.'
        ),
        solution: L(
          'Prime-AL стоит заподлицо. Ручка и шов — единственные акценты.',
          'Prime-AL стоїть запідлицо. Ручка і шов — єдині акценти.',
          'Prime-AL queda al ras. Manilla y junta son los únicos acentos.',
          'Prime-AL sits flush. Handle and joint are the only accents.'
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
    spec: L('08 — Sequence', '08 — Sequence', '08 — Sequence', '08 — Sequence'),
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
    spec: L('09 — Precision', '09 — Precision', '09 — Precision', '09 — Precision'),
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

  architects: {
    kicker: L('Для бюро', 'Для бюро', 'Para estudios', 'For practices'),
    spec: L('10 — Practice', '10 — Practice', '10 — Practice', '10 — Practice'),
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

  contact: {
    kicker: L('Контакт', 'Контакт', 'Contacto', 'Contact'),
    spec: L('11 — Request', '11 — Request', '11 — Request', '11 — Request'),
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

  products: {
    'prime-al': {
      name: L('Prime-AL', 'Prime-AL', 'Prime-AL', 'Prime-AL'),
      latin: L('IDOORS · скрытый монтаж', 'IDOORS · прихований монтаж', 'IDOORS · instalación oculta', 'IDOORS · concealed install'),
      kicker: L('Праймированная плёнка', 'Праймована плівка', 'Lámina imprimada', 'Primed film'),
      summary: L(
        'Дверь скрытого монтажа. Праймированная плёнка (Германия) под краску, обои и штукатурку. Короб и торец — анодированный серый или чёрный.',
        'Двері прихованого монтажу. Праймована плівка (Німеччина) під фарбу, шпалери й штукатурку. Короб і торець — анодований сірий або чорний.',
        'Puerta de instalación oculta. Lámina imprimada (Alemania) para pintura, papel y enlucido. Marco y canto anodizados en gris o negro.',
        'Concealed door. Primed film (Germany) for paint, wallpaper and plaster. Frame and edge anodized grey or black.'
      ),
      description: L(
        'Каркас из переклеенного массива, соты, МДФ 6 или 8 мм. Standard и INSIDE рядом выглядят одинаково. Высоты полотен 2000 и 2012 мм, чтобы плоскость совпала.',
        'Каркас із переклеєного масиву, соти, МДФ 6 або 8 мм. Standard і INSIDE поруч виглядають однаково. Висоти полотен 2000 і 2012 мм, щоб площина збіглася.',
        'Bastidor laminado, nido de abeja, MDF de 6 u 8 mm. Standard e INSIDE, juntas, se ven iguales. Hojas de 2000 y 2012 mm para alinear el plano.',
        'Laminated timber core, honeycomb, 6 or 8 mm MDF. Standard and INSIDE look the same side by side. Leaf heights 2000 and 2012 mm so the flush faces align.'
      ),
      features: L(
        ['Праймированная плёнка (Германия)', 'МДФ 6 мм Standard / 8 мм INSIDE', 'Соты или вспененный полиэтилен', 'Анодированный короб и торец', 'Standard / INSIDE', 'Петли ANSELMI · замок AGB Polaris'],
        ['Праймована плівка (Німеччина)', 'МДФ 6 мм Standard / 8 мм INSIDE', 'Соти або спінений поліетилен', 'Анодований короб і торець', 'Standard / INSIDE', 'Петлі ANSELMI · замок AGB Polaris'],
        ['Lámina imprimada (Alemania)', 'MDF 6 mm Standard / 8 mm INSIDE', 'Nido de abeja o polietileno expandido', 'Marco y canto anodizados', 'Standard / INSIDE', 'Bisagras ANSELMI · cerradura AGB Polaris'],
        ['Primed film (Germany)', '6 mm MDF Standard / 8 mm INSIDE', 'Honeycomb or expanded polyethylene', 'Anodized frame and edge', 'Standard / INSIDE', 'ANSELMI hinges · AGB Polaris lock']
      )
    },
    'prime-al-c': {
      name: L('Prime-AL(C)', 'Prime-AL(C)', 'Prime-AL(C)', 'Prime-AL(C)'),
      latin: L('IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard'),
      kicker: L('Праймированная плёнка', 'Праймована плівка', 'Lámina imprimada', 'Primed film'),
      summary: L(
        'Праймированная плёнка (Германия). Торец — алюминий серый. Прямое открывание. Полотно 2000 × 610–910 мм.',
        'Праймована плівка (Німеччина). Торець — алюміній сірий. Пряме відкривання. Полотно 2000 × 610–910 мм.',
        'Lámina imprimada (Alemania). Canto de aluminio gris. Apertura directa. Hoja 2000 × 610–910 mm.',
        'Primed film (Germany). Grey aluminium edge. Direct opening. Leaf 2000 × 610–910 mm.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевый короб. МДФ 6 мм, сотовый заполнитель. Standard открывается в сторону плоскости.',
        'Прихований монтаж, алюмінієвий короб. МДФ 6 мм, стільниковий заповнювач. Standard відчиняється в бік площини.',
        'Instalación oculta, marco de aluminio. MDF de 6 mm, nido de abeja. Standard abre hacia el plano.',
        'Concealed install, aluminium frame. 6 mm MDF, honeycomb core. Standard opens toward the flush face.'
      ),
      features: L(
        ['Праймированная плёнка (Германия)', 'МДФ 6 мм · соты', 'Кромка алюминий серый', 'Standard · наружу · 2000 мм'],
        ['Праймована плівка (Німеччина)', 'МДФ 6 мм · соти', 'Кромка алюміній сірий', 'Standard · назовні · 2000 мм'],
        ['Lámina imprimada (Alemania)', 'MDF 6 mm · nido de abeja', 'Canto de aluminio gris', 'Standard · hacia fuera · 2000 mm'],
        ['Primed film (Germany)', '6 mm MDF · honeycomb', 'Grey aluminium edge', 'Standard · outward · 2000 mm']
      )
    },
    'prime-al-c-inside': {
      name: L('Prime-AL(C) INSIDE', 'Prime-AL(C) INSIDE', 'Prime-AL(C) INSIDE', 'Prime-AL(C) INSIDE'),
      latin: L('IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE'),
      kicker: L('Праймированная плёнка', 'Праймована плівка', 'Lámina imprimada', 'Primed film'),
      summary: L(
        'Праймированная плёнка (Германия). Торец — алюминий серый. Обратное открывание INSIDE. Полотно 2012 × 610–910 мм.',
        'Праймована плівка (Німеччина). Торець — алюміній сірий. Зворотне відкривання INSIDE. Полотно 2012 × 610–910 мм.',
        'Lámina imprimada (Alemania). Canto de aluminio gris. Apertura inversa INSIDE. Hoja 2012 × 610–910 mm.',
        'Primed film (Germany). Grey aluminium edge. INSIDE reverse opening. Leaf 2012 × 610–910 mm.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевый короб. МДФ 8 мм. INSIDE заподлицо с одной стороны, открывается в другую.',
        'Прихований монтаж, алюмінієвий короб. МДФ 8 мм. INSIDE запідлицо з одного боку, відчиняється в інший.',
        'Instalación oculta, marco de aluminio. MDF de 8 mm. INSIDE queda al ras por un lado y abre al contrario.',
        'Concealed install, aluminium frame. 8 mm MDF. INSIDE is flush on one side and opens the other way.'
      ),
      features: L(
        ['Праймированная плёнка (Германия)', 'МДФ 8 мм · соты', 'Кромка алюминий серый', 'INSIDE · внутрь · 2012 мм'],
        ['Праймована плівка (Німеччина)', 'МДФ 8 мм · соти', 'Кромка алюміній сірий', 'INSIDE · всередину · 2012 мм'],
        ['Lámina imprimada (Alemania)', 'MDF 8 mm · nido de abeja', 'Canto de aluminio gris', 'INSIDE · hacia dentro · 2012 mm'],
        ['Primed film (Germany)', '8 mm MDF · honeycomb', 'Grey aluminium edge', 'INSIDE · inward · 2012 mm']
      )
    },
    'prime-al-ch': {
      name: L('Prime-AL(Ч)', 'Prime-AL(Ч)', 'Prime-AL(N)', 'Prime-AL(B)'),
      latin: L('IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard'),
      kicker: L('Праймированная плёнка', 'Праймована плівка', 'Lámina imprimada', 'Primed film'),
      summary: L(
        'Праймированная плёнка (Германия). Торец — алюминий чёрный. Прямое открывание. Полотно 2000 × 610–910 мм.',
        'Праймована плівка (Німеччина). Торець — алюміній чорний. Пряме відкривання. Полотно 2000 × 610–910 мм.',
        'Lámina imprimada (Alemania). Canto de aluminio negro. Apertura directa. Hoja 2000 × 610–910 mm.',
        'Primed film (Germany). Black aluminium edge. Direct opening. Leaf 2000 × 610–910 mm.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевый короб. МДФ 6 мм, сотовый заполнитель. Standard открывается в сторону плоскости.',
        'Прихований монтаж, алюмінієвий короб. МДФ 6 мм, стільниковий заповнювач. Standard відчиняється в бік площини.',
        'Instalación oculta, marco de aluminio. MDF de 6 mm, nido de abeja. Standard abre hacia el plano.',
        'Concealed install, aluminium frame. 6 mm MDF, honeycomb core. Standard opens toward the flush face.'
      ),
      features: L(
        ['Праймированная плёнка (Германия)', 'МДФ 6 мм · соты', 'Кромка алюминий чёрный', 'Standard · наружу · 2000 мм'],
        ['Праймована плівка (Німеччина)', 'МДФ 6 мм · соти', 'Кромка алюміній чорний', 'Standard · назовні · 2000 мм'],
        ['Lámina imprimada (Alemania)', 'MDF 6 mm · nido de abeja', 'Canto de aluminio negro', 'Standard · hacia fuera · 2000 mm'],
        ['Primed film (Germany)', '6 mm MDF · honeycomb', 'Black aluminium edge', 'Standard · outward · 2000 mm']
      )
    },
    'prime-al-ch-inside': {
      name: L('Prime-AL(Ч) INSIDE', 'Prime-AL(Ч) INSIDE', 'Prime-AL(N) INSIDE', 'Prime-AL(B) INSIDE'),
      latin: L('IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE'),
      kicker: L('Праймированная плёнка', 'Праймована плівка', 'Lámina imprimada', 'Primed film'),
      summary: L(
        'Праймированная плёнка (Германия). Торец — алюминий чёрный. Обратное открывание INSIDE. Полотно 2012 × 610–910 мм.',
        'Праймована плівка (Німеччина). Торець — алюміній чорний. Зворотне відкривання INSIDE. Полотно 2012 × 610–910 мм.',
        'Lámina imprimada (Alemania). Canto de aluminio negro. Apertura inversa INSIDE. Hoja 2012 × 610–910 mm.',
        'Primed film (Germany). Black aluminium edge. INSIDE reverse opening. Leaf 2012 × 610–910 mm.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевый короб. МДФ 8 мм. INSIDE заподлицо с одной стороны, открывается в другую.',
        'Прихований монтаж, алюмінієвий короб. МДФ 8 мм. INSIDE запідлицо з одного боку, відчиняється в інший.',
        'Instalación oculta, marco de aluminio. MDF de 8 mm. INSIDE queda al ras por un lado y abre al contrario.',
        'Concealed install, aluminium frame. 8 mm MDF. INSIDE is flush on one side and opens the other way.'
      ),
      features: L(
        ['Праймированная плёнка (Германия)', 'МДФ 8 мм · соты', 'Кромка алюминий чёрный', 'INSIDE · внутрь · 2012 мм'],
        ['Праймована плівка (Німеччина)', 'МДФ 8 мм · соти', 'Кромка алюміній чорний', 'INSIDE · всередину · 2012 мм'],
        ['Lámina imprimada (Alemania)', 'MDF 8 mm · nido de abeja', 'Canto de aluminio negro', 'INSIDE · hacia dentro · 2012 mm'],
        ['Primed film (Germany)', '8 mm MDF · honeycomb', 'Black aluminium edge', 'INSIDE · inward · 2012 mm']
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
    dba: L('дБА', 'дБА', 'dBA', 'dBA')
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
    title: L('Обсудить проём.', 'Обговорити проріз.', 'Hablar del hueco.', 'Discuss the opening.'),
    text: L('Чертеж, фото стены или задача. Считаем систему под архитектуру.', 'Креслення, фото стіни або задача. Рахуємо систему під архітектуру.', 'Plano, foto del muro o encargo. Calculamos el sistema para la arquitectura.', 'A drawing, a wall photo, or the brief. We size the system to the architecture.'),
    consult: L('Получить консультацию', 'Отримати консультацію', 'Pedir consulta', 'Get a consultation'),
    price: L('Запросить стоимость', 'Запросити вартість', 'Pedir presupuesto', 'Request pricing')
  },

  pages: {
    notFoundProduct: L('Система не найдена', 'Систему не знайдено', 'Sistema no encontrado', 'System not found'),
    notFoundProject: L('Сценарий не найден', 'Сценарій не знайдено', 'Escenario no encontrado', 'Scenario not found')
  }
} as const
