import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddOrganization from '../components/AddOrganization';
import OrganizationsList from '../components/OrganizationsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditOrganization from '../components/EditOrganization';
import OrganizationsContext from '../context/OrganizationsContext';

const AppRouter = () => {
  const [organizations, setOrganizations] = useLocalStorage('organizations', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <OrganizationsContext.Provider value={{ organizations, setOrganizations }}>
            <Switch>
              <Route component={OrganizationsList} path="/" exact={true} />
              <Route component={AddOrganization} path="/add" />
              <Route component={EditOrganization} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </OrganizationsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
