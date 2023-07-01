import { Router } from "express";
import { login, logout, register, requestRefreshToken } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/refresh-token", requestRefreshToken);
authRouter.post("/logout", logout);

export default authRouter;