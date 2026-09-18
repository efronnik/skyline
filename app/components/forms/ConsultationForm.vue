<script setup lang="ts">
import { submitInquiry } from '~/utils/inquiryClient'
import type { InquiryPayload } from '~/types/content'

const { t } = useLocale()
const { draft } = useInquiryModal()
const quote = useQuoteList()

const form = reactive<InquiryPayload>({
  name: '',
  phone: '',
  email: '',
  message: ''
})

watch(() => draft.value.message, (msg) => {
  if (msg) form.message = msg
}, { immediate: true })

watch(() => quote.lines.value, () => {
  if (draft.value.intent === 'quote' && quote.lines.value.length)
    draft.value.message = quote.message()
}, { deep: true })

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const message = ref('')
const fieldError = reactive<Record<string, string>>({})

function validateField(key: 'name' | 'email') {
  if (key === 'name' && !form.name.trim()) fieldError.name = t('form.nameErr')
  else if (key === 'name') fieldError.name = ''

  if (key === 'email' && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    fieldError.email = t('form.emailErr')
  } else if (key === 'email') fieldError.email = ''
}

async function onSubmit() {
  fieldError.name = form.name.trim() ? '' : t('form.nameErr')
  if (!form.phone.trim() && !form.email.trim()) {
    fieldError.phone = t('form.contactErr')
    fieldError.email = t('form.contactErr')
  } else {
    fieldError.phone = ''
    validateField('email')
  }
  if (fieldError.name || fieldError.phone || fieldError.email) {
    status.value = 'error'
    message.value = t('form.fieldsErr')
    return
  }

  status.value = 'loading'
  message.value = ''
  try {
    const result = await submitInquiry({ ...form })
    status.value = result.ok ? 'success' : 'error'
    message.value = result.ok ? t('form.success') : t('form.error')
    if (result.ok) quote.clear()
  } catch {
    status.value = 'error'
    message.value = t('form.error')
  }
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <div class="form__fields">
      <div class="form__col">
        <label>
          {{ t('form.name') }}
          <input
            v-model="form.name"
            name="name"
            autocomplete="name"
            required
            :aria-invalid="!!fieldError.name"
            @blur="validateField('name')"
          >
          <small v-if="fieldError.name">{{ fieldError.name }}</small>
        </label>
        <label>
          {{ t('form.phone') }}
          <input
            v-model="form.phone"
            name="phone"
            type="tel"
            autocomplete="tel"
            :aria-invalid="!!fieldError.phone"
          >
          <small v-if="fieldError.phone">{{ fieldError.phone }}</small>
        </label>
        <label>
          {{ t('form.email') }}
          <input
            v-model="form.email"
            name="email"
            type="email"
            autocomplete="email"
            :aria-invalid="!!fieldError.email"
            @blur="validateField('email')"
          >
          <small v-if="fieldError.email">{{ fieldError.email }}</small>
        </label>
      </div>
      <label class="form__message">
        {{ t('form.message') }}
        <textarea v-model="form.message" name="message" rows="6" />
      </label>
    </div>

    <div class="form__actions">
      <AppButton type="submit" :disabled="status === 'loading'">
        {{ status === 'loading' ? t('form.sending') : t('form.submit') }}
      </AppButton>
      <p v-if="message" :class="status" role="status">{{ message }}</p>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  gap: 1.2rem;
}

.form__fields {
  display: grid;
  gap: 0.85rem;
}

.form__col {
  display: grid;
  gap: 0.85rem;
}

label {
  display: grid;
  gap: 0.3rem;
  font-size: 0.9rem;
}

input,
textarea {
  min-height: 44px;
  padding: 0.55rem 0.1rem;
  border: 0;
  border-bottom: var(--hair) solid var(--line-strong);
  background: transparent;
  border-radius: 0;
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--ink);
}

textarea {
  min-height: 8.5rem;
  resize: vertical;
}

small {
  color: var(--danger);
  font-family: var(--font-spec);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
}

.form__actions {
  display: grid;
  gap: 0.7rem;
}

.success {
  color: var(--ok);
}

.error {
  color: var(--danger);
}

@media (min-width: 720px) {
  .form__fields {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem 1.6rem;
    align-items: stretch;
  }

  .form__message textarea {
    min-height: 100%;
  }
}
</style>
