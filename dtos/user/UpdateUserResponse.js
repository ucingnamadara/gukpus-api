class UpdateUserResponse {
  constructor(userId, username, email, createdAt, updatedAt) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      userId: this.userId,
      username: this.username,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
