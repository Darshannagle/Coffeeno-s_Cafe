import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
export default function Product(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const product = props.product;
  

  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={6}
      lg={5}
      border={"ActiveBorder"}
      padding={2}
      margin={0}
      width="100vw"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <Container
        key={product.title}
        bgcolor={"red"}
        border={"ActiveBorder"}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0.1px",
        }}
      >
        <Card
          varient="outlined"
          sx={{
            height: { lg: "25vh" },
            transition: "0.3s",
            boxShadow: 1,
            "&:hover": { boxShadow: "0 0 20px  2px" },
          }}
          style={{
            backgroundColor: "rgba(255, 141, 77, 1)",
            borderRadius: "10px",
            width: "100vw",
          }}
        >
          <CardContent
            sx={{
              border: "",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "stretch",
              marginBottom: "0px",
              paddingBottom: "0px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "start",
                border: "",
              }}
            >
              <Avatar
                alt={product.title}
                src={product.img}
                onClick={handleOpen}
                style={{
                  border: "3px solid black",
                  borderRadius: "10px",
                  width: "10vh",
                  height: "10vh",
                }}
              />
              <Modal
                open={open}
                style={{
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: {
                    xs: "100vw",
                    sm: "100vw",
                    md: "90vw",
                    lg: "50vw",
                    xl: "50vw",
                  },
                  backgroundColor: "green",
                  borderRadius: "10px",
                  height: { xs: "100vw", sm: "80vw", md: "40vw", lg: "40vw" },
                  backgroundColor: "white",
                }}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card
                  style={{
                    width: {
                      xs: "90vw",
                      sm: "90vw",
                      md: "90vw",
                      lg: "50vw",
                      xl: "50vw",
                    },
                    height: { xs: "100vw", sm: "80vw", md: "40vw", lg: "40vw" },
                    borderRadius: "10px",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* <CardHeader ><Typography sx={{fontSize: "2vw",color: "black"}}>{product.title}</Typography></CardHeader> */}
                    <img
                      src={product.img}
                      style={{
                        width: {
                          xs: "5vw",
                          sm: "0.9vw",
                          md: "0.9vw",
                          lg: "0.1vw",
                          xl: "0.1vw",
                        },
                        height: {
                          xs: "5vw",
                          sm: "0.9vw",
                          md: "0.9vw",
                          lg: "0.1vw",
                          xl: "0.1vw",

                        },
                        borderRadius: "10px",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        margin: "0.25vw",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "5vw",
                            sm: "0.9vw",
                            md: "0.9vw",
                            lg: "1.5vw",
                            xl: "50vw",
                          },
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {product.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        margin: "0.25vw",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "5vw",
                            sm: "0.9vw",
                            md: "0.9vw",
                            lg: "1vw",
                          },
                          fontWeight: "light",
                          color: "black",
                        }}
                      >
                        {product.quantity}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        margin: "0.5vw",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "5vw",
                            sm: "0.9vw",
                            md: "0.9vw",
                            lg: "1vw",
                          },
                          fontWeight: "normal",
                          color: "black",
                        }}
                      >
                        {product.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                        margin: "0.25vw",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "5vw",
                            sm: "0.9vw",
                            md: "0.9vw",
                            lg: "1vw",
                          },
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        ₹ {product.price}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{ position: "absolute", bottom: "0px", right: "0px" }}
                  >
                    <Button onClick={handleClose}>Close</Button>
                  </CardActions>
                </Card>
              </Modal>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  marginInlineStart: "0.8vw",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "4vw",
                      sm: "2vw",
                      md: "1.5vw",
                      lg: "1.2vw",
                    },
                  }}
                  fontWeight={"semibold"}
                  component=""
                >
                  {product.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "3vw",
                      sm: "1.2vw",
                      md: "1vw",
                      lg: "0.7vw",
                    },
                  }}
                  fontWeight={"lighter"}
                  component=""
                >
                  {product.description}
                </Typography>
              </div>
            </div>
            <div
              style={{
                border: "",
                position: "sticky",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "0vh",
              }}
            ></div>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1vw",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "3vw", sm: "2vw", md: "1vw", lg: "1vw" } }}
              component="div"
            >
              ₹ {product.price}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "3vw", sm: "2vw", md: "1vw", lg: "1vw" } }}
              component="div"
            >
              {" "}
              {product.quantity}
            </Typography>
            <Button
              variant="contained"
              sx={{
                float: "right",
                textTransform: "none",
                fontSize: { xs: "3vw", sm: "1.5vw", md: "1vw", lg: "1vw" },
              }}
              onClick={() => {
                toast.success("Item added to cart", {
                  closeOnClick: true,
                  autoClose: 2000,
                  theme: "colored",
                });
              }}
              style={{ backgroundColor: "rgba(95, 37, 5, 1)" }}
            >
              <span style={{ color: "white", fontWeight: "semibold" }}>
                Add Item
              </span>
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Grid>
  );
}
