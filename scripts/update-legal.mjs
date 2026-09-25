import { readFileSync, writeFileSync } from 'fs'

const c = readFileSync('app/i18n/messages.ts', 'utf8')

const start = c.indexOf('  legal: {')
let depth = 0
let end = start
for (let i = start; i < c.length; i++) {
  if (c[i] === '{') depth++
  if (c[i] === '}') { depth--; if (depth === 0) { end = i + 1; break } }
}

const newLegal = `  legal: {
    privacyTitle: L('Политика конфиденциальности', 'Політика конфіденційності', 'Política de privacidad', 'Privacy Policy'),
    privacyLead: L(
      'iDOORS уважает вашу конфиденциальность. Здесь описано, какие данные мы собираем, зачем и как вы можете ими управлять.',
      'iDOORS поважає вашу конфіденційність. Тут описано, які дані ми збираємо, навіщо і як ви можете ними керувати.',
      'iDOORS respeta su privacidad. Aquí explicamos qué datos recopilamos, con qué finalidad y cómo puede gestionarlos.',
      'iDOORS respects your privacy. This page explains what data we collect, why, and how you can manage it.'
    ),
    privacyUpdated: L('Обновлено: сентябрь 2026', 'Оновлено: вересень 2026', 'Actualizado: septiembre 2026', 'Updated: September 2026'),
    privacySections: L(
      [
        {
          title: 'Кто обрабатывает данные',
          text: 'Ответственный за обработку: iDOORS — официальный представитель украинского дверного производства на территории Испании и Португалии. Электронная почта: ventas@idoors.es. Instagram: @idoors.es.'
        },
        {
          title: 'Какие данные мы собираем',
          text: 'Через форму обратной связи: имя, номер телефона, адрес электронной почты и сообщение. Через Google Analytics: анонимизированные данные об использовании сайта (страницы, время на сайте, источник перехода, тип устройства и браузера, приблизительное местоположение на уровне города).'
        },
        {
          title: 'Для каких целей',
          text: 'Данные формы — чтобы ответить на ваш запрос, уточнить параметры проёма и рассчитать систему. Аналитические данные — чтобы улучшать сайт, понимать, какие страницы полезны, и оптимизировать пользовательский опыт. Мы не используем ваши данные для рекламных рассылок без вашего явного согласия.'
        },
        {
          title: 'Правовая основа',
          text: 'Обработка данных формы — на основании законного интереса (GDPR, ст. 6(1)(f)): ответить на ваш запрос. Аналитические данные — на основании вашего согласия (ст. 6(1)(a)), выраженного через настройки cookie.'
        },
        {
          title: 'Хранение данных',
          text: 'Данные из форм хранятся в почтовом ящике ventas@idoors.es до разрешения вашего запроса. Данные Google Analytics — согласно настройкам удержания Google (по умолчанию 14 месяцев).'
        },
        {
          title: 'Кому мы передаём данные',
          text: 'Vercel (хостинг) — технические логи в рамках обычной работы сервера. Resend — сервис доставки email. Google LLC — аналитика через Google Analytics; данные могут передаваться на серверы в США по стандартным договорным условиям ЕС. Мы не продаём и не передаём ваши данные третьим лицам в маркетинговых целях.'
        },
        {
          title: 'Cookies',
          text: 'Мы используем технические cookies (язык интерфейса) и аналитические cookies Google Analytics. Подробнее — на странице Cookies.'
        },
        {
          title: 'Ваши права',
          text: 'По GDPR вы вправе запросить доступ, исправление, удаление, ограничение обработки, перенос данных или возражать против обработки. Направьте запрос на ventas@idoors.es. В Испании надзорный орган — AEPD (aepd.es).'
        },
        {
          title: 'Изменения',
          text: 'При существенных изменениях мы обновим дату в заголовке. Рекомендуем периодически проверять эту страницу.'
        }
      ],
      [
        {
          title: 'Хто обробляє дані',
          text: "iDOORS — офіційний представник українського дверного виробництва в Іспанії та Португалії. Пошта: ventas@idoors.es. Instagram: @idoors.es."
        },
        {
          title: 'Які дані ми збираємо',
          text: "Через форму: ім'я, телефон, email, повідомлення. Через Google Analytics: анонімізовані дані про використання сайту (сторінки, час, джерело, пристрій, місто)."
        },
        {
          title: 'З якою метою',
          text: "Дані форми — відповісти на запит та розрахувати систему. Аналітика — покращувати сайт. Ми не використовуємо дані для розсилок без вашої згоди."
        },
        {
          title: 'Правова підстава',
          text: "Дані форми — законний інтерес (GDPR ст. 6(1)(f)). Аналітика — ваша згода (ст. 6(1)(a)) через налаштування cookie."
        },
        {
          title: 'Зберігання даних',
          text: "Дані форм — у скриньці ventas@idoors.es до вирішення запиту. Дані Google Analytics — відповідно до налаштувань Google (за замовчуванням 14 місяців)."
        },
        {
          title: 'Кому передаємо',
          text: "Vercel (хостинг) — технічні логи. Resend — доставка email. Google LLC — аналітика; дані можуть передаватися до США за стандартними договірними умовами ЄС. Ми не продаємо дані третім особам."
        },
        {
          title: 'Cookies',
          text: "Технічні cookies (мова інтерфейсу) та аналітичні cookies Google Analytics. Детальніше — на сторінці Cookies."
        },
        {
          title: 'Ваші права',
          text: "За GDPR ви маєте право на доступ, виправлення, видалення, обмеження, перенесення та заперечення. Запит — на ventas@idoors.es. Наглядовий орган в Іспанії: AEPD (aepd.es)."
        },
        {
          title: 'Зміни',
          text: "При суттєвих змінах ми оновимо дату. Рекомендуємо перевіряти цю сторінку."
        }
      ],
      [
        {
          title: 'Responsable del tratamiento',
          text: 'iDOORS, representación oficial de un fabricante ucraniano de puertas en España y Portugal. Correo: ventas@idoors.es. Instagram: @idoors.es.'
        },
        {
          title: 'Datos que recopilamos',
          text: 'Formulario de contacto: nombre, teléfono, correo y mensaje. Google Analytics: datos anonimizados sobre el uso del sitio (páginas, tiempo, origen, dispositivo, ciudad aproximada).'
        },
        {
          title: 'Finalidad',
          text: 'Los datos del formulario sirven para responder su consulta y calcular el sistema. La analítica nos ayuda a mejorar el sitio. No utilizamos sus datos para envíos comerciales sin consentimiento expreso.'
        },
        {
          title: 'Base legal',
          text: 'Formulario: interés legítimo (RGPD art. 6.1.f). Analítica: consentimiento (art. 6.1.a) expresado a través de la configuración de cookies.'
        },
        {
          title: 'Conservación',
          text: 'Los datos del formulario se conservan en ventas@idoors.es hasta resolver la consulta. Los de Google Analytics, según la retención configurada en Google (14 meses por defecto).'
        },
        {
          title: 'Destinatarios',
          text: 'Vercel (hosting): logs técnicos del servidor. Resend: entrega de correo. Google LLC: analítica; datos pueden transferirse a EE. UU. bajo cláusulas contractuales tipo de la UE. No cedemos datos a terceros con fines comerciales.'
        },
        {
          title: 'Cookies',
          text: 'Cookies técnicas (idioma de interfaz) y cookies analíticas de Google Analytics. Más información en la página de Cookies.'
        },
        {
          title: 'Sus derechos',
          text: 'Conforme al RGPD puede solicitar acceso, rectificación, supresión, limitación, portabilidad u oposición. Escríbanos a ventas@idoors.es. En España puede reclamar ante la AEPD (aepd.es).'
        },
        {
          title: 'Cambios',
          text: 'Si actualizamos esta política, cambiaremos la fecha del encabezado. Le recomendamos revisar esta página periódicamente.'
        }
      ],
      [
        {
          title: 'Data controller',
          text: 'iDOORS, official representative of a Ukrainian door manufacturer in Spain and Portugal. Email: ventas@idoors.es. Instagram: @idoors.es.'
        },
        {
          title: 'What we collect',
          text: 'Contact form: name, phone, email and message. Google Analytics: anonymised usage data (pages, time on site, traffic source, device type, approximate city).'
        },
        {
          title: 'Why we collect it',
          text: 'Form data is used to respond to your enquiry and quote the system. Analytics helps us improve the site. We do not use your data for marketing without explicit consent.'
        },
        {
          title: 'Legal basis',
          text: 'Form data: legitimate interest (GDPR Art. 6(1)(f)). Analytics: your consent (Art. 6(1)(a)) given through cookie settings.'
        },
        {
          title: 'Retention',
          text: 'Form data is kept at ventas@idoors.es until your request is resolved. Google Analytics data is retained per Google settings (14 months by default).'
        },
        {
          title: 'Recipients',
          text: 'Vercel (hosting): technical server logs. Resend: email delivery. Google LLC: analytics; data may be transferred to the US under EU standard contractual clauses. We do not sell data to third parties.'
        },
        {
          title: 'Cookies',
          text: 'Technical cookies (interface language) and Google Analytics cookies. Full details on the Cookies page.'
        },
        {
          title: 'Your rights',
          text: 'Under GDPR you may request access, rectification, erasure, restriction, portability or object to processing. Write to ventas@idoors.es. In Spain the supervisory authority is AEPD (aepd.es).'
        },
        {
          title: 'Changes',
          text: 'For significant changes we will update the date in the header. We recommend checking this page periodically.'
        }
      ]
    ),
    cookiesLink: L('Cookies', 'Cookies', 'Cookies', 'Cookies'),
    cookiesTitle: L('Политика cookies', 'Політика cookies', 'Política de cookies', 'Cookie Policy'),
    cookies1: L(
      'Сайт использует два вида cookies: технические (обязательные) и аналитические.',
      'Сайт використовує два види cookies: технічні (обов\\'язкові) та аналітичні.',
      'Este sitio usa dos tipos de cookies: técnicas (necesarias) y analíticas.',
      'This site uses two types of cookies: technical (required) and analytics.'
    ),
    cookies2: L(
      'Технические cookies\\n\\nidoors-locale — сохраняет выбранный язык интерфейса. Без фиксированного срока истечения. Не собирает персональные данные.\\n\\nАналитические cookies (Google Analytics)\\n\\n_ga — различает уникальных пользователей, срок действия 2 года. _gid — различает пользователей, срок действия 24 часа. _ga_* — поддерживает состояние сессии, срок действия 2 года. Google Analytics настроен с анонимизацией IP. Данные обрабатываются на серверах Google LLC и могут передаваться в США в соответствии со стандартными договорными условиями ЕС.\\n\\nВы можете отключить аналитические cookies в настройках браузера или через дополнение Google Analytics Opt-out: tools.google.com/dlpage/gaoptout',
      "Технічні cookies\\n\\nidoors-locale — зберігає обрану мову інтерфейсу. Без фіксованого терміну дії. Не збирає персональних даних.\\n\\nАналітичні cookies (Google Analytics)\\n\\n_ga — розрізняє унікальних користувачів, термін дії 2 роки. _gid — розрізняє користувачів, термін дії 24 години. _ga_* — підтримує стан сесії, термін дії 2 роки. Google Analytics налаштований з анонімізацією IP. Дані можуть передаватися до США за стандартними договірними умовами ЄС.\\n\\nВідключити аналітичні cookies можна в налаштуваннях браузера або через доповнення Google Analytics Opt-out: tools.google.com/dlpage/gaoptout",
      'Cookies técnicas\\n\\nidoors-locale — guarda el idioma de la interfaz. Sin caducidad fija. No recoge datos personales.\\n\\nCookies analíticas (Google Analytics)\\n\\n_ga — distingue usuarios únicos, caduca en 2 años. _gid — distingue usuarios, caduca en 24 horas. _ga_* — mantiene el estado de sesión, caduca en 2 años. Google Analytics está configurado con anonimización de IP. Los datos pueden transferirse a EE. UU. bajo las cláusulas contractuales tipo de la UE.\\n\\nPuede desactivar las cookies analíticas desde su navegador o usando el complemento de inhabilitación de Google Analytics: tools.google.com/dlpage/gaoptout',
      'Technical cookies\\n\\nidoors-locale — stores the selected interface language. No fixed expiry. Collects no personal data.\\n\\nAnalytics cookies (Google Analytics)\\n\\n_ga — distinguishes unique users, expires in 2 years. _gid — distinguishes users, expires in 24 hours. _ga_* — maintains session state, expires in 2 years. Google Analytics is configured with IP anonymisation. Data may be transferred to the US under EU standard contractual clauses.\\n\\nYou can disable analytics cookies via your browser settings or the Google Analytics opt-out add-on: tools.google.com/dlpage/gaoptout'
    ),
    privacyNav: L('Конфиденциальность', 'Конфіденційність', 'Privacidad', 'Privacy')
  }`

const newContent = c.substring(0, start) + newLegal + c.substring(end)
writeFileSync('app/i18n/messages.ts', newContent, 'utf8')
console.log('Done!')
