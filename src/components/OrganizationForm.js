import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const OrganizationForm = (props) => {
    const [organization, setOrganization] = useState(() => {
        return {
            cardName: props.organization ? props.organization.cardName : '',
            cardType: props.organization ? props.organization.cardType : '',
            cardNumber: props.organization ? props.organization.cardNumber : '',
            cardDate: props.organization ? props.organization.cardDate : '',
            cardStatus: props.organization ? props.organization.cardStatus : ''
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const {cardName, cardType, cardNumber, cardDate, cardStatus} = organization;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [cardName, cardType, cardStatus];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const organization = {
                id: uuidv4(),
                cardName,
                cardType,
                cardNumber: getRandomIntInclusive(1, 100),
                cardDate: new Date(),
                cardStatus
            };
            props.handleOnSubmit(organization);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setOrganization((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="cardName">
                    <Form.Label>Card Name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="cardName"
                        value={cardName}
                        placeholder="Enter name of card"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="cardType">
                    <Form.Label>Card Type</Form.Label>
                    <Form.Control as="select"
                                  className="input-control"
                                  name="cardType"
                                  value={cardType}
                                  onChange={handleInputChange}>
                        <option value="Discount">Discount</option>
                        <option value="Cumulative">Cumulative</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="cardStatus">
                    <Form.Label>Card Status</Form.Label>
                    <Form.Control as="select"
                                  className="input-control"
                                  name="cardStatus"
                                  value={cardStatus}
                                  onChange={handleInputChange}
                    >
                        <option value="Active">Active</option>
                        <option value="Not active">Not active</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default OrganizationForm;
