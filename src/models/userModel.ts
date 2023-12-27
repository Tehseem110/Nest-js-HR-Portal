import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userId: {
      type: "string",
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: [true, "please provide a username"],
    },
    email: {
      type: String,
      required: [true, "please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: [],
      default: [],
    },
    forgotPasswordToken: String,
    forgotPasswordExpires: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
