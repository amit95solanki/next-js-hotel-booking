import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
  try {
    // const token = window.localStorage.getItem("authenticated") === "true" || "";
    // const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!);
    // return decodedToken.id;
    const id = "65564d3b4f3587b603f1dd6c";
    return id;
  } catch (error) {
    // throw new Error(error.message);
    console.log(error);
  }
};
