"use client";

export default function ThirdSection() {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center">
      <div className="max-w-[1200px] md:min-w-[1200px] h-screen bg-cover bg-center md:bg-[url('/imgs/bg3.png')] bg-[url('/imgs/bg3.png')] flex flex-col justify-around items-center gap-10">
      <div>
        <h1 className="text-4xl font-michroma text-white text-center font-bold pb-10">
          Quer conhecer nosso museu?
        </h1>

        <p className="text-xl font-michroma text-white text-center font-bold">
          Temos um tour 3D interativo por todo nosso museu! Que tal experimentar?
        </p>
      </div>
        

        {/* Botão centralizado */}
        <a href="/tour">
        <button className="bg-purple-600 text-white px-12 py-6 rounded-xl text-2xl font-semibold hover:bg-purple-700 transition duration-300">
          Faça um tour!
        </button>
        </a>
      </div>
    </div>
  );
}
