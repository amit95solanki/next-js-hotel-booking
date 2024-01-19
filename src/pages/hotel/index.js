import * as React from "react";
import { Footer } from "src/components/Footer";
import { Grid } from "@mui/material";
import Hotels from "src/components/Hotels";
import Nav from "src/components/Nav";
import Filter from "src/components/Filter";
import axios from "axios";
import { useEffect, useState } from "react";
const Index = ({ hotels }) => {
  console.log(hotels);

  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckList = async () => {
    const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  useEffect(() => {
    if (checkedList) {
      handleCheckList();
    }
  }, [checkedList]);

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    console.log("range data", data);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  console.log("list", list);
  return (
    <>
      <Nav />
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={4} sm={4} md={3} lg={2} sx={{ padding: "20px" }}>
          <Filter
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </Grid>
        <Grid item xs={8} sm={8} md={9} lg={10}>
          {list.length > 0 ? <Hotels hotels={list} /> : <Hotels hotels={hotels} />}
        </Grid>
      </Grid>

      <Footer />
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

export default Index;
