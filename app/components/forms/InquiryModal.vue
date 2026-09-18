<script setup lang="ts">
import { contact } from '~/data/site'

const { t } = useLocale()
const { isOpen, close, draft } = useInquiryModal()
const quote = useQuoteList()

const title = computed(() => {
  if (draft.value.intent === 'quote') return t('pdp.quoteFormTitle')
  if (draft.value.intent === 'consult') return t('pdp.consultTitle')
  return t('contact.title')
})

const lead = computed(() => {
  if (draft.value.intent === 'quote') return t('pdp.quoteFormLead')
  if (draft.value.intent === 'consult') return t('pdp.consultLead')
  return t('contact.lead')
})
const root = ref<HTMLDialogElement | null>(null)

watch(isOpen, async (open) => {
  await nextTick()
  const dialog = root.value
  if (!dialog) return
  if (open && !dialog.open) dialog.showModal()
  if (!open && dialog.open) dialog.close()
  document.body.classList.toggle('is-locked', open)
})

onUnmounted(() => {
  document.body.classList.remove('is-locked')
})

function onNativeClose() {
  if (isOpen.value) close()
}

function onBackdrop(event: MouseEvent) {
  if (event.target === root.value) close()
}
</script>

<template>
  <dialog
    ref="root"
    class="modal"
    aria-labelledby="inquiry-title"
    :inert="!isOpen"
    @close="onNativeClose"
    @click="onBackdrop"
  >
    <div class="modal__panel">
      <header class="modal__head">
        <SectionLabel :kicker="t('contact.kicker')" :spec="t('contact.spec')" />
        <div class="modal__title">
          <h2 id="inquiry-title">{{ title }}</h2>
          <button class="modal__close" type="button" :aria-label="t('contact.close')" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p>{{ lead }}</p>
      </header>

      <QuoteList v-if="draft.intent === 'quote'" compact />

      <ConsultationForm />

      <aside class="modal__aside">
        <a v-if="contact.email.href" :href="contact.email.href">{{ contact.email.value }}</a>
        <a v-if="contact.phone.href" :href="contact.phone.href">{{ contact.phone.value }}</a>
        <a
          v-if="contact.instagram.href"
          :href="contact.instagram.href"
          rel="noopener noreferrer"
          target="_blank"
        >{{ contact.instagram.handle }}</a>
      </aside>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  width: min(40rem, calc(100vw - 1.4rem));
  max-height: min(92vh, 46rem);
  margin: auto;
  padding: 0;
  border: var(--hair) solid var(--line);
  background-color: var(--paper);
  background-image: var(--grain);
  background-size: 180px 180px;
  color: var(--ink);
  overflow: auto;
}

.modal::backdrop {
  background: rgba(20, 18, 16, 0.58);
}

.modal__panel {
  padding: 1.25rem 1.25rem 1.5rem;
}

.modal__head {
  margin-bottom: 1.35rem;
}

.modal__title {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  margin: 0.7rem 0 0.5rem;
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: var(--lh-display);
}

.modal__head p {
  color: var(--muted);
  max-width: 34rem;
}

.modal__panel :deep(.list) {
  margin-bottom: 1.2rem;
}

.modal__close {
  flex: none;
  width: 44px;
  height: 44px;
  margin: -0.35rem -0.4rem 0 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.7rem;
  line-height: 1;
}

.modal__close:hover {
  color: var(--joint);
}

.modal__aside {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1.3rem;
  margin-top: 1.3rem;
  padding-top: 1rem;
  border-top: var(--hair) solid var(--line);
  font-family: var(--font-spec);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.modal__aside a:hover {
  color: var(--ink);
}

@media (min-width: 720px) {
  .modal__panel {
    padding: 1.6rem 1.8rem 1.8rem;
  }
}
</style>
