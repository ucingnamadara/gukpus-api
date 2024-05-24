class UserAuthResponse {
    constructor(user, accessToken) {
        this.user = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            roles: user.roles,
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
