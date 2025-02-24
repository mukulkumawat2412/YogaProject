

import express from "express"
import {Register,Login} from "../Controllers/userController.js"
export const  router  = express.Router()
import checkRole from "../middleware/checkRole.js"


router.post("/register", Register)
router.post("/login", Login)


