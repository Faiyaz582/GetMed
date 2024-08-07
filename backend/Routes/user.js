
import express from "express";
import { updateUser, deleteUser, getAllUser, getSingleUser,getUserProfile,getMyAppoinments } from "../Controllers/userController.js";

import { authenticate, restrict } from "../Controllers/auth/verifyToken.js";

const router = express.Router()

router.get('/:id', authenticate, restrict(["patient"]), getSingleUser);
router.get('/', authenticate, restrict(["admin"]),getAllUser)
router.put('/:id', authenticate, restrict(["patient"]),  updateUser)
router.delete('/:id', authenticate, restrict(["patient"]),  deleteUser)
router.get('/profile/me', authenticate, restrict(["patient"]),  getUserProfile)
router.get('appoinments/my-appoinments', authenticate, restrict(["patient"]),  getMyAppoinments)

export default router;