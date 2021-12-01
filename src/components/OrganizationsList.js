import React, {useContext, useEffect, useState} from 'react';
import _ from 'lodash';
import Organization from './Organization';
import OrganizationsContext from '../context/OrganizationsContext';

const OrganizationsList = () => {
    const {organizations, setOrganizations} = useContext(OrganizationsContext);

    const handleRemoveOrg = (id) => {
        setOrganizations(organizations.filter((organization) => organization.id !== id));
    };

    return (
        <React.Fragment>
            <div className="book-list">
                {!_.isEmpty(organizations) ? (
                    organizations.map((organization) => (
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Number</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            <Organization key={organization.id} {...organization} handleRemoveOrg={handleRemoveOrg}/>
                            </tbody>
                        </table>))
                ) : (
                    <p className="message">No organizations available.</p>
                )}

            </div>
        </React.Fragment>
    );
};

export default OrganizationsList;
