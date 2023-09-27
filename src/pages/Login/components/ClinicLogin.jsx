import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Header from '../../Main/components/Header'
import '../styles/Login.css';
import '../styles/ClinicLogin.css';

function ClinicLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState(null); // Armazena os dados obtidos na solicitação GET

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // Função para fazer a solicitação GET
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/clinica');
            if (response.ok) {
                const data = await response.json();
                setUserData(data); // Armazena os dados obtidos na variável de estado
            } else {
                console.error('Erro ao buscar os dados de usuário.');
            }
        } catch (error) {
            console.error('Erro na solicitação GET:', error);
        }
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(); // Chama a função de solicitação GET ao enviar o formulário
    };

    useEffect(() => {
        // Você pode deixar este useEffect vazio se não tiver nenhum efeito colateral inicial
    }, []);

    return (
        <div>
            <Header />
            <div className="login_clinic">
                <div className="login_form">
                    <p className="login_title">Entre na conta da sua Clínica:</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input_container">
                            <label>E-mail:</label>
                            <input type="text" placeholder='Digite seu e-mail' />
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
                            <button type="submit">Entrar</button>
                        </div>
                        <div className="register_page">
                            <span>Ainda não tem uma conta? <a href="/registerClinic" className='cad'>Cadastre-se</a></span>
                        </div>
                    </form>
                </div>
                <p>Dados obtidos na solicitação GET: {JSON.stringify(userData)}</p>
            </div>
        </div>
    );
};

export default ClinicLogin;
