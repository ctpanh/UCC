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
    <section>
        <div>Register</div>
        <form @submit.prevent="authStore.handleRegister(form)">
            <div>
                <input type="text" placeholder="Username" v-model="form.username" />
                <div v-if="authStore.errors.name">
                    <span>{{ authStore.errors.name[0] }}</span>
                </div>
            </div>
            <div>
                <input type="password" placeholder="Password" v-model="form.password" />
                <div v-if="authStore.errors.password">
                    <span>{{ authStore.errors.password[0] }}</span>
                </div>
            </div>
            <div>
                <button type="submit">
                    Register
                </button>
            </div>
        </form>
        <p>
            <router-link to="/login">
                Sign In
            </router-link>
        </p>
    </section>
</template>