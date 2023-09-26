import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Gestantes from './pages/Login/components/PregnantLogin';
import Clinica from './pages/Login/components/ClinicLogin';
import Profissional from './pages/Login/components/ProfessionalLogin';
import RegisterClinic from './pages/Register/components/RegisterClinic';
import PasswordRecovery from './pages/Register/components/PasswordRecovery';






function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/pregnant" component={Gestantes} />
                <Route path="/clinics" component={Clinica} />
                <Route path="/professionals" component={Profissional} />
                <Route path="/registerClinic" component={RegisterClinic} />
                <Route path="/forgot" component={PasswordRecovery} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;