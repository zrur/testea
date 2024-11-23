import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Sobre Nós</h3>
            <p className="text-gray-400 text-sm mt-2">
              Somos uma equipe dedicada a trazer soluções inovadoras e práticas. Nossa missão é facilitar o acesso à informação e capacitar nossos clientes.
            </p>
            <Link href="/About" className="text-blue-400 mt-2 inline-block hover:text-blue-300">Saiba Mais</Link>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <Link href="/Quiz" className="hover:text-gray-400">Quiz</Link>
            <Link href="/About" className="hover:text-gray-400">Sobre Nós</Link>
            <Link href="/Saiba" className="hover:text-gray-400">Energia da Prosperidade</Link>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Energy of Dream. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
