<script setup lang="ts">
import { submitInquiry } from '~/utils/inquiryClient'
import type { InquiryPayload, PartnerRole } from '~/types/content'

const { t } = useLocale()

const roles: PartnerRole[] = ['dealer', 'designer', 'architect', 'shop', 'foreman']

const form = reactive<InquiryPayload>({
  intent: 'partner',
  role: '',
  company: '',
  taxId: '',
  legalAddress: '',
  city: '',
  country: '',
  name: '',
  position: '',
  phone: '',
  email: '',
  message: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const message = ref('')
const fieldError = reactive<Record<string, string>>({})

function validateEmail() {
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    fieldError.email = t('form.emailErr')
  } else {
    fieldError.email = ''
  }
}

function reset() {
  form.role = ''
  form.company = ''
  form.taxId = ''
  form.legalAddress = ''
  form.city = ''
  form.country = ''
  form.name = ''
  form.position = ''
  form.phone = ''
  form.email = ''
  form.message = ''
}

async function onSubmit() {
  fieldError.role = form.role ? '' : t('partners.roleErr')
  fieldError.company = form.company.trim() ? '' : t('partners.companyErr')
  fieldError.taxId = form.taxId.trim() ? '' : t('partners.taxErr')
  fieldError.address = form.legalAddress.trim() ? '' : t('partners.addressErr')
  fieldError.name = form.name.trim() ? '' : t('form.nameErr')
  if (!form.phone.trim() && !form.email.trim()) {
    fieldError.phone = t('form.contactErr')
    fieldError.email = t('form.contactErr')
  } else {
    fieldError.phone = ''
    validateEmail()
  }

  if (Object.values(fieldError).some(Boolean)) {
    status.value = 'error'
    message.value = t('form.fieldsErr')
    return
  }

  status.value = 'loading'
  message.value = ''
  try {
    const result = await submitInquiry({ ...form, intent: 'partner' })
    status.value = result.ok ? 'success' : 'error'
    message.value = result.ok ? t('partners.success') : t('form.error')
    if (result.ok) reset()
  } catch {
    status.value = 'error'
    message.value = t('form.error')
  }
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <div class="form__grid">
      <label>
        {{ t('partners.role') }}
        <select
          v-model="form.role"
          name="role"
          required
          :aria-invalid="!!fieldError.role"
        >
          <option disabled value="">—</option>
          <option v-for="item in roles" :key="item" :value="item">
            {{ t(`partners.${item}`) }}
          </option>
        </select>
        <small v-if="fieldError.role">{{ fieldError.role }}</small>
      </label>
      <label>
        {{ t('partners.company') }}
        <input
          v-model="form.company"
          name="company"
          autocomplete="organization"
          required
          :aria-invalid="!!fieldError.company"
        >
        <small v-if="fieldError.company">{{ fieldError.company }}</small>
      </label>
      <label>
        {{ t('partners.taxId') }}
        <input
          v-model="form.taxId"
          name="taxId"
          autocomplete="off"
          required
          :aria-invalid="!!fieldError.taxId"
        >
        <small v-if="fieldError.taxId">{{ fieldError.taxId }}</small>
      </label>
      <label>
        {{ t('partners.country') }}
        <select v-model="form.country" name="country">
          <option disabled value="">—</option>
          <option value="es">{{ t('partners.countryEs') }}</option>
          <option value="pt">{{ t('partners.countryPt') }}</option>
        </select>
      </label>
      <label class="form__wide">
        {{ t('partners.address') }}
        <input
          v-model="form.legalAddress"
          name="address"
          autocomplete="street-address"
          required
          :aria-invalid="!!fieldError.address"
        >
        <small v-if="fieldError.address">{{ fieldError.address }}</small>
      </label>
      <label>
        {{ t('partners.city') }}
        <input v-model="form.city" name="city" autocomplete="address-level2">
      </label>
      <label>
        {{ t('partners.person') }}
        <input
          v-model="form.name"
          name="name"
          autocomplete="name"
          required
          :aria-invalid="!!fieldError.name"
        >
        <small v-if="fieldError.name">{{ fieldError.name }}</small>
      </label>
      <label>
        {{ t('partners.position') }}
        <input v-model="form.position" name="position" autocomplete="organization-title">
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
          @blur="validateEmail"
        >
        <small v-if="fieldError.email">{{ fieldError.email }}</small>
      </label>
      <label class="form__wide">
        {{ t('partners.comment') }}
        <textarea v-model="form.message" name="message" rows="4" />
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

.form__grid {
  display: grid;
  gap: 0.85rem;
}

label {
  display: grid;
  gap: 0.3rem;
  font-size: 0.9rem;
}

input,
select,
textarea {
  min-height: 44px;
  padding: 0.55rem 0.1rem;
  border: 0;
  border-bottom: var(--hair) solid var(--line-strong);
  background: transparent;
  border-radius: 0;
  color: inherit;
  font: inherit;
}

select {
  appearance: none;
  cursor: pointer;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--ink);
}

textarea {
  min-height: 6.5rem;
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
  .form__grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.95rem 1.4rem;
  }

  .form__wide {
    grid-column: 1 / -1;
  }
}
</style>
