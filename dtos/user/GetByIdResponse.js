class GetByIdResponse {
    constructor(user) {
        this.id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.phoeNumber = user.phoneNumber;
        this.profilePicture = user.profilePicture;
        this.coverPhoto = user.coverPhoto;
        this.bio = user.bio;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }
}

module.exports = GetByIdResponse;
