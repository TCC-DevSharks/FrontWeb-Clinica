import React from 'react'
import Header from '../../Main/components/Header';

import '../styles/RegisterClinic.css';


function RegisterClinicContinue(){
    return(
       <div className="register">
        < Header/>
        <div className="register_ii">
        <h1 className='registre'>Cadastre sua Clínica</h1>
        <div class="image-upload-container">
        <input type="file" id="fileInput" accept="image/*"></input>
        <label for="fileInput" class="add-button">+</label>
    </div>
       <div className="clinic_description">
       <p className="registration_information">Descrição: *</p>
       <textarea id='description_clinic'></textarea>
       </div>
       <div className="register_button">
        <button className='continue_register'>Cadastrar</button>
       </div>
       </div>
        </div>
    );
}

export default RegisterClinicContinue;