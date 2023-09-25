import React, { useState } from 'react'
import '../styles/RegisterClinic.css';
import InputMask from 'react-input-mask';
import axios from 'axios';



function RegisterClinic() {
  const [formData, setFormData] = useState({
    razao_social: 'sdfvsdagf',
    cnpj: 'sdfasdfv',
    telefone: 'asdgfasdf',
    cep: 'dsfas',
    complemento: 'sdfdsf',
    email: 'fsdf',
    senha: 'sdfs',
    foto: '23456789',
    descricao: 'oiii',
    tipo_telefone: 1,
    numero: '31',
  });

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      // Enviar os dados para o servidor usando uma requisição POST
      const response = await axios.post('http://localhost:3000/clinica', formData);
      console.log('Cadastro da clínica realizado com sucesso!', response.data);

      // Lógica adicional após o cadastro, como redirecionar o usuário, pode ser adicionada aqui.
    } catch (error) {
      console.error('Erro ao cadastrar a clínica:', error);
    }
  };


  return (
    <div className="register">
      <h1 className='registre'>Cadastre sua Clínica</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="register_container">
          <div className="name_cnpj">
            <div className="name">
              <p className="registration_information">Razão Social: *</p>
              <input
                className='input'
                type="text"
                name="razao_social"
                placeholder='Digite sua razão social'
                value={formData.razao_social}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="cnpj">
              <p className="registration_information">CNPJ: *</p>
              <InputMask
                mask="99.999.999/9999-99"
                type="text"
                name="cnpj"
                placeholder="Digite seu CNPJ"
                value={formData.cnpj}
                onChange={handleInputChange}
                className='input'
                required
              />
            </div>
          </div>
          <div className="phone_register">
            <p className="registration_information">Telefone: *</p>
            <InputMask
              mask="(99) 99999-9999"
              type="text"
              name="telefone"
              placeholder="Digite seu telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              className='input'
              required
            />
          </div>

          
          <div className="adress">
            <p className="registration_information">Endereço: *</p>
            <div className='name_cnpj'>
              <input
                className="input"
                type="text"
                name='endereco'
                placeholder='Rua'
                value={street}
                readOnly
              />
              <InputMask
                className='input'
                type="text"
                name="cep"
                placeholder="Digite seu CEP"
                mask="99999-999"
                onChange={handleCepChange}
                onBlur={fetchAddressFromViaCEP}
                required
              />
              <input className='input' type="text" name="numero" placeholder='Nº' />
              <input
                className='input'
                type="text"
                name='neighborhood'
                placeholder='Bairro'
                value={neighborhood}
                readOnly
              />
            </div>
            <div className='name_cnpj'>
              <input
                className='input'
                type="text"
                name="complemento"
                placeholder='Complemento'
              />
              <input
                className='input'
                type="text"
                name="cidade"
                placeholder='Cidade'
                value={city}
                readOnly
              />
            </div>
          </div>
          <div className="email_register">
            <p className="registration_information">E-mail: *</p>
            <input
              className='input'
              type="text"
              name="email"
              placeholder='Digite seu e-mail'
              required
            />
          </div>
          <div className="name_cnpj">
            <div className="password_register">
              <p className="registration_information">Senha: *</p>
              <input
                className='input'
                type="password"
                name="senha"
                placeholder='Digite sua senha'
                required
              />
            </div>
            <div className="confirm_password">
              <p className="registration_information">Confirmar Senha: *</p>
              <input
                className='input'
                type="password"
                name="confirmar_senha"
                placeholder='Confirme sua senha'
                required
              />
            </div>
          </div>
          <div className="continue">
            <button type="submit" className='continue_register'>Continuar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterClinic;