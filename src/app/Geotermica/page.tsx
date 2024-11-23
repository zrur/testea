import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function EnergiaGeotermica() {
  return (
    <div>
      <Header />
      <div className="container1 flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-b from-orange-800 to-red-600">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Energia Geotérmica
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-10">
          A energia geotérmica é obtida a partir do calor interno da Terra, sendo uma fonte renovável e com baixo impacto ambiental.
        </p>
        <Link href="/">
          <button className="bg-yellow-500 w-52 text-white rounded-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Voltar para Home
          </button>
        </Link>
      </div>

      {/* Benefícios da Energia Geotérmica */}
      <div className="container2 bg-yellow-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-corTerciaria font-bold mb-8">
          Benefícios da Energia Geotérmica
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-orange-50">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Renovável</h3>
            <p>Fonte inesgotável que utiliza o calor natural da Terra.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-orange-50">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Baixa Emissão</h3>
            <p>Gera eletricidade com pouca ou nenhuma emissão de gases poluentes.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-orange-50">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Estável</h3>
            <p>Fornecimento constante e previsível ao longo do ano.</p>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container3 bg-orange-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-orange-900 font-bold mb-8">
          Como Funciona a Energia Geotérmica
        </h2>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-center text-orange-900">
            A energia geotérmica é produzida a partir do calor interno da Terra. Esse calor é captado por meio de reservatórios de água quente e vapor, que acionam turbinas para gerar eletricidade.
          </p>
        </div>
      </div>

      {/* Tipos de Energia Geotérmica */}
      <div className="container4 bg-gray-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-orange-900 font-bold mb-8">
          Tipos de Energia Geotérmica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-orange-50">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Usinas de Vapor Seco</h3>
            <p>Usam vapor natural para acionar turbinas e gerar eletricidade.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-orange-50">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Usinas Flash</h3>
            <p>Usam água quente de reservatórios subterrâneos para produzir vapor.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-orange-50">
            <h3 className="text-xl font-semibold mb-4 text-orange-900">Usinas de Ciclo Binário</h3>
            <p>Usam líquidos de baixa temperatura para gerar eletricidade.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
