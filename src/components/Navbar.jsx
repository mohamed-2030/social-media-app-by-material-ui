import { Mail, Notifications, Pinterest } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, fontSize } from "@mui/system";
import { useState } from "react";

const StayledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
const SearchBar = styled(Box)({
  backgroundColor: "white",
  width: "40%",
  borderRadius: "5px",
});
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" sx={{ marginBottom: "10px" }}>
      <StayledToolBar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          MED DEV
        </Typography>
        <Pinterest
          sx={{ display: { xs: "block", sm: "none" }, fontSize: "50px" }}
        />
        <SearchBar sx={{display:{xs:'none' , sm:'block'}}} >
          <InputBase
            placeholder="Search"
            sx={{ padding: "10px", width: "100%" }}
          />
        </SearchBar >
        <Icons>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
          >
            <Mail color="action" sx={{ fontSize: 30, color: "white" }} />
          </Badge>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
          >
            <Notifications
              color="action"
              sx={{ fontSize: 30, color: "white" }}
            />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            sx={{
              width: 50,
              height: 50,
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={(e) => {
              setAnchorEl(e.target);
            }}
          />

          <Typography
            variant="p"
            sx={{ cursor: "pointer" }}
            onClick={(e) => {
              setAnchorEl(e.target);
            }}
          >
            Med
          </Typography>
        </Icons>
      </StayledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
