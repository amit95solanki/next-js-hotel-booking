import React from "react";
import {
  Box,
  Typography,
  Button,
  Slider,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Filter = ({ price, setPrice, handlePrice, checkedList, setCheckedList }) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckList = async (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckedList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setCheckedList(newList);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Typography variant="legend" gutterBottom sx={{ marginTop: "30px", marginLeft: "20px" }}>
        Price
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%", marginLeft: "20px" }}>
          <Slider
            size="small"
            max={2000}
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button size="small" variant="contained" onClick={handlePrice}>
          Search
        </Button>
      </Box>

      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">FACILITY</FormLabel>
          <FormGroup>
            {list?.map((e) => {
              return (
                <FormControlLabel
                  key={e}
                  control={
                    <Checkbox
                      type="checkbox"
                      name="ckeckbox"
                      id="checkbox"
                      value={e}
                      onChange={handleCheckList}
                    />
                  }
                  label={e}
                />
              );
            })}
          </FormGroup>
          <FormHelperText>❤️</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
};

export default Filter;
