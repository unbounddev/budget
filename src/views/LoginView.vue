<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PocketBase from 'pocketbase'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Button from 'primevue/button'
import Form from '@primevue/forms/form'
import Card from 'primevue/card'
let pb: null | PocketBase = null
const currentUser = ref()
const username = ref('')
const password = ref('')

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090')
})

const initialValues = ref({
  username: '',
  email: '',
})

const resolver = ref(
  zodResolver(
    z.object({
      username: z.string().min(1, { message: 'Username is required.' }),
      email: z
        .string()
        .min(1, { message: 'Email is required.' })
        .email({ message: 'Invalid email address.' }),
    }),
  ),
)

const onFormSubmit = ({ valid }) => {
  if (valid) {
  }
}
</script>

<template>
  <div class="container">
    <Card>
      <template #content>
        <Form
          v-slot="$form"
          :resolver="resolver"
          :initialValues="initialValues"
          @submit="onFormSubmit"
          class="form sm:w-56"
        >
          <div class="field">
            <InputText name="username" type="text" placeholder="Username" fluid />
            <Message
              v-if="$form.username?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.username.error?.message }}</Message
            >
          </div>
          <div class="field">
            <InputText name="email" type="text" placeholder="Email" fluid />
            <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
              $form.email.error?.message
            }}</Message>
          </div>
          <Button type="submit" severity="secondary" label="Submit" />
        </Form>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
