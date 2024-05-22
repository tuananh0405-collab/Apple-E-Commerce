import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import createToken from "../utils/createToken.js";
import bcrypt from "bcryptjs";

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please input all fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) res.status(400).send("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    createToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body 

    const existingUser = await User.findOne({email})

    if(existingUser){
        const isPasswordInvalid = await bcrypt.compare(password, existingUser.password)

        if(isPasswordInvalid){
            createToken(res, existingUser._id)
            res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email,
                isAdmin: existingUser.isAdmin,
              });
              return;
        }else{
            res.status(400)
            throw new Error('Invalid password')
        }
    }else{
        res.status(404)
        throw new Error('Invalid email or password')
    }
});
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httyOnly: true,
        expires: new Date(0),
      });
    
      res.status(200).json({ message: "Logged out successfully" });
});
const getAllUsers = asyncHandler(async (req, res) => {
  res.send("getAllUsers");
});
const getProfileUser = asyncHandler(async (req, res) => {
  res.send("getProfileUser");
});
const updateProfileUser = asyncHandler(async (req, res) => {
  res.send("updateProfileUser");
});
const getUserByID = asyncHandler(async (req, res) => {
  res.send("getUserByID");
});
const updateUserByID = asyncHandler(async (req, res) => {
  res.send("updateUserByID");
});
const deleteUserByID = asyncHandler(async (req, res) => {
  res.send("deleteUserByID");
});
export {
  createUser,
  getAllUsers,
  loginUser,
  logoutUser,
  getProfileUser,
  updateProfileUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
};
