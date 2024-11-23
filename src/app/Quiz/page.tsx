'use client';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { useState } from "react";

export default function Quiz() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const questions = [
    {
      question: "A energia solar é uma fonte renovável que não prejudica o meio ambiente.",
      correctAnswer: "Certo",
    },
    {
      question: "A energia eólica pode ser gerada apenas em áreas costeiras, devido ao vento constante.",
      correctAnswer: "Errado",
    },
    {
      question: "Práticas como a meditação ajudam a equilibrar a energia pessoal, promovendo saúde e bem-estar.",
      correctAnswer: "Certo",
    },
    {
      question: "Usar fontes de energia renováveis contribui para a redução das emissões de carbono.",
      correctAnswer: "Certo",
    },
    {
      question: "A prosperidade só pode ser alcançada através do sucesso financeiro, sem considerar aspectos como equilíbrio mental e saúde.",
      correctAnswer: "Errado",
    },
  ];

  const handleAnswer = (question: string, answer: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
  };

  return (
    <div>
      <Header/>
      <div className="p-8 bg-gray-100 rounded-lg shadow-md max-w-xl mx-auto mt-5 mb-5">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Quiz sobre Energias</h1>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg text-gray-800">{item.question}</p>
              <div className="flex space-x-4 mt-4">
                <button
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={() => handleAnswer(item.question, "Certo")}
                >
                  Certo
                </button>
                <button
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => handleAnswer(item.question, "Errado")}
                >
                  Errado
                </button>
              </div>
              {answers[item.question] && (
                <p className="mt-2 text-sm text-gray-600">
                  Você respondeu: {answers[item.question]}{" "}
                  {answers[item.question] === item.correctAnswer ? (
                    <span className="text-green-600 font-semibold">Correto!</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Errado!</span>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
