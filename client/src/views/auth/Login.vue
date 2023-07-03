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
        <div>
            <div>
                <div>
                    <div>
                        <div>Login</div>
                        <form @submit.prevent="authStore.handleLogin(form)">
                            <div>
                                <input type="text" v-model="form.username" placeholder="Username" />
                                <div v-if="authStore.errors.username">
                                    <span>{{ authStore.errors.username[0] }}</span>
                                </div>
                            </div>
                            <div>
                                <input type="password" v-model="form.password" placeholder="Password"/>
                                <div v-if="authStore.errors.password">
                                    <span>{{ authStore.errors.password[0] }}</span>
                                </div>
                            </div>
                            <div>
                                <button type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                        <p>
                            Not a member yet?
                            <router-link to="/register">
                                Sign Up
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>