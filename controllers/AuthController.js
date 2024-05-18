const RegisterResponse = require("../dtos/auth/RegisterResponse");
const LoginResponse = require("../dtos/auth/LoginResponse");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const process = require("process");

async function register(req, res) {
  const { fullName, email, password, confirmPassword, otp, address, bio } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    if (password!== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      password,
      address,
      bio,
    });

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;

    // save user
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign(
      { userId: newUser._id, fullName: newUser.fullName },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_DURATION },
    );

    const registerResponse = new RegisterResponse(newUser, token);
    return res.status(201).json({
      message: "User registered successfully",
      data: registerResponse.toJSON(),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error registering user" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ email });

  // If no user is found, return an error
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Compare the provided password with the stored password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  // If the password is invalid, return an error
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_DURATION },
  );

  // Return the token in the response
  const loginResponse = new LoginResponse(user, token);
  return res
    .status(200)
    .json({ message: "Login Successfully", data: loginResponse.toJSON() });
}

module.exports = {
  register,
  login,
};
