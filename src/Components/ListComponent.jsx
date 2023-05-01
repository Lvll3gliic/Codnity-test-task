import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { orange } from "@mui/material/colors";

function ListComponent({ variant, sx, index, text }) {
  return (
    <ListItem key={index}>
      <ListItemIcon>
        <CircleIcon sx={{ color: orange[500], fontSize: 8 }} />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default ListComponent;
