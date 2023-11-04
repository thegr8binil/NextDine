const Cards = () => {
  return (
    <main className="mt-11 flex flex-col items-center justify-center w-full max-w-9xl m-auto flex-wrap">
      <main className="flex flex-row gap-4 w-11/12 sm:flex-row flex-wrap">
        <div className="w-64 flex-grow drop-shadow-xl">
          <div className="bg-white border  pt-12 pb-10 pl-6 pr-10 rounded-md h-full">
            <div className="flex flex-col gap-2 relative pt-28 ">
              <img src="i1.png" alt="icon" className="w-20" />
              <h1 className="font-semibold text-lg">Cross platform</h1>
              <p className="text-primarytext text-sm">
                Our Cloud-Based Restaurant ERP Works Across All Devices
              </p>
            </div>
          </div>
        </div>
        <div className="w-64 flex-grow drop-shadow-xl">
          <div className="bg-white border pt-12 pb-10 pl-6 pr-10 rounded-md h-full">
            <div className="flex flex-col gap-2 relative pt-28 ">
              <img src="i2.png" alt="icon" className="w-20" />
              <h1 className="font-semibold text-lg">Cloud server</h1>
              <p className="text-primarytext text-sm">
                Manage your restaurant operations on the fly with our
                Cloud-Based Restaurant ERP's mobile compatibility
              </p>
            </div>
          </div>
        </div>
        <div className="w-64 flex-grow drop-shadow-xl">
          <div className="bg-white border pt-12 pb-10 pl-6 pr-10 rounded-md h-full">
            <div className="flex flex-col gap-2 relative pt-28 ">
              <img src="i3.png" alt="icon" className="w-20" />
              <h1 className="font-semibold text-lg">Device Compatibility</h1>
              <p className="text-primarytext text-sm">
                Manage your restaurant's operations with ease, whether you're at
                your desk, on the go, or using a tablet
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};
export default Cards;

