'use client'

import { useRouter } from 'next/navigation';
import { ArrowLeft, Edit, Save, X } from 'lucide-react';
import React, { useState } from "react";

const UserProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    nome: "Arthur Murilo",
    nickname: "Arthur",
    telefone: "(11) 98765-4321",
    email: "arthur@example.com",
    dataNascimento: "01-10-1992",
    cpf: "123.456.789-00",
    cnpj: "12.345.678/0001-90",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({...userData});

  const handleUpdateInfo = async () => {
    try {
      // Simulated API call
      setUserData(editedData);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro na atualização:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditedData({...userData});
    setIsEditing(false);
  };

  const handleInfoChange = (field: string, value: string) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-10 px-5 relative">
      {/* Navigation Buttons */}
      <div className="absolute top-4 left-4 flex space-x-2">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-gray-700 hover:text-blue-600 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-105"
          title="Voltar"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {isEditing ? (
          <div className="flex space-x-2">
            <button 
              onClick={handleUpdateInfo}
              className="flex items-center text-green-600 hover:text-green-700 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-105"
              title="Salvar Alterações"
            >
              <Save className="w-6 h-6" />
            </button>
            <button 
              onClick={handleCancelEdit}
              className="flex items-center text-red-600 hover:text-red-700 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-105"
              title="Cancelar Edição"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center text-blue-600 hover:text-blue-700 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-105"
            title="Editar Perfil"
          >
            <Edit className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Perfil do Usuário
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informações Pessoais */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-inner">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6 border-b border-blue-200 pb-2">
              Informações Pessoais
            </h3>
            <div className="space-y-4">
              {[
                { label: "Nome", field: "nome" },
                { label: "Nickname", field: "nickname" },
                { label: "Telefone", field: "telefone" },
                { label: "E-mail", field: "email" },
                { label: "Data de Nascimento", field: "dataNascimento" }
              ].map(({ label, field }) => (
                <div key={field} className="flex justify-between items-center">
                  <span className="font-medium text-blue-600">{label}</span>
                  {isEditing ? (
  <input
    type={field === "dataNascimento" ? "date" : "text"}
    value={editedData[field as keyof typeof editedData] || ''}
    onChange={(e) => handleInfoChange(field, e.target.value)}
    className="p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
    title={label}
    placeholder={`Enter ${label.toLowerCase()}`}
  />
) : (
  <span className="text-gray-700">{userData[field as keyof typeof userData]}</span>
)}
                </div>
              ))}
            </div>
          </div>

          {/* Documentos */}
          <div className="bg-blue-50 p-6 rounded-2xl shadow-inner">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6 border-b border-blue-200 pb-2">
              Documentos
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-blue-600">CPF</span>
                <span className="text-gray-700">{userData.cpf}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-blue-600">CNPJ</span>
                <span className="text-gray-700">{userData.cnpj}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;