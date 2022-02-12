import { Form, Modal, Button, Alert } from "react-bootstrap";
import { useState } from "react"
import "../../value/styles/contact_style.css";
import axios from "axios";

const Home = () => {
    //States
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [alert, setAlert] = useState(false);
    const [alertTrue, setAlertTrue] = useState(false);
    const [dataInputConsults, setDataInputConsults] = useState({});


    //Funcion of method Post of consults
    const ConsultsOfUser = async () => {
        try {
            await axios.post("https://server-gmail.herokuapp.com/api/consult", dataInputConsults);
            setAlertTrue(true)
        } catch (error) {
            console.log(error);
            setAlert(true)
        }
    };

    //Change the text in form
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...dataInputConsults, [name]: value };
        setDataInputConsults(changedInput);
    };
    return (
        <div className="about dateContact">
            <div className="aboutTitle text-primary">
                <b className="border-bottom border-primary border-3">Contact</b>
            </div>
            <div className="contact">
                <div className="contactForm">
                    <Form>
                        {alert === true &&
                            <Alert variant="danger">
                                Your message not send with exit!
                            </Alert>
                        }
                        {alertTrue === true &&
                            <Alert variant="seccess">
                                Him consult is save with exit!
                            </Alert>
                        }
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Name and surname" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control name="email" type="email" onChange={HandleChange} placeholder="Email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control name="description" as="textarea" onChange={HandleChange} placeholder="What is your question?" />
                        </Form.Group>
                        <Button className="btn btn-primary w-100" onClick={ConsultsOfUser}><b>Send</b></Button>
                    </Form>
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>Him consult is save with exit!</Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Home;
