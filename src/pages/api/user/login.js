import connectDB from "../../../../db";
import User from "../../../models/user-model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const secretValue = "amitsolanki";
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required !" });
    }
    const emailExists = await User.findOne({ email });
    // console.log("emailExists", emailExists);
    if (!emailExists) {
      return res.status(400).json({ msg: "Please Register first !" });
    }

    const userInfo = {
      username: emailExists.username,
      email: emailExists.email,
    };

    const tokenData = {
      id: emailExists._id,
      username: emailExists.username,
      email: emailExists.email,
      role: emailExists.role,
    };
    const passwordMatched = await bcryptjs.compare(password, emailExists.password);
    if (passwordMatched) {
      const token = jwt.sign(tokenData, secretValue, {
        expiresIn: "1d",
      });

      return res.status(200).json({ msg: "Logged in successfully !", token, userInfo });
    }

    return res.status(400).json({ msg: "Invalid Credentitials !" });
  }
}
