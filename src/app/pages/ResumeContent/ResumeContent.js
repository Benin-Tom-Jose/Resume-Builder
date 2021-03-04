import React from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';

import Resume from '../../components/Resume/Resume';
import { RESUME_SAMPLE_DATA } from '../../../config/SampleData';
import DrawerContainer from '../../components/DrawerContainer/DrawerContainer';
import './ResumeContent.scss';

const ResumeContent = () => {
    const [isValid, setIsvalid] = React.useState(false);

    const handlePersonalDetailSubmit = () => {
        setIsvalid(true);
        setTimeout(() => { setIsvalid(false) }, 5000)
    };

    const printDiv = () => {
        console.log("qwerty");
        var printContents = document.getElementById("printable").innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        document.documentElement.style.fontSize = "200%";
        window.print();
        document.body.innerHTML = originalContents;
        document.documentElement.style.fontSize = "100%";
    }

    return (
        <DrawerContainer>
            <div className="resume-content">
                <div className="row">
                    <div className="col-lg-6 resume-content__section section-edit">
                        <div className="personal-details">
                            <Card>
                                <Card.Header>
                                    <h1 className="header">Personal Details</h1>
                                </Card.Header>
                                <Card.Body>
                                    <Form validated={isValid}>
                                        <Form.Row>
                                            <Col>
                                                <Form.Group controlId="formName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter name" required />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">Invalid name !!!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col>
                                                <Form.Group controlId="formEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" required />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">Invalid email !!!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formPhone">
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control type="tel" placeholder="Enter phone" required pattern="^[6-9]\d{9}$" />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">Invalid phone number !!!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <Col>
                                                <Form.Group controlId="formAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control as="textarea" rows={3} required style={{ "resize": "none" }} />
                                                </Form.Group>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <Button variant="danger" onClick={printDiv}>
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path><path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
                                    Cancel
                                </Button>
                                    <Button variant="success" onClick={handlePersonalDetailSubmit}>
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z"></path></svg>
                                    Save
                                </Button>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                    <div className="col-lg-6 resume-content__section section-view" id="printable">
                        <Resume profile={RESUME_SAMPLE_DATA} />
                    </div>
                </div>
            </div>
        </DrawerContainer>
    );
};

export default ResumeContent;