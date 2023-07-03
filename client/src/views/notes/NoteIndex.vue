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
    <br>
    <div style="float: left; width: 33%;">
        <h4>Todo</h4>
        <div v-for="note in notes" :key="note._id">
            <div v-if="note.status == 0">
                <div  class="card text-white bg-warning mb-3" style="max-width:30rem;">
                    <div class="card-header">
                        {{ note.title }}
                        <button @click="destroyNote(note._id)" style="float: right;" class="btn btn-outline-dark">X</button>
                        <RouterLink :to="{ name: 'NoteEdit', params: { id: note._id } }" style="float: right;"
                            class="btn btn-outline-dark">edit</RouterLink>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ note.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="float: left; width: 33%;">
        <h4>In Progress</h4>
        <div v-for="note in notes" :key="note._id">
            <div v-if="note.status == 1">
                <div  class="card text-white bg-warning mb-3" style="max-width:30rem;">
                    <div class="card-header">
                        {{ note.title }}
                        <button @click="destroyNote(note._id)" style="float: right;" class="btn btn-outline-dark">X</button>
                        <RouterLink :to="{ name: 'NoteEdit', params: { id: note._id } }" style="float: right;"
                            class="btn btn-outline-dark">edit</RouterLink>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ note.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style="float: left; width: 33%;">
        <h4>Done</h4>
        <div v-for="note in notes" :key="note._id">
            <div v-if="note.status == 2">
                <div  class="card text-white bg-warning mb-3" style="max-width:30rem;">
                    <div class="card-header">
                        {{ note.title }}
                        <button @click="destroyNote(note._id)" style="float: right;" class="btn btn-outline-dark">X</button>
                        <RouterLink :to="{ name: 'NoteEdit', params: { id: note._id } }" style="float: right;"
                            class="btn btn-outline-dark">edit</RouterLink>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ note.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>