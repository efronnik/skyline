<script setup lang="ts">
import type { ProductKind } from '~/types/content'

const props = defineProps<{
  kind: ProductKind
}>()

const { t, ta, tl } = useLocale()

interface Pair {
  dt: string
  dd: string
}

interface Doc {
  kind: string
  name: string
}

interface TableRow {
  row: string
  base: string
  opt: string
}

const kit = computed(() => ta(`pdp.${props.kind}.kit`))
const opts = computed(() => ta(`pdp.${props.kind}.opts`))
const specs = computed(() => tl<Pair>(`pdp.${props.kind}.specs`))
const steps = computed(() => tl<Pair>(`pdp.${props.kind}.steps`))
const opening = computed(() => props.kind === 'base' ? tl<Pair>('pdp.base.opening') : [])
const docs = computed(() => tl<Doc>(`pdp.${props.kind}.docs`))
const table = computed(() => props.kind === 'base' ? [] : tl<TableRow>(`pdp.${props.kind}.table`))
const notice = computed(() => ta('pdp.notice'))
const kitLeaf = computed(() => props.kind === 'custom' ? ta('pdp.custom.kitLeaf') : [])
const kitHeading = computed(() => props.kind === 'base' ? t('pdp.tableTitle') : t('pdp.kitBlockTitle'))
const installTitle = computed(() => {
  if (props.kind === 'custom') return t('pdp.installCustomTitle')
  if (props.kind === 'finish') return t('pdp.installFinishTitle')
  return t('pdp.installTitle')
})
const stepsHeading = computed(() => props.kind === 'base' ? t('pdp.stepsTitle') : t('pdp.installInfo'))
</script>

<template>
  <div class="body">
    <section class="block" aria-labelledby="kit-title">
      <h2 id="kit-title">{{ kitHeading }}</h2>
      <h3>{{ t('pdp.kitTitle') }}</h3>
      <ul class="list">
        <template v-if="kind === 'finish'">
          <li>
            <strong>{{ t('pdp.finish.kitLeafTitle') }}</strong>
            <p>{{ t('pdp.finish.kitVeneer') }}</p>
            <p>{{ t('pdp.finish.kitMirror') }}</p>
          </li>
        </template>
        <template v-else-if="kind === 'custom'">
          <li>
            <strong>{{ t('pdp.custom.kitLeafTitle') }}</strong>
            <p v-for="item in kitLeaf" :key="item">{{ item }}</p>
          </li>
        </template>
        <li v-for="item in kit" :key="item">{{ item }}</li>
      </ul>
      <h3>{{ t('pdp.optTitle') }}</h3>
      <ul class="list">
        <li v-for="item in opts" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section v-if="table.length" class="block" aria-labelledby="table-title">
      <h2 id="table-title">{{ t('pdp.tableTitleB2b') }}</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>{{ t('pdp.tableBase') }}</th>
              <th>{{ t('pdp.tableOpt') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table" :key="item.row">
              <th>{{ item.row }}</th>
              <td>{{ item.base }}</td>
              <td>{{ item.opt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="block" aria-labelledby="tech-title">
      <h2 id="tech-title">{{ t('pdp.techTitle') }}</h2>
      <dl class="specs">
        <div v-for="item in specs" :key="item.dt">
          <dt>{{ item.dt }}</dt>
          <dd>{{ item.dd }}</dd>
        </div>
      </dl>
    </section>

    <section class="block" aria-labelledby="install-title">
      <h2 id="install-title">{{ installTitle }}</h2>
      <h3>{{ stepsHeading }}</h3>
      <ol class="steps">
        <li v-for="(item, index) in steps" :key="item.dt">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <strong>{{ item.dt }}</strong>
            <p>{{ item.dd }}</p>
          </div>
        </li>
      </ol>

      <template v-if="opening.length">
        <h3>{{ t('pdp.openingTitle') }}</h3>
        <dl class="specs">
          <div v-for="item in opening" :key="item.dt">
            <dt>{{ item.dt }}</dt>
            <dd>{{ item.dd }}</dd>
          </div>
        </dl>
      </template>

      <aside v-if="kind !== 'base'" class="notice">
        <p class="notice__h">{{ t('pdp.noticeTitle') }}</p>
        <p v-for="item in notice" :key="item">{{ item }}</p>
      </aside>

      <h3>{{ t('pdp.docsTitle') }}</h3>
      <p class="docs-soon">{{ t('pdp.docsSoon') }}</p>
      <ul class="docs">
        <li v-for="item in docs" :key="item.name">
          <span>{{ item.kind }}</span>
          {{ item.name }}
        </li>
      </ul>

      <aside v-if="kind === 'base'" class="notice">
        <p class="notice__h">{{ t('pdp.noticeTitle') }}</p>
        <p v-for="item in notice" :key="item">{{ item }}</p>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.body {
  display: grid;
  gap: var(--space-8);
  padding-top: var(--space-8);
  min-width: 0;
  max-width: 100%;
}

.block {
  min-width: 0;
  max-width: 100%;
}

.block h2 {
  font-family: var(--font-display);
  font-size: var(--fs-lg);
  line-height: var(--lh-display);
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
}

.block h2 + h3 {
  margin-top: 0;
}

h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  margin: 1.6rem 0 0.7rem;
}

.list {
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  padding-top: 0.7rem;
  border-top: var(--hair) solid var(--line);
}

.list p {
  margin: 0.4rem 0 0;
}

.block {
  min-width: 0;
  max-width: 100%;
}

.table-wrap {
  overflow-x: auto;
  min-width: 0;
  max-width: 100%;
  width: 100%;
  overscroll-behavior-x: contain;
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 0.95rem;
}

th,
td {
  text-align: left;
  vertical-align: top;
  padding: 0.75rem 0.85rem 0.75rem 0;
  border-bottom: var(--hair) solid var(--line);
  overflow-wrap: anywhere;
}

thead th {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 500;
}

tbody th {
  font-family: var(--font-display);
  font-weight: 600;
  width: 32%;
}

.specs {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.specs > div {
  display: grid;
  gap: 0.3rem;
  padding-top: 0.8rem;
  border-top: var(--hair) solid var(--line);
}

dt {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

.steps {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.steps li {
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  gap: 0.8rem;
  align-items: start;
}

.steps span {
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: var(--joint);
  padding-top: 0.25rem;
}

.steps p {
  margin: 0.3rem 0 0;
}

.notice {
  margin-top: 1.6rem;
  padding: 1.1rem 0 0;
  border-top: var(--hair) solid var(--line-strong);
}

.notice__h {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 0.6rem;
}

.notice p + p {
  margin-top: 0.7rem;
}

.docs-soon {
  color: var(--muted);
  margin: 0 0 0.8rem;
}

.docs {
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.docs li {
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  gap: 0.7rem;
  align-items: start;
  min-height: 44px;
  padding: 0.65rem 0;
  border-bottom: var(--hair) solid var(--line);
  color: var(--muted);
}

.docs span {
  font-family: var(--font-spec);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
}

@media (min-width: 800px) {
  .specs {
    grid-template-columns: 1fr 1fr;
  }

  tbody th {
    width: 12rem;
  }
}
</style>
