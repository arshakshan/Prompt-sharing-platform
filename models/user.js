import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        requires: [true, "Email is required!"],
    },
    username: {
        type: String,
        requires: [true, "Username is required!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String
    }
})

// additional check as it is possible that the model is already defined
// this route is called multiple times
const User = models.User || model("User", userSchema);

export default User;