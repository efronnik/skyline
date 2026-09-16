<script setup lang="ts">
import { products } from '~/data/products'
import { materials } from '~/data/materials'
import { submitInquiry } from '~/utils/inquiryClient'
import type { InquiryPayload } from '~/types/content'

const route = useRoute()
const form = reactive<InquiryPayload>({
  name: '',
  phone: '',
  email: '',
  city: '',
  objectType: '',
  doorCount: '',
  dimensions: '',
  product: String(route.query.product || ''),
  finish: String(route.query.finish || ''),
  timeline: '',
  comment: String(route.query.comment || ''),
  fileNames: []
})

const files = ref<File[]>([])
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const message = ref('')
const fieldError = reactive<Record<string, string>>({})

function validateField(key: keyof InquiryPayload) {
  if (key === 'name' && !form.name.trim()) fieldError.name = 'Укажите имя'
  else if (key === 'name') fieldError.name = ''

  if (key === 'email' && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    fieldError.email = 'Проверьте почту'
  } else if (key === 'email') fieldError.email = ''
}

function onFiles(event: Event) {
  const input = event.target as HTMLInputElement
  files.value = Array.from(input.files || []).slice(0, 6)
  form.fileNames = files.value.map(file => file.name)
}

async function onSubmit() {
  fieldError.name = form.name.trim() ? '' : 'Укажите имя'
  if (!form.phone.trim() && !form.email.trim()) {
    fieldError.phone = 'Телефон или почта'
    fieldError.email = 'Телефон или почта'
  } else {
    fieldError.phone = ''
    validateField('email')
  }
  if (fieldError.name || fieldError.phone || fieldError.email) {
    status.value = 'error'
    message.value = 'Проверьте обязательные поля.'
    return
  }

  status.value = 'loading'
  message.value = ''
  try {
    const result = await submitInquiry({ ...form }, files.value)
    status.value = result.ok ? 'success' : 'error'
    message.value = result.message
  } catch {
    status.value = 'error'
    message.value = 'Сервер не ответил. Повторите отправку.'
  }
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <fieldset>
      <legend>Контакт</legend>
      <label>
        Имя
        <input v-model="form.name" name="name" autocomplete="name" required :aria-invalid="!!fieldError.name" @blur="validateField('name')">
        <small v-if="fieldError.name">{{ fieldError.name }}</small>
      </label>
      <label>
        Телефон
        <input v-model="form.phone" name="phone" type="tel" autocomplete="tel" :aria-invalid="!!fieldError.phone">
        <small v-if="fieldError.phone">{{ fieldError.phone }}</small>
      </label>
      <label>
        Почта
        <input v-model="form.email" name="email" type="email" autocomplete="email" :aria-invalid="!!fieldError.email" @blur="validateField('email')">
        <small v-if="fieldError.email">{{ fieldError.email }}</small>
      </label>
      <label>
        Город
        <input v-model="form.city" name="city" autocomplete="address-level2">
      </label>
    </fieldset>

    <fieldset>
      <legend>Объект</legend>
      <label>
        Тип объекта
        <select v-model="form.objectType">
          <option value="">Не указан</option>
          <option>Квартира</option>
          <option>Дом</option>
          <option>Офис</option>
          <option>Общественное пространство</option>
        </select>
      </label>
      <label>
        Количество дверей
        <input v-model="form.doorCount" inputmode="numeric">
      </label>
      <label>
        Размеры проёмов
        <input v-model="form.dimensions" placeholder="Например: 900 × высота потолка">
      </label>
      <label>
        Сроки
        <input v-model="form.timeline">
      </label>
    </fieldset>

    <fieldset>
      <legend>Решение</legend>
      <label>
        Система
        <select v-model="form.product">
          <option value="">Не выбрана</option>
          <option v-for="item in products" :key="item.slug" :value="item.name">{{ item.name }}</option>
        </select>
      </label>
      <label>
        Отделка
        <select v-model="form.finish">
          <option value="">Не выбрана</option>
          <option v-for="item in materials" :key="item.id" :value="item.name">{{ item.name }}</option>
        </select>
      </label>
      <label class="full">
        Комментарий
        <textarea v-model="form.comment" rows="5" />
      </label>
      <label class="full">
        План, фото, чертеж
        <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp,.dwg" @change="onFiles">
        <small v-if="form.fileNames.length">{{ form.fileNames.join(', ') }}</small>
      </label>
    </fieldset>

    <div class="form__actions">
      <AppButton type="submit" :disabled="status === 'loading'">
        {{ status === 'loading' ? 'Отправка…' : 'Отправить заявку' }}
      </AppButton>
      <p v-if="message" :class="status" role="status">{{ message }}</p>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  gap: var(--space-6);
}

fieldset {
  margin: 0;
  padding: 0;
  border: 0;
  display: grid;
  gap: 1rem;
}

legend {
  font-family: var(--font-spec);
  font-size: var(--fs-xs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--joint);
  margin-bottom: 0.4rem;
}

label {
  display: grid;
  gap: 0.35rem;
  font-size: 0.92rem;
}

input,
select,
textarea {
  min-height: 48px;
  padding: 0.7rem 0.8rem;
  border: 0;
  border-bottom: var(--hair) solid var(--line-strong);
  background: transparent;
  border-radius: 0;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--ink);
}

textarea {
  min-height: 8rem;
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
  gap: 0.8rem;
}

.success {
  color: var(--ok);
}

.error {
  color: var(--danger);
}

@media (min-width: 800px) {
  fieldset {
    grid-template-columns: 1fr 1fr;
  }

  .full {
    grid-column: 1 / -1;
  }
}
</style>
