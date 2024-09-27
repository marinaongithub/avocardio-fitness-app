import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GifModal from "../modal/GifModal.js";
import ReactFreezeframe from "react-freezeframe";

// nice to have - skeleton
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

export default function Exercisecard(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "600px",
        maxWidth: "360px",
        marginBottom: "10px",
        // minWidth: "300px",
        minHeight: "560px",
      }}
    >
      <CardMedia
        // sx={{ height: "380px" }}
        // component="img"
        // image={props.gifUrl}
        sx={{ flexGrow: 1, }}
        title={props.name}
        key={props.id}
      />
      <ReactFreezeframe src={props.gifUrl} />
      <CardContent sx={{ height: "90px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>

        {/* <Typography variant="body2" color="text.secondary">
          Short exercise description if we like to 
        </Typography> */}
      </CardContent>
      <CardActions>
        {/*<Button size="small">Share</Button> */}
        <Button size="small" cursor="pointer" onClick={handleOpen} 
        // style={{justifyContent: "right"}}
        >
          Learn More
        </Button>
        <GifModal
          open={open}
          handleClose={handleClose}
          image={props.gifUrl}
          title={props.name}
          equipment={props.equipment}
          target={props.target}
        />
      </CardActions>
    </Card>
  );
}
