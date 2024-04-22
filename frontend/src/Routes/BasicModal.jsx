import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DateTime from 'date-and-time';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};


export default function BasicModal({ patient, orgId }) {

  const [open, setOpen] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const handleDonate = () => {
    navigate('/donate', { state: { patient, orgId } });
  };

  const formattedStory = patient.story.replace(/\\n/g, "<br>");

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        View More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "50px",
              }}
            >
              <div style={{ float: "left" }}>
                <Typography id="modal-modal-case" variant="h6" component="h2">
                  <strong>Case Number:</strong> {patient.patient_case}
                </Typography>
                <Typography
                  id="modal-modal-species"
                  variant="h6"
                  component="h2"
                >
                  <strong>Species:</strong> {patient.species}
                </Typography>
                <Typography id="modal-modal-date" variant="h6" component="h2">
                  <strong>Date Admitted:</strong>{" "}
                  {DateTime.format(
                    new Date(patient.date_admitted),
                    "dddd, MMMM DD YYYY"
                  )}
                </Typography>
                <Typography
                  id="modal-modal-location"
                  variant="h6"
                  component="h2"
                >
                  <strong>Location Found:</strong> {patient.location_found}
                </Typography>
              </div>
              <img
                src={patient.image}
                alt="Patient"
                height="150"
                width="auto"
                style={{
                  marginRight: "50px",
                  marginLeft: "10px",
                  borderRadius: "20px",
                }}
              />
            </div>
            {patient.is_released && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50px",
                  color: "green",
                }}
              >
                <Typography
                  id="modal-modal-release"
                  variant="h5"
                  component="h5"
                >
                  <strong>Released On:</strong>{" "}
                  {DateTime.format(
                    new Date(patient.release_date),
                    "dddd, MMMM DD YYYY"
                  )}
                </Typography>
              </div>
            )}
            <div>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 1, fontSize: "14px" }}
                dangerouslySetInnerHTML={{ __html: formattedStory }}
                style={{whiteSpace: 'pre-wrap', textAlign: 'justify'}}
              >
              </Typography>
            </div>
            <div style={{ alignSelf: "center", marginTop: "10px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDonate}
                patient={patient}
              >
                Donate
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
