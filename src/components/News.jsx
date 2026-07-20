import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const NewsTicker = ({ newsItems = [] }) => {
  const items =
    newsItems.length > 0
      ? newsItems
      : [{ description: "Welcome to Aurify Updates" }];

  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "35px",
          lg: "3vw",
        },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderTop: "1px solid #172540",
        backdropFilter: "blur(0.3vw)",
      }}
    >
      {/* LEFT BRAND */}
      <Typography
        sx={{
          color: "#FFFFFF",
          background: "rgb(22, 19, 44)",
          fontSize: {
            xs: "12px",
            lg: "1.2vw",
          },
          fontWeight: "700",
          whiteSpace: "nowrap",
          padding: "0 3.5vw",
          height: "100%",
          display: "flex",
          alignItems: "center",
          borderRadius: "0.1vw",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        Aurify Updates
      </Typography>

      {/* SCROLL AREA */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Marquee
          speed={50}
          gradient={false}
          autoFill={true}
          loop={0}
          direction="left"
        >
          {items.map((item, index) => (
            <Typography
              key={index}
              component="span"
              sx={{
                color: "#e6e6e6",
                fontSize: {
                  xs: "12px",
                  lg: "1.3vw",
                },
                fontWeight: 500,
                whiteSpace: "nowrap",
                marginRight: "4vw",
              }}
            >
              {item?.description || ""}
            </Typography>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default NewsTicker;
