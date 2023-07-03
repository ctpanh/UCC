<script setup>
import useNotes from "../../stores/notes";
import { onMounted } from 'vue';

const { notes, getNotes, destroyNote } = useNotes();

onMounted(() => getNotes());
</script>
<template>
    <div>
        <RouterLink :to="{ name: 'NoteCreate' }">New Note</RouterLink>
    </div>
    <table>
        <thead>
            <tr>
                <th scope="col">
                    Title
                </th>
                <th scope="col">
                    Description
                </th>
                <th scope="col">
                    Status
                </th>
                <th scope="col">
                    Edit
                </th>
                <th scope="col">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="note in notes" :key="note._id">
                <td>
                    {{ note.title }}
                </td>
                <td>
                    {{ note.description }}
                </td>
                <td>
                    {{ note.status }}
                </td>
                <td>
                    <RouterLink :to="{ name: 'NoteEdit', params: { id: note._id } }">Edit</RouterLink>
                </td>
                <td>
                    <button @click="destroyNote(note._id)">X</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>