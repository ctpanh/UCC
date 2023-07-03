import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
axios.defaults.baseURL = "http://localhost:8000/api";
export default function useNotes() {

    const notes = ref([]);
    const note = ref([]);//array
    const errors = ref({});//object
    const router = useRouter();
    const token = localStorage.getItem("token");

    const getNotes = async () => {
        const response = await axios.get("/notes", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        notes.value = response.data;
    };

    const getNote = async (id) => {
        const response = await axios.get("/notes/" + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        note.value = response.data.note;
    };

    const storeNote = async (data) => {
        try {
            await axios.post("/notes/", data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            router.push({ name: "NoteIndex" });
        } catch (error) {
            if (error.response.status == 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateNote = async (id) => {
        try {
            await axios.post("/notes/" + id, note.value, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            router.push({ name: "NoteIndex" });
        } catch (error) {
            if (error.response.status == 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyNote = async (id) => {
        if(!window.confirm("Are you sure?")){
            return;
        }

        await axios.delete("/notes/" + id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        router.push({ name: "NoteIndex" });
    };

    return {
        note,
        notes,
        getNote,
        getNotes,
        storeNote,
        updateNote,
        destroyNote,
        errors,
    };
}