import React from "react";
import { Container, Grid } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./Modal.scss";
import warning from "../../../assets/ForgotPassword/warning.svg";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

interface IMODAL {
  setOpenViewModal: React.Dispatch<React.SetStateAction<boolean>>;
  openViewModal: boolean;
}

const LoginModal: React.FC<IMODAL> = (props) => {
  return (
    <div className="login-modal">
      <Modal
        open={props.openViewModal}
        onClose={() => props.setOpenViewModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="login-modal-main"
      >
        <Grid container item className="modal" xs={11} sm={8} md={6} lg={6} xl={5}>
          <div className="modal-contant" style={{ width: "100%" }}>
            <CancelSharpIcon sx={{color:"gray", margin:"10px 10px 0 auto", cursor:"pointer" }} onClick={()=>props.setOpenViewModal(false)}/>
            <div className="modal-icon">
              <img src={warning} alt="warning image" />
            </div>
            <p>
              Sign in details are incorrect, please check and try again.
              Attempts Remaining 2
            </p>
          </div>
        </Grid>
      </Modal>
    </div>
  );
};

export default LoginModal;
