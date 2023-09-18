import React from 'react';

import Header from '../../Main/components/Header'

import '../styles/Login.css';
import '../styles/PregnantLogin.css'; 

function PregnantLogin(){
    return(
        <div>
        <Header/>
        <div className="p_login_container">
           <div className="dowload_app">
           <h4>Disponível apenas na versão app para uma melhor experiência :)</h4>
            <img className='download' src="./images/download.png" alt="" />
           </div>
            <div className="phone">
                <img src="./images/app_mobile.png" alt="" />
            </div>
        </div>
       </div>
    );
};

export default PregnantLogin;