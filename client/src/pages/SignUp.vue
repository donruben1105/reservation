<template>
  <main class="bg-slate-300">

    <div class="flex justify-center items-center h-screen">

      <!-- Content -->
      <div class="w-full md:w-auto">
        <div class="rounded-md border-solid border-2 border-slate-500">

          <div class="max-w-sm mx-auto px-4 py-8">
            <h1 class="text-3xl text-slate-800 font-bold mb-6">Create your Account ✨</h1>
            <!-- Form -->
            <form @submit.prevent="handleRegister">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="name">Name</label>
                  <input v-model="form.name" id="name" class="rounded-md form-input w-full" type="text" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email Address</label>
                  <input v-model="form.email" id="email" class="rounded-md form-input w-full" type="email" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password">Password</label>
                  <input v-model="form.password" id="password" class="rounded-md form-input w-full" type="password" autoComplete="on" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password_confirmation">Confirm Password</label>
                  <input v-model="form.password_confirmation" id="password_confirmation" class="rounded-md form-input w-full" type="password" autoComplete="on" />
                </div>
              </div>
              <div class="flex items-center justify-between mt-6">
                <button class="w-full text-center font-semibold rounded-md btn bg-indigo-500 hover:bg-indigo-600 text-white p-1" type="submit">Sign Up</button>
              </div>
            </form>
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-slate-200">
              <div class="text-sm">
                Have an account? <router-link class="font-medium text-indigo-500 hover:text-indigo-600" to="/signin">Sign In</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </main>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useSignupStore } from '@/stores/signupStore'
import type { Signup } from '@/stores/signupStore'

export default {
  name: 'signUp',
  setup() {
    const signupStore = useSignupStore()
    const form = ref<Signup>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

    const handleRegister = () => {
      signupStore.addUser(form.value);
      }

    return {
      form,
      handleRegister
    }
  }
}
</script>