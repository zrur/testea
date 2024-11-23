'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function FormCadastro() {
  const [tipoPessoa, setTipoPessoa] = useState<'fisica' | 'juridica'>('fisica');
  const [nome, setNome] = useState('');
  const [nickname, setNickname] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      nome,
      nickname,
      telefone,
      email,
      dataNascimento,
      cpf,
      cnpj,
      tipoPessoa,
      password,
    };
  
    try {
      const response = await fetch('https://localhost:8080/Backend/api/create/user', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Dados enviados com sucesso:', data);
      } else {
        console.error('Erro ao enviar os dados:', response.status, response.statusText);
        window.location.href = `/home/${email}`; 
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setCpf(value);
    }
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 14) {
      setCnpj(value);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-4 mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="tipoPessoa"
                value="fisica"
                checked={tipoPessoa === 'fisica'}
                onChange={() => setTipoPessoa('fisica')}
                className="form-radio"
              />
              <span className="ml-2">Pessoa Física</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="tipoPessoa"
                value="juridica"
                checked={tipoPessoa === 'juridica'}
                onChange={() => setTipoPessoa('juridica')}
                className="form-radio"
              />
              <span className="ml-2">Pessoa Jurídica</span>
            </label>
          </div>

          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div>
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
              Apelido
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu apelido"
            />
          </div>

          {tipoPessoa === 'fisica' && (
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={handleCpfChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="000.000.000-00"
                required
              />
            </div>
          )}

          {tipoPessoa === 'juridica' && (
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-1">
                CNPJ
              </label>
              <input
                type="text"
                id="cnpj"
                value={cnpj}
                onChange={handleCnpjChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="00.000.000/0000-00"
                required
              />
            </div>
          )}

          <button
            type="submit"
            
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <Link href="/Login" className="text-blue-500 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}