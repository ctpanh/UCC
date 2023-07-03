<script setup>
import { reactive } from 'vue';
import useNotes from "../../stores/notes";

const { storeNote, errors } = useNotes();

const form = reactive({
    title: "",
    description: "",
    status: 0,
}) 
</script>
<template>
    <form @submit.prevent="storeNote(form)">
        <div>
            <div>
                <label for="title">
                    Title
                </label>
                <input type="text" id="title" v-model="form.title">
                <div v-if="errors.title">
                    <span>{{ errors.title[0] }}</span>
                </div>
            </div>
            <div>
                <label for="description">
                    Description
                </label>
                <input type="text" id="description" v-model="form.description">
                <div v-if="errors.description">
                    <span>{{ errors.description[0] }}</span>
                </div>
            </div>
            <div>
                <label for="status">
                    status
                </label>
                <input type="text" id="status" v-model="form.status">
                <div v-if="errors.status">
                    <span>{{ errors.status[0] }}</span>
                </div>
            </div>
        </div>
        <div>
            <button type="submit">Store</button>
        </div>
    </form>
</template>