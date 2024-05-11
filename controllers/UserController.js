const User = require("../models/User");

async function update(req, res) {
  try {
    const { fullName, email } = req.body;
    const userId = req.user.userId;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName, email, updatedAt: new Date() },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "User updated successfully",
      data: new UpdateUserResponse(
        updatedUser._id,
        updatedUser.fullName,
        updatedUser.email,
        updatedUser.createdAt,
        updatedUser.updatedAt,
      ).toJSON(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating user" });
  }
}

module.exports = {
  update,
};
