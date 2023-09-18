import React from 'react';

import Header from '../Main/components/Header'

import '../Login/styles/Login.css';

function Login(){
    return(

        <div>
        <Header/>
        <div className="login_container">
           <div className="login_type">
           <h7>Qual o seu tipo de usuário?</h7>
           <a href="/clinics">
               <button  className='choice_login'>Clínicas</button>
              </a>
               <a href="/professionals">
               <button className='choice_login'>Profissionais</button>
              </a>
            <a href="/pregnant">
                <button className='choice_login'>Gestantes</button>
              </a>
           </div>
            <div className="login_img">
                <img src="./images/login_img.png" alt="" />
            </div>
        </div>
       </div>
    );
};

export default Login;