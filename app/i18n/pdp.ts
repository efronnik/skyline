function L<T>(ru: T, uk: T, es: T, en: T) {
  return { ru, uk, es, en } as const
}

export const pdp = {
  home: L('Главная', 'Головна', 'Inicio', 'Home'),
  catalog: L('Каталог', 'Каталог', 'Catálogo', 'Catalogue'),
  flush: L('Двери скрытого монтажа', 'Двері прихованого монтажу', 'Puertas de instalación oculta', 'Flush doors'),
  sku: L('Артикул', 'Артикул', 'Referencia', 'SKU'),
  quote: L('Получить просчёт', 'Отримати прорахунок', 'Pedir cálculo', 'Request a quote'),
  b2b: L('B2B / Оптовые условия по запросу', 'B2B / Оптові умови за запитом', 'B2B / Condiciones mayoristas a consulta', 'B2B / Wholesale terms on request'),
  customSize: L('Индивидуальный размер (высота до 2400 мм)', 'Індивідуальний розмір (висота до 2400 мм)', 'Medida individual (altura hasta 2400 mm)', 'Custom size (height up to 2400 mm)'),
  kitTitle: L('Входит в базовый комплект', 'Входить у базовий комплект', 'Incluido en el kit base', 'Included in the base kit'),
  kitBlockTitle: L('Комплектация товара', 'Комплектація товару', 'Kit del producto', 'Product kit'),
  optTitle: L('Можно заказать индивидуально (Опции / По запросу)', 'Можна замовити індивідуально (Опції / За запитом)', 'Bajo pedido (Opciones / A consulta)', 'Available to order (Options / On request)'),
  tableTitle: L('Таблица комплектации: Базовый комплект vs Опции', 'Таблиця комплектації: Базовий комплект vs Опції', 'Tabla de kit: base vs opciones', 'Kit table: base vs options'),
  tableTitleB2b: L('Таблица комплектации: Базовый комплект vs Опции (B2B)', 'Таблиця комплектації: Базовий комплект vs Опції (B2B)', 'Tabla de kit: base vs opciones (B2B)', 'Kit table: base vs options (B2B)'),
  tableBase: L('Базовый комплект', 'Базовий комплект', 'Kit base', 'Base kit'),
  tableOpt: L('Опционально (По запросу)', 'Опційно (За запитом)', 'Opcional (A consulta)', 'Optional (On request)'),
  techTitle: L('Подробные технические характеристики', 'Детальні технічні характеристики', 'Características técnicas', 'Technical specifications'),
  installTitle: L('Монтаж и подготовка проёма', 'Монтаж і підготовка прорізу', 'Montaje y preparación del hueco', 'Installation and opening prep'),
  installFinishTitle: L('Монтаж и техническая документация', 'Монтаж і технічна документація', 'Montaje y documentación técnica', 'Installation and technical documents'),
  installCustomTitle: L('Монтаж и регламент B2B', 'Монтаж і регламент B2B', 'Montaje y reglamento B2B', 'Installation and B2B protocol'),
  stepsTitle: L('Этапы установки', 'Етапи встановлення', 'Fases de instalación', 'Installation stages'),
  installInfo: L('Информация по установке', 'Інформація з встановлення', 'Información de instalación', 'Installation information'),
  openingTitle: L('Требования к проёму', 'Вимоги до прорізу', 'Requisitos del hueco', 'Opening requirements'),
  docsTitle: L('Файлы для скачивания', 'Файли для завантаження', 'Archivos para descargar', 'Downloads'),
  docsSoon: L(
    'Документацию готовит завод. Ссылки появятся на этой странице, когда файлы будут готовы.',
    'Документацію готує завод. Посилання з’являться на цій сторінці, коли файли будуть готові.',
    'La documentación la prepara la fábrica. Los enlaces aparecerán aquí cuando los archivos estén listos.',
    'The factory is preparing the documents. Links will appear here when the files are ready.'
  ),
  noticeTitle: L('Обращаем ваше внимание:', 'Звертаємо вашу увагу:', 'Tenga en cuenta:', 'Please note:'),
  notice: L(
    [
      'Как официальное представительство завода, мы специализируемся исключительно на производстве, комплектации и прямой поставке дверных систем iDOORS. Мы не выполняем строительно-монтажные работы.',
      'Если вам требуется профессиональный монтаж, мы с удовольствием порекомендуем проверенных сертифицированных партнёров и монтажные бригады, имеющие многолетний опыт работы с нашей продукцией и соблюдающие все технические регламенты фабрики.'
    ],
    [
      'Як офіційне представництво заводу, ми спеціалізуємося виключно на виробництві, комплектації та прямій поставці дверних систем iDOORS. Ми не виконуємо будівельно-монтажні роботи.',
      'Якщо вам потрібен професійний монтаж, ми з радістю порекомендуємо перевірених сертифікованих партнерів і монтажні бригади з багаторічним досвідом роботи з нашою продукцією, які дотримуються всіх технічних регламентів фабрики.'
    ],
    [
      'Como representación oficial de la fábrica, nos dedicamos exclusivamente a la producción, el kit y el suministro directo de sistemas de puertas iDOORS. No ejecutamos obras de montaje.',
      'Si necesita un montaje profesional, recomendamos partners certificados y cuadrillas con años de experiencia en nuestro producto, que siguen los reglamentos técnicos de la fábrica.'
    ],
    [
      'As the factory’s official representation we specialise only in the production, kitting and direct supply of iDOORS door systems. We do not carry out building or installation works.',
      'If you need professional installation, we will gladly recommend certified partners and crews with years of experience on our product who follow the factory’s technical regulations.'
    ]
  ),
  consultTitle: L('Получить консультацию', 'Отримати консультацію', 'Pedir consulta', 'Get a consultation'),
  consultLead: L(
    'Выберите мессенджер: Telegram или WhatsApp.',
    'Оберіть месенджер: Telegram або WhatsApp.',
    'Elija un mensajero: Telegram o WhatsApp.',
    'Choose a messenger: Telegram or WhatsApp.'
  ),
  telegram: L('Telegram', 'Telegram', 'Telegram', 'Telegram'),
  whatsapp: L('WhatsApp', 'WhatsApp', 'WhatsApp', 'WhatsApp'),
  quoteLead: L('Прошу просчёт по комплекту:', 'Прошу прорахунок за комплектом:', 'Solicito cálculo de este conjunto:', 'Please quote this set:'),
  qty: L('Количество одинаковых полотен', 'Кількість однакових полотен', 'Cantidad de hojas iguales', 'Quantity of identical leaves'),
  addLine: L('Добавить в просчёт', 'Додати до прорахунку', 'Añadir al cálculo', 'Add to quote'),
  added: L('Добавлено в просчёт', 'Додано до прорахунку', 'Añadido al cálculo', 'Added to quote'),
  quoteList: L('Позиции просчёта', 'Позиції прорахунку', 'Posiciones del cálculo', 'Quote positions'),
  quoteTotal: L('Всего полотен', 'Усього полотен', 'Hojas en total', 'Leaves in total'),
  removeLine: L('Убрать позицию', 'Прибрати позицію', 'Quitar posición', 'Remove position'),
  pcs: L('шт.', 'шт.', 'ud.', 'pcs'),
  quoteAria: L('Просчёт', 'Прорахунок', 'Cálculo', 'Quote'),
  consultLeadMsg: L('Прошу консультацию', 'Прошу консультацію', 'Solicito consulta', 'Please consult'),
  viaTelegram: L('через Telegram', 'через Telegram', 'por Telegram', 'via Telegram'),
  viaWhatsApp: L('через WhatsApp', 'через WhatsApp', 'por WhatsApp', 'via WhatsApp'),
  quoteFormTitle: L('Получить просчёт', 'Отримати прорахунок', 'Pedir cálculo', 'Request a quote'),
  quoteFormLead: L(
    'Оставьте контакт. В заявке будут все позиции: разные полотна и количество.',
    'Залиште контакт. У заявці будуть усі позиції: різні полотна і кількість.',
    'Deje un contacto. La consulta llevará todas las posiciones: hojas distintas y cantidades.',
    'Leave a contact. The inquiry will include every position: different leaves and quantities.'
  ),
  none: L('без опций', 'без опцій', 'sin opciones', 'no extras'),
  prevShot: L('Предыдущее фото', 'Попереднє фото', 'Foto anterior', 'Previous photo'),
  nextShot: L('Следующее фото', 'Наступне фото', 'Foto siguiente', 'Next photo'),
  gallery: L(
    'Покраска, обои, штукатурка, микроцемент',
    'Фарбування, шпалери, штукатурка, мікроцемент',
    'Pintura, papel, yeso, microcemento',
    'Paint, wallpaper, plaster, microcement'
  ),
  galleryAria: L('Галерея отделки двери', 'Галерея оздоблення дверей', 'Galería de acabado de la puerta', 'Door finish gallery'),
  dropSealNote: L(
    'Врезной уплотнитель внизу полотна. Опускается к полу и закрывает технологический зазор.',
    'Врізний ущільнювач унизу полотна. Опускається до підлоги і закриває технологічний зазор.',
    'Junta empotrada en la base de la hoja. Baja al suelo y cierra la holgura técnica.',
    'Concealed gasket at the bottom of the leaf. It drops to the floor and closes the clearance.'
  ),
  dash: L('—', '—', '—', '—'),
  priceNote: L(
    'Точная цена формируется после просчёта параметров конфигурации и габаритов проёма.',
    'Точна ціна формується після прорахунку параметрів конфігурації та габаритів прорізу.',
    'El precio exacto se forma tras calcular los parámetros de la configuración y las medidas del hueco.',
    'The exact price is formed after quoting the configuration and opening sizes.'
  ),
  sizeErr: L(
    'Высота 2001–2400 мм, ширина 500–1000 мм.',
    'Висота 2001–2400 мм, ширина 500–1000 мм.',
    'Altura 2001–2400 mm, ancho 500–1000 mm.',
    'Height 2001–2400 mm, width 500–1000 mm.'
  ),
  height: L('Высота (мм)', 'Висота (мм)', 'Altura (mm)', 'Height (mm)'),
  width: L('Ширина (мм)', 'Ширина (мм)', 'Ancho (mm)', 'Width (mm)'),

  selector: {
    finish: L('Вид финишной отделки полотна', 'Вид фінішного оздоблення полотна', 'Acabado de la hoja', 'Leaf finish'),
    swing: L('Тип открывания', 'Тип відчиняння', 'Tipo de apertura', 'Opening type'),
    size: L('Стандартные габариты полотна (В × Ш, мм)', 'Стандартні габарити полотна (В × Ш, мм)', 'Medidas estándar de la hoja (Al × An, mm)', 'Standard leaf sizes (H × W, mm)'),
    edge: L('Цвет анодирования короба и кромки', 'Колір анодування короба і крайки', 'Color de anodizado del marco y el canto', 'Anodized colour of frame and edge'),
    edgeFinish: L(
      'Цвет анодирования короба и защитной алюминиевой кромки',
      'Колір анодування короба і захисної алюмінієвої крайки',
      'Color de anodizado del marco y el canto de aluminio',
      'Anodized colour of frame and protective aluminium edge'
    ),
    extras: L('Дополнительное оснащение', 'Додаткове оснащення', 'Equipamiento adicional', 'Additional equipment'),
    customFinish: L('Тип отделки полотна', 'Тип оздоблення полотна', 'Tipo de acabado de la hoja', 'Leaf finish type'),
    dims: L('Габариты полотна (Входные параметры)', 'Габарити полотна (Вхідні параметри)', 'Medidas de la hoja (parámetros de entrada)', 'Leaf sizes (input parameters)')
  },

  swing: {
    out: L('На себя (Outside) — толщина полотна 40 мм', 'На себе (Outside) — товщина полотна 40 мм', 'Hacia sí (Outside) — hoja de 40 mm', 'Towards you (Outside) — 40 mm leaf'),
    outFinish: L('На себя (Outside) — толщина полотна 40–42 мм', 'На себе (Outside) — товщина полотна 40–42 мм', 'Hacia sí (Outside) — hoja de 40–42 mm', 'Towards you (Outside) — 40–42 mm leaf'),
    in: L('От себя / Реверс (Inside) — толщина полотна 50 мм с четвертью', 'Від себе / Реверс (Inside) — товщина полотна 50 мм з чвертю', 'Hacia fuera / Reverso (Inside) — hoja de 50 mm con rebaje', 'Away / Reverse (Inside) — 50 mm leaf with rebate')
  },

  edge: {
    silver: L('Натуральный алюминий (Серебро)', 'Натуральний алюміній (Срібло)', 'Aluminio natural (Plata)', 'Natural aluminium (Silver)'),
    black: L('Чёрный матовый (RAL 9005)', 'Чорний матовий (RAL 9005)', 'Negro mate (RAL 9005)', 'Matt black (RAL 9005)')
  },

  finishKind: {
    veneer: L('Натуральный шпон (дуб, орех, ясень)', 'Натуральний шпон (дуб, горіх, ясен)', 'Chapa natural (roble, nogal, fresno)', 'Natural veneer (oak, walnut, ash)'),
    mirror: L(
      'Зеркало / Скло (Mirror / Glass) (серебро, бронза, графит / осветлённое зеркало)',
      'Дзеркало / Скло (Mirror / Glass) (срібло, бронза, графіт / освітлене дзеркало)',
      'Espejo / Vidrio (Mirror / Glass) (plata, bronce, grafito / espejo claro)',
      'Mirror / Glass (silver, bronze, graphite / clear mirror)'
    )
  },

  customFinish: {
    primer: L('Под финишную отделку (заводской грунт under-paint)', 'Під фінішне оздоблення (заводський ґрунт under-paint)', 'Para el acabado (imprimación under-paint de fábrica)', 'For finishing (factory under-paint primer)'),
    veneer: L('Натуральный шпон (с подбором рисунка)', 'Натуральний шпон (з підбором рисунка)', 'Chapa natural (con selección de veta)', 'Natural veneer (matched figure)'),
    mirror: L('Зеркало / Стекло (серебро, бронза, графит)', 'Дзеркало / Скло (срібло, бронза, графіт)', 'Espejo / Vidrio (plata, bronce, grafito)', 'Mirror / Glass (silver, bronze, graphite)')
  },

  extras: {
    dropSeal: L('Выпадающий (автоматический) порожек (врезной умный уплотнитель)', 'Випадний (автоматичний) поріжок (врізний розумний ущільнювач)', 'Umbral automático (junta inteligente empotrada)', 'Drop seal (concealed automatic gasket)'),
    sound: L('Пакет «Усиленная шумоизоляция» (акустическая плита Smart Sound)', 'Пакет «Посилена шумоізоляція» (акустична плита Smart Sound)', 'Paquete de aislamiento acústico reforzado (placa Smart Sound)', 'Upgraded acoustic pack (Smart Sound board)'),
    closer: L('Петли с встроенным доводчиком (с функцией фиксации Hold-Open 90°)', 'Петлі з вбудованим доводчиком (з фіксацією Hold-Open 90°)', 'Bisagras con cierrapuertas (retención Hold-Open 90°)', 'Hinges with integral closer (Hold-Open 90°)'),
    spinoff: L('Дверная ручка и фиксатор Spinoff (выбор модели из каталога)', 'Дверна ручка і фіксатор Spinoff (вибір моделі з каталогу)', 'Manilla y fiador Spinoff (modelo del catálogo)', 'Spinoff handle and latch (model from the catalogue)'),
    spinoffFinish: L('Фурнитура Spinoff (Италия) (премиальный магнитный замок и нажимные ручки)', 'Фурнітура Spinoff (Італія) (преміальний магнітний замок і натискні ручки)', 'Herrajes Spinoff (Italia) (cerradura magnética premium y manillas)', 'Spinoff hardware (Italy) (premium magnetic lock and lever handles)')
  },

  line: {
    product: L('Товар', 'Товар', 'Producto', 'Product'),
    swing: L('Открывание', 'Відчиняння', 'Apertura', 'Opening'),
    size: L('Размер', 'Розмір', 'Medida', 'Size'),
    custom: L('индивидуальный размер, высота до 2400 мм', 'індивідуальний розмір, висота до 2400 мм', 'medida individual, altura hasta 2400 mm', 'custom size, height up to 2400 mm'),
    edge: L('Кромка и короб', 'Крайка і короб', 'Canto y marco', 'Edge and frame'),
    finish: L('Отделка', 'Оздоблення', 'Acabado', 'Finish'),
    extras: L('Опции', 'Опції', 'Opciones', 'Options'),
    qty: L('Количество', 'Кількість', 'Cantidad', 'Quantity')
  },

  base: {
    crumb: L('iDOORS Prime (Под финишную отделку)', 'iDOORS Prime (Під фінішне оздоблення)', 'iDOORS Prime (Para el acabado)', 'iDOORS Prime (For finishing)'),
    title: L(
      'Дверь скрытого монтажа iDOORS Prime под финишную отделку',
      'Двері прихованого монтажу iDOORS Prime під фінішне оздоблення',
      'Puerta de instalación oculta iDOORS Prime para el acabado',
      'iDOORS Prime flush door for finishing'
    ),
    kit: L(
      [
        'Дверное полотно: каркас из соснового бруса, сотовый наполнитель, листы МДФ с заводской полиуретановой грунтовкой under-paint.',
        'Дверной короб: усиленный профиль из анодированного алюминия Prime с эластичным уплотнителем.',
        'Петли: скрытые 3D-регулируемые петли Anselmi / Simonswerk (2 шт.).',
        'Замок: стандартный магнитный замок под фиксатор WC или ЦМС.',
        'Врезка: фабричная высокоточная врезка под петли и замок в заводских условиях.',
        'Изоляция и зазоры: базовая шумоизоляция (до 28–30 дБ), нижний технологический зазор 10–12 мм.'
      ],
      [
        'Дверне полотно: каркас із соснового бруса, стільниковий наповнювач, листи МДФ із заводським поліуретановим ґрунтом under-paint.',
        'Дверний короб: посилений профіль з анодованого алюмінію Prime з еластичним ущільнювачем.',
        'Петлі: приховані 3D-регульовані петлі Anselmi / Simonswerk (2 шт.).',
        'Замок: стандартний магнітний замок під фіксатор WC або ЦМС.',
        'Врізка: фабрична високоточна врізка під петлі та замок у заводських умовах.',
        'Ізоляція і зазори: базова шумоізоляція (до 28–30 дБ), нижній технологічний зазор 10–12 мм.'
      ],
      [
        'Hoja: bastidor de pino, nido de abeja, tableros MDF con imprimación de poliuretano under-paint de fábrica.',
        'Marco: perfil reforzado de aluminio anodizado Prime con junta elástica.',
        'Bisagras: ocultas 3D Anselmi / Simonswerk (2 uds.).',
        'Cerradura: magnética estándar para fiador WC o cilindro.',
        'Mecanizado: fresado de fábrica de alta precisión para bisagras y cerradura.',
        'Aislamiento y holguras: acústica base (hasta 28–30 dB), holgura inferior de 10–12 mm.'
      ],
      [
        'Door leaf: pine-timber frame, honeycomb core, MDF sheets with factory polyurethane under-paint primer.',
        'Door frame: reinforced Prime anodized aluminium profile with an elastic gasket.',
        'Hinges: concealed 3D-adjustable Anselmi / Simonswerk (2 pcs).',
        'Lock: standard magnetic lock for a WC latch or cylinder.',
        'Machining: factory high-precision cut-outs for hinges and lock.',
        'Insulation and gaps: base acoustic performance (up to 28–30 dB), 10–12 mm bottom clearance.'
      ]
    ),
    opts: L(
      [
        'Фурнитура Spinoff (Италия): премиальный магнитный замок и дизайнерские нажимные ручки с накладками (в цветах: матовый чёрный, сатин, хром, графит, латунь).',
        'Петли с доводчиком: скрытые петли с гидравлическим доводчиком и функцией фиксации полотна под углом 90° (Hold-Open).',
        'Выпадающий порожек: автоматический врезной умный уплотнитель для защиты от сквозняков, света и шума.',
        'Усиленная шумоизоляция: заполнение полотна многослойной акустической плитой высокой плотности Smart Sound (повышает защиту до 38–42 дБ).'
      ],
      [
        'Фурнітура Spinoff (Італія): преміальний магнітний замок і дизайнерські натискні ручки з накладками (кольори: матовий чорний, сатин, хром, графіт, латунь).',
        'Петлі з доводчиком: приховані петлі з гідравлічним доводчиком і фіксацією полотна під кутом 90° (Hold-Open).',
        'Випадний поріжок: автоматичний врізний розумний ущільнювач від протягів, світла і шуму.',
        'Посилена шумоізоляція: заповнення полотна багатошаровою акустичною плитою високої щільності Smart Sound (підвищує захист до 38–42 дБ).'
      ],
      [
        'Herrajes Spinoff (Italia): cerradura magnética premium y manillas de diseño con placas (negro mate, satinado, cromo, grafito, latón).',
        'Bisagras con cierrapuertas: ocultas hidráulicas con retención de la hoja a 90° (Hold-Open).',
        'Umbral automático: junta inteligente empotrada frente a corrientes, luz y ruido.',
        'Aislamiento acústico reforzado: relleno de placa acústica multicapa de alta densidad Smart Sound (hasta 38–42 dB).'
      ],
      [
        'Spinoff hardware (Italy): premium magnetic lock and designer lever handles with roses (matt black, satin, chrome, graphite, brass).',
        'Closer hinges: concealed hydraulic hinges with 90° leaf hold (Hold-Open).',
        'Drop seal: automatic concealed smart gasket against draughts, light and noise.',
        'Upgraded acoustics: multilayer high-density Smart Sound board in the leaf (up to 38–42 dB).'
      ]
    ),
    specs: L(
      [
        { dt: 'Толщина полотна', dd: '40 мм (прямое) / 50 мм (реверсивное).' },
        { dt: 'Покрытие полотна', dd: 'Полиуретановый адгезионный грунт глубокого проникновения (готово под покраску, обои, декоративную штукатурку, микроцемент).' },
        { dt: 'Материал короба', dd: 'Экструдированный анодированный алюминиевый профиль.' },
        { dt: 'Изоляционные свойства', dd: 'Базово 28–30 дБ / С опцией «Акустическая плита + автопорожек» — 38–42 дБ.' },
        { dt: 'Фурнитурная врезка', dd: 'Фабричная высокоточная врезка под базовые скрытые 3D-петли и магнитный замок (опционально — врезка под фурнитурные комплекты Spinoff).' },
        { dt: 'Регулировка петель', dd: '3D-регулировка в 3 плоскостях (по высоте ±2.5 мм, по ширине ±1.5 мм, по прижиму ±1.0 мм).' },
        { dt: 'Гарантия', dd: '5 лет на короб и полотно / 2 года на фурнитуру.' }
      ],
      [
        { dt: 'Товщина полотна', dd: '40 мм (пряме) / 50 мм (реверсивне).' },
        { dt: 'Покриття полотна', dd: 'Поліуретановий адгезійний ґрунт глибокого проникнення (готово під фарбування, шпалери, декоративну штукатурку, мікроцемент).' },
        { dt: 'Матеріал короба', dd: 'Екструдований анодований алюмінієвий профіль.' },
        { dt: 'Ізоляційні властивості', dd: 'Базово 28–30 дБ / З опцією «Акустична плита + автопоріжок» — 38–42 дБ.' },
        { dt: 'Фурнітурна врізка', dd: 'Фабрична високоточна врізка під базові приховані 3D-петлі і магнітний замок (опційно — врізка під фурнітурні комплекти Spinoff).' },
        { dt: 'Регулювання петель', dd: '3D-регулювання в 3 площинах (за висотою ±2.5 мм, за шириною ±1.5 мм, за притиском ±1.0 мм).' },
        { dt: 'Гарантія', dd: '5 років на короб і полотно / 2 роки на фурнітуру.' }
      ],
      [
        { dt: 'Espesor de la hoja', dd: '40 mm (directa) / 50 mm (reversible).' },
        { dt: 'Acabado de la hoja', dd: 'Imprimación adhesiva de poliuretano de penetración profunda (lista para pintura, papel, enlucido decorativo, microcemento).' },
        { dt: 'Material del marco', dd: 'Perfil de aluminio anodizado extruido.' },
        { dt: 'Aislamiento', dd: 'Base 28–30 dB / Con «placa acústica + umbral automático» — 38–42 dB.' },
        { dt: 'Mecanizado de herrajes', dd: 'Fresado de fábrica de alta precisión para bisagras 3D ocultas y cerradura magnética (opcional: kits Spinoff).' },
        { dt: 'Regulación de bisagras', dd: 'Regulación 3D en 3 planos (altura ±2,5 mm, ancho ±1,5 mm, presión ±1,0 mm).' },
        { dt: 'Garantía', dd: '5 años en marco y hoja / 2 años en herrajes.' }
      ],
      [
        { dt: 'Leaf thickness', dd: '40 mm (direct) / 50 mm (reverse).' },
        { dt: 'Leaf coating', dd: 'Deep-penetrating polyurethane adhesion primer (ready for paint, wallpaper, decorative plaster, microcement).' },
        { dt: 'Frame material', dd: 'Extruded anodized aluminium profile.' },
        { dt: 'Acoustic performance', dd: 'Base 28–30 dB / With “acoustic board + drop seal” — 38–42 dB.' },
        { dt: 'Hardware machining', dd: 'Factory high-precision cut-outs for base concealed 3D hinges and magnetic lock (optional Spinoff hardware kits).' },
        { dt: 'Hinge adjustment', dd: '3D adjustment in 3 planes (height ±2.5 mm, width ±1.5 mm, compression ±1.0 mm).' },
        { dt: 'Warranty', dd: '5 years on frame and leaf / 2 years on hardware.' }
      ]
    ),
    steps: L(
      [
        { dt: 'Черновой этап', dd: 'Монтаж алюминиевого короба на уровень чистого пола до нанесения штукатурки и шпаклёвки.' },
        { dt: 'Отделочный этап', dd: 'Зашивка стены ГКЛ или оштукатуривание вплотную к коробу с армирующей сеткой.' },
        { dt: 'Финишный этап', dd: 'Покраска, поклейка обоев или нанесение штукатурки на стену и подготовленное полотно.' },
        { dt: 'Установка полотна', dd: 'Навешивание полотна на скрытые петли, регулировка в 3D, монтаж замка Spinoff и ручки.' }
      ],
      [
        { dt: 'Чорновий етап', dd: 'Монтаж алюмінієвого короба на рівень чистої підлоги до нанесення штукатурки і шпаклівки.' },
        { dt: 'Оздоблювальний етап', dd: 'Зашивка стіни ГКЛ або штукатурення впритул до короба з армувальною сіткою.' },
        { dt: 'Фінішний етап', dd: 'Фарбування, наклеювання шпалер або нанесення штукатурки на стіну і підготовлене полотно.' },
        { dt: 'Встановлення полотна', dd: 'Навішування полотна на приховані петлі, регулювання в 3D, монтаж замка Spinoff і ручки.' }
      ],
      [
        { dt: 'Obra gruesa', dd: 'Montaje del marco de aluminio a cota de suelo acabado, antes del enlucido y el plastecido.' },
        { dt: 'Acabado de muro', dd: 'Cierre en pladur o enlucido a hueso contra el marco, con malla de refuerzo.' },
        { dt: 'Acabado final', dd: 'Pintura, empapelado o enlucido sobre el muro y la hoja preparada.' },
        { dt: 'Colocación de la hoja', dd: 'Cuelgue en bisagras ocultas, regulación 3D, montaje de cerradura Spinoff y manilla.' }
      ],
      [
        { dt: 'Rough stage', dd: 'Fit the aluminium frame to finished-floor level before plaster and filler.' },
        { dt: 'Wall finish stage', dd: 'Close the wall in plasterboard or plaster tight to the frame with reinforcing mesh.' },
        { dt: 'Final finish', dd: 'Paint, hang wallpaper or apply plaster to the wall and the prepared leaf.' },
        { dt: 'Leaf hanging', dd: 'Hang the leaf on concealed hinges, 3D-adjust, fit the Spinoff lock and handle.' }
      ]
    ),
    opening: L(
      [
        { dt: 'Высота проёма', dd: 'Высота полотна + 60 мм (от чистого пола).' },
        { dt: 'Ширина проёма', dd: 'Ширина полотна + 80–100 мм.' },
        { dt: 'Толщина стены', dd: 'От 75 мм.' },
        { dt: 'Вертикаль', dd: 'Отклонение не более 1.5 мм на 1 м.' }
      ],
      [
        { dt: 'Висота прорізу', dd: 'Висота полотна + 60 мм (від чистої підлоги).' },
        { dt: 'Ширина прорізу', dd: 'Ширина полотна + 80–100 мм.' },
        { dt: 'Товщина стіни', dd: 'Від 75 мм.' },
        { dt: 'Вертикаль', dd: 'Відхилення не більше 1.5 мм на 1 м.' }
      ],
      [
        { dt: 'Altura del hueco', dd: 'Altura de la hoja + 60 mm (desde el suelo acabado).' },
        { dt: 'Ancho del hueco', dd: 'Ancho de la hoja + 80–100 mm.' },
        { dt: 'Espesor de muro', dd: 'Desde 75 mm.' },
        { dt: 'Verticalidad', dd: 'Desviación no mayor de 1,5 mm por metro.' }
      ],
      [
        { dt: 'Opening height', dd: 'Leaf height + 60 mm (from finished floor).' },
        { dt: 'Opening width', dd: 'Leaf width + 80–100 mm.' },
        { dt: 'Wall thickness', dd: 'From 75 mm.' },
        { dt: 'Plumb', dd: 'Deviation no more than 1.5 mm per metre.' }
      ]
    ),
    docs: L(
      [
        { kind: 'PDF', name: 'Техническая карта и размеры проёмов iDOORS Prime' },
        { kind: 'PDF', name: 'Инструкция по монтажу скрытого короба и малярным работам' },
        { kind: 'DWG', name: 'CAD-чертежи и узлы примыкания для архитекторов/дизайнеров' }
      ],
      [
        { kind: 'PDF', name: 'Технічна карта і розміри прорізів iDOORS Prime' },
        { kind: 'PDF', name: 'Інструкція з монтажу прихованого короба і малярних робіт' },
        { kind: 'DWG', name: 'CAD-креслення і вузли примикання для архітекторів/дизайнерів' }
      ],
      [
        { kind: 'PDF', name: 'Ficha técnica y medidas de hueco iDOORS Prime' },
        { kind: 'PDF', name: 'Instrucción de montaje del marco oculto y trabajos de pintura' },
        { kind: 'DWG', name: 'Planos CAD y encuentros para arquitectos/interioristas' }
      ],
      [
        { kind: 'PDF', name: 'Technical sheet and opening sizes iDOORS Prime' },
        { kind: 'PDF', name: 'Installation guide for the concealed frame and decorating works' },
        { kind: 'DWG', name: 'CAD drawings and junction details for architects/designers' }
      ]
    )
  },

  finish: {
    crumb: L('iDOORS Prime (Шпон / Зеркало)', 'iDOORS Prime (Шпон / Дзеркало)', 'iDOORS Prime (Chapa / Espejo)', 'iDOORS Prime (Veneer / Mirror)'),
    title: L(
      'Дверь скрытого монтажа iDOORS Prime (Шпон / Зеркало)',
      'Двері прихованого монтажу iDOORS Prime (Шпон / Дзеркало)',
      'Puerta de instalación oculta iDOORS Prime (Chapa / Espejo)',
      'iDOORS Prime flush door (Veneer / Mirror)'
    ),
    kitLeafTitle: L('Дверное полотно', 'Дверне полотно', 'Hoja', 'Door leaf'),
    kitVeneer: L(
      'Для версии «Шпон»: каркас из соснового бруса, сотовый наполнитель, МДФ, облицованный натуральным шпоном с защитным матовым лаковым покрытием.',
      'Для версії «Шпон»: каркас із соснового бруса, стільниковий наповнювач, МДФ, облицьований натуральним шпоном із захисним матовим лаком.',
      'Versión «Chapa»: bastidor de pino, nido de abeja, MDF chapado en madera natural con barniz mate de protección.',
      'Veneer version: pine-timber frame, honeycomb core, MDF faced with natural veneer and a protective matt lacquer.'
    ),
    kitMirror: L(
      'Для версии «Зеркало»: усиленный каркас, MDF-основа, влагостойкое зеркало (4 мм) с фацетом/еврокромкой (с одной или двух сторон).',
      'Для версії «Дзеркало»: посилений каркас, MDF-основа, вологостійке дзеркало (4 мм) з фацетом/єврокрайкою (з одного або двох боків).',
      'Versión «Espejo»: bastidor reforzado, base MDF, espejo resistente a la humedad (4 mm) con facetado/canto euro (una o dos caras).',
      'Mirror version: reinforced frame, MDF core, 4 mm moisture-resistant mirror with a facet/euro edge (one or both faces).'
    ),
    kit: L(
      [
        'Дверной короб: усиленный профиль из экструдированного анодированного алюминия Prime с эластичным уплотнителем.',
        'Алюминиевая кромка: защитный торцевой профиль по периметру полотна в цвет короба (серебро / чёрный).',
        'Петли: скрытые 3D-регулируемые петли Anselmi / Simonswerk — 2 шт.',
        'Замок: стандартный магнитный замок под фиксатор WC или ЦМС.',
        'Врезка: фабричная высокоточная врезка под петли, замок и обработка торцов зеркала в заводских условиях.',
        'Изоляция и зазоры: базовая шумоизоляция (до 28–30 дБ), нижний технологический зазор 10–12 мм.'
      ],
      [
        'Дверний короб: посилений профіль з екструдованого анодованого алюмінію Prime з еластичним ущільнювачем.',
        'Алюмінієва крайка: захисний торцевий профіль по периметру полотна в колір короба (срібло / чорний).',
        'Петлі: приховані 3D-регульовані петлі Anselmi / Simonswerk — 2 шт.',
        'Замок: стандартний магнітний замок під фіксатор WC або ЦМС.',
        'Врізка: фабрична високоточна врізка під петлі, замок і обробка торців дзеркала в заводських умовах.',
        'Ізоляція і зазори: базова шумоізоляція (до 28–30 дБ), нижній технологічний зазор 10–12 мм.'
      ],
      [
        'Marco: perfil reforzado de aluminio anodizado extruido Prime con junta elástica.',
        'Canto de aluminio: perfil de canto perimetral al color del marco (plata / negro).',
        'Bisagras: ocultas 3D Anselmi / Simonswerk — 2 uds.',
        'Cerradura: magnética estándar para fiador WC o cilindro.',
        'Mecanizado: fresado de fábrica de alta precisión para bisagras, cerradura y canto del espejo.',
        'Aislamiento y holguras: acústica base (hasta 28–30 dB), holgura inferior de 10–12 mm.'
      ],
      [
        'Door frame: reinforced extruded anodized aluminium Prime profile with an elastic gasket.',
        'Aluminium edge: protective end profile around the leaf, matching the frame (silver / black).',
        'Hinges: concealed 3D-adjustable Anselmi / Simonswerk — 2 pcs.',
        'Lock: standard magnetic lock for a WC latch or cylinder.',
        'Machining: factory high-precision cut-outs for hinges, lock and mirror-edge finishing.',
        'Insulation and gaps: base acoustic performance (up to 28–30 dB), 10–12 mm bottom clearance.'
      ]
    ),
    opts: L(
      [
        'Фурнитура Spinoff (Италия): премиальный магнитный замок и дизайнерские ручки (матовый чёрный, сатин, хром, графит, латунь).',
        'Петли с доводчиком: скрытые гидравлические петли с плавным дожимом и фиксацией на 90° (Hold-Open).',
        'Выпадающий порожек: автоматический уплотнитель для защиты от сквозняков, света и шума.',
        'Усиленная шумоизоляция: заполнение многослойной акустической плитой Smart Sound (до 38–42 дБ).',
        'Индивидуальный выбор шпона / оттенка зеркала: выкрас шпона по образцу, тонированное зеркало (бронза / графит).',
        'Нестандартные размеры: изготовление полотен высотой до 2400 мм.'
      ],
      [
        'Фурнітура Spinoff (Італія): преміальний магнітний замок і дизайнерські ручки (матовий чорний, сатин, хром, графіт, латунь).',
        'Петлі з доводчиком: приховані гідравлічні петлі з плавним дотиском і фіксацією на 90° (Hold-Open).',
        'Випадний поріжок: автоматичний ущільнювач від протягів, світла і шуму.',
        'Посилена шумоізоляція: заповнення багатошаровою акустичною плитою Smart Sound (до 38–42 дБ).',
        'Індивідуальний вибір шпону / відтінку дзеркала: викрас шпону за зразком, тоноване дзеркало (бронза / графіт).',
        'Нестандартні розміри: виготовлення полотен висотою до 2400 мм.'
      ],
      [
        'Herrajes Spinoff (Italia): cerradura magnética premium y manillas de diseño (negro mate, satinado, cromo, grafito, latón).',
        'Bisagras con cierrapuertas: hidráulicas ocultas con cierre suave y retención a 90° (Hold-Open).',
        'Umbral automático: junta frente a corrientes, luz y ruido.',
        'Aislamiento acústico reforzado: placa acústica multicapa Smart Sound (hasta 38–42 dB).',
        'Chapa / tono de espejo a medida: muestra de chapa, espejo tintado (bronce / grafito).',
        'Medidas especiales: hojas de hasta 2400 mm de altura.'
      ],
      [
        'Spinoff hardware (Italy): premium magnetic lock and designer handles (matt black, satin, chrome, graphite, brass).',
        'Closer hinges: concealed hydraulic hinges with soft close and 90° hold (Hold-Open).',
        'Drop seal: automatic gasket against draughts, light and noise.',
        'Upgraded acoustics: multilayer Smart Sound board (up to 38–42 dB).',
        'Individual veneer / mirror tone: veneer sample match, tinted mirror (bronze / graphite).',
        'Non-standard sizes: leaves up to 2400 mm high.'
      ]
    ),
    table: L(
      [
        { row: 'Дверное полотно', base: 'Натуральный шпон с ЛКМ / Влагостойкое зеркало 4 мм на МДФ-основе.', opt: 'Выбор породы шпона, тонирование зеркала (бронза/графит), акустическая плита Smart Sound.' },
        { row: 'Дверной короб и кромка', base: 'Усиленный анодированный алюминиевый профиль (Серебро / Чёрный матовый).', opt: '—' },
        { row: 'Петли', base: 'Скрытые 3D-регулируемые Anselmi / Simonswerk — 2 шт.', opt: 'Скрытые петли с гидравлическим доводчиком и фиксатором (90°).' },
        { row: 'Замок', base: 'Стандартный магнитный замок под фиксатор WC или ЦМС.', opt: 'Премиальный магнитный замок Spinoff (Италия).' },
        { row: 'Ручки и накладки', base: 'Не входят в базовый комплект.', opt: 'Дизайнерские ручки Spinoff (Италия) (матовый чёрный, сатин, хром, графит, латунь).' },
        { row: 'Нижнее уплотнение', base: 'Технологический зазор 10–12 мм.', opt: 'Выпадающий (автоматический) умный порожек врезного типа.' },
        { row: 'Шумоизоляция', base: 'Базовая (до 28–30 дБ).', opt: 'Усиленная акустическая защита (до 38–42 дБ).' }
      ],
      [
        { row: 'Дверне полотно', base: 'Натуральний шпон з ЛКМ / Вологостійке дзеркало 4 мм на МДФ-основі.', opt: 'Вибір породи шпону, тонування дзеркала (бронза/графіт), акустична плита Smart Sound.' },
        { row: 'Дверний короб і крайка', base: 'Посилений анодований алюмінієвий профіль (Срібло / Чорний матовий).', opt: '—' },
        { row: 'Петлі', base: 'Приховані 3D-регульовані Anselmi / Simonswerk — 2 шт.', opt: 'Приховані петлі з гідравлічним доводчиком і фіксатором (90°).' },
        { row: 'Замок', base: 'Стандартний магнітний замок під фіксатор WC або ЦМС.', opt: 'Преміальний магнітний замок Spinoff (Італія).' },
        { row: 'Ручки і накладки', base: 'Не входять у базовий комплект.', opt: 'Дизайнерські ручки Spinoff (Італія) (матовий чорний, сатин, хром, графіт, латунь).' },
        { row: 'Нижнє ущільнення', base: 'Технологічний зазор 10–12 мм.', opt: 'Випадний (автоматичний) розумний поріжок врізного типу.' },
        { row: 'Шумоізоляція', base: 'Базова (до 28–30 дБ).', opt: 'Посилений акустичний захист (до 38–42 дБ).' }
      ],
      [
        { row: 'Hoja', base: 'Chapa natural con acabado / Espejo resistente a la humedad de 4 mm sobre MDF.', opt: 'Especie de chapa, espejo tintado (bronce/grafito), placa Smart Sound.' },
        { row: 'Marco y canto', base: 'Perfil de aluminio anodizado reforzado (Plata / Negro mate).', opt: '—' },
        { row: 'Bisagras', base: 'Ocultas 3D Anselmi / Simonswerk — 2 uds.', opt: 'Bisagras ocultas con cierrapuertas hidráulico y retención (90°).' },
        { row: 'Cerradura', base: 'Magnética estándar para fiador WC o cilindro.', opt: 'Cerradura magnética premium Spinoff (Italia).' },
        { row: 'Manillas y placas', base: 'No incluidas en el kit base.', opt: 'Manillas Spinoff de diseño (Italia) (negro mate, satinado, cromo, grafito, latón).' },
        { row: 'Junta inferior', base: 'Holgura técnica de 10–12 mm.', opt: 'Umbral automático inteligente empotrado.' },
        { row: 'Aislamiento acústico', base: 'Base (hasta 28–30 dB).', opt: 'Protección acústica reforzada (hasta 38–42 dB).' }
      ],
      [
        { row: 'Door leaf', base: 'Natural veneer with lacquer / 4 mm moisture-resistant mirror on MDF.', opt: 'Veneer species, tinted mirror (bronze/graphite), Smart Sound board.' },
        { row: 'Frame and edge', base: 'Reinforced anodized aluminium profile (Silver / Matt black).', opt: '—' },
        { row: 'Hinges', base: 'Concealed 3D-adjustable Anselmi / Simonswerk — 2 pcs.', opt: 'Concealed hydraulic closer hinges with 90° hold.' },
        { row: 'Lock', base: 'Standard magnetic lock for a WC latch or cylinder.', opt: 'Premium Spinoff magnetic lock (Italy).' },
        { row: 'Handles and roses', base: 'Not included in the base kit.', opt: 'Designer Spinoff handles (Italy) (matt black, satin, chrome, graphite, brass).' },
        { row: 'Bottom seal', base: '10–12 mm technical clearance.', opt: 'Concealed automatic smart drop seal.' },
        { row: 'Acoustics', base: 'Base (up to 28–30 dB).', opt: 'Upgraded acoustic protection (up to 38–42 dB).' }
      ]
    ),
    specs: L(
      [
        { dt: 'Толщина полотна', dd: '40–42 мм (на себя) / 50 мм (реверс).' },
        { dt: 'Защита торцов', dd: 'Обрамление защитной алюминиевой кромкой с 2 или 4 сторон (защищает края шпона и сколы зеркала).' },
        { dt: 'Материал короба', dd: 'Экструдированный анодированный алюминиевый профиль.' },
        { dt: 'Изоляционные свойства', dd: 'Базово 28–30 дБ / С опцией «Smart Sound + автопорожек» — 38–42 дБ.' },
        { dt: 'Фурнитурная врезка', dd: 'Заводская фрезеровка под петли и замок (опционально — врезка под фурнитуру Spinoff).' },
        { dt: 'Регулировка петель', dd: '3D-регулировка в 3 плоскостях (по высоте ±2.5 мм, по ширине ±1.5 мм, по прижиму ±1.0 мм).' },
        { dt: 'Гарантия', dd: '5 лет на короб и полотно / 2 года на фурнитуру.' }
      ],
      [
        { dt: 'Товщина полотна', dd: '40–42 мм (на себе) / 50 мм (реверс).' },
        { dt: 'Захист торців', dd: 'Обрамлення захисною алюмінієвою крайкою з 2 або 4 боків (захищає краї шпону і сколи дзеркала).' },
        { dt: 'Матеріал короба', dd: 'Екструдований анодований алюмінієвий профіль.' },
        { dt: 'Ізоляційні властивості', dd: 'Базово 28–30 дБ / З опцією «Smart Sound + автопоріжок» — 38–42 дБ.' },
        { dt: 'Фурнітурна врізка', dd: 'Заводське фрезерування під петлі та замок (опційно — врізка під фурнітуру Spinoff).' },
        { dt: 'Регулювання петель', dd: '3D-регулювання в 3 площинах (за висотою ±2.5 мм, за шириною ±1.5 мм, за притиском ±1.0 мм).' },
        { dt: 'Гарантія', dd: '5 років на короб і полотно / 2 роки на фурнітуру.' }
      ],
      [
        { dt: 'Espesor de la hoja', dd: '40–42 mm (hacia sí) / 50 mm (reverso).' },
        { dt: 'Protección de cantos', dd: 'Canto de aluminio en 2 o 4 lados (protege el canto de la chapa y el filo del espejo).' },
        { dt: 'Material del marco', dd: 'Perfil de aluminio anodizado extruido.' },
        { dt: 'Aislamiento', dd: 'Base 28–30 dB / Con «Smart Sound + umbral automático» — 38–42 dB.' },
        { dt: 'Mecanizado de herrajes', dd: 'Fresado de fábrica para bisagras y cerradura (opcional: herrajes Spinoff).' },
        { dt: 'Regulación de bisagras', dd: 'Regulación 3D en 3 planos (altura ±2,5 mm, ancho ±1,5 mm, presión ±1,0 mm).' },
        { dt: 'Garantía', dd: '5 años en marco y hoja / 2 años en herrajes.' }
      ],
      [
        { dt: 'Leaf thickness', dd: '40–42 mm (towards you) / 50 mm (reverse).' },
        { dt: 'Edge protection', dd: 'Protective aluminium edge on 2 or 4 sides (protects veneer edges and mirror chips).' },
        { dt: 'Frame material', dd: 'Extruded anodized aluminium profile.' },
        { dt: 'Acoustic performance', dd: 'Base 28–30 dB / With “Smart Sound + drop seal” — 38–42 dB.' },
        { dt: 'Hardware machining', dd: 'Factory milling for hinges and lock (optional Spinoff hardware cut-outs).' },
        { dt: 'Hinge adjustment', dd: '3D adjustment in 3 planes (height ±2.5 mm, width ±1.5 mm, compression ±1.0 mm).' },
        { dt: 'Warranty', dd: '5 years on frame and leaf / 2 years on hardware.' }
      ]
    ),
    steps: L(
      [
        { dt: 'Черновой этап', dd: 'Монтаж алюминиевого короба на уровень чистого пола до финишной отделки стен.' },
        { dt: 'Отделочный этап', dd: 'Шпаклёвка и отделка стен вплотную к профилю короба.' },
        { dt: 'Установка готового полотна', dd: 'Навешивание готового полотна (шпон/зеркало), 3D-регулировка, установка замка и ручек.' }
      ],
      [
        { dt: 'Чорновий етап', dd: 'Монтаж алюмінієвого короба на рівень чистої підлоги до фінішного оздоблення стін.' },
        { dt: 'Оздоблювальний етап', dd: 'Шпаклівка і оздоблення стін впритул до профілю короба.' },
        { dt: 'Встановлення готового полотна', dd: 'Навішування готового полотна (шпон/дзеркало), 3D-регулювання, встановлення замка і ручок.' }
      ],
      [
        { dt: 'Obra gruesa', dd: 'Montaje del marco de aluminio a cota de suelo acabado, antes del acabado de los muros.' },
        { dt: 'Acabado de muro', dd: 'Plastecido y acabado de muros a hueso contra el perfil del marco.' },
        { dt: 'Colocación de la hoja', dd: 'Cuelgue de la hoja acabada (chapa/espejo), regulación 3D, cerradura y manillas.' }
      ],
      [
        { dt: 'Rough stage', dd: 'Fit the aluminium frame to finished-floor level before the wall finish.' },
        { dt: 'Wall finish stage', dd: 'Fill and finish the walls tight to the frame profile.' },
        { dt: 'Finished leaf', dd: 'Hang the finished leaf (veneer/mirror), 3D-adjust, fit lock and handles.' }
      ]
    ),
    docs: L(
      [
        { kind: 'PDF', name: 'Техническая карта и размеры проёмов iDOORS Prime (Шпон/Зеркало)' },
        { kind: 'PDF', name: 'Инструкция по монтажу скрытого короба' },
        { kind: 'DWG', name: 'CAD-чертежи и узлы примыкания для архитекторов/дизайнеров' }
      ],
      [
        { kind: 'PDF', name: 'Технічна карта і розміри прорізів iDOORS Prime (Шпон/Дзеркало)' },
        { kind: 'PDF', name: 'Інструкція з монтажу прихованого короба' },
        { kind: 'DWG', name: 'CAD-креслення і вузли примикання для архітекторів/дизайнерів' }
      ],
      [
        { kind: 'PDF', name: 'Ficha técnica y medidas de hueco iDOORS Prime (Chapa/Espejo)' },
        { kind: 'PDF', name: 'Instrucción de montaje del marco oculto' },
        { kind: 'DWG', name: 'Planos CAD y encuentros para arquitectos/interioristas' }
      ],
      [
        { kind: 'PDF', name: 'Technical sheet and opening sizes iDOORS Prime (Veneer/Mirror)' },
        { kind: 'PDF', name: 'Installation guide for the concealed frame' },
        { kind: 'DWG', name: 'CAD drawings and junction details for architects/designers' }
      ]
    )
  },

  custom: {
    crumb: L('iDOORS Prime (Индивидуальный размер)', 'iDOORS Prime (Індивідуальний розмір)', 'iDOORS Prime (Medida individual)', 'iDOORS Prime (Custom size)'),
    title: L(
      'Дверь скрытого монтажа iDOORS Prime (Индивидуальный размер до 2400 мм)',
      'Двері прихованого монтажу iDOORS Prime (Індивідуальний розмір до 2400 мм)',
      'Puerta de instalación oculta iDOORS Prime (Medida individual hasta 2400 mm)',
      'iDOORS Prime flush door (Custom size up to 2400 mm)'
    ),
    kitLeafTitle: L('Дверное полотно', 'Дверне полотно', 'Hoja', 'Door leaf'),
    kitLeaf: L(
      [
        'Каркас из соснового бруса, МДФ-панели высокой плотности.',
        'В зависимости от отделки: заводской грунт under-paint, натуральный шпон или влагостойкое зеркало.'
      ],
      [
        'Каркас із соснового бруса, МДФ-панелі високої щільності.',
        'Залежно від оздоблення: заводський ґрунт under-paint, натуральний шпон або вологостійке дзеркало.'
      ],
      [
        'Bastidor de pino, paneles MDF de alta densidad.',
        'Según el acabado: imprimación under-paint de fábrica, chapa natural o espejo resistente a la humedad.'
      ],
      [
        'Pine-timber frame, high-density MDF panels.',
        'According to finish: factory under-paint primer, natural veneer or moisture-resistant mirror.'
      ]
    ),
    kit: L(
      [
        'Дверной короб: усиленный профиль из экструдированного анодированного алюминия Prime с эластичным уплотнителем.',
        'Алюминиевая кромка: защитный торцевой профиль по периметру полотна.',
        'Петли: скрытые 3D-регулируемые петли Anselmi / Simonswerk — 3 шт. (для обеспечения стабильности полотна высотой от 2000 до 2400 мм).',
        'Замок: стандартный магнитный замок под фиксатор WC или ЦМС.',
        'Врезка: фабричная высокоточная врезка под петли и замок на ЧПУ-оборудовании.',
        'Изоляция и зазоры: базовая шумоизоляция, нижний технологический зазор 10–12 мм.'
      ],
      [
        'Дверний короб: посилений профіль з екструдованого анодованого алюмінію Prime з еластичним ущільнювачем.',
        'Алюмінієва крайка: захисний торцевий профіль по периметру полотна.',
        'Петлі: приховані 3D-регульовані петлі Anselmi / Simonswerk — 3 шт. (для стабільності полотна висотою від 2000 до 2400 мм).',
        'Замок: стандартний магнітний замок під фіксатор WC або ЦМС.',
        'Врізка: фабрична високоточна врізка під петлі та замок на ЧПУ-обладнанні.',
        'Ізоляція і зазори: базова шумоізоляція, нижній технологічний зазор 10–12 мм.'
      ],
      [
        'Marco: perfil reforzado de aluminio anodizado extruido Prime con junta elástica.',
        'Canto de aluminio: perfil de canto perimetral.',
        'Bisagras: ocultas 3D Anselmi / Simonswerk — 3 uds. (estabilidad de la hoja de 2000 a 2400 mm).',
        'Cerradura: magnética estándar para fiador WC o cilindro.',
        'Mecanizado: fresado de fábrica de alta precisión para bisagras y cerradura en CNC.',
        'Aislamiento y holguras: acústica base, holgura inferior de 10–12 mm.'
      ],
      [
        'Door frame: reinforced extruded anodized aluminium Prime profile with an elastic gasket.',
        'Aluminium edge: protective end profile around the leaf.',
        'Hinges: concealed 3D-adjustable Anselmi / Simonswerk — 3 pcs (for leaf stability from 2000 to 2400 mm).',
        'Lock: standard magnetic lock for a WC latch or cylinder.',
        'Machining: factory high-precision CNC cut-outs for hinges and lock.',
        'Insulation and gaps: base acoustics, 10–12 mm bottom clearance.'
      ]
    ),
    opts: L(
      [
        'Фурнитура Spinoff (Италия): премиальный магнитный замок и дизайнерские ручки (матовый чёрный, сатин, хром, графит, латунь).',
        'Петли с доводчиком: скрытые гидравлические петли с плавным дожимом и фиксацией на 90° (Hold-Open).',
        'Выпадающий порожек: автоматический врезной уплотнитель.',
        'Усиленная шумоизоляция: заполнение многослойной акустической плитой Smart Sound (до 38–42 дБ).'
      ],
      [
        'Фурнітура Spinoff (Італія): преміальний магнітний замок і дизайнерські ручки (матовий чорний, сатин, хром, графіт, латунь).',
        'Петлі з доводчиком: приховані гідравлічні петлі з плавним дотиском і фіксацією на 90° (Hold-Open).',
        'Випадний поріжок: автоматичний врізний ущільнювач.',
        'Посилена шумоізоляція: заповнення багатошаровою акустичною плитою Smart Sound (до 38–42 дБ).'
      ],
      [
        'Herrajes Spinoff (Italia): cerradura magnética premium y manillas de diseño (negro mate, satinado, cromo, grafito, latón).',
        'Bisagras con cierrapuertas: hidráulicas ocultas con cierre suave y retención a 90° (Hold-Open).',
        'Umbral automático: junta empotrada automática.',
        'Aislamiento acústico reforzado: placa acústica multicapa Smart Sound (hasta 38–42 dB).'
      ],
      [
        'Spinoff hardware (Italy): premium magnetic lock and designer handles (matt black, satin, chrome, graphite, brass).',
        'Closer hinges: concealed hydraulic hinges with soft close and 90° hold (Hold-Open).',
        'Drop seal: automatic concealed gasket.',
        'Upgraded acoustics: multilayer Smart Sound board (up to 38–42 dB).'
      ]
    ),
    table: L(
      [
        { row: 'Дверное полотно', base: 'Каркас из бруса, МДФ под финишную отделку / шпон / зеркало по индивидуальным размерам (до 2400 мм).', opt: 'Акустическая плита Smart Sound, спец-выкрасы, подбор рисунка шпона.' },
        { row: 'Дверной короб и кромка', base: 'Усиленный анодированный алюминиевый профиль (Серебро / Чёрный матовый) с эластичным уплотнителем.', opt: '—' },
        { row: 'Петли', base: 'Скрытые 3D-регулируемые Anselmi / Simonswerk — 3 шт.', opt: 'Скрытые петли с гидравлическим доводчиком и фиксатором (90°).' },
        { row: 'Замок', base: 'Стандартный магнитный замок BUONELLE под фиксатор WC или ЦМС.', opt: 'Премиальный магнитный замок Spinoff (Италия).' },
        { row: 'Ручки и накладки', base: 'Не входят в базовый комплект.', opt: 'Дизайнерские ручки Spinoff (Италия) (матовый чёрный, сатин, хром, графит, латунь).' },
        { row: 'Нижнее уплотнение', base: 'Технологический зазор 10–12 мм.', opt: 'Выпадающий (автоматический) умный порожек врезного типа.' },
        { row: 'Шумоизоляция', base: 'Базовая (до 28–30 дБ).', opt: 'Усиленная акустическая защита (до 38–42 дБ).' }
      ],
      [
        { row: 'Дверне полотно', base: 'Каркас із бруса, МДФ під фінішне оздоблення / шпон / дзеркало за індивідуальними розмірами (до 2400 мм).', opt: 'Акустична плита Smart Sound, спец-викраси, підбір рисунка шпону.' },
        { row: 'Дверний короб і крайка', base: 'Посилений анодований алюмінієвий профіль (Срібло / Чорний матовий) з еластичним ущільнювачем.', opt: '—' },
        { row: 'Петлі', base: 'Приховані 3D-регульовані Anselmi / Simonswerk — 3 шт.', opt: 'Приховані петлі з гідравлічним доводчиком і фіксатором (90°).' },
        { row: 'Замок', base: 'Стандартний магнітний замок BUONELLE під фіксатор WC або ЦМС.', opt: 'Преміальний магнітний замок Spinoff (Італія).' },
        { row: 'Ручки і накладки', base: 'Не входять у базовий комплект.', opt: 'Дизайнерські ручки Spinoff (Італія) (матовий чорний, сатин, хром, графіт, латунь).' },
        { row: 'Нижнє ущільнення', base: 'Технологічний зазор 10–12 мм.', opt: 'Випадний (автоматичний) розумний поріжок врізного типу.' },
        { row: 'Шумоізоляція', base: 'Базова (до 28–30 дБ).', opt: 'Посилений акустичний захист (до 38–42 дБ).' }
      ],
      [
        { row: 'Hoja', base: 'Bastidor de madera, MDF para acabado / chapa / espejo a medida (hasta 2400 mm).', opt: 'Placa Smart Sound, lacados especiales, selección de veta.' },
        { row: 'Marco y canto', base: 'Perfil de aluminio anodizado reforzado (Plata / Negro mate) con junta elástica.', opt: '—' },
        { row: 'Bisagras', base: 'Ocultas 3D Anselmi / Simonswerk — 3 uds.', opt: 'Bisagras ocultas con cierrapuertas hidráulico y retención (90°).' },
        { row: 'Cerradura', base: 'Magnética estándar BUONELLE para fiador WC o cilindro.', opt: 'Cerradura magnética premium Spinoff (Italia).' },
        { row: 'Manillas y placas', base: 'No incluidas en el kit base.', opt: 'Manillas Spinoff de diseño (Italia) (negro mate, satinado, cromo, grafito, latón).' },
        { row: 'Junta inferior', base: 'Holgura técnica de 10–12 mm.', opt: 'Umbral automático inteligente empotrado.' },
        { row: 'Aislamiento acústico', base: 'Base (hasta 28–30 dB).', opt: 'Protección acústica reforzada (hasta 38–42 dB).' }
      ],
      [
        { row: 'Door leaf', base: 'Timber frame, MDF for finishing / veneer / mirror to individual sizes (up to 2400 mm).', opt: 'Smart Sound board, special paints, matched veneer figure.' },
        { row: 'Frame and edge', base: 'Reinforced anodized aluminium profile (Silver / Matt black) with an elastic gasket.', opt: '—' },
        { row: 'Hinges', base: 'Concealed 3D-adjustable Anselmi / Simonswerk — 3 pcs.', opt: 'Concealed hydraulic closer hinges with 90° hold.' },
        { row: 'Lock', base: 'Standard BUONELLE magnetic lock for a WC latch or cylinder.', opt: 'Premium Spinoff magnetic lock (Italy).' },
        { row: 'Handles and roses', base: 'Not included in the base kit.', opt: 'Designer Spinoff handles (Italy) (matt black, satin, chrome, graphite, brass).' },
        { row: 'Bottom seal', base: '10–12 mm technical clearance.', opt: 'Concealed automatic smart drop seal.' },
        { row: 'Acoustics', base: 'Base (up to 28–30 dB).', opt: 'Upgraded acoustic protection (up to 38–42 dB).' }
      ]
    ),
    specs: L(
      [
        { dt: 'Максимальные габариты', dd: 'Высота до 2400 мм, ширина до 1000 мм.' },
        { dt: 'Толщина полотна', dd: '40–42 мм (на себя) / 50 мм (реверс).' },
        { dt: 'Материал короба', dd: 'Экструдированный анодированный алюминиевый профиль.' },
        { dt: 'Количество петель', dd: '3 скрытые петли в базовом комплекте для стабильной геометрии при высоте до 2400 мм.' },
        { dt: 'Гарантия', dd: '5 лет на короб и полотно / 2 года на фурнитуру.' }
      ],
      [
        { dt: 'Максимальні габарити', dd: 'Висота до 2400 мм, ширина до 1000 мм.' },
        { dt: 'Товщина полотна', dd: '40–42 мм (на себе) / 50 мм (реверс).' },
        { dt: 'Матеріал короба', dd: 'Екструдований анодований алюмінієвий профіль.' },
        { dt: 'Кількість петель', dd: '3 приховані петлі в базовому комплекті для стабільної геометрії при висоті до 2400 мм.' },
        { dt: 'Гарантія', dd: '5 років на короб і полотно / 2 роки на фурнітуру.' }
      ],
      [
        { dt: 'Medidas máximas', dd: 'Altura hasta 2400 mm, ancho hasta 1000 mm.' },
        { dt: 'Espesor de la hoja', dd: '40–42 mm (hacia sí) / 50 mm (reverso).' },
        { dt: 'Material del marco', dd: 'Perfil de aluminio anodizado extruido.' },
        { dt: 'Número de bisagras', dd: '3 bisagras ocultas en el kit base para una geometría estable hasta 2400 mm.' },
        { dt: 'Garantía', dd: '5 años en marco y hoja / 2 años en herrajes.' }
      ],
      [
        { dt: 'Maximum sizes', dd: 'Height up to 2400 mm, width up to 1000 mm.' },
        { dt: 'Leaf thickness', dd: '40–42 mm (towards you) / 50 mm (reverse).' },
        { dt: 'Frame material', dd: 'Extruded anodized aluminium profile.' },
        { dt: 'Hinge count', dd: '3 concealed hinges in the base kit for stable geometry up to 2400 mm.' },
        { dt: 'Warranty', dd: '5 years on frame and leaf / 2 years on hardware.' }
      ]
    ),
    steps: L(
      [
        { dt: 'Черновой этап', dd: 'Монтаж алюминиевого короба на уровень чистого пола до финишной отделки стен.' },
        { dt: 'Отделочный этап', dd: 'Оштукатуривание/зашивка стены с использованием армирующих сеток для исключения трещин.' },
        { dt: 'Установка полотна', dd: 'Навешивание на 3 скрытые петли, регулировка в 3D, установка замка и ручки.' }
      ],
      [
        { dt: 'Чорновий етап', dd: 'Монтаж алюмінієвого короба на рівень чистої підлоги до фінішного оздоблення стін.' },
        { dt: 'Оздоблювальний етап', dd: 'Штукатурення/зашивка стіни з армувальними сітками, щоб виключити тріщини.' },
        { dt: 'Встановлення полотна', dd: 'Навішування на 3 приховані петлі, регулювання в 3D, встановлення замка і ручки.' }
      ],
      [
        { dt: 'Obra gruesa', dd: 'Montaje del marco de aluminio a cota de suelo acabado, antes del acabado de los muros.' },
        { dt: 'Acabado de muro', dd: 'Enlucido/cierre del muro con mallas de refuerzo para evitar fisuras.' },
        { dt: 'Colocación de la hoja', dd: 'Cuelgue en 3 bisagras ocultas, regulación 3D, montaje de cerradura y manilla.' }
      ],
      [
        { dt: 'Rough stage', dd: 'Fit the aluminium frame to finished-floor level before the wall finish.' },
        { dt: 'Wall finish stage', dd: 'Plaster / close the wall with reinforcing mesh to avoid cracks.' },
        { dt: 'Leaf hanging', dd: 'Hang on 3 concealed hinges, 3D-adjust, fit lock and handle.' }
      ]
    ),
    docs: L(
      [
        { kind: 'PDF', name: 'Техническая карта и размеры проёмов iDOORS Prime (Индивидуальные размеры)' },
        { kind: 'PDF', name: 'Инструкция по монтажу скрытого короба' },
        { kind: 'DWG', name: 'CAD-чертежи и узлы примыкания для архитекторов/дизайнеров' }
      ],
      [
        { kind: 'PDF', name: 'Технічна карта і розміри прорізів iDOORS Prime (Індивідуальні розміри)' },
        { kind: 'PDF', name: 'Інструкція з монтажу прихованого короба' },
        { kind: 'DWG', name: 'CAD-креслення і вузли примикання для архітекторів/дизайнерів' }
      ],
      [
        { kind: 'PDF', name: 'Ficha técnica y medidas de hueco iDOORS Prime (Medidas individuales)' },
        { kind: 'PDF', name: 'Instrucción de montaje del marco oculto' },
        { kind: 'DWG', name: 'Planos CAD y encuentros para arquitectos/interioristas' }
      ],
      [
        { kind: 'PDF', name: 'Technical sheet and opening sizes iDOORS Prime (Custom sizes)' },
        { kind: 'PDF', name: 'Installation guide for the concealed frame' },
        { kind: 'DWG', name: 'CAD drawings and junction details for architects/designers' }
      ]
    )
  }
} as const
