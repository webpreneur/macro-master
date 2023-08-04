type UserDTO = {
    userId: number;
    username: string;
    password: string;  // It's usually not recommended to send raw passwords, even in DTOs. Instead, send hashed or encrypted values.
    email: string;
    registrationDate: Date;
    // other fields...
}

export default UserDTO;