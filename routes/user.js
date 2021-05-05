import express from "express";
const router = express.Router();

import { signin, signup, updatedUser } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/:id", updatedUser);

export default router;