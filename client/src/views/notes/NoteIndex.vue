<script setup>
import useNotes from "../../stores/notes";
import { onMounted } from 'vue';

const { notes, getNotes, destroyNote } = useNotes();

onMounted(() => getNotes());
</script>
<template>
    <div class="btn btn-outline-dark">
        <RouterLink :to="{ name: 'NoteCreate' }">New Note</RouterLink>
    </div>
    <div v-for="note in notes" :key="note._id" class="card text-white bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">
            {{ note.title }}
            <button @click="destroyNote(note._id)" style="float: right;" class="btn btn-outline-dark">X</button>
            <RouterLink :to="{ name: 'NoteEdit', params: { id: note._id } }" style="float: right;"
                class="btn btn-outline-dark">edit</RouterLink>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ note.description }}</h5>
            <p class="card-text">{{ note.status }}</p>
        </div>
    </div>
</template>