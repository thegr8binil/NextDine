const footer = () => {
  return (
    <div
      className="bg-cover bg-center max-w-9xl mt-8 flex items-center justify-center"
      style={{
        backgroundImage: `url("t.png")`,
      }}
    >
      <div className="w-screen flex items-center mt-12 justify-center flex-col gap-4">
        <h1 className="text-2xl text-white font-semibold">Want to Try it? </h1>
        <h1 className="text-2xl text-white font-semibold">Try our 
7 days free demo</h1>
        <p className="text-white">Try demo for 7 days with full features.</p>
        <button className="text-orange-500 bg-white p-3 rounded-lg">
          <h1>Try free demo</h1>
          </button>
      </div>
    </div>
  );
};
export default footer;
