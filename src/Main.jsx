import React from "react";

import BestSellers from "./assets/BestSellers.jpg";
import Drinks from "./assets/Drinks.jpg";
import Foods from "./assets/foods.jpg";
import CoffeeAtHome from "./assets/CoffeeAtHome.jpg";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Cappuccino from "./assets/Cappuccino.jpg";
import SignatureHotChocolate from "./assets/Signature Hot Chocolate.jpg";
import ColdBrewBlack from "./assets/Cold Brew Black.jpg";
import VanillaMilkshake from "./assets/Vanilla Milkshake.jpg";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Product from "./Components/Product";
const creations = ["BestSellers", "Drinks", "Foods", "Coffee At Home"];
const coffeeProducts = [
  { title: "Cappuccino", quantity: "200 ml", img: Cappuccino, price: 250.0 },
  {
    title: "Signature Hot Chocolate",
    quantity: "200 ml",
    img: SignatureHotChocolate,
    price: 265.0,
  },
  {
    title: "Vanilla Milkshake",
    quantity: "350 ml",
    img: VanillaMilkshake,
    price: 350.0,
  },
  {
    title: "Cold Brew Black",
    quantity: "Short",
    img: ColdBrewBlack,
    price: 300.0,
  },
];
const creationsSrc = [BestSellers, Drinks, Foods, CoffeeAtHome];

function Home() {
  console.log();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    border: "0px",
    width: { xs: "20vh", md: "10vh" },
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div
      style={{
        margin: "0px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          marginTop: "20px",
          fontSize: "8vw",
          fontFamily: "",
          textAlign: "center",
          color: "whitesmoke",
          fontWeight: "lighter",
        }}
      >
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to Coffeeno's",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          speed={50}
          repeat={0}
        />
      </h1>
      <h3
        style={{
          marginTop: "20px",
          fontFamily: "Bad Script",
          textAlign: "center",
          color: "white",
          fontWeight: "lighter",
        }}
      >
        Try Our Varities of Creations . . .
      </h3>
      {/* <div style={{display:"flex", flexDirection:'row', width:"100%", backgroundColor:"brown"
    }}>
    </div> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 4 }}
          padding={2}
          columns={{ xs: 2, sm: 8, md: 16 }}
          justifyContent="space-evenly"
          alignItems={"center"}
        >
          {creations.map((item, index) => (
            <Grid
              item
              href={`Order#`}
              xs={2}
              sm={4}
              md={4}
              key={index}
              display={"flex"}
              justifyContent={"center"}
            >
              <Link
                to={`Order/#tab-${item}`}
                style={{ textDecoration: "none" }}
              >
                <Item
                  display={"flex"}
                  justifyContent="center"
                  style={{
                    width: "20vh",
                    backgroundColor: "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 2px",
                    borderRadius: "0px",
                  }}
                  flexDirection={"column"}
                >
                  <center>
                    <Avatar
                      alt={index.name}
                      src={creationsSrc.at(index)}
                      style={{
                        border: "3px solid white",
                        width: "8vh",
                        height: "8vh",
                      }}
                    />
                  </center>{" "}
                  <span style={{ marginTop: "120px", color: "white" }}>
                    {item}
                  </span>
                </Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div
        id={`Carasoul_bar`}
        style={{ padding: "10px", backgroundColor: "rgba(95, 37, 5, 1)" }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "Kaushan Script",
            fontSize: "3vw",
          }}
        >
          Our Recommendations for you
        </p>
        <Carousel animation="slide">
          {coffeeProducts.map((product, index) => {
            return (
              // <Container
              //   key={product.title}
              //   sx={{}}
              //   bgcolor={"red"}
              //   border={"ActiveBorder"}
              //   style={{
              //     display: "flex",
              //     alignItems: "center",
              //     justifyContent: "center",
              //   }}
              // >
              //   <Card
              //     varient="outlined"
              //     sx={{ width: { xs: "98%", sm: 100, md: "80%" } }}
              //     style={{
              //       backgroundColor: "rgba(255, 141, 77, 1)",
              //       borderRadius: "10px",
              //       width: "80vw",
              //     }}
              //   >
              //     <CardContent>
              //       <Avatar
              //         alt={product.title}
              //         src={product.img}
              //         style={{
              //           border: "3px solid black",
              //           borderRadius: "10px",
              //           width: "8vh",
              //           height: "8vh",
              //         }}
              //       />
              //       <div
              //         style={{
              //           display: "flex",
              //           flexDirection: "row",
              //           justifyContent: "space-between",
              //           marginTop: "5px",
              //         }}
              //       >
              //         {/* <span  style={{fontSize:'4.5vw',overflowX:'auto'}}>{product.title}</span> */}
              //         <Typography
              //           variant="h5"
              //           sx={{ fontSize: { xs: "4vw", sm: "2vw", md: "1vw" } }}
              //           component="div"
              //         >
              //           {product.title}
              //         </Typography>
              //         <Typography
              //           variant="body1"
              //           sx={{ fontSize: { xs: "4vw", sm: "3vw", md: "1.5vw" } }}
              //           component="div"
              //         >
              //           ₹ {product.price}
              //         </Typography>
              //         {/* <span color='black'  style={{fontSize:'2vw'}}>₹ {product.price}</span>   */}
              //       </div>
              //       <span color="black">{product.quantity}</span>
              //       {/* <CardHeader> </CardHeader> */}
              //       <Button
              //         variant="contained"
              //         sx={{ float: "right", textTransform: "none" }}
              //         style={{ backgroundColor: "rgba(95, 37, 5, 1)" }}
              //       >
              //         <span style={{ color: "white" }}>Add Item</span>
              //       </Button>
              //     </CardContent>
              //   </Card>
              // </Container>

              <Product
                key={product.title} // Add a unique key for each product
                product={product}
              />
            );
          })}
        </Carousel>
      </div>
      <div
        style={{
          backgroundColor: "transparent",
          width: "100vw",
          height: "10rem",
        }}
      ></div>
    </div>
  );
}

export default Home;
