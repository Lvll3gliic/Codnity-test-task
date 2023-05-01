import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { orange } from "@mui/material/colors";

const SkillsComponent = ({ title, languageData }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      {languageData.map((language) => (
        <Box
          key={language.name}
          sx={{
            my: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mr: 5,
              flex: "0 0 150px", // set a fixed width for the text element
            }}
          >
            {language.name}
          </Typography>
          <LinearProgress
            variant="determinate"
            sx={{
              height: 10,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                backgroundColor: orange[500],
              },
              width: "50%",
              my: 1,
              mr: { xs: 3 },
            }}
            value={language.value}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SkillsComponent;
