const GetByIdResponse = require("../dtos/user/GetByIdResponse");
const User = require("../models/User");

async function getById(req, res) {
  try {
    const userId = req.user.userId;

    // Find the user by ID and update the fields
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "SUCCESS",
      data: new GetByIdResponse(user),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error get user" });
  }
}

async function update(req, res) {
  try {
    const { fullName, bio,} = req.body;
    const userId = req.user.userId;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName, bio, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      data: {id: updatedUser._id}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating user" });
  }
}

async function uploadProfilePicture(req, res) {
  try {
    const { profilePicture} = req.body;
    const userId = req.user.userId;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePicture, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      data: {id: updatedUser._id}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploadProfilePicture" });
  }
}

async function deleteProfilePicture(req, res) {
  try {
    const userId = req.user.userId;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePicture: null, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      data: {id: updatedUser._id}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleteProfilePicture" });
  }
}

async function uploadCoverPicture(req, res){
  try {
    const { coverPhoto } = req.body;
    const userId = req.user.userId;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { coverPhoto, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      data: {id: updatedUser._id}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploadCoverPicture" });
  }
}

async function deleteCoverPicture(req, res){
  try {
    const userId = req.user.userId;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { coverPhoto : null, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      data: {id: updatedUser._id}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleteCoverPicture" });
  }
}

module.exports = {
  getById,
  update,
  uploadCoverPicture,
  deleteProfilePicture,
  uploadProfilePicture,
  deleteCoverPicture,
};
