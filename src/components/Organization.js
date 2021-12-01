import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Organization = ({
                          id,
                          cardName,
                          cardType,
                          cardNumber,
                          cardDate,
                          cardStatus,
                          handleRemoveOrg
                      }) => {
    const history = useHistory();

    return (
        <tr>
            <th className="book-title">{cardName}</th>
            <td>{cardType}</td>
            <td>{cardNumber} </td>
            <td>{new Date(cardDate).toDateString()}</td>
            <td>{cardStatus} </td>
            <td><Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button></td>
            <td><Button variant="danger" onClick={() => handleRemoveOrg(id)}>Delete</Button></td>
        </tr>
    );
};

export default Organization;
