import React , { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';


import Header from '../../Main/components/Header'

import '../styles/Login.css';
import '../styles/ClinicLogin.css'; 

function ClinicLogin(){
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return(
        <div>
        <Header/>
        <div className="login_clinic">
           <div className="login_form">
            <p className="login_title">Entre na conta da sua Clínica:</p>
            <form>
            <div className="input_container">
                <label>E-mail:</label>
                <input type="text" placeholder='Digite seu e-mail'/>
            </div>
            <div className="input_container">
                <div className="pass_forgot">
                <label>Senha:</label>
                <a href='/forgot' className='forgot_a'>Esqueceu?</a>
                </div>
                <div className="password-input">
      <input type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha" />
      <p onClick={handleShowPassword} className="eye-icon">
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </p>
    </div>
            </div>
            <div className="button_login_clinic">
                <button>
                    Entrar
                </button>
            </div>
            <div className="register_page">
                <span>Ainda não tem uma conta? <a href="/registerClinic" className='cad'>Cadastre-se</a></span>
            </div>
            </form>
           </div>
        </div>
       </div>
    );
};

export default ClinicLogin;