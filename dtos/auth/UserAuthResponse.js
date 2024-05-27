class UserAuthResponse {
  constructor(user, accessToken) {
    this.user = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      roles: user.roles,
      profilePicture : user.profilePicture,
      coverPhoto : user.coverPhoto,
      bio : user.bio,
    };
    this.token = {
      accessToken: accessToken,
    };
  }

  toJSON() {
    return {
      user: this.user,
      token: this.token,
    };
  }
}

module.exports = UserAuthResponse;
