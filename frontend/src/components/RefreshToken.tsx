import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logout, refreshAxios } from '../Services';


export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fncLogOut = () => {
    logout().then(res => {
      localStorage.removeItem("User")
      localStorage.removeItem("refresh")
      window.location.href = "/"
    }).catch(err => {
      toast.dismiss();
      toast.error("Çıkış işlemi sırasında bir hata oluştu!")
    })
  }


  const tokenRefresh = () => {
    if (localStorage.getItem("refresh")) {
      refreshAxios().then(res => {
        const accessToken = res.data.access_token;
        localStorage.setItem("User", accessToken);
      })


    }
    toast.info("Token refreshed")
    setShow(false)
    // window.location.reload()
  }

  return (
    <>
      <ToastContainer />
      <Button variant="primary" onClick={handleShow}>
        Refresh Token
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Refresh Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to renew the token?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => fncLogOut()}>
            Logout
          </Button>
          <Button variant="primary" onClick={() => tokenRefresh()}>
            Refresh Token
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

