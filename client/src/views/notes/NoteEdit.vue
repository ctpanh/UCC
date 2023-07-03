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
    <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
            <h6 class="information mt-4" style="text-align: center;">Edit note</h6>
            <div class="card-body">
                <form @submit.prevent="updateNote($route.params.id)">
                    <div class="row">
                        <div class="col-sm-12">
                            <label for="title">
                                Title
                            </label>
                            <div class="form-group">
                                <input class="form-control" type="text" id="title" v-model="note.title">
                            </div>
                            <div v-if="errors.title">
                                <span>{{ errors.title[0] }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <label for="description">
                                Description
                            </label>
                            <div class="form-group">
                                <input class="form-control" type="text" id="description" v-model="note.description">
                            </div>
                            <div v-if="errors.description">
                                <span>{{ errors.description[0] }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <label for="status">Status</label>
                            <select class="form-control" id="status" v-model="note.status">
                                <option selected>Status</option>
                                <option value="0">Todo</option>
                                <option value="1">In Progress</option>
                                <option value="2">Done</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <button class="btn btn-primary btn-block confirm-button">Confirm</button>
                </form>
            </div>
        </div>
    </div>
</template>