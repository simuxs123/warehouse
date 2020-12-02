import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Modale = (props) => {
  const {
    toggle,
    modal, 
    handleEdit
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Warning!</ModalHeader>
        <ModalBody>
          Do you want to EDIT Product?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleEdit}>Save</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

