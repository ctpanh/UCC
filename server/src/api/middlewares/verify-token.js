import HttpException from "../exceptions/http-exception";
import User from "../models/UserModel";
import Note from "../models/NoteModel";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const bearer = "Bearer ";

    if (!authHeader || !authHeader.startsWith(bearer)) {
      throw new HttpException(401, "Access denied. No credentials sent!");
    }

    const token = authHeader.replace(bearer, "");
    const secretKey = process.env.JWT_ACCESS_KEY || "";

    // Verify Token
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.id);

    if (!user) {
      throw new HttpException(401, "Authentication failed!");
    }

    req.user = user;
    next();
  } catch (e) {
    e.status = 401;
    next(e);
  }
};
// req ==> server ==> middleware(authen ==> author) ==>(controller ==> model ==> database)
export const isAdmin = async (req, res, next) => {
  try {
    if (!req.user.role.includes("admin")) {
      throw new HttpException(403, "You don't have permission to access!");
    }
    next();
  } catch (e) {
    e.status = 403;
    next(e);
  }
};