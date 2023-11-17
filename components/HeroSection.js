import Modal from "@/components/Modal";
export default function HeroSection() {
  return (
    <main className="relative max-w-10xl">
      <div className="flex flex-col gap-4 p-5 mt-2 text-2xl font-semibold sm:flex-row-reverse sm:items-center md:text-3xl lg:text-4xl lg:mt-14 xl:text-5xl 2xl:text-7xl">
        <img
          src="Illustration.svg"
          alt="hero"
          className="sm:w-80 md:w-96 lg:w-1/2"
        />
        <div className="sm:ml-4">
          <h1 className="">
            Say goodbye to cumbersome paperwork and hello to seamless automation
            with NextDines
          </h1>
          <div className="flex flex-col items-start justify-start mt-2 text-lg font-normal sm:flex-row sm:items-center">
            <Modal buttonText="Try free demo" />
            <h1 className="font-normal text-center text-slate-500">—Web, iOs, Android & Windows  </h1>
          </div>
        </div>
      </div>
      <img src="Product.jpg" alt="hero" className="object-cover w-full" />
    </main>
  );
}
