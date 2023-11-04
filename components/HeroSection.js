import Modal from "@/components/Modal";
export default function HeroSection() {
  return (
    <main className="max-w-10xl relative">
      <div className="flex flex-col p-5 gap-4 text-2xl font-semibold sm:flex-row-reverse sm:items-center md:text-3xl lg:text-4xl mt-2 lg:mt-14 xl:text-5xl 2xl:text-7xl">
        <img src="Illustration.svg" alt="hero" className="sm:w-80 md:w-96 lg:w-1/2" />
       <div className="sm:ml-4">
       <h1 className="">
          Say goodbye to cumbersome paperwork and hello to seamless automation
          with NextDines
        </h1>
        <div className="flex items-center justify-start text-lg font-normal mt-2 ">
           <Modal buttonText="Try free demo" />
            <h1 className="font-normal text-slate-500">— Web, iOs and Android</h1>
        </div>
       
       </div>

      </div>
      <img src="Product.jpg" alt="hero" className="object-cover"/>
    </main>
  );
}

