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
    <div class="container mt-5 mb-5 d-flex justify-content-center">
        <div class="card px-1 py-4">
            <h6 class="information mt-4" style="text-align: center;">Create note</h6>
            <div class="card-body">
                <form @submit.prevent="storeNote(form)">
                    <div class="row">
                        <div class="col-sm-12">
                            <label for="title">
                                Title
                            </label>
                            <div class="form-group">
                                <input class="form-control" type="text" id="title" placeholder="Title" v-model="form.title">
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
                                <input class="form-control" type="text" id="description" placeholder="Description"
                                    v-model="form.description">
                            </div>
                            <div v-if="errors.description">
                                <span>{{ errors.description[0] }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <label for="status">Status</label>
                            <select class="form-control" id="status" v-model="form.status">
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