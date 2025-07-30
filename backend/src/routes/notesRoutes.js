import express from "express";
import { creatNotes, deleteNote, getAllNotes, updateNotes, getNoteById } from "../controller/notesController.js";
const router =express.Router();

router.get("/", getAllNotes);
router.get("/:id",getNoteById);
router.post("/",creatNotes);
router.put("/:id", updateNotes);
router.delete("/:id",deleteNote);

export default router;