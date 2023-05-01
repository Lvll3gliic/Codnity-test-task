import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import ResumeData from "../Data/ResumeData";
import SkillsComponent from "../Components/SkillsComponent";
import { programmingLanguagesData } from "../Data/ResumeData";
import { spokenLanguages } from "../Data/ResumeData";
import HeadingComponent from "../Components/HeadingComponent";
import ListComponent from "../Components/ListComponent";
import HorizontalDividerComponent from "../Components/HorizontalDividerComponent";

const Resume = () => {
  return (
    <Box>
      {ResumeData.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ my: 10 }}>
          <Grid container spacing={2} sx={{ my: 10, display: "flex" }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ ml: 3 }}>
                <HeadingComponent variant="h4" text={section.title} />
              </Box>
              <Divider orientation="vertical" light sx={{ height: "50%" }} />
            </Grid>

            <Grid item xs={12} md={8}>
              {section.data.map((data, dataIndex) => (
                <Box key={`${sectionIndex}-${dataIndex}`}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {data.organization}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">
                      {data.qualification}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2">{data.date}</Typography>
                  </Box>
                  <Box sx={{ my: 5 }}>
                    {data.description.map(
                      (descriptionItem, descriptionIndex) => (
                        <ListComponent
                          key={`${sectionIndex}-${dataIndex}-${descriptionIndex}`}
                          index={descriptionIndex}
                          text={descriptionItem}
                          variant="body1"
                        />
                      )
                    )}
                  </Box>
                </Box>
              ))}
            </Grid>
            <HorizontalDividerComponent key={`divider-${sectionIndex}`} />
          </Grid>
        </Box>
      ))}

      <Grid container spacing={2} sx={{ my: 10 }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ ml: 3 }}>
            {/* <Typography variant="h4">
              <Box
                sx={{
                  borderBottom: 2,
                  borderColor: orange[500],
                  width: 100,
                }}
              >
                SKILLS
              </Box>
            </Typography> */}
            <HeadingComponent variant="h4" text={"SKILLS"} />
          </Box>
          <Divider orientation="vertical" light sx={{ height: "50%" }} />
        </Grid>
        <Grid item xs={12} md={8}>
          <SkillsComponent
            title="SPOKEN LANGUAGES"
            languageData={spokenLanguages}
          />

          <SkillsComponent
            title="WEB TECHNOLOGIES"
            languageData={programmingLanguagesData}
          />
        </Grid>
        <HorizontalDividerComponent key="divider-skills" />
      </Grid>
    </Box>
  );
};

export default Resume;
