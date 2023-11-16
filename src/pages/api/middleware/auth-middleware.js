import { getSession } from "next-auth/client";

const requireAuth = async (req, res) => {
  // 'getSession' se hum user ki current session (login status) check kar rahe hain
  const session = await getSession({ req });

  // Agar session nahi milti (yani, user login nahi hua hai), toh hum 401 status code ke sath ek error message bhejte hain.
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  // Agar user authentication ho chuka hai, toh hum agle middleware ya route handler mein aage badhne ke liye taiyar hain.
};

export default requireAuth;
