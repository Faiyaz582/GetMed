import express from "express";
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../Controllers/auth/verifyToken.js"; // Ensure restrict is imported
import reviewRouter from "./review.js"; // Corrected path to review.js

const router = express.Router();

// Use the correct method to mount the review router
router.use('/:doctorId/reviews', reviewRouter);

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor);
router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor);
router.get('/profile/me', authenticate, restrict(["doctor"]), getDoctorProfile);

export default router;
