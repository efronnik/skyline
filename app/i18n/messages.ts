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
      'Плёнка под покраску. Кромка серая или чёрная. Standard или INSIDE.',
      'Плівка під фарбування. Кромка сіра або чорна. Standard або INSIDE.',
      'Lámina para pintar. Canto gris o negro. Standard o INSIDE.',
      'Film for painting. Grey or black edge. Standard or INSIDE.'
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
      leaf: L('Полотно под покраску', 'Полотно під фарбування', 'Hoja para pintar', 'Leaf for painting'),
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
      'Полотно белое. Кромка анодированная. Нажмите на дверь, чтобы открыть.',
      'Полотно біле. Кромка анодована. Натисніть на двері, щоб відкрити.',
      'Hoja blanca. Canto anodizado. Pulse la puerta para abrir.',
      'White leaf. Anodized edge. Click the door to open.'
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
    leaf: L('Цвет двери', 'Колір дверей', 'Color de la puerta', 'Door colour'),
    leafFinish: L('Плёнка под покраску', 'Плівка під фарбування', 'Lámina para pintar', 'Film for painting'),
    finishes: {
      paint: L('Плёнка под покраску', 'Плівка під фарбування', 'Lámina para pintar', 'Film for painting')
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
      chalk: L('Мел', 'Крейда', 'Tiza', 'Chalk'),
      linen: L('Лён', 'Льон', 'Lino', 'Linen'),
      sand: L('Песок', 'Пісок', 'Arena', 'Sand'),
      mineral: L('Минерал', 'Мінерал', 'Mineral', 'Mineral'),
      clay: L('Глина', 'Глина', 'Arcilla', 'Clay'),
      sage: L('Шалфей', 'Шавлія', 'Salvia', 'Sage'),
      graphite: L('Графит', 'Графіт', 'Grafito', 'Graphite'),
      ink: L('Чернила', 'Чорнило', 'Tinta', 'Ink'),
      oak: L('Дуб', 'Дуб', 'Roble', 'Oak'),
      walnut: L('Орех', 'Горіх', 'Nogal', 'Walnut'),
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
          'Полотно готовится под финиш помещения: та же краска, та же степень матовости, что и стена.',
          'Полотно готується під фініш приміщення: та сама фарба, той самий ступінь матовості, що й стіна.',
          'La hoja se prepara para el acabado del espacio: la misma pintura y el mismo mate que el muro.',
          'The leaf is prepared for the room finish: the same paint and the same sheen as the wall.'
        ),
        notes: L('Финиш выполняется вместе с отделкой стен. Цвет задаёт проект, не каталог.', 'Фініш виконується разом з оздобленням стін. Колір задає проєкт, не каталог.', 'El acabado se ejecuta con los muros. El color lo define el proyecto, no el catálogo.', 'The finish is done with the walls. Colour comes from the project, not a catalogue.')
      },
      plaster: {
        name: L('Минеральная плоскость', 'Мінеральна площина', 'Plano mineral', 'Mineral plane'),
        category: L('Plaster', 'Plaster', 'Plaster', 'Plaster'),
        summary: L(
          'Известковая и минеральная штукатурка. Дверь исчезает в зерне поверхности.',
          'Вапняна і мінеральна штукатурка. Двері зникають у зерні поверхні.',
          'Enlucido de cal y mineral. La puerta desaparece en el grano de la superficie.',
          'Lime and mineral plaster. The door disappears into the grain of the surface.'
        ),
        notes: L('Работает только при точном монтаже и общем финишном слое.', 'Працює лише за точного монтажу і спільного фінішного шару.', 'Solo funciona con una instalación precisa y una capa de acabado común.', 'Works only with precise installation and a shared finishing coat.')
      },
      oak: {
        name: L('Дуб', 'Дуб', 'Roble', 'Oak'),
        category: L('Veneer', 'Veneer', 'Veneer', 'Veneer'),
        summary: L(
          'Прямой шпон европейского дуба. Масло, без глянца, без мебельного блеска.',
          'Прямий шпон європейського дуба. Олія, без глянцю, без меблевого блиску.',
          'Chapa de roble europeo. Aceite, sin brillo de mobiliario.',
          'Straight European oak veneer. Oil, no furniture gloss.'
        ),
        notes: L('Подбор по образцу. Рисунок и тон согласовываются до производства.', 'Підбір за зразком. Рисунок і тон узгоджуються до виробництва.', 'Selección según muestra. Dibujo y tono se acuerdan antes de fabricar.', 'Matched to sample. Figure and tone are agreed before production.')
      },
      walnut: {
        name: L('Орех', 'Горіх', 'Nogal', 'Walnut'),
        category: L('Veneer', 'Veneer', 'Veneer', 'Veneer'),
        summary: L(
          'Тёмный шпон для интерьеров, где стена сама является деревом.',
          'Темний шпон для інтер’єрів, де стіна сама є деревом.',
          'Chapa oscura para interiores donde el muro es la madera.',
          'Dark veneer for interiors where the wall itself is wood.'
        ),
        notes: L('Возможны другие породы по запросу проекта.', 'Можливі інші породи на запит проєкту.', 'Otras especies posibles según el proyecto.', 'Other species available on project request.')
      },
      glass: {
        name: L('Стекло', 'Скло', 'Vidrio', 'Glass'),
        category: L('Glass', 'Glass', 'Glass', 'Glass'),
        summary: L(
          'Матовое или прозрачное полотно в скрытой системе. Свет без дверной рамы.',
          'Матове або прозоре полотно в прихованій системі. Світло без дверної рами.',
          'Hoja mate o transparente en sistema oculto. Luz sin marco de puerta.',
          'Frosted or clear leaf in a concealed system. Light without a door frame.'
        ),
        notes: L('Тип стекла и фурнитура согласовываются отдельно.', 'Тип скла і фурнітура узгоджуються окремо.', 'El tipo de vidrio y la herrajería se acuerdan aparte.', 'Glass type and hardware are agreed separately.')
      }
    }
  },

  technology: {
    kicker: L('Технология', 'Технологія', 'Tecnología', 'Technology'),
    spec: L('05 — Construction', '05 — Construction', '05 — Construction', '05 — Construction'),
    title: L('Алюминиевый короб iDoors.', 'Алюмінієвий короб iDoors.', 'Marco de aluminio iDoors.', 'iDoors aluminium frame.'),
    lead: L(
      'Standard — наружу. INSIDE — внутрь.',
      'Standard — назовні. INSIDE — всередину.',
      'Standard hacia fuera. INSIDE hacia dentro.',
      'Standard outward. INSIDE inward.'
    ),
    wall: L('Гипсокартон · кирпич / штукатурка', 'Гіпсокартон · цегла / штукатурка', 'Pladur · ladrillo / yeso', 'Drywall · brick / plaster'),
    hProfile: L('Соединительный H-профиль для расширителей', 'З’єднувальний H-профіль для розширювачів', 'Perfil H de unión para ensanches', 'Connecting H-profile for extensions'),
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
        text: L('Коробка уходит в стену. Снаружи остаётся плоскость, а не портал.', 'Коробка йде в стіну. Ззовні лишається площина, а не портал.', 'El marco entra en el muro. Fuera queda un plano, no un portal.', 'The frame goes into the wall. Outside, a plane remains — not a portal.')
      },
      hinges: {
        title: L('Invisible Hinges', 'Invisible Hinges', 'Invisible Hinges', 'Invisible Hinges'),
        text: L('Петли скрыты в толщине полотна и коробки. С фасада их нет.', 'Петлі сховані в товщині полотна і коробки. З фасаду їх немає.', 'Las bisagras quedan en el canto. De frente no existen.', 'Hinges sit in the thickness of leaf and frame. From the front they are gone.')
      },
      leaf: {
        title: L('Flush Leaf', 'Flush Leaf', 'Flush Leaf', 'Flush Leaf'),
        text: L('Полотно стоит в одной плоскости со стеной. Наличник не используется.', 'Полотно стоїть в одній площині зі стіною. Лиштва не використовується.', 'La hoja queda al ras del muro. No hay tapajuntas.', 'The leaf sits in the wall plane. No architrave is used.')
      },
      install: {
        title: L('Precise Install', 'Precise Install', 'Precise Install', 'Precise Install'),
        text: L('Геометрия проёма, регулировка петель и зазор задают качество всей стены.', 'Геометрія прорізу, регулювання петель і зазор задають якість усієї стіни.', 'La geometría del hueco, el ajuste y la junta definen la calidad del muro.', 'Opening geometry, hinge adjustment and the gap set the quality of the whole wall.')
      },
      finish: {
        title: L('Final Finish', 'Final Finish', 'Final Finish', 'Final Finish'),
        text: L('Финиш выполняется вместе со стеной: окраска, штукатурка или шпон.', 'Фініш виконується разом зі стіною: фарбування, штукатурка або шпон.', 'El acabado se hace con el muro: pintura, enlucido o chapa.', 'The finish is done with the wall: paint, plaster or veneer.')
      }
    }
  },

  beforeAfter: {
    kicker: L('Сравнение', 'Порівняння', 'Comparación', 'Compare'),
    spec: L('06 — Before / After', '06 — Before / After', '06 — Before / After', '06 — Before / After'),
    title: L('Обычная дверь. Затем — стена.', 'Звичайні двері. Потім — стіна.', 'Una puerta convencional. Luego, el muro.', 'A conventional door. Then — the wall.'),
    before: L('Наличник', 'Лиштва', 'Tapajuntas', 'Architrave'),
    after: L('Плоскость', 'Площина', 'Plano', 'Plane'),
    aria: L('Сравнить до и после', 'Порівняти до і після', 'Comparar antes y después', 'Compare before and after'),
    altAfter: L('Стена со скрытой дверью после интеграции', 'Стіна з прихованими дверима після інтеграції', 'Muro con puerta oculta tras la integración', 'Wall with a flush door after integration'),
    altBefore: L('Обычная дверь с наличником до интеграции', 'Звичайні двері з лиштвою до інтеграції', 'Puerta convencional con tapajuntas', 'Conventional door with architrave')
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
        { title: 'Монтаж', text: 'Коробка, полотно, регулировка, проверка плоскости.' },
        { title: 'Финиш', text: 'Отделка вместе со стеной. Передача объекта.' }
      ],
      [
        { title: 'Розмова', text: 'Креслення, матеріал стін, висота, сценарій відкривання.' },
        { title: 'Обмір', text: 'Проріз і примикання знімаються на об’єкті, не за ескізом.' },
        { title: 'Специфікація', text: 'Модель, оздоблення, петлі, ручка, бік відкривання.' },
        { title: 'Виробництво', text: 'Полотно і прихована система збираються під конкретний проріз.' },
        { title: 'Монтаж', text: 'Коробка, полотно, регулювання, перевірка площини.' },
        { title: 'Фініш', text: 'Оздоблення разом зі стіною. Передача об’єкта.' }
      ],
      [
        { title: 'Conversación', text: 'Planos, material de muros, altura, sentido de apertura.' },
        { title: 'Medición', text: 'El hueco y los encuentros se levantan en obra, no del croquis.' },
        { title: 'Especificación', text: 'Modelo, acabado, bisagras, manilla, sentido de apertura.' },
        { title: 'Producción', text: 'Hoja y sistema oculto se fabrican para ese hueco.' },
        { title: 'Montaje', text: 'Marco, hoja, ajuste, comprobación del plano.' },
        { title: 'Acabado', text: 'Acabado junto al muro. Entrega.' }
      ],
      [
        { title: 'Conversation', text: 'Drawings, wall material, height, opening scenario.' },
        { title: 'Survey', text: 'The opening and junctions are taken on site, not from a sketch.' },
        { title: 'Specification', text: 'Model, finish, hinges, handle, handing.' },
        { title: 'Production', text: 'Leaf and concealed system are built for that opening.' },
        { title: 'Install', text: 'Frame, leaf, adjustment, plane check.' },
        { title: 'Finish', text: 'Finishing with the wall. Handover.' }
      ]
    )
  },

  quality: {
    kicker: L('Детали', 'Деталі', 'Detalles', 'Details'),
    spec: L('09 — Precision', '09 — Precision', '09 — Precision', '09 — Precision'),
    title: L('Точность в деталях.', 'Точність у деталях.', 'La precisión está en el detalle.', 'Precision is in the details.'),
    items: {
      gap: {
        title: L('Зазор', 'Зазор', 'Junta', 'Gap'),
        text: L('Тонкая тень вместо наличника.', 'Тонка тінь замість лиштви.', 'Una sombra fina en lugar del tapajuntas.', 'A thin shadow instead of an architrave.')
      },
      hinge: {
        title: L('Петля', 'Петля', 'Bisagra', 'Hinge'),
        text: L('Скрытый механизм в кромке.', 'Прихований механізм у крайці.', 'Mecanismo oculto en el canto.', 'A concealed mechanism in the edge.')
      },
      handle: {
        title: L('Ручка', 'Ручка', 'Manilla', 'Handle'),
        text: L('Линейный жест вместо розетки.', 'Лінійний жест замість розетки.', 'Un gesto lineal en lugar de un rosetón.', 'A linear gesture instead of a rose.')
      }
    }
  },

  architects: {
    kicker: L('Для бюро', 'Для бюро', 'Para estudios', 'For practices'),
    spec: L('10 — Practice', '10 — Practice', '10 — Practice', '10 — Practice'),
    title: L('Для архитекторов и дизайнеров.', 'Для архітекторів і дизайнерів.', 'Para arquitectos y diseñadores.', 'For architects and designers.'),
    text: L(
      'Узлы, размеры и образцы — по запросу проекта. Комплект можно запросить заявкой.',
      'Вузли, розміри й зразки — на запит проєкту. Комплект можна запросити заявкою.',
      'Nudos, cotas y muestras — a petición del proyecto. El dossier se solicita en la consulta.',
      'Details, sizes and samples — on project request. Request the pack from the inquiry.'
    ),
    points: L(
      ['DWG / CAD — по запросу', 'BIM-семейства — под узел проекта', 'Образцы отделки', 'Консультация по примыканию'],
      ['DWG / CAD — на запит', 'BIM-сімейства — під вузол проєкту', 'Зразки оздоблення', 'Консультація щодо примикання'],
      ['DWG / CAD — a petición', 'Familias BIM — según el nudo', 'Muestras de acabado', 'Consulta de encuentro'],
      ['DWG / CAD — on request', 'BIM families — for the project detail', 'Finish samples', 'Junction consultation']
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
      kicker: L('Полотно под покраску', 'Полотно під фарбування', 'Hoja para pintar', 'Leaf for painting'),
      summary: L(
        'Дверь скрытого монтажа под дальнейшую отделку с алюминиевой коробкой. Полотно под покраску, торец и короб — анодированный серый или чёрный.',
        'Двері прихованого монтажу під подальше оздоблення з алюмінієвою коробкою. Полотно під фарбування, торець і короб — анодований сірий або чорний.',
        'Puerta de instalación oculta para acabado posterior con marco de aluminio. Hoja para pintar; canto y marco anodizados en gris o negro.',
        'Concealed door for further finishing with an aluminium frame. Leaf for painting; edge and frame anodized grey or black.'
      ),
      description: L(
        'Три положения: INSIDE, закрыто, прямое открывание. Узел в гипсокартоне или в кирпиче со штукатуркой. Соединительный H-профиль для расширителей.',
        'Три положення: INSIDE, закрито, пряме відкривання. Вузол у гіпсокартоні або в цеглі зі штукатуркою. З’єднувальний H-профіль для розширювачів.',
        'Tres posiciones: INSIDE, cerrada y apertura directa. Nudo en pladur o en ladrillo con yeso. Perfil H de unión para ensanches.',
        'Three positions: INSIDE, closed and direct opening. Detail in drywall or brick with plaster. Connecting H-profile for extensions.'
      ),
      features: L(
        ['Полотно под покраску', 'Анодированный короб и торец', 'Standard / INSIDE', 'Гипсокартон или кирпич', 'H-профиль для расширителей'],
        ['Полотно під фарбування', 'Анодований короб і торець', 'Standard / INSIDE', 'Гіпсокартон або цегла', 'H-профіль для розширювачів'],
        ['Hoja para pintar', 'Marco y canto anodizados', 'Standard / INSIDE', 'Pladur o ladrillo', 'Perfil H para ensanches'],
        ['Leaf for painting', 'Anodized frame and edge', 'Standard / INSIDE', 'Drywall or brick', 'H-profile for extensions']
      )
    },
    'prime-al-c': {
      name: L('Prime-AL(C)', 'Prime-AL(C)', 'Prime-AL(C)', 'Prime-AL(C)'),
      latin: L('IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard'),
      kicker: L('Плёнка под покраску', 'Плівка під фарбування', 'Lámina para pintar', 'Film for painting'),
      summary: L(
        'Плёнка RENOLIT под покраску. Торец — алюминий серый. Прямое открывание.',
        'Плівка RENOLIT під фарбування. Торець — алюміній сірий. Пряме відкривання.',
        'Lámina RENOLIT para pintar. Canto de aluminio gris. Apertura directa.',
        'RENOLIT film for painting. Grey aluminium edge. Direct opening.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевая коробка. Standard — наружу. Полотно под дальнейшую отделку.',
        'Прихований монтаж, алюмінієва коробка. Standard — назовні. Полотно під подальше оздоблення.',
        'Instalación oculta, marco de aluminio. Standard hacia fuera. Hoja para acabado posterior.',
        'Concealed install, aluminium frame. Standard outward. Leaf for further finishing.'
      ),
      features: L(
        ['Плёнка RENOLIT под покраску', 'Кромка алюминий серый', 'Standard · наружу'],
        ['Плівка RENOLIT під фарбування', 'Кромка алюміній сірий', 'Standard · назовні'],
        ['Lámina RENOLIT para pintar', 'Canto de aluminio gris', 'Standard · hacia fuera'],
        ['RENOLIT film for painting', 'Grey aluminium edge', 'Standard · outward']
      )
    },
    'prime-al-c-inside': {
      name: L('Prime-AL(C) INSIDE', 'Prime-AL(C) INSIDE', 'Prime-AL(C) INSIDE', 'Prime-AL(C) INSIDE'),
      latin: L('IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE'),
      kicker: L('Плёнка под покраску', 'Плівка під фарбування', 'Lámina para pintar', 'Film for painting'),
      summary: L(
        'Плёнка RENOLIT под покраску. Торец — алюминий серый. Обратное открывание INSIDE.',
        'Плівка RENOLIT під фарбування. Торець — алюміній сірий. Зворотне відкривання INSIDE.',
        'Lámina RENOLIT para pintar. Canto de aluminio gris. Apertura inversa INSIDE.',
        'RENOLIT film for painting. Grey aluminium edge. INSIDE reverse opening.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевая коробка. INSIDE — внутрь. Полотно под дальнейшую отделку.',
        'Прихований монтаж, алюмінієва коробка. INSIDE — всередину. Полотно під подальше оздоблення.',
        'Instalación oculta, marco de aluminio. INSIDE hacia dentro. Hoja para acabado posterior.',
        'Concealed install, aluminium frame. INSIDE inward. Leaf for further finishing.'
      ),
      features: L(
        ['Плёнка RENOLIT под покраску', 'Кромка алюминий серый', 'INSIDE · внутрь'],
        ['Плівка RENOLIT під фарбування', 'Кромка алюміній сірий', 'INSIDE · всередину'],
        ['Lámina RENOLIT para pintar', 'Canto de aluminio gris', 'INSIDE · hacia dentro'],
        ['RENOLIT film for painting', 'Grey aluminium edge', 'INSIDE · inward']
      )
    },
    'prime-al-ch': {
      name: L('Prime-AL(Ч)', 'Prime-AL(Ч)', 'Prime-AL(Ч)', 'Prime-AL(Ч)'),
      latin: L('IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard', 'IDOORS · Standard'),
      kicker: L('Плёнка под покраску', 'Плівка під фарбування', 'Lámina para pintar', 'Film for painting'),
      summary: L(
        'Плёнка RENOLIT под покраску. Торец — алюминий чёрный. Прямое открывание.',
        'Плівка RENOLIT під фарбування. Торець — алюміній чорний. Пряме відкривання.',
        'Lámina RENOLIT para pintar. Canto de aluminio negro. Apertura directa.',
        'RENOLIT film for painting. Black aluminium edge. Direct opening.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевая коробка. Standard — наружу. Полотно под дальнейшую отделку.',
        'Прихований монтаж, алюмінієва коробка. Standard — назовні. Полотно під подальше оздоблення.',
        'Instalación oculta, marco de aluminio. Standard hacia fuera. Hoja para acabado posterior.',
        'Concealed install, aluminium frame. Standard outward. Leaf for further finishing.'
      ),
      features: L(
        ['Плёнка RENOLIT под покраску', 'Кромка алюминий чёрный', 'Standard · наружу'],
        ['Плівка RENOLIT під фарбування', 'Кромка алюміній чорний', 'Standard · назовні'],
        ['Lámina RENOLIT para pintar', 'Canto de aluminio negro', 'Standard · hacia fuera'],
        ['RENOLIT film for painting', 'Black aluminium edge', 'Standard · outward']
      )
    },
    'prime-al-ch-inside': {
      name: L('Prime-AL(Ч) INSIDE', 'Prime-AL(Ч) INSIDE', 'Prime-AL(Ч) INSIDE', 'Prime-AL(Ч) INSIDE'),
      latin: L('IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE', 'IDOORS · INSIDE'),
      kicker: L('Плёнка под покраску', 'Плівка під фарбування', 'Lámina para pintar', 'Film for painting'),
      summary: L(
        'Плёнка RENOLIT под покраску. Торец — алюминий чёрный. Обратное открывание INSIDE.',
        'Плівка RENOLIT під фарбування. Торець — алюміній чорний. Зворотне відкривання INSIDE.',
        'Lámina RENOLIT para pintar. Canto de aluminio negro. Apertura inversa INSIDE.',
        'RENOLIT film for painting. Black aluminium edge. INSIDE reverse opening.'
      ),
      description: L(
        'Скрытый монтаж, алюминиевая коробка. INSIDE — внутрь. Полотно под дальнейшую отделку.',
        'Прихований монтаж, алюмінієва коробка. INSIDE — всередину. Полотно під подальше оздоблення.',
        'Instalación oculta, marco de aluminio. INSIDE hacia dentro. Hoja para acabado posterior.',
        'Concealed install, aluminium frame. INSIDE inward. Leaf for further finishing.'
      ),
      features: L(
        ['Плёнка RENOLIT под покраску', 'Кромка алюминий чёрный', 'INSIDE · внутрь'],
        ['Плівка RENOLIT під фарбування', 'Кромка алюміній чорний', 'INSIDE · всередину'],
        ['Lámina RENOLIT para pintar', 'Canto de aluminio negro', 'INSIDE · hacia dentro'],
        ['RENOLIT film for painting', 'Black aluminium edge', 'INSIDE · inward']
      )
    }
  },

  specs: {
    finish: L('Отделка', 'Оздоблення', 'Acabado', 'Finish'),
    opening: L('Открывание', 'Відкривання', 'Apertura', 'Handing'),
    height: L('Высота', 'Висота', 'Altura', 'Height'),
    color: L('Цвет', 'Колір', 'Color', 'Colour'),
    edge: L('Окантовка', 'Окантовка', 'Canto', 'Edging'),
    threshold: L('Выпадающий порог', 'Випадний поріг', 'Umbral automático', 'Drop seal')
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
