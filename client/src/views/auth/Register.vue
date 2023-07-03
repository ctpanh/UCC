<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

const form = ref({
    username: "",
    password: "",
});
</script>
<template>
    <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
            <h3 class="information mt-4" style="text-align: center;">Sign up</h3>
            <div class="card-body">
                <form @submit.prevent="authStore.handleRegister(form)">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <input class="form-control" type="text" id="username" placeholder="username" v-model="form.username">
                            </div>
                            <div v-if="authStore.errors.username">
                                <span>{{ errors.username[0] }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <input class="form-control" type="password" id="password" placeholder="password" v-model="form.password" >
                            </div>
                            <div v-if="authStore.errors.password">
                                <span>{{ errors.password[0] }}</span>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-block confirm-button">Confirm</button>
                </form>
                <p>
                    Already have an account?
                    <router-link to="/login">
                        Sign In
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>