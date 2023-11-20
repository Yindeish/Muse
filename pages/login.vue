<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 class="text-3xl text-gray-950 text-center font-black">Muse</h1>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input v-model="emailInput" id="email" name="email" type="email" autocomplete="email" required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input v-model="passwordInput" id="password" name="password" type="password" autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2">
          </div>
        </div>

        <div>
          <input type="submit" value="Sign in"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
        </div>
      </form>

      <div class="mt-5 font-sans cursor-pointer">Don't have an account? <nuxt-link to="/signup" class="text-blue-500">Sign
          up</nuxt-link></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
const router = useRouter();
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase/firebase';

const emailInput = ref('');
const passwordInput = ref('');
const state = ref('pending');

const login = async (e) => {
  e.preventDefault();
  try {
    state.value = 'loading';
    const res = await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    console.log('res', res);
    if (res) {
      localStorage.setItem('loggedinUser', JSON.stringify({ email: emailInput.value, password: passwordInput.value }))
      router.replace('/');
    }
  } catch (error) {
    console.log(error);
  } finally {
    state.value = 'not-loading';
  }
};
</script>

<style lang="">
  /* Add your styles here if needed */
</style>
