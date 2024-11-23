import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function EnergiaBiomassa() {
  return (
    <div>
      <Header />
      <div className="container1 flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-b from-green-400 to-green-800">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Energia de Biomassa
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-10">
          A biomassa é uma fonte de energia renovável derivada de materiais orgânicos, como resíduos agrícolas e florestais, que são convertidos em energia térmica ou elétrica.
        </p>
        <Link href="/">
          <button className="bg-yellow-500 w-52 text-white rounded-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Voltar para Home
          </button>
        </Link>
      </div>

      {/* Benefícios da Energia de Biomassa */}
      <div className="container2 bg-green-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-corTerciaria font-bold mb-8">
          Benefícios da Energia de Biomassa
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-green-50">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Renovável</h3>
            <p>A biomassa utiliza materiais que podem ser produzidos ou renovados continuamente.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-green-50">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Redução de Resíduos</h3>
            <p>Ajuda a reduzir o desperdício ao converter resíduos em energia.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-green-50">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Baixa Emissão de Gases</h3>
            <p>Emite menos poluentes em comparação com combustíveis fósseis.</p>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container3 bg-yellow-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-green-900 font-bold mb-8">
          Como Funciona a Energia de Biomassa
        </h2>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-center text-green-900">
            A biomassa é queimada ou transformada em biocombustíveis para gerar calor, eletricidade ou até gás, usando materiais como madeira, restos de comida e resíduos agrícolas.
          </p>
        </div>
      </div>

      {/* Tipos de Biomassa */}
      <div className="container4 bg-gray-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-green-900 font-bold mb-8">
          Tipos de Biomassa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-green-50">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Biomassa Florestal</h3>
            <p>Madeira e resíduos florestais utilizados para gerar calor ou eletricidade.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-green-50">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Resíduos Orgânicos</h3>
            <p>Restos de alimentos e outros resíduos biológicos usados para produzir energia.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-green-50">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Biocombustíveis</h3>
            <p>Combustíveis líquidos derivados de biomassa, como etanol e biodiesel.</p>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}
