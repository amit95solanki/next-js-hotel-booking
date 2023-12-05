import React from "react";
import Hotels from "src/components/Hotels";

const index = ({ hotels }) => {
  console.log(hotels);
  return (
    <>
      {/* <Hotels /> */}
      {hotels ? <Hotels hotels={hotels} /> : "loading..."}
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(`http://localhost:3000/api/hotel?city=${ctx.query.city}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return {
      props: {
        hotels: data.hotels ? data.hotels : data.allhotels,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        hotels: null, // or handle the error as needed
      },
    };
  }
}

export default index;
