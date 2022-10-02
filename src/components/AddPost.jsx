import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  MissedVideoCall,
  PersonAdd,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  width: {
    xs: "90%",
    sm: 500,
  },
};

const AddPost = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          left: { xs: "47%", sm: "2%" },
          bottom: { xs: "2%", sm: "2%" },
        }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal} color="text.primary">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Create a Post
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ marginBottom: "20px" }}
          >
            <Avatar
              src="https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              sx={{
                width: 50,
                height: 50,
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
            <Typography variant="h6">Med</Typography>
          </Stack>
          <TextField
            sx={{ width: "100%", marginBottom: "20px" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's in your Mind"
            variant="standard"
          />
          <Stack direction="row" sx={{ width: "100%", marginBottom: "20px" }}>
            <IconButton color="secondary" aria-label="send" fontSize="large">
              <EmojiEmotions />
            </IconButton>
            <IconButton color="success" aria-label="send" fontSize="large">
              <MissedVideoCall />
            </IconButton>
            <IconButton color="error" aria-label="send" fontSize="mediuem">
              <Image />
            </IconButton>
            <IconButton color="primary" aria-label="send" fontSize="large">
              <PersonAdd />
            </IconButton>
          </Stack>
          <ButtonGroup variant="contained" color="primary" fullWidth>
            <Button>send</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
