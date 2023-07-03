<script setup>
import useNotes from "../../stores/notes";
import { onMounted } from 'vue';

const { note, getNote, updateNote, errors } = useNotes();

const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});

onMounted(() => getNote(props.id));
</script>
<template>
    <form @submit.prevent="updateNote($route.params.id)">
        <div>
            <div>
                <label for="title">
                    Title
                </label>
                <input type="text" id="title" v-model="note.title">
                <div v-if="errors.title">
                    <span>{{ errors.title[0] }}</span>
                </div>
            </div>
            <div>
                <label for="description">
                    Description
                </label>
                <input type="text" id="description" v-model="note.description">
                <div v-if="errors.description">
                    <span>{{ errors.description[0] }}</span>
                </div>
            </div>
            <div>
                <label for="status">
                    Status
                </label>
                <input type="text" id="status" v-model="note.status">
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