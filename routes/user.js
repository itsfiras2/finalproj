import express from "express";
const router = express.Router();

import { signin, signup, updatedUser } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/:id", updatedUser);

export default router;