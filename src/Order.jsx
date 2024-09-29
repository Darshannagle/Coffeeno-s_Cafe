import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Cappuccino from "./assets/Cappuccino.jpg";
import SignatureHotChocolate from "./assets/Signature Hot Chocolate.jpg";
import ColdBrewBlack from "./assets/Cold Brew Black.jpg";
import VanillaMilkshake from "./assets/Vanilla Milkshake.jpg";
import Product from "./Components/Product";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
const Order = () => {
  const [value, setValue] = React.useState(0);
  const coffeeProducts = [
    {
      title: "Cappuccino",
      quantity: "200 ml",
      img: Cappuccino,
      description: "Mocha sauce and Frappuccino chips blended ",
      price: 250.0,
    },
    {
      title: "Signature Hot Chocolate",
      quantity: "200 ml",
      description:
        "Four Cocoas and fresh steamed milk with whipped cream and chocolate powder. A timeless classic made...",
      img: SignatureHotChocolate,
      price: 265.0,
    },
    {
      title: "Vanilla Milkshake",
      quantity: "350 ml",
      img: VanillaMilkshake,
      description: "",
      price: 350.0,
    },
    {
      title: "Cold Brew Black",
      quantity: "Short",
      img: ColdBrewBlack,
      description: "",
      price: 300.0,
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100vw", margin: 0, color: "white" }}>
      <Box
        sx={{
          borderBottom: 2,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          style={{ color: "white" }}
        >
          <Tab
            label="Bestsellers"
            color="white"
            id="tab-Bestsellers"
            {...a11yProps(0)}
          />
          <Tab label="Drinks" color="white" id="tab-Drinks" {...a11yProps(1)} />
          <Tab label="Foods" color="white" id="tab-Foods" {...a11yProps(2)} />
          <Tab label="Merchandise" color="white" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{ width: { xs: "90vw", sm: "95vw", md: "95vw", lg: "100vw" } }}
        >
          <h3>Bestseller</h3>
          <p>Everyone's favorite put on a curted collection</p>
          <Grid
            container
            // border={"1px solid white"}
            margin={"1vw"}
            width={"100vw"}
            spacing={{ xs: "0.5vw", sm: "0.5vw", md: "1vw", lg: "1vw" }}
            padding={"1vw"}
            columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}
          >
            {coffeeProducts.map((product, index) => {
              return <Product product={product} key={index} />;
            })}
          </Grid>{" "}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {coffeeProducts.map((product, index) => {
          return (
            <p id={`p-${index}`} key={product.title}>
              <NavLink to={`/home/#Carasoul_bar`}>{index}</NavLink>
            </p>
          );
        })}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Order;
