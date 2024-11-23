import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function EnergiaDaProsperidade() {
  return (
    <div>
      <Header />
      <main className="bg-gradient-radial p-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-blue-700">A Energia da Prosperidade</h1>
          <p className="text-xl text-gray-700 mt-4">
            Descubra como transformar energia em resultados reais. 
            Adote práticas que promovem prosperidade e bem-estar em todas as áreas da sua vida.
          </p>
        </section>

        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700">O Que é a Energia da Prosperidade?</h2>
          <p className="text-lg text-gray-700 mt-4">
            Prosperidade é mais do que finanças, envolve equilíbrio, saúde e escolhas conscientes que geram sucesso duradouro.
            O uso de energias renováveis é parte essencial desse ciclo.
          </p>
        </section>

        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700">Como Aplicar na Prática?</h2>
          <ul className="list-disc text-lg text-gray-700 mt-4 pl-6">
            <li>Invista em fontes de energia renovável como solar e eólica.</li>
            <li>Pratique meditação e mindfulness para equilíbrio mental e físico.</li>
            <li>Mantenha uma atitude positiva e focada nos seus objetivos.</li>
          </ul>
        </section>

        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700">Práticas Diárias para Canalizar a Energia da Prosperidade</h2>
          <p className="text-lg text-gray-700 mt-4">
            Para manifestar a prosperidade em sua vida, é essencial incorporar práticas diárias que ajudem a manter sua mente e energia alinhadas com seus objetivos. Ao adotar esses hábitos, você se torna mais receptivo às oportunidades e mais eficaz em sua busca por equilíbrio e sucesso.
          </p>
          <ul className="list-disc text-lg text-gray-700 mt-4 pl-6">
            <li><strong>Meditação e Mindfulness:</strong> Tire ao menos 10 minutos por dia para praticar mindfulness. Isso ajuda a clarear a mente e a diminuir o estresse.</li>
            <li><strong>Gratidão:</strong> Comece o dia expressando gratidão pelas coisas boas em sua vida. Isso atrai mais energia positiva e prosperidade.</li>
            <li><strong>Defina Intenções:</strong> Ao iniciar o dia, defina intenções claras para o que deseja alcançar. Isso ajuda a direcionar suas ações para o sucesso.</li>
          </ul>
        </section>

        <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-700">Histórias de Transformação Através da Energia da Prosperidade</h2>
          <p className="text-lg text-gray-700 mt-4">
            Ao longo da história, muitas pessoas transformaram suas vidas ao alinhar-se com a energia da prosperidade. Estas histórias são um exemplo poderoso de como aplicar os princípios de equilíbrio e práticas conscientes pode gerar mudanças significativas.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Seja no âmbito financeiro, nas relações pessoais ou na saúde, é possível ver como a aplicação prática dessas energias pode levar a um sucesso duradouro e sustentável. Estes exemplos inspiram e mostram que a prosperidade está ao alcance de todos.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
