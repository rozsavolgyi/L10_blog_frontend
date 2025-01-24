<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-4 text-center my-5">Regisztráció</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 mx-auto">
        <form @submit.prevent="onRegister">

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="name" placeholder="Név" v-model="regFrom.name">
            <label for="name">Név</label>
          </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="E-mail cím" v-model="regFrom.email">
            <label for="email">E-mail cím</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="password" placeholder="Jelszó" v-model="regFrom.password">
            <label for="password">Jelszó</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="confirm_password" placeholder="Jelszó"
              v-model="regFrom.confirm_password">
            <label for="confirm_password">Jelszó újra</label>
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary w-100">Regisztráció</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userservice from '@/services/userservice';
import type User from '@/types/user';
import { ref } from 'vue';

const regFrom = ref<User>({
  name: '',
  email: '',
  password: '',
  confirm_password: '',
  role: 0
})

const errorMessage = ref({
  name: '',
  email: '',
  password: '',
  confirm_password: '',
})

function onRegister() {
  userservice.registerUser(regFrom.value)
    .then((res) => {
      console.log(res);

    })
    .catch((err) => {
      //hibakezelés
      errorMessage.value = err
    })
}


</script>

<style scoped></style>
