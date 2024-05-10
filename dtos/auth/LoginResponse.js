class LoginResponse{
    constructor(userId, token) {
        this.userId = userId;
        this.token = token;
    }

    toJSON() {
        return {
            userId: this.userId,
            token: this.token,
        };
    }
}

module.exports = LoginResponse;