import Head from "next/head";
import { Box, Button, Container } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
const Page = () => {
  const [gallerys, setGallerys] = useState("");
  const [facilitiess, setfacilites] = useState("");

  const initialValues = {
    name: "",
    description: "",
    banner: "",
    price: "",
    location: "",
    gallery: gallerys || ["", "", "", ""],
    facilities: facilitiess || ["", "", "", ""],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    // description: Yup.string().required("This field is required"),
    // banner: Yup.string().required("This field is required"),
    // price: Yup.string().required("This field is required"),
    // location: Yup.string().required("This field is required"),
    // gallery: Yup.array().of(
    //   Yup.string().required("❓")

    // ),
    // facilities: Yup.array().of(
    //   Yup.string().required("❓")

    // ),
  });

  const HandelDeleteArray2 = (i) => {
    const deleteUpdated2 = gallerys.filter((item, index) => index !== i);

    setGallerys(deleteUpdated2);
  };
  const handleButtonClick2 = () => {
    console.log("handleButtonClick2");
    setGallerys([...gallerys, ""]);
  };

  const HandelDeleteArray1 = (i) => {
    const deleteUpdated1 = facilitiess.filter((item, index) => index !== i);

    setfacilites(deleteUpdated1);
  };
  const handleButtonClick1 = () => {
    console.log("handleButtonClick2");
    setfacilites([...facilitiess, ""]);
  };

  return (
    <>
      <Head>
        <title>Companies | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("add hotel", values);
              // Optionally reset the form after submission
              axios
                .post("http://localhost:3000/api/hotel", values)
                .then((response) => {
                  // Handle success
                  console.log("Response:", response.data);
                })
                .catch((error) => {
                  // Handle error
                  console.error("Error:", error);
                });
              resetForm();
            }}
          >
            {({ handleSubmit, values, handleChange, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader subheader="The information can be added" title="ADD HOTEL" />
                  <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={6}>
                          <Field
                            placeholder="Hotel Name"
                            className="form__input"
                            name="name"
                            required
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <Field
                            className="form__input"
                            placeholder="Description"
                            name="description"
                            required
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <Field
                            className="form__input"
                            placeholder="Banner"
                            name="banner"
                            required
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <Field
                            className="form__input"
                            placeholder="Price"
                            name="price"
                            type="type"
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <Field
                            className="form__input"
                            placeholder="Location"
                            name="location"
                            required
                          />
                        </Grid>
                        {/* <Grid xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Select State"
                          name="state"
                          onChange={handleChange}
                          required
                          select
                          SelectProps={{ native: true }}
                          value={values.state}
                        >
                          {states.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid> */}
                      </Grid>

                      <Grid container spacing={3}>
                        <Grid
                          xs={12}
                          sx={{
                            textAlign: "center",
                            paddingTop: "10px",
                            background: "#6366F1",
                            marginTop: "20px",
                          }}
                        >
                          <span type="" style={{ cursor: "pointer" }} onClick={handleButtonClick2}>
                            ADD HOTEL IMAGE
                          </span>
                        </Grid>

                        {initialValues?.gallery &&
                          initialValues.gallery.map((field, index) => (
                            <Grid xs={12} md={6} key={index}>
                              <Stack direction="row" spacing={2}>
                                <Field
                                  name={`gallery[${index}]`}
                                  type="text"
                                  placeholder={`field ${index + 1}`}
                                  className="form__input"
                                />

                                <p
                                  type=""
                                  style={{ marginTop: "20px", cursor: "pointer" }}
                                  onClick={() => {
                                    HandelDeleteArray2(index);
                                  }}
                                >
                                  ➖
                                </p>
                              </Stack>
                            </Grid>
                          ))}
                      </Grid>
                      <Grid container spacing={3}>
                        <Grid
                          xs={12}
                          sx={{
                            textAlign: "center",
                            paddingTop: "10px",
                            background: "#6366F1",
                            marginTop: "20px",
                          }}
                        >
                          <span type="" style={{ cursor: "pointer" }} onClick={handleButtonClick1}>
                            ADD FACILITIES
                          </span>
                        </Grid>

                        {initialValues?.facilities &&
                          initialValues.facilities.map((field, index) => (
                            <Grid xs={12} md={6} key={index}>
                              <Stack direction="row" spacing={2}>
                                <Field
                                  name={`facilities[${index}]`}
                                  type="text"
                                  placeholder={`field ${index + 1}`}
                                  className="form__input"
                                />

                                <p
                                  type=""
                                  style={{ marginTop: "20px", cursor: "pointer" }}
                                  onClick={() => {
                                    HandelDeleteArray1(index);
                                  }}
                                >
                                  ➖
                                </p>
                              </Stack>
                            </Grid>
                          ))}
                      </Grid>
                    </Box>
                  </CardContent>
                  <Divider />
                  <CardActions sx={{ justifyContent: "flex-end" }}>
                    <Button type="submit" variant="contained">
                      Save details
                    </Button>
                  </CardActions>
                </Card>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
