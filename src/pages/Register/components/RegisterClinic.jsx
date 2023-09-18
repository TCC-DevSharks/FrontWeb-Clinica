import React from 'react'
import Header from '../../Main/components/Header';

import '../styles/RegisterClinic.css';

function RegisterClinic(){
    return(
       <div className="register">
        < Header/>
        <h1 className='registre'>Cadastre sua Clínica</h1>
       <div className="register_container">
       <div className="name_cpnj">
       <div className="name">
        <p className="registration_information">Razão Social: *</p>
        <input type="text" id='clinic_name'placeholder='Digite sua razão social'/>
       </div>
       <div className="cpnj">
       <p className="registration_information">CPNJ: *</p>
       <input type="text" id='cpnj'placeholder='Digite seu CPNJ'/>
       </div>
       </div> 
       <div className="phone_register">
       <p className="registration_information">Telefone: *</p>
       <input type="text" placeholder='Digite seu telefone'/>
       </div>
       <div className="adress">
       <p className="registration_information">Endereço: *</p>
       <div className='name_cpnj'>
        <input type="text" id='street'placeholder='Rua'/>
        <input type="text" id='cep' placeholder='CEP'/>
        <input type="text" id='number' placeholder='Nº'/>
        <input type="text" id='neighborhood' placeholder='Bairro'/>
       </div>
       <div className='name_cpnj'>
        <input type="text" id='complement' placeholder='Complemento'/>
        <input type="text" id='city' placeholder='Cidade'/>
       </div>
       </div>
       <div className="email_register">
       <p className="registration_information">E-mail: *</p>
       <input type="text" placeholder='Digite seu e-mail'/>
       </div>
       <div className="name_cpnj">
       <div className="password_register">
        <p className="registration_information">Senha: *</p>
        <input type="text" id='password_register' placeholder='Digite sua senha'/>
       </div>
       <div className="confirm_password">
       <p className="registration_information">Confirmar Senha: *</p>
       <input type="text" id='confirm_password' placeholder='Confirme sua senha'/>
       </div>
       </div>
       <div className="continue">
       <a href="/continue">
       <button className='continue_register'>Continuar</button>
       </a>
       </div>
       </div>
       </div>
    );
}

export default RegisterClinic;