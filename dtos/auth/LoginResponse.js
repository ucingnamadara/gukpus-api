class LoginResponse {
  constructor(user, accessToken) {
    this.user = {
      userId: user.id,
      fullName: user.fullName,
      email: user.email,
    }
    this.token = {
      accessToken: accessToken,
    }
  }

  toJSON() {
    return {
      user: this.user,
      token: this.token,
    };
  }
}

module.exports = LoginResponse;
