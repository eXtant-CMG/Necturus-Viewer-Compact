import Modal from "react-bootstrap/Modal";
import {Button, ListGroup} from "react-bootstrap";

export function CollectionSelectModal({ show, switchShow, setCollection, filesInfo }) {

    const handleCollectionSelect = (collection, idx) => {
        setCollection(idx)
        switchShow();
    }

    return (
        <Modal show={show} onHide={switchShow}>
            <Modal.Header closeButton>
                <Modal.Title>Available Collections</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {filesInfo.map((collection, idx) => (
                        <ListGroup.Item key={idx} action onClick={() => handleCollectionSelect(collection, idx+1)}>
                            {collection.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={switchShow}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}