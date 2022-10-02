import { Box } from "@mui/material";
import CardItem from "./CardItem";

const Mainbar = () => {
  return (
    <Box
      sx={{
        padding: { sm: 2, xs: 0 },
        margin: { sm: 2, xs: 0 },
      }}
      flex={4}
    >
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Box>
  );
};

export default Mainbar;
