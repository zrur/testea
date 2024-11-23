import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function EnergiaEolica() {
  return (
    <div>
      <Header />
      <div className="container1 flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-b from-blue-700 to-blue-400">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Energia Eólica
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-10">
          A energia eólica é gerada pelo movimento do ar, captado por turbinas eólicas para produzir eletricidade de forma limpa e sustentável.
        </p>
        <Link href="/">
          <button className="bg-green-500 w-52 text-white rounded-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Voltar para Home
          </button>
        </Link>
      </div>

      {/* Benefícios da Energia Eólica */}
      <div className="container2 bg-blue-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-corTerciaria font-bold mb-8">
          Benefícios da Energia Eólica
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Renovável</h3>
            <p>A energia eólica utiliza uma fonte inesgotável: o vento.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Baixa Emissão</h3>
            <p>Não gera poluição durante a produção de eletricidade.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Custo Reduzido</h3>
            <p>Reduz os custos com energia a longo prazo.</p>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container3 bg-blue-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-blue-900 font-bold mb-8">
          Como Funciona a Energia Eólica
        </h2>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-center text-blue-900">
            A energia eólica é gerada quando o vento gira as pás de turbinas, convertendo a energia cinética do vento em energia mecânica e, posteriormente, em eletricidade.
          </p>
        </div>
      </div>

      {/* Tipos de Energia Eólica */}
      <div className="container4 bg-gray-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-blue-900 font-bold mb-8">
          Tipos de Energia Eólica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Onshore</h3>
            <p>Instalações terrestres, com fácil acesso e menor custo.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Offshore</h3>
            <p>Instaladas no mar, aproveitam ventos mais fortes e constantes.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Distribuída</h3>
            <p>Pequenas turbinas usadas em áreas urbanas ou rurais.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
