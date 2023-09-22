import React, {useState} from 'react'

import Header from '../../Main/components/Header';

import '../styles/RegisterClinic.css';
import InputMask from 'react-input-mask';
import axios from 'axios';
import { FiEye, FiEyeOff } from 'react-icons/fi';



function RegisterClinic(){
    const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');

  const handleCepChange = (event) => {
    const newCep = event.target.value;
    setCep(newCep);
  };

  const fetchAddressFromViaCEP = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      setStreet(data.logradouro);
      setNeighborhood(data.bairro);
      setCity(data.localidade);
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
      // Lidar com erros, por exemplo, exibir uma mensagem ao usuário
    }
  };
    return(
       <div className="register">
        < Header/>
        <h1 className='registre'>Cadastre sua Clínica</h1>
       <div className="register_container">
       <div className="name_cpnj">
       <div className="name">
        <p className="registration_information">Razão Social: *</p>
        <input className='input' type="text" id='clinic_name'placeholder='Digite sua razão social'/>
       </div>
       <div className="cnpj">
          <p className="registration_information">CNPJ: *</p>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            id="cnpj"
            placeholder="Digite seu CNPJ"
            className='input'
          />
        </div>
       </div> 
       <div className="phone_register">
       <p className="registration_information">Telefone: *</p>
       <InputMask
             mask="(99) 99999-9999"
            type="text"
            id="telefone"
            placeholder="Digite seu telefone"
            className='input'
          />
       </div>
       <div className="adress">
       <p className="registration_information">Endereço: *</p>
       <div className='name_cpnj'>
       <input className="input" type="text" id='street' placeholder='Rua' value={street} readOnly />
        <InputMask
        className='input'
          type="text"
          id="cep"
          placeholder="Digite seu CEP"
          mask="99999-999"
          value={cep}
          onChange={handleCepChange}
          onBlur={fetchAddressFromViaCEP}
        />
        <input className='input' type="text" id='number' placeholder='Nº'/>
        <input className='input' type="text" id='neighborhood' placeholder='Bairro' value={neighborhood} readOnly />
       </div>
       <div className='name_cpnj'>
        <input className='input' type="text" id='complement' placeholder='Complemento'/>
        <input className='input' type="text" id='city' placeholder='Cidade' value={city} readOnly />
       </div>
       </div>
       <div className="email_register">
       <p className="registration_information">E-mail: *</p>
       <input className='input' type="text" placeholder='Digite seu e-mail'/>
       </div>
       <div className="name_cpnj">
       <div className="password_register">
        <p className="registration_information">Senha: *</p>
        <input className='input' type="password" id='password_register' placeholder='Digite sua senha'/>
       </div>
       <div className="confirm_password">
       <p className="registration_information">Confirmar Senha: *</p>
       <input className='input' type="password" id='confirm_password' placeholder='Confirme sua senha'/>
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