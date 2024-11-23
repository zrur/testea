"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
  
    try {
      const response = await fetch('https://localhost:8080/Backend/api/login/user', {
        method: 'GET', 
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
        <button
          type="submit"
          onClick={() => (window.location.href = `/Home/[Email]`)}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition"
        >
          Entrar
        </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <a href="/Cadastro" className="text-blue-500 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
