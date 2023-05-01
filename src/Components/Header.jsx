import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { orange } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import { Switch } from "@mui/material";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  Button,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import HeadingComponent from "./HeadingComponent";
import SocialIconsComponent from "./SocialIconsComponent";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const drawerWidth = 240;
const navItems = [
  {
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    text: "Resume",
    icon: <ArticleIcon />,
  },
  {
    text: "About me",
    icon: <InfoIcon />,
  },
];

const Header = ({ onToggleDarkMode, darkMode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <HeadingComponent variant="h3" text={"EDGARS EGLĪTIS"} sx={{ my: 5 }} />
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ my: 1 }}>
              <Link
                to={`/${item.text}`}
                style={{
                  textDecoration: "none",
                  color: theme.palette.secondary.main,
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>

                {item.text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SocialIconsComponent />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <EmojiPeopleIcon
            sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EGLĪTIS
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.text}`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    borderBottom:
                      selectedTab === index
                        ? `2px solid ${orange[500]}`
                        : "none",
                    "&:hover": {
                      borderBottom: `2px solid ${orange[100]}`,
                    },
                  }}
                  onClick={() => setSelectedTab(index)}
                >
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Switch
              checked={darkMode}
              onChange={onToggleDarkMode}
              icon={<BrightnessHighIcon sx={{ color: "white" }} />}
              checkedIcon={<Brightness4Icon sx={{ color: "white" }} />}
              sx={{
                "& .MuiSwitch-track": {
                  height: "17px",
                  width: "70px",
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default Header;
