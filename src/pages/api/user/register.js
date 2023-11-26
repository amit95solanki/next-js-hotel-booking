import connectDB from "../../../../db";
import User from "../../../models/user-model";
import bcryptjs from "bcryptjs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { username, email, password, role } = req.body;
    console.log(username, email, password, role);
    // console.log("email", email);
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "all field mantadory" });
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ message: "user already register !" });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      role,
      password: hashedPassword,
    });
    const result = await newUser.save();
    res.status(201).json({ message: "register successfully", result });
  }
}
