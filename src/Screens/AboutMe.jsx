import React from "react";
import { Box, ImageList, ImageListItem, Typography, Grid } from "@mui/material";
import HeadingComponent from "../Components/HeadingComponent";
import ListComponent from "../Components/ListComponent";
import { hobbies, interests, background, philosophy } from "../Data/ResumeData";

const images = [...Array(38)].map((_, i) => {
  return { url: `/images/IMG_${String(i + 1).padStart(3, "0")}.jpg` };
});

const itemData = images.map((item) => ({
  url: item.url,
}));
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledData = shuffleArray(itemData);

const AboutMe = () => {
  return (
    <Box>
      <Box sx={{ mt: 10 }}>
        <HeadingComponent text="BACKGROUND" sx={{ ml: 3 }} />
        <Typography variant="subtitle1" sx={{ ml: 3, mt: 10, mr: 3 }}>
          {background}
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ mt: 10 }}>
        <Grid item xs={12} md={6} sx={{}}>
          <HeadingComponent variant="h4" text="HOBBIES" sx={{ ml: 3 }} />
          <Box sx={{ mt: 5 }}>
            {hobbies.map((hobby, index) => (
              <ListComponent key={`hobby-${index}`} text={hobby} />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ mt: { xs: 10, md: 0 } }}>
          <HeadingComponent variant="h4" text="INTERESTS" sx={{ ml: 3 }} />
          <Box sx={{ mt: 5 }}>
            {interests.map((interest, index) => (
              <ListComponent key={`interest-${index}`} text={interest} />
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 10 }}>
        <HeadingComponent variant="h3" text="PHILOSOPHY" sx={{ ml: 3 }} />
        <Typography variant="subtitle1" sx={{ ml: 3, mt: 10, mr: 3 }}>
          {philosophy}
        </Typography>
      </Box>
      <HeadingComponent
        variant="h3"
        text="MY LIFE IN FEW PHOTOS"
        sx={{ width: { xs: 330, md: 600 }, ml: 3, mt: 10 }}
      />

      <ImageList variant="masonry" cols={3} gap={9} sx={{ mt: 10 }}>
        {shuffledData.map((item) => (
          <ImageListItem key={item.url}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              alt=""
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default AboutMe;
