import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const booking = () => {
  const router = useRouter();

  useEffect(() => {
    const myCookie = Cookies.get("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/me?token=${myCookie}`);
        console.log("token in layout", response);
        if (response?.data?.user?.role === "user") {
          return;
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle the error (log it, show a message, etc.)
      }
    };

    fetchData();
  }, []);

  return <div>booking-page</div>;
};

export default booking;
