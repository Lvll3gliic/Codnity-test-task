import { IconButton, Box } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialIconsComponent = ({ sx }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        ...sx,
      }}
    >
      <IconButton
        aria-label="LinkedIn"
        onClick={() => {
          window.open("https://linkedin.com/in/eglitisedgars/", "_blank");
        }}
      >
        <LinkedInIcon
          sx={{
            color: grey[600],
            "&:hover": {
              color: orange[500],
            },
          }}
        />
      </IconButton>
      <IconButton
        aria-label="Instagram"
        onClick={() => {
          window.open("https://instagram.com/egliitisedgars/", "_blank");
        }}
        sx={{ ml: 2 }}
      >
        <InstagramIcon
          sx={{
            color: grey[600],
            "&:hover": {
              color: orange[500],
            },
          }}
        />
      </IconButton>
      <IconButton
        aria-label="GitHub"
        onClick={() => {
          window.open("https://github.com/Lvll3gliic", "_blank");
        }}
        sx={{ ml: 2 }}
      >
        <GitHubIcon
          sx={{
            color: grey[600],
            "&:hover": {
              color: orange[500],
            },
          }}
        />
      </IconButton>
    </Box>
  );
};
export default SocialIconsComponent;
