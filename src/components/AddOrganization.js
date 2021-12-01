import React, {useContext} from 'react';
import OrganizationForm from './OrganizationForm';
import OrganizationsContext from '../context/OrganizationsContext';

import Swal from "sweetalert2"

const AddOrganization = ({history}) => {
    const {organizations, setOrganizations} = useContext(OrganizationsContext);

    const handleOnSubmit = (organization) => {
        setOrganizations([organization, ...organizations]);
        history.push('/');
        Swal.fire({
            icon: 'success',
            title: 'Congratulation!!!',
            text: 'You have successfully added a new organization!!!'
        });
    };

    return (
        <React.Fragment>
            <OrganizationForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );
};

export default AddOrganization;