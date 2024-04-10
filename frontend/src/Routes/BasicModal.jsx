import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 12,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>View More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
  
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      height: '100%' 
      }}>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ float: 'left' }}>
        <Typography id="modal-modal-case" variant="h6" component="h2">
                Case Number: 
              </Typography>
              <Typography id="modal-modal-species" variant="h6" component="h2">
                Species: 
              </Typography>
              <Typography id="modal-modal-date" variant="h6" component="h2">
                Date Admitted: 
              </Typography>
              <Typography id="modal-modal-location" variant="h6" component="h2">
                Location Found: 
              </Typography>
        </div>

        <img 
          src="https://via.placeholder.com/450x150" 
          alt="Patient" 
          style={{ 
            marginRight: '10px', 
            marginLeft: '10px', 
          }} />
      </div>

      <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50px', 
        color: 'green'  
        }}>
    <Typography id="modal-modal-release" variant="h5" component="h5">
      Released On: Date 
    </Typography>
  </div>

      <div>
        <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              It is a long established fact that a reader will be distracted by the readable 
              content of a page when looking at its layout. The point of using Lorem Ipsum is 
              that it has a more-or-less normal distribution of letters, as opposed to using 
              'Content here, content here', making it look like readable English. Many desktop 
              publishing packages and web page editors now use Lorem Ipsum as their default model 
              text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
              (injected humour and the like).
        </Typography>
      </div>

      <div style={{ alignSelf: 'center', marginTop: '10px' }}>
        <Button variant="contained" color="primary">
          Donate
        </Button>
      </div>

    </div>
  </Box>
          
        </Modal>
      </div>
    );
}