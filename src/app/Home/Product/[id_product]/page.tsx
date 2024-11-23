'use client'
import { useEffect, useState } from 'react';
import React from 'react';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import imagem from '../img/imagem.jpg'; // Importação da imagem

interface User {
 id: number;
 nome: string;
 usuarioId: number;
}

interface Produto {
 id: number;
 nome: string;
 usuarioId: number;
 descricao: string;
 imagem: string;
}

const HomePage = () => {
 const [produtos, setProdutos] = useState<Produto[]>([]);
 const [usuarios, setUsuarios] = useState<User[]>([]);

 useEffect(() => {
   const fetchedProdutos: Produto[] = [
     { id: 1, nome: 'Produto 1', usuarioId: 1, descricao: 'Descrição do Produto 1', imagem: '../img/imagem.jpg' },
     { id: 2, nome: 'Produto 2', usuarioId: 2, descricao: 'Descrição do Produto 2', imagem: '/images/produto2.jpg' },
     { id: 3, nome: 'Produto 3', usuarioId: 1, descricao: 'Descrição do Produto 3', imagem: '/images/produto3.jpg' },
   ];

   const fetchedUsuarios: User[] = [
     { id: 1, nome: 'Usuario 1', usuarioId: 101 },
     { id: 2, nome: 'Usuario 2', usuarioId: 102 },
   ];

   setProdutos(fetchedProdutos);
   setUsuarios(fetchedUsuarios);
 }, []);

 const handleProductClick = (id: number) => {
   console.log('Produto clicado:', id);
 };

 const handleUserClick = (usuarioId: number, e: React.MouseEvent) => {
   e.stopPropagation();
   console.log('Usuário clicado:', usuarioId);
 };

 return (
   <div className="min-h-screen bg-gray-100 flex flex-col">
     <Header/>
     
     <main className="flex-grow container mx-auto px-6 py-16 flex flex-col items-center">
       <h1 className="text-5xl font-bold text-center text-blue-800 mb-12 uppercase tracking-wider">
         Energia Renováveis
       </h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center max-w-6xl mx-auto"> {/* Modificação para centralização */}
         {produtos.map((produto) => (
           <div
             key={produto.id}
             className="bg-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer border-2 border-blue-100 hover:border-blue-300 w-full"
             onClick={() => handleProductClick(produto.id)}
           >
             <div className="relative mb-6">
               <img 
                 src={produto.imagem}
                 alt={produto.nome}
                 className="w-full h-56 object-cover rounded-xl filter brightness-90 hover:brightness-100 transition-all duration-300"
               />
               <div className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                 Renovável
               </div>
             </div>
             
             <h3 className="text-2xl font-bold text-blue-900 mb-2">{produto.nome}</h3>
             <p className="text-sm text-gray-600 mb-4">{produto.descricao}</p>
             
             <div className="flex items-center justify-between">
               {usuarios
                 .filter((usuario) => usuario.id === produto.usuarioId)
                 .map((usuario) => (
                   <p
                     key={usuario.id}
                     className="text-blue-700 hover:text-blue-900 hover:underline cursor-pointer transition-colors"
                     onClick={(e) => handleUserClick(usuario.id, e)}
                   >
                     {usuario.nome}
                   </p>
                 ))}
               <span className="text-blue-800 font-semibold">Detalhes</span>
             </div>
           </div>
         ))}
       </div>
     </main>
     
     <Footer />
   </div>
 );
};

export default HomePage;