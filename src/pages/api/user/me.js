import { getDataFromToken } from "../../../helper/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user-model";
import connectDB from "../../../../db";
connectDB();
export default async function handler(req, res) {
  if (req.method === "GET") {
    const userId = await getDataFromToken(req);
    console.log("request", userId);
    const user = await User.findOne({ _id: userId }).select("-password");

    return res.status(200).json({ msg: "user found", user });
  }
  return res.status(420).json({ msg: "user is invalid !" });
}

// export async function GET(request) {
//   try {
//     console.log("request", request);
//     // const userId = await getDataFromToken(request);
//     // const user = await User.findOne({ _id: userId }).select("-password");
//     // return NextResponse.json({
//     //   mesaaage: "User found",
//     //   data: user,
//     // });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }
