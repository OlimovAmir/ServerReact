import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

function ModalBtn({ modalConteent, title, btnName }) {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleOpenModal = () => {
        setShowModal(true);
    }

    return (
        <div>
            <Button variant='primary' onClick={handleOpenModal} className='m-2' > {btnName} </Button>
            
            <Modal show={showModal} >
                <ModalHeader >
                    <ModalTitle>{title}</ModalTitle>
                </ModalHeader>
                <ModalBody>{modalConteent}</ModalBody>
                <ModalFooter>
                    <Button variant='secondary' onClick={handleCloseModal} >Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalBtn