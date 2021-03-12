import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";
import { verifyToken } from "../middleware/jwt";

router.post("/", verifyToken, userCtrl.createHolder);
router.post("/deposito", verifyToken, userCtrl.createDeposito);

export default router;
