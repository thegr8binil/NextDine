export default function HeroSection() {
  return (
    <main className="max-w-10xl">
      <div className="flex flex-col p-5 gap-4 text-2xl font-semibold sm:flex-row-reverse sm:items-center md:text-3xl lg:text-5xl">
        <img src="Illustration.svg" alt="hero" className="sm:w-80 md:w-96 lg:w-auto" />
       <div className="sm:ml-4">
       <h1>
          Say goodbye to cumbersome paperwork and hello to seamless automation
          with NextDines
        </h1>
        <div className="flex items-center justify-start text-sm mt-2 ">
            <button className="bg-orange-500 text-white rounded-lg px-4 py-2 text-lg font-normal">
            Get Started
            </button>
            <h1 className="font-normal text-slate-500">— Web, iOs and Android</h1>
        </div>
       </div>
      </div>
    </main>
  );
}
