import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import arthur from "../../img/arthur.jpeg";
import luiz from "../../img/luiz.jpeg";
import murilo from "../../img/murilo.jpeg";

export default function Integrantes() {
  return (
    <div>
      <Header />
      <div
        className="container1 flex flex-col items-center justify-center min-h-screen text-center p-4"
        style={{ backgroundColor: "rgba(20, 199, 210, 255)" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Conheça os Integrantes
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mb-10">
          Nosso time é formado por profissionais apaixonados e dedicados ao
          sucesso de cada projeto.
        </p>
      </div>

      {/* Integrantes do Time */}
      <div className="container2 bg-gray-100 py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-blue-800 font-bold mb-8">
          Nossos Integrantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Integrante 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <div className="mb-4">
              <Image
                src={arthur}
                alt="Arthur Ramos"
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              Arthur Ramos Dos Santos
            </h3>
            <p className="text-sm text-blue-700">RM558798 - TSDPW</p>
            <div className="mt-2 text-gray-600">
              <Link
                href="https://www.linkedin.com/in/arthur-ramos-dos-santos-689a30230/"
                target="_self"
              >
                Linkedin
              </Link>
            </div>
            <div className="mt-2 text-gray-600">
              <Link rel="stylesheet" href="https://github.com/zrur">
                Github
              </Link>
            </div>
          </div>

          {/* Integrante 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <div className="mb-4">
              <Image
                src={luiz}
                alt="Luiz Eduardo"
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              Luiz Eduardo
            </h3>
            <p className="text-sm text-blue-700">RM555213 - TSDPM</p>
            <div className="mt-2 text-gray-600">
              <Link
                href="https://www.linkedin.com/in/luiz-eduardo-da-silva-pinto-b2a190302/"
                target="_self"
              >
                Linkedin
              </Link>
            </div>
            <div className="mt-2 text-gray-600">
              <Link rel="stylesheet" href="https://github.com/Lu1zEdu">
                Github
              </Link>
            </div>
          </div>

          {/* Integrante 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-50">
            <div className="mb-4">
              <Image
                src={murilo}
                alt="Murillo Sant'Anna"
                className="w-32 h-32 rounded-full mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">
              Murillo Sant'Anna
            </h3>
            <p className="text-sm text-blue-700">RM557183 - TDSPM</p>
            <div className="mt-2 text-gray-600">Não Possui Ainda</div>
            <div className="mt-2 text-gray-600">
              <Link rel="stylesheet" href="https://github.com/Murillo77">
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}