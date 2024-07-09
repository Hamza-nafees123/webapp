import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'
import { Box, CircularProgress } from '@mui/material';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton onClick={props.onHide}> */}
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body style={{background:'#232323'}}>
        {/* <h4>Centered Modal</h4> */}
        <p className='papragraph-modal'>
        Are you sure you want to sign out?
        </p>
      </Modal.Body>
      <Modal.Footer style={{justifyContent:'space-between',background:'#232323'}}>
        <Button className='edit-btn-mtn' style={{background:'#232323',color:'white'}}  onClick={props.onHide}>Close</Button>
        {props.loading ? ( // Show loader if loading is true
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Button className='edit-btn-mtn' onClick={props.handleLog}>Sign Out</Button>
          )}
        
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal