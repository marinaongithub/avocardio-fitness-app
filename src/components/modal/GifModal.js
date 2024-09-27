import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
// import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function GifModal({open, handleClose, image, title, equipment, target} ) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
      };  

  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
        <Box sx={style}>
            <CardMedia
            // sx={{ height: 400 }}
            component="img"
            image={image}
            title={title}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong><i>{title.charAt(0).toUpperCase() + title.slice(1)}</i></strong>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} equipment={equipment} target={target}>
                <p>This exercise targets the <strong>{target}</strong></p>
                <p><strong>Equipment needed: </strong>{equipment}</p>
            </Typography>
            
        </Box>
        </Modal>
    </div>
  )
}

export default GifModal