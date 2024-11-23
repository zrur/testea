'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/HeaderHome/page';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Eye, User, ShoppingCart } from 'lucide-react';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

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
  preco: number;
  estoque: number;
}

const HomePage = () => {
  const router = useRouter();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [usuarios, setUsuarios] = useState<User[]>([]);

  useEffect(() => {
    const fetchedProdutos: Produto[] = [
      { 
        id: 1, 
        nome: 'Produto 1', 
        usuarioId: 1, 
        descricao: 'Descrição detalhada do Produto 1', 
        imagem: '/images/produto1.jpg',
        preco: 99.90,
        estoque: 10
      },
      { 
        id: 2, 
        nome: 'Produto 2', 
        usuarioId: 2, 
        descricao: 'Descrição detalhada do Produto 2', 
        imagem: '/images/produto2.jpg',
        preco: 129.50,
        estoque: 5
      },
      { 
        id: 3, 
        nome: 'Produto 3', 
        usuarioId: 1, 
        descricao: 'Descrição detalhada do Produto 3', 
        imagem: '/images/produto3.jpg',
        preco: 79.99,
        estoque: 15
      },
    ];

    const fetchedUsuarios: User[] = [
      { id: 1, nome: 'Usuario 1', usuarioId: 101 },
      { id: 2, nome: 'Usuario 2', usuarioId: 102 },
      { id: 3, nome: 'Usuario 3', usuarioId: 103 },
    ];

    setProdutos(fetchedProdutos);
    setUsuarios(fetchedUsuarios);
  }, []);

  const handleProductClick = (id: number) => {
    router.push(`/produto/${id}`);
  };

  const handleUserClick = (usuarioId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/usuario/${usuarioId}`);
  };

  const handleAddToCart = (produto: Produto, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Adicionando ${produto.nome} ao carrinho`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Nossos Produtos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
              onClick={() => handleProductClick(produto.id)}
            >
              <div className="relative">
                <Image 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  width={300}
                  height={224}
                  className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="text-white w-12 h-12" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{produto.nome}</h3>
                <p className="text-sm text-gray-600 mb-4">{produto.descricao}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    R$ {produto.preco.toFixed(2)}
                  </span>
                </div>

                <div className="mt-4 flex items-center">
                  {usuarios
                    .filter((usuario) => usuario.id === produto.usuarioId)
                    .map((usuario) => (
                      <div 
                        key={usuario.id}
                        className="flex items-center cursor-pointer"
                        onClick={(e) => handleUserClick(usuario.id, e)}
                      >
                        <User 
                          className="w-8 h-8 text-gray-500 mr-2 rounded-full" 
                          strokeWidth={1.5}
                        />
                        <span className="text-sm text-blue-500 hover:underline">
                          {usuario.nome}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;