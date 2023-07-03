import Note from "../models/NoteModel";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user });
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getNode = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        res.status(200).json({ note });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const note = new Note({
            title,
            description,
            status,
            user: req.user,
        });
        await note.save();
        res.status(200).json({ note });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        const noteUpdated = await Note.findByIdAndUpdate(
            id,
            {
                title,
                description,
                status,
            },
            { new: true }
        );

        return res.status(200).json({ noteUpdated });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Note.findByIdAndDelete(id);
        const notes = await Note.find({user: req.user});
        return res.status(200).json({ notes });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}