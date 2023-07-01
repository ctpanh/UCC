import { Router } from "express";
import { createNote, deleteNote, getNode, getNotes, updateNote } from "../controllers/note";
import { verifyToken } from "../middlewares/verify-token";

const noteRouter = Router();
noteRouter.use(verifyToken);
noteRouter.get("/", getNotes);
noteRouter.post("/", createNote);
noteRouter.get("/:id", getNode);
noteRouter.post("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);

export default noteRouter;