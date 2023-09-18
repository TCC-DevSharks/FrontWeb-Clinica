import React , { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';


import Header from '../../Main/components/Header'

import '../../Login/styles/Login.css';
import '../../Login/styles/ClinicLogin.css'; 

function RecoverPassword(){
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return(
        <div>
        <Header/>
        <div className="login_clinic">
           <div className="login_form">
            <p className="login_title">Recuperar conta:</p>
            <form>
            <div className="input_container">
                <label>E-mail:</label>
                <input type="text" placeholder='Digite seu e-mail'/>
            </div>
            <div className="input_container">
                <div className="pass_forgot">
                <label>Nova senha:</label>
                </div>
                <div className="password-input">
      <input type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha" />
      <p onClick={handleShowPassword} className="eye-icon">
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </p>
    </div>
            </div>
            <div className="input_container">
                <div className="pass_forgot">
                <label>Confirmar nova senha:</label>
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
                    Confirmar
                </button>
            </div>
            </form>
           </div>
        </div>
       </div>
    );
};

export default RecoverPassword;