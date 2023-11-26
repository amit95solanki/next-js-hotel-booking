import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
export const getDataFromToken = (req) => {
  try {
    console.log("Getting token from cookie");
    // const token = req.Cookies.get("token");
    const token = localStorage.getItem("token");
    console.log("Token value:", token);

    if (!token) {
      console.log("Token not found");
      return null;
    }

    const decodedToken = jwt.verify(token, "amitsolanki");
    const userId = decodedToken.id;
    console.log("Decoded user ID:", userId);

    return userId;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
