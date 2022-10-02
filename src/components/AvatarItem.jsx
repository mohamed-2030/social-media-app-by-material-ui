import { Avatar, AvatarGroup, Badge, Box } from "@mui/material";
import styled from "@emotion/styled";
const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px white`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
});
const AvatarItem = ({ avatarProfil }) => {
  if (avatarProfil.status.isConnect === true) {
    return (
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          alt="Cindy Baker"
          src={avatarProfil.img}
          sx={{ cursor: "pointer", width: 56, height: 56 }}
        />
      </StyledBadge>
    );
  }

  return (
    <Avatar
      alt="Travis Howard"
      src={avatarProfil.img}
      sx={{ cursor: "pointer", width: 56, height: 56 }}
    />
  );
};

export default AvatarItem;
