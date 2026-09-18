<script setup lang="ts">
import { messengers } from '~/data/site'

const { t } = useLocale()
const { isOpen, close, payload } = useConsultModal()
const { open: openInquiry } = useInquiryModal()
const root = ref<HTMLDialogElement | null>(null)

watch(isOpen, async (open) => {
  await nextTick()
  const dialog = root.value
  if (!dialog) return
  if (open && !dialog.open) dialog.showModal()
  if (!open && dialog.open) dialog.close()
})

function onNativeClose() {
  if (isOpen.value) close()
}

function onBackdrop(event: MouseEvent) {
  if (event.target === root.value) close()
}

function pick(id: 'telegram' | 'whatsapp') {
  const link = messengers.find(item => item.id === id)
  const via = id === 'telegram' ? t('pdp.viaTelegram') : t('pdp.viaWhatsApp')
  const message = [t('pdp.consultLeadMsg'), via, payload.value].filter(Boolean).join('\n\n')
  close()
  if (link?.href && !link.placeholder) {
    window.open(link.href, '_blank', 'noopener,noreferrer')
    return
  }
  openInquiry({ message, intent: 'consult' })
}
</script>

<template>
  <dialog
    ref="root"
    class="modal"
    aria-labelledby="consult-title"
    :inert="!isOpen"
    @close="onNativeClose"
    @click="onBackdrop"
  >
    <div class="modal__panel">
      <header class="modal__head">
        <div class="modal__title">
          <h2 id="consult-title">{{ t('pdp.consultTitle') }}</h2>
          <button class="modal__close" type="button" :aria-label="t('contact.close')" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p>{{ t('pdp.consultLead') }}</p>
      </header>
      <div class="modal__actions">
        <AppButton type="button" @click="pick('telegram')">{{ t('pdp.telegram') }}</AppButton>
        <AppButton type="button" variant="line" @click="pick('whatsapp')">{{ t('pdp.whatsapp') }}</AppButton>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  width: min(28rem, calc(100vw - 1.4rem));
  margin: auto;
  padding: 0;
  border: var(--hair) solid var(--line);
  background-color: var(--paper);
  background-image: var(--grain);
  background-size: 180px 180px;
  color: var(--ink);
}

.modal::backdrop {
  background: rgba(20, 18, 16, 0.58);
}

.modal__panel {
  padding: 1.4rem 1.5rem 1.6rem;
}

.modal__title {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  line-height: var(--lh-display);
}

.modal__head p {
  color: var(--muted);
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

.modal__actions {
  display: grid;
  gap: 0.7rem;
  margin-top: 1.2rem;
}
</style>
