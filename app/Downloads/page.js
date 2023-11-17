'use client'
export default function Home() {
    const onclickhandler=() =>{
        console.log("Haii")
        window.location.href= "https://nexterpv1.s3.ap-south-1.amazonaws.com/fayiz_np/NextDines.msix"
    }
  return (
    <main>
        <main className="max-w-10xl flex flex-col-reverse gap-4 items-center sm:flex-row xl:gap-48">
      <main className="max-w-10xl flex flex-col-reverse gap-4 mt-24 px-5 items-center sm:flex-row-reverse xl:gap-48">
        <div className="flex flex-col gap-3 max-w-xl">
          <h1 className="text-4xl font-bold xl:text-6xl">
            Your all in one Restaurant ERP
          </h1>
          <p className="text-sectext text-lg">
            Cloud-Based Restaurant ERP supports your business on any device.
            Experience the freedom and flexibility of managing your operations
            seamlessly, whether you're using a desktop, laptop, tablet, or
            mobile phone
          </p>
        </div>
        <div>
          <img src="2l.png" alt="automation" className="" />
        </div>
      </main>
    </main>
    <div className="flex flex-col flex-wrap items-center justify-center w-full m-auto mt-6 max-w-10xl">
    <main className="flex flex-col flex-wrap items-center justify-center w-full m-auto mt-6 max-w-13xl">
      <div className="">
        <h1 className="p-4 text-xl font-semibold text-accentv sm:text-2xl md:text-3xl sm:pb-10">
          Downloads
        </h1>
      </div>
      <main className="flex flex-row flex-wrap w-11/12 gap-4 sm:flex-row">
          <div className="flex-grow w-64  bg-[#F6F6F6] cursor-pointer" onClick={()=>onclickhandler()}>
            <div className="h-full pt-12 pl-6 pr-10 border rounded-md bg-bgcard border-bline">
              <div className="relative flex flex-col gap-2  items-center justify-center">
              
                <h1 className="text-lg font-semibold text-center">
                 iOS
                </h1>
                <div className=" text-orange-500 flex items-center justify-center gap-2 border border-orange-500 hover:bg-orange-100 w-48 p-3 rounded-full">
         <a href="/Downloads">Downloads</a>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#F95E07"
              stroke-width="1.5"
            />
            <path
              d="M12 16V8M12 16C11.2998 16 9.99153 14.0057 9.5 13.5M12 16C12.7002 16 14.0085 14.0057 14.5 13.5"
              stroke="#F95E07"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src="ios.png"></img>
              </div>
            </div>
          </div>
          <div className="flex-grow w-64  bg-[#F6F6F6] cursor-pointer" onClick={()=>onclickhandler()}>
            <div className="h-full pt-12 pl-6 pr-10 border rounded-md bg-bgcard border-bline">
              <div className="relative flex flex-col gap-2  items-center justify-center">
              
                <h1 className="text-lg font-semibold text-center">
                 Android
                </h1>
                <div className=" text-orange-500 flex items-center justify-center gap-2 border border-orange-500 hover:bg-orange-100 w-48 p-3 rounded-full">
         <a href="/Downloads">Downloads</a>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#F95E07"
              stroke-width="1.5"
            />
            <path
              d="M12 16V8M12 16C11.2998 16 9.99153 14.0057 9.5 13.5M12 16C12.7002 16 14.0085 14.0057 14.5 13.5"
              stroke="#F95E07"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src="and.png"></img>
              </div>
            </div>
          </div>
          <div className="flex-grow w-64  bg-[#F6F6F6] cursor-pointer"onClick={()=>onclickhandler()}>
            <div className="h-full pt-12 pl-6 pr-10 border rounded-md bg-bgcard border-bline">
              <div className="relative flex flex-col gap-2  items-center justify-center">
              
                <h1 className="text-lg font-semibold text-center">
                 Windows
                </h1>
                <div className=" text-orange-500 flex items-center justify-center gap-2 border border-orange-500 hover:bg-orange-100 w-48 p-3 rounded-full">
         <a href="/Downloads">Downloads</a>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="#F95E07"
              stroke-width="1.5"
            />
            <path
              d="M12 16V8M12 16C11.2998 16 9.99153 14.0057 9.5 13.5M12 16C12.7002 16 14.0085 14.0057 14.5 13.5"
              stroke="#F95E07"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src="des.png" className=""></img>
              </div>
            </div>
          </div>
      </main>
    </main>
    </div>
    </main>
  );
}
