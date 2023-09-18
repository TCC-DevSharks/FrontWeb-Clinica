import React from 'react'
import Header from '../../Main/components/Header';

import '../styles/RegisterClinic.css';


function RegisterClinicContinue(){
    return(
       <div className="register">
        < Header/>
        <h1 className='registre'>Cadastre sua Clínica</h1>
       <div className="clinic_description">
       <p className="registration_information">Descrição: *</p>
       <textarea id='description_clinic'></textarea>
       </div>
       </div>
    );
}

export default RegisterClinicContinue;