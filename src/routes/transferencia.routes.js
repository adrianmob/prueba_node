import { Router } from "express";
const router = Router();

import * as tranCtrl from "../controllers/transferencia.controller";
import { verifyToken } from "../middleware/jwt";

router.post("/", verifyToken, tranCtrl.createTransferencias);

export default router;
