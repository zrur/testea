'use client'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from 'next/link';
import Banner1 from "../img/banner1.png";
import Solar from "../img/solar.png";
import Eolica from "../img/eolica.png";
import Hidreletrica from "../img/hidrica.png";
import Geotermica from "../img/geotermica.png";
import Biomassa from "../img/biomassa.png";
import Oceanica from "../img/oceanica.png";
import { useState } from 'react';

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);

  const companies = [
    {
      id: 1, name: 'Neoenergia',
      description: 'Atua na geração, transmissão, distribuição e comercialização de energia, com forte desempenho no segmento de fontes renováveis.',
      color: '#0073B7',
      link: 'https://www.neoenergia.com/'
    },
    {
      id: 2,
      name: 'CPFL Renováveis',
      description: 'Gera energia limpa a partir de fontes renováveis, incluindo eólica, pequenas centrais hidrelétricas, termelétricas movidas a cana-de-açúcar e solar.',
      color: '#F36F21',
      link: 'https://www.cpfl.com.br/'
    },
    {
      id: 3,
      name: 'Elera Renováveis',
      description: 'Possui uma matriz energética 100% renovável composta por usinas hidrelétricas, parques eólicos, parques solares e usinas de biomassa.',
      color: '#00A859',
      link: 'https://elera.com/'
    },
    {
      id: 4,
      name: 'Omega Energia',
      description: 'Especializada na geração de energia limpa e renovável com foco em energia eólica e solar.',
      color: '#004F9F',
      link: 'https://www.omegaenergia.com.br/'
    },
    {
      id: 5,
      name: 'EDP Renováveis',
      description: 'Fornece soluções de energia renovável com forte atuação em energia eólica e solar.',
      color: '#E2231A',
      link: 'https://www.edpr.com/'
    },
    {
      id: 6,
      name: 'Voltalia',
      description: 'Especializada no desenvolvimento e operação de usinas de energia renovável, incluindo solar, eólica, hidro e biomassa.',
      color: '#006C34',
      link: 'https://www.voltalia.com/'
    },
    {
      id: 7,
      name: 'Enel Green Power',
      description: 'Uma das maiores empresas globais em geração de energia limpa, com projetos de energia solar, eólica, geotérmica e hídrica.',
      color: '#00C0A3',
      link: 'https://www.enelgreenpower.com/'
    },
    {
      id: 8,
      name: 'Enel Brasil',
      description: 'Grupo de energia com forte presença no Brasil, atuando em geração de energia renovável, especialmente solar e eólica.',
      color: '#00C0A3',
      link: 'https://www.enelgreenpower.com/'
    },
    {
      id: 9,
      name: 'Biomassa Energia',
      description: 'Focada em soluções de geração de energia a partir da biomassa, uma das fontes renováveis mais promissoras para o Brasil.',
      color: '#6B8E23',
      link: 'http://biomassaenergia.com.br/'
    },
    {
      id: 10,
      name: 'Votorantim Energia',
      description: 'Atua no setor de energia renovável com projetos de energia eólica e solar, promovendo sustentabilidade no Brasil.',
      color: '#005A31',
      link: 'https://www.votorantimenergia.com.br/'
    },
    {
      id: 11,
      name: 'Soluções Renováveis',
      description: 'Oferece soluções personalizadas para projetos de energia solar fotovoltaica e eficiência energética em várias regiões do Brasil.',
      color: '#9C27B0',
      link: '#'
    },
    {
      id: 12,
      name: 'Cemig',
      description: 'Companhia energética de Minas Gerais com investimentos em energia solar e eólica, promovendo soluções sustentáveis.',
      color: '#F4B400',
      link: 'https://www.cemig.com.br/'
    },
    {
      id: 13,
      name: 'Blue Sol Energia',
      description: 'Especializada em soluções de energia solar, para residências, empresas e propriedades rurais.', color: '#2E8B57',
      link: 'https://www.bluesolenergia.com.br/'
    },
    {
      id: 14,
      name: 'Renova Energia',
      description: 'Atua fortemente no mercado de energia renovável, especialmente em projetos eólicos e solares.', color: '#F44336',
      link: 'http://www.renovaenergia.com.br/'
    },
    {
      id: 15,
      name: 'Omega Geração',
      description: 'Uma das maiores empresas do Brasil focadas na geração de energia limpa, principalmente energia eólica.',
      color: '#00838F',
      link: 'https://www.omegageracao.com.br/'
    },
    {
      id: 16,
      name: 'Alsol Energia Solar',
      description: 'Focada em energia solar fotovoltaica, oferecendo soluções para projetos em diversas escalas.',
      color: '#FF5722',
      link: 'https://www.alsol.com.br/'
    },
    {
      id: 17,
      name: 'SolarGrid',
      description: 'Empresa especializada em soluções para energia solar fotovoltaica, oferecendo desde o fornecimento até a instalação de sistemas solares.',
      color: '#FF9800',
      link: 'https://www.solargrid.com.br/'
    },
    {
      id: 18,
      name: 'Cemig',
      description: 'Companhia energética de Minas Gerais que investe em soluções renováveis, como solar e eólica.', color: '#9C27B0',
      link: 'https://www.cemig.com.br/'
    },
    {
      id: 19,
      name: 'Eletrobras',
      description: 'Maior empresa de energia elétrica da América Latina, com foco em energias renováveis, como solar, eólica e hidrelétrica.',
      color: '#3F51B5',
      link: 'https://www.eletrobras.com/'
    },
    {
      id: 20,
      name: 'CPFL Energia',
      description: 'Com forte atuação no setor de energia renovável, atuando principalmente com parques solares e eólicos.',
      color: '#2196F3',
      link: 'https://www.cpfl.com.br/'
    },
    {
      id: 21,
      name: 'EDF Renewables',
      description: 'Fornece soluções completas para geração de energia limpa com projetos em diversos segmentos de energia renovável.',
      color: '#4CAF50',
      link: 'https://www.edf-renewables.com/'
    },
    {
      id: 22,
      name: 'Enel X',
      description: 'Oferece soluções de energia limpa para empresas e consumidores, como a implementação de sistemas fotovoltaicos e mobilidade elétrica.',
      color: '#FFC107',
      link: 'https://www.enelx.com/br/pt'
    },
    {
      id: 23,
      name: 'Siemens Gamesa',
      description: 'Líder global na geração de energia eólica e fornecimento de soluções para o setor de energias renováveis.',
      color: '#00B8A9',
      link: 'https://www.siemensgamesa.com/'
    },
    {
      id: 24,
      name: 'Tractebel',
      description: 'Oferece soluções de engenharia e consultoria para projetos de energia renovável em todo o Brasil, com foco em solar e eólica.',
      color: '#673AB7',
      link: 'https://tractebel-engie.com.br/'
    },
    {
      id: 25,
      name: 'Iberdrola',
      description: 'Empresa global com forte presença no Brasil, especializada em energias renováveis, como solar e eólica.',
      color: '#1E88E5',
      link: 'https://www.iberdrola.com/'
    }
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? companies.length - 1 : prev - 1));
  };

  return (
    <div>
      <Header />
      <div className="container1">
        <div className="flex items-center">
          <div className="text-center w-1/2">
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl text-white mb-10">
              A energia da prosperidade
            </h1>
            <p className="sm:text-sm md:text-lg lg:text-2xl text-white mb-10">
              Aqui nós mostramos na prática como funciona
            </p>

            <Link href="/Saiba">
              <button className="bg-corSecundaria lg:w-52 md:w-44 sm:w-36 lg:text-xl sm:text-xs  text-white rounded-md p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Saiba mais
              </button>
            </Link>

          </div>
          <div className="w-1/2">
            <Image
              src={Banner1}
              alt="home"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="container2">
        <h1 className="text-center text-4xl p-10 text-corTerciaria">
          Tipos de Energias Renováveis
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 p-4">
          <div className="energias bg-corTerciaria p-6 shadow-lg shadow-black">
            <Image src={Solar} alt="Energia Solar" className="m-auto" />
            <h2 className="text-2xl font-bold text-center">Solar</h2>
            <Link href="/Solar">
              <button className="bg-corSecundaria text-corTerciaria text-center w-[120px] p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Saiba mais</button>
            </Link>
          </div>
          <div className="energias bg-corTerciaria p-6 shadow-lg shadow-black">
            <Image src={Eolica} alt="Energia Solar" className="m-auto" />
            <h2 className="text-2xl font-bold text-center">Eólica</h2>
            <Link href="/Eolica">
              <button className="bg-corSecundaria text-corTerciaria text-center w-[120px] p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Saiba mais</button>
            </Link>
          </div>
          <div className="energias bg-corTerciaria p-6 shadow-lg shadow-black">
            <Image src={Hidreletrica} alt="Energia Solar" className="m-auto" />
            <h2 className="text-2xl font-bold text-center">Hidrelétrica</h2>
            <Link href="/Hidrica">
              <button className="bg-corSecundaria text-corTerciaria text-center m-1 w-[120px] p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Saiba mais</button>
            </Link>
          </div>
          <div className="energias bg-corTerciaria p-6 shadow-lg shadow-black">
            <Image src={Geotermica} alt="Energia Solar" className="m-auto" />
            <h2 className="text-2xl font-bold text-center">Geotérmica</h2>
            <Link href="/Geotermica">
              <button className="bg-corSecundaria text-corTerciaria text-center w-[120px] p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Saiba mais</button>
            </Link>
          </div>
          <div className="energias bg-corTerciaria p-6 shadow-lg shadow-black">
            <Image src={Biomassa} alt="Energia Solar" className="m-auto" />
            <h2 className="text-2xl font-bold text-center">Biomassa</h2>
            <Link href="/Biomassa">
              <button className="bg-corSecundaria text-corTerciaria text-center  p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[120px]">Saiba mais</button>
            </Link>
          </div>

          <div className="energias bg-corTerciaria p-6 shadow-lg shadow-black">
            <Image src={Oceanica} alt="Energia Solar" className="m-auto" />
            <h2 className="text-2xl font-bold text-center">Oceânica</h2>
            <Link href="/Oceanica">
              <button className="bg-corSecundaria text-corTerciaria text-center w-[120px] p-1 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Saiba mais</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/4 bg-corPrimaria border-solid border-black border-2 shadow-lg rounded-lg m-10 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <h1 className="text-center font-medium text-xl">O que é Energia Renovável?</h1>
          <p className="m-5 text-justify">Energia renovável é a energia obtida a partir de recursos renováveis, ou seja, recursos que não se esgotam. Mas, afinal, o que é um recurso que não se esgota?</p>
          <p className="m-5 text-justify">Dois exemplos desse tipo de recurso são o sol e a água da chuva, ações da natureza que não precisam da interferência humana para existir e têm um ciclo contínuo e próprio para se renovar.</p>
          <p className="m-5 text-justify">Existem diversos recursos que são finitos, como os derivados do petróleo. Por isso, a ideia da energia renovável é optar por fontes naturais que se renovam constantemente.</p>
        </div>
      </div>
      <h1 className="text-3xl text-center m-10 text-white">Principais empresas nesse ramo:</h1>
      <div className="relative w-full overflow-hidden mb-10">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentCard * 100}%)` }}
        >
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex-shrink-0 w-full md:w-1/3 p-4"
            >
              <div className="h-full rounded-lg shadow-lg p-6"
                style={{ backgroundColor: company.color }}
              >
                <div className="flex flex-col items-center justify-center text-center text-white">
                  <h2 className="text-2xl font-bold">{company.name}</h2>
                  <p className="mt-2">{company.description}</p>
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevCard}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={nextCard}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8250;
        </button>
      </div>
      
      <Footer />
    </div>
  );
}
