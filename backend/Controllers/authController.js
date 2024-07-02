import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { generateToken } from "../utils/tokenHandler.js";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email }).select({ email: true });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email }).select({ email: true });
    }

    // check if the user exists:
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    //hash password
    const hashedPassword = await hashPassword(password);

    if (role === "patient") {
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    }

    if (role === "doctor") {
      const newDoctor = await Doctor.create({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error, try again please",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await User.findOne({ email }).select({
      __v: false,
    });
    const doctor = await Doctor.findOne({ email }).select({
      __v: false,
    });

    const user = patient ? patient : doctor;

    //check if user exist or not
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //compare password
    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credential" });
    }

    //get token
    const token = generateToken(user.id, user.role);

    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      token,
      data: user,
      role: user.role,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};

//crypto.randomBytes(256).toString('base64')
