import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  Typography,
} from "@mui/material";
import React from "react";

const Gift = () => {
  let giftCards = [
    {
      title: "India Execlusive",
      img: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_GC_indiacard_1_1_28dafb2bb6.png",
      type: "Anytime",
      description:
        "Bring in the Festive season and make each celebration memorable.",
    },
    {
      title: "Starbucks Coffee",
      img: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png",
      description:
        "Bring in the Festive season and make each celebration memorable.",
      type: "Anytime",
    },
    {
      title: "Congrats",
      img: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp",
      description:
        "Bring in the Festive season and make each celebration memorable.",
      type: "Congratulations",
    },
    {
      title: "U Keep Me Warm",
      img: "https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp",
      description:
        "Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.",
      type: "Anytime",
    },
    {
      title: "India Execlusive",
      img: "https://www.britishcouncil.com/media/2019/01/online-gift-cards.jpg",
      description:
        "Bring in the Festive season and make each celebration memorable.",
    },
  ];

  return (
    <div
      style={{
        marginBottom: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "white", margin: "10px" }}>
        Gift Card
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          height: "50vw",
          width: "100vw",
          backgroundColor: "rgba(65, 24, 1, 1)",
        }}
      >
        <Card
          sx={{
            width: { xs: "90vw", md: "80vw", lg: "80vw ", xl: "40vw" },
            backgroundColor: "rgba(255, 141, 77, 1)",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Gift Card
            </Typography>
          </CardContent>
          <CardActionArea
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  fontWeight: "lighter",
                  backgroundColor: "rgba(95, 37, 5, 1)",
                }}
                size="small"
              >
                <span>Order Now</span>
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          width: "100vw",
          backgroundColor: "rgba(65, 24, 1, 1)",
        }}
      >
        <List key={giftCards.title} sx={{ overflow: "clip" }}>
          {giftCards.map(
            (giftCard) =>
              giftCard.type === "Anytime" && (
                <Card
                  sx={{
                    margin: "10px",
                    height: "15vw",
                    width: { xs: "90vw", md: "80vw", lg: "80vw ", xl: "40vw" },
                    backgroundColor: "rgba(255, 141, 77, 1)",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "end",
                      alignItems: "start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={giftCard.img}
                        alt={giftCard.title}
                        style={{
                          margin: "10px",
                          width: "20%",
                          height: "10%",
                          objectFit: "cover",
                        }}
                      />

                      <Typography
                        sx={{ fontSize: 14, margin: "10px" }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {giftCard.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {giftCard.description}
                    </Typography>
                  </CardContent>

                  <CardActionArea sx={{ marginBottom: "0px" }}>
                    <CardActions
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "end",
                        justifyContent: "end",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          fontWeight: "lighter",
                          backgroundColor: "rgba(95, 37, 5, 1)",
                        }}
                        size="small"
                      >
                        <span>Order Now</span>
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              )
          )}
        </List>
      </Box>
    </div>
  );
};

export default Gift;
