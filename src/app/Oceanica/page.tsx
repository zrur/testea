import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";


export default function EnergiaOceanica() {
  return (
    <div>
      <Header />
      <div className="container1 flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gradient-to-b from-blue-900 to-blue-600">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Energia Oceânica
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-10">
          A energia oceânica é obtida a partir do movimento das ondas, das marés e das diferenças de temperatura no oceano, representando uma fonte renovável e sustentável.
        </p>
        <Link href="/">
          <button className="bg-teal-500 w-52 text-white rounded-md p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Voltar para Home
          </button>
        </Link>
      </div>

      {/* Benefícios da Energia Oceânica */}
      <div className="container2 bg-blue-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-corTerciaria font-bold mb-8">
          Benefícios da Energia Oceânica
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-teal-50">
            <h3 className="text-xl font-semibold mb-4 text-teal-900">Renovável</h3>
            <p>Energia constante e renovável, obtida do oceano.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-teal-50">
            <h3 className="text-xl font-semibold mb-4 text-teal-900">Redução de Emissões</h3>
            <p>Ajuda a diminuir as emissões de carbono e a poluição.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-teal-50">
            <h3 className="text-xl font-semibold mb-4 text-teal-900">Potencial Energético</h3>
            <p>Aproveita o imenso potencial de energia disponível nos oceanos.</p>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="container3 bg-teal-200 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-teal-900 font-bold mb-8">
          Como Funciona a Energia Oceânica
        </h2>
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl mx-auto transform transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
          <p className="text-lg md:text-xl text-center text-teal-900">
            A energia oceânica é captada pelo movimento das ondas e pelas marés, convertendo essa energia cinética em eletricidade.
          </p>
        </div>
      </div>

      {/* Tipos de Energia Oceânica */}
      <div className="container4 bg-blue-50 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-teal-900 font-bold mb-8">
          Tipos de Energia Oceânica
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-teal-50">
            <h3 className="text-xl font-semibold mb-4 text-teal-900">Energia das Ondas</h3>
            <p>Utiliza o movimento das ondas para gerar eletricidade.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-teal-50">
            <h3 className="text-xl font-semibold mb-4 text-teal-900">Energia das Marés</h3>
            <p>Explora a variação do nível das marés para produzir energia.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-teal-50">
            <h3 className="text-xl font-semibold mb-4 text-teal-900">Energia Térmica Oceânica</h3>
            <p>Utiliza a diferença de temperatura da água para gerar eletricidade.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
