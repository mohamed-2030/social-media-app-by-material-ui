import {
  Home,
  Layers,
  Group,
  Storefront,
  Person,
  Settings,
  Portrait,
  ModeNight,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";

const Sidebar = ({ HandleDarkMode }) => {
  const [hiddenTitle, setHiddenTitle] = useState(false);
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        backgroundColor: "gary",
        display: { xs: "none", sm: "block" },
      }}
    >
      <List sx={{ position: "fixed" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <VisibilityOff sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <Switch
              onChange={() => {
                setHiddenTitle(!hiddenTitle);
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {!hiddenTitle && (
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ fontSize: "16px" }}>Home Page</Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Layers sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {!hiddenTitle && (
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ fontSize: "16px" }}>Pages</Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Group sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {!hiddenTitle && (
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ fontSize: "16px" }}>Groups</Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Storefront sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {!hiddenTitle && (
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ fontSize: "16px" }}>
                    Market Place
                  </Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {!hiddenTitle && (
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ fontSize: "16px" }}>Friends</Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {!hiddenTitle && (
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ fontSize: "16px" }}>Settings</Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Portrait sx={{ fontSize: 30 }} />
            </ListItemIcon>
            {!hiddenTitle && (
              <ListItemText
                disableTypography
                primary={
                  <Typography sx={{ fontSize: "16px" }}>Profile</Typography>
                }
              />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton id="setDark">
            <ListItemIcon>
              <ModeNight sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <Switch onChange={() => HandleDarkMode()} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
