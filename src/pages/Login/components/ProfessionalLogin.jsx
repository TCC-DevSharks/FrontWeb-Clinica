import React , { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';


import Header from '../../Main/components/Header'

import '../styles/Login.css';
import '../styles/ProfessionalLogin.css'; 

function ClinicLogin(){
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return(
        <div>
        <Header/>
        <div className="login_pro">
           <div className="login_form">
            <p className="login_title">Entre na sua conta:</p>
            <form>
            <div className="input_container_p">
                <label>E-mail:</label>
                <input type="text" placeholder='Digite seu e-mail'/>
            </div>
            <div className="input_container">
                <div className="pass_forgot">
                <label>Senha:</label>
                <a href='/forgot' className='forgot_p'>Esqueceu?</a>
                </div>
                <div className="password-input">
      <input type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha" />
      <p onClick={handleShowPassword} className="eye-icon">
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </p>
    </div>
            </div>
            <div className="button_login_pro">
                <button>
                    Entrar
                </button>
            </div>
            </form>
           </div>
        </div>
       </div>
    );
};

export default ClinicLogin;