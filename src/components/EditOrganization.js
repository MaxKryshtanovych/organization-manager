import React, {useContext} from 'react';
import OrganizationForm from './OrganizationForm';
import {useParams} from 'react-router-dom';
import OrganizationsContext from '../context/OrganizationsContext';
import Swal from "sweetalert2";

const EditOrganization = ({history}) => {
    const {organizations, setOrganizations} = useContext(OrganizationsContext);
    const {id} = useParams();
    const organizationToEdit = organizations.find((organization) => organization.id === id);

    const handleOnSubmit = (organization) => {
        const filteredOrganizations = organizations.filter((organization) => organization.id !== id);
        setOrganizations([organization, ...filteredOrganizations]);
        history.push('/');
        Swal.fire({
            icon: 'success',
            title: 'Congratulation!!!',
            text: 'You have successfully edited a organization!!!'
        });
    };

    return (
        <div>
            <OrganizationForm organization={organizationToEdit} handleOnSubmit={handleOnSubmit}/>
        </div>
    );
};

export default EditOrganization;
