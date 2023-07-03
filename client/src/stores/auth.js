import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async handleLogin(data) {
            this.authErrors = [];
            try {
                const response = await axios.post("/auth/login", {
                    username: data.username,
                    password: data.password,
                });
                const token = response.data.accessToken;
                localStorage.setItem("token", token);
                // console.log("token: " + token);
                this.router.push("/notes");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleRegister(data) {
            this.authErrors = [];
            try {
                const response = await axios.post("/auth/register", {
                    username: data.username,
                    password: data.password,
                });
                const token = response.data.accessToken;
                localStorage.setItem("token", token);
                this.router.push("/notes");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            const token = localStorage.getItem("token");
            await axios.post("auth/logout", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            localStorage.removeItem("token");
            this.router.push("/");
        },
    },
});