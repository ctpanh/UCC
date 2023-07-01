import {Router} from "express";
import noteRouter from "./note";
import authRouter from "./auth";

const router = Router();

router.use("/notes",noteRouter);
router.use("/auth", authRouter)

export default router;