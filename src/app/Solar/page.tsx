import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from 'next/link';

export default function EnergiaSolar() {
  return (
    <div>
      <Header />
      <div className="container1 flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-b from-yellow-500 to-orange-500">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Energia Solar
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-10">
          A energia solar é gerada pela luz e calor do sol, sendo uma fonte de energia limpa, renovável e abundante. Com o uso de tecnologias como painéis solares, é possível converter a energia solar em eletricidade para diversos usos.
        </p>

        <Link href="/">
          <button className="bg-orange-700 w-52 text-white rounded-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Voltar para Home
          </button>
        </Link>
      </div>

      {/* Benefícios da Energia Solar */}
      <div className="container2 bg-gray-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-corTerciaria font-bold mb-8">
          Benefícios da Energia Solar
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Fonte Renovável</h3>
            <p>A energia solar é infinita, aproveitando a luz do sol que é abundante e renovável.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Sustentável</h3>
            <p>Ajuda a reduzir a emissão de gases de efeito estufa, promovendo um ambiente mais limpo.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Redução de Custos</h3>
            <p>Após a instalação, a energia solar pode ajudar a reduzir custos com eletricidade.</p>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container3 bg-yellow-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-orange-700 font-bold mb-8">
          Como Funciona a Energia Solar
        </h2>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
          <p className="text-lg md:text-xl text-center text-orange-700">
            A energia solar funciona por meio de painéis solares que captam a luz solar e a convertem em eletricidade através do efeito fotovoltaico. Essa eletricidade pode ser utilizada diretamente ou armazenada em baterias para uso posterior.
          </p>
        </div>
      </div>

      {/* Tipos de Tecnologias Solares */}
      <div className="container4 bg-yellow-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-orange-700 font-bold mb-8">
          Tipos de Tecnologias Solares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Painéis Fotovoltaicos</h3>
            <p>Convertendo luz solar diretamente em eletricidade por meio de células fotovoltaicas.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Energia Solar Térmica</h3>
            <p>Usa o calor do sol para aquecer água ou outros fluidos, para uso residencial ou industrial.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-100">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Concentradores Solares</h3>
            <p>Concentram luz solar para gerar calor que aciona turbinas para produção de eletricidade.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
