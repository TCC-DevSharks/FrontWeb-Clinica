import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Header from '../../Main/components/Header'
import '../styles/Login.css';
import '../styles/ClinicLogin.css';

function ClinicLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email: email,
            senha: password,
        };

        try {
            const response = await fetch('http://localhost:3005/login/clinica', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const status = response.status

            if (status === 201) {
                console.log("login efetuado seu tonto")
                console.log(status)
            } else {
                console.log("login deu errado sua merda")
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };


    return (
        <div>
            <Header />
            <div className="login_clinic">
                <div className="login_form">
                    <p className="login_title">Entre na conta da sua Clínica:</p>
                    <form onSubmit={handleLogin}> {/* Adicione o onSubmit ao formulário */}
                        <div className="input_container">
                            <label>E-mail:</label>
                            <input
                                type="text"
                                placeholder='Digite seu e-mail'
                                value={email} // Associe o valor do input ao estado email
                                onChange={handleEmailChange} // Adicione o evento onChange
                            />
                        </div>
                        <div className="input_container">
                            <div className="pass_forgot">
                                <label>Senha:</label>
                                <a href='/forgot' className='forgot_a'>Esqueceu?</a>
                            </div>
                            <div className="password-input">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Digite sua senha"
                                    value={password} // Associe o valor do input ao estado password
                                    onChange={handlePasswordChange} // Adicione o evento onChange
                                />
                                <p onClick={handleShowPassword} className="eye-icon">
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </p>
                            </div>
                        </div>
                        <div className="button_login_clinic">
                            <button type="submit">Entrar</button>
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
