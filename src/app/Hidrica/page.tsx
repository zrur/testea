import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function EnergiaHidrica() {
  return (
    <div>
      <Header />
      <div className="container1 flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-b from-green-800 to-blue-600">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Energia Hídrica
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-10">
          A energia hídrica é gerada pelo movimento da água, aproveitando rios e quedas d’água para produzir eletricidade de maneira limpa e renovável.
        </p>
        <Link href="/">
          <button className="bg-green-500 w-52 text-white rounded-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Voltar para Home
          </button>
        </Link>
      </div>

      {/* Benefícios da Energia Hídrica */}
      <div className="container2 bg-green-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-corTerciaria font-bold mb-8">
          Benefícios da Energia Hídrica
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Renovável</h3>
            <p>Fonte limpa e renovável que utiliza o ciclo natural da água.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Baixa Emissão</h3>
            <p>Contribui para a redução das emissões de gases de efeito estufa.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Alta Eficiência</h3>
            <p>Gera grandes quantidades de eletricidade de forma contínua e eficiente.</p>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container3 bg-blue-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-blue-900 font-bold mb-8">
          Como Funciona a Energia Hídrica
        </h2>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-center text-blue-900">
            A energia hídrica é gerada pela movimentação da água em usinas hidrelétricas, onde a força da água é convertida em energia elétrica por meio de turbinas e geradores.
          </p>
        </div>
      </div>

      {/* Tipos de Energia Hídrica */}
      <div className="container4 bg-gray-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-blue-900 font-bold mb-8">
          Tipos de Energia Hídrica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Usinas Hidrelétricas</h3>
            <p>Utilizam grandes reservatórios para controlar o fluxo da água.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Pequenas Centrais Hidrelétricas (PCHs)</h3>
            <p>Menores e com menor impacto ambiental.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Usinas de Energia de Ondas</h3>
            <p>Aproveitam o movimento das ondas em áreas costeiras.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
