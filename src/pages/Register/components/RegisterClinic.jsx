import React, { useState, useEffect } from 'react'; // Adicione o useEffect aqui
import '../styles/RegisterClinic.css';
import InputMask from 'react-input-mask';

function RegisterClinic() {
  const [formData, setFormData] = useState({
    razao_social: '',
    cnpj: '123456789',
    telefone: '',
    cep: '',
    complemento: 'NAO MUDOU',
    email: '',
    senha: '',
    foto: 'NAO MUDOU',
    tipo_telefone: 1,
    numero: '1234567890',
    descricao: 'NAO MUDOU',
    endereco: '', // Adicione campos de endereço ao estado
    neighborhood: '',
    cidade: '',
  });

  // Função para buscar informações de endereço com base no CEP
  const fetchAddressInfo = async () => {
    const { cep } = formData;
    if (cep) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            ...formData,
            endereco: data.logradouro || '',
            neighborhood: data.bairro || '',
            cidade: data.localidade || '',
          });
        } else {
          console.error('Erro ao buscar informações de endereço');
        }
      } catch (error) {
        console.error('Erro ao buscar informações de endereço:', error);
      }
    }
  };

  // Efeito para buscar informações de endereço quando o campo CEP muda
  useEffect(() => {
    fetchAddressInfo();
  }, [formData.cep]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/clinica', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        const responseData = await response.json();
        console.error('Erro ao enviar os dados:', responseData);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Cadastre sua Clínica</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <p>Razão Social: *</p>
          <input
            type="text"
            name="razao_social"
            placeholder='Digite sua razão social'
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <p>CNPJ: *</p>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            name="cnpj"
            placeholder="Digite seu CNPJ"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Telefone: *</p>
          <InputMask
            mask="(99) 99999-9999"
            type="text"
            name="telefone"
            placeholder="Digite seu telefone"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Endereço: *</p>

          <div>
            <p>Rua:</p>
            <input
              type="text"
              name="endereco"
              placeholder="Rua"
              readOnly
              value={formData.endereco}
            />
          </div>

          <div>
            <p>CEP: *</p>
            <InputMask
              mask="99999-999"
              type="text"
              name="cep"
              placeholder="Digite seu CEP"
              required
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="numero"
            placeholder='Nº'
            readOnly />

          <div>
            <p>Bairro:</p>
            <input
              type="text"
              name="neighborhood"
              placeholder="Bairro"
              readOnly
              value={formData.neighborhood}
            />
          </div>

          <input
            type="text"
            name="complemento"
            placeholder='Complemento'
            required
            onChange={handleChange}
          />

          <div>
            <p>Cidade:</p>
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              readOnly
              value={formData.cidade}
            />
          </div>
        </div>

        <div>
          <p>E-mail: *</p>
          <input
            type="text"
            name="email"
            placeholder='Digite seu e-mail'
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <p >Senha: *</p>
          <input
            type="password"
            name="senha"
            placeholder='Digite sua senha'
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <p>Confirmar Senha: *</p>
          <input
            type="password"
            name="confirmar_senha"
            placeholder='Confirme sua senha'
            required
            readOnly
          />
        </div>

        <div>
          <p>Foto: *</p>
          <input
            type="text"
            name="foto"
            id="fileInput"
            placeholder='Anexe uma foto'
            required
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <p>Descrição: *</p>
          <input
            type="text"
            name="descricao"
            placeholder='Descricao'
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit" onClick={handleSubmit}>Continuar</button>
        </div>

      </form>
    </div>
  );
}

export default RegisterClinic;