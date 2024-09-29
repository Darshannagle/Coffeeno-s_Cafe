import { Alert, Box, Grid, List } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
export default function Footer() {
  // const container = React.useRef(null);
  // React.useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     renderer: 'svg',
  //     loop: true,

  //     autoplay: true,
  //     animationData: require('./assets/Animation - 1722755824388.json'),
  //   })
  // })
  return (
    <Box
      display={"flex"}
      position={"sticky"}
      width={"100vw"}
      // height={"50vh"}
      bgcolor={"rgba(65, 24, 1, 1)"}
      padding={1}
      color={"white"}
    >
      <Grid
        container
        padding={2}
        height={"100%"}
        width={"100%"}
        spacing={{ xs: 2, md: 3 }}
        display={"flex"}
        columns={{ xs: 2, sm: 8, md: 16 }}
        justifyContent={"space-around"}
        alignItems={"start"}
      >
        <Grid
          item
          display={"flex"}
          p={2}
          marginInline={3}
          border={""}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <h3>About us</h3>
          <hr
            style={{
              width: "100%",
              marginTop: 0,
              alignItems: "center",
              color: "white",
            }}
          />
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p></p>
          <p></p>
        </Grid>

        <Grid
          item
          display={"flex"}
          p={2}
          margin={1}
          border={""}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <h3>About us</h3>
          <hr
            style={{
              width: "100%",
              marginTop: 0,
              alignItems: "center",
              color: "white",
            }}
          />
          {/* <Alert severity="success"  closeText="X">Namah Success</Alert> */}
          <p>hello</p>
          <p>hello</p> 
          <p>hello</p>
          <p></p>
          <p></p>
        </Grid>

        <Grid
          item
          display={"flex"}
          p={3}
          margin={1}
          border={""}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <h3>Social Media</h3>
          <hr
            style={{
              width: "100%",
              marginTop: 0,
              alignItems: "center",
              color: "white",
            }}
          />

          <List dir="ltr" padding={3}>
            {" "}
            <a
              href="https://www.instagram.com/coffeenoscafe/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <InstagramIcon
                sx={{ color: "white" }}
                fontSize="large"
                color="white"
              />
            </a>
            <a
              href="https://www.facebook.com/coffeenoscafe/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <FacebookIcon
                fontSize="large"
                sx={{ color: "white", textDecoration: "none" }}
              />
            </a>
            <a
              href="https://www.twitter.com/coffeenoscafe/"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <XIcon
                fontSize="large"
                sx={{ color: "white", textDecoration: "none" }}
              />
            </a>{" "}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
