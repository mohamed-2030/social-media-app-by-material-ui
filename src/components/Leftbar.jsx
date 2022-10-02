import styled from "@emotion/styled";
import {
  // Avatar,
  AvatarGroup,
  Badge,
  Box,
  ImageList,
  ImageListItem,
  // Typography,
} from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import AvatarItem from "./AvatarItem";

const Leftbar = () => {
  const avatarGroupDatat = [
    {
      img: "https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      status: {
        isConnect: true,
      },
    },
    {
      img: "https://images.pexels.com/photos/13571479/pexels-photo-13571479.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      status: {
        isConnect: false,
      },
    },
    {
      img: "https://images.pexels.com/photos/11503173/pexels-photo-11503173.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      status: {
        isConnect: false,
      },
    },
    {
      img: "https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      status: {
        isConnect: true,
      },
    },
    {
      img: "https://images.pexels.com/photos/12930643/pexels-photo-12930643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      status: {
        isConnect: true,
      },
    },
  ];
  const imageData = [
    {
      img: "https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      img: "https://images.pexels.com/photos/13243996/pexels-photo-13243996.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      img: "https://images.pexels.com/photos/13633764/pexels-photo-13633764.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <Box
      p={2}
      flex={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h5" fontWeight={100}>
          Only Friends
        </Typography>
        <AvatarGroup
          sx={{ display: "flex", justifyContent: "flex-end" }}
          max={avatarGroupDatat.length > 5 ? 5 : avatarGroupDatat.length}
        >
          {avatarGroupDatat.map((item, i) => {
            return <AvatarItem avatarProfil={item} key={i} />;
          })}
        </AvatarGroup>
        <Typography variant="h5" fontWeight={100}>
          Lastes Images
        </Typography>
        <ImageList cols={3} gap={2} sx={{ paddingRight: " 15px" }}>
          {imageData.map((item) => (
            <ImageListItem key={item.img} sx={{ cursor: "pointer" }}>
              <img src={item.img} />
            </ImageListItem>
          ))}
        </ImageList>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/12930643/pexels-photo-12930643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/12930643/pexels-photo-12930643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/12930643/pexels-photo-12930643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Leftbar;
