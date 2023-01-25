import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
    unique: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: 5,
  },
  token_reset_expires: {
    type: Date,
    required: false,
    unique: false,
  },
  pwd_reset_token: {
    type: String,
    required: false,
    unique: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  connection_token: {
    type: String,
    required: false,
    unique: true,
  },
  public_token: {
    type: String,
    required: false,
    unique: true,
  },
  accoutType: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;