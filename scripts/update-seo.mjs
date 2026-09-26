import { readFileSync, writeFileSync } from 'fs'

let c = readFileSync('app/i18n/messages.ts', 'utf8')

// Fix homeTitle for ES and EN per audit recommendations
c = c.replace(
  `homeTitle: L('Двери скрытого монтажа iDOORS', 'Двері прихованого монтажу iDOORS', 'Puertas de instalación oculta iDOORS', 'iDOORS flush doors')`,
  `homeTitle: L('Двери скрытого монтажа iDOORS', 'Двері прихованого монтажу iDOORS', 'Puertas Invisibles a Ras de Pared en España | iDOORS', 'Flush-to-Wall Doors in Spain & Portugal | iDOORS')`
)

// Fix homeDesc for ES and EN
c = c.replace(
  `'Puertas de instalación oculta iDOORS para el acabado: marco de aluminio anodizado, bisagras ocultas, hoja al ras del muro.'`,
  `'Sistemas de puertas invisibles de aluminio a medida en España y Portugal. Acabados para pintar, chapa natural y espejo. Marco de aluminio anodizado, bisagras ocultas. Solicita tu presupuesto.'`
)
c = c.replace(
  `'iDOORS flush doors for finishing: anodized aluminium frame, concealed hinges, leaf flush with the wall.'`,
  `'Flush-to-wall door systems in Spain and Portugal. Ready to paint, veneer and mirror finishes. Anodized aluminium frame, concealed hinges. Custom sizes up to 2400 mm.'`
)

// Fix hero title for ES (more natural Spanish per audit)
c = c.replace(
  `'Puertas de instalación oculta'`,
  `'Puertas invisibles a ras de pared'`
)

// Fix hero slogan for ES
c = c.replace(
  `'Puertas que sienten el interior.'`,
  `'Puertas que se integran en el espacio.'`
)

writeFileSync('app/i18n/messages.ts', c, 'utf8')
console.log('SEO strings updated!')
