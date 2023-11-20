'use client'
export default function Home() {
  const windowsapp = () => {
    window.location.href =
      "https://nexterpv1.s3.ap-south-1.amazonaws.com/fayiz_np/NextDines.exe";
  };
  const Android = () => {
    window.location.href =
      "https://nexterpv1.s3.ap-south-1.amazonaws.com/fayiz_np/NextDines.apk";
  };
  const ios = () => {
    window.location.href =
      "https://www.apple.com/in/app-store/";
  };
  const web = () => {
    window.location.href =
      "http://www.doner.nextdines.com";
  };
  return (
    <main>
      <main className="flex flex-col-reverse items-center gap-4 max-w-10xl sm:flex-row xl:gap-48">
        <main className="flex flex-col-reverse items-center gap-4 px-5 mt-24 max-w-10xl sm:flex-row-reverse xl:gap-48">
          <div className="flex flex-col max-w-xl gap-3">
            <h1 className="text-4xl font-bold xl:text-6xl">
              Your all in one Restaurant ERP
            </h1>
            <p className="text-lg text-sectext">
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
            <div
              className="flex-grow w-64  bg-[#F6F6F6] cursor-pointer"
              onClick={() => ios()}
            >
              <div className="h-full pt-12 pl-6 pr-10 border rounded-md bg-bgcard border-bline">
                <div className="relative flex flex-col items-center justify-center gap-2">
                  <h1 className="text-lg font-semibold text-center">iOS</h1>
                  <div className="flex items-center justify-center w-48 gap-2 p-3 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-100">
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
            <div
              className="flex-grow w-64  bg-[#F6F6F6] cursor-pointer"
              onClick={() => Android()}
            >
              <div className="h-full pt-12 pl-6 pr-10 border rounded-md bg-bgcard border-bline">
                <div className="relative flex flex-col items-center justify-center gap-2">
                  <h1 className="text-lg font-semibold text-center">Android</h1>
                  <div className="flex items-center justify-center w-48 gap-2 p-3 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-100">
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
            <div
              className="flex-grow w-64  bg-[#F6F6F6] cursor-pointer"
              onClick={() => windowsapp()}
            >
              <div className="h-full pt-12 pl-6 pr-10 border rounded-md bg-bgcard border-bline">
                <div className="relative flex flex-col items-center justify-center gap-2">
                  <h1 className="text-lg font-semibold text-center">Windows</h1>
                  <div className="flex items-center justify-center w-48 gap-2 p-3 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-100">
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
      <div className="flex items-center justify-center w-full bg-[#F6F6F6] rounded-lg mt-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center ">
            <div className="p-2 m-2 bg-orange-200 rounded-full " onClick={()=> web()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M3.75 18C3.75 11.2825 3.75 7.92373 5.83686 5.83686C7.92373 3.75 11.2825 3.75 18 3.75C24.7175 3.75 28.0763 3.75 30.1632 5.83686C32.25 7.92373 32.25 11.2825 32.25 18C32.25 24.7175 32.25 28.0763 30.1632 30.1632C28.0763 32.25 24.7175 32.25 18 32.25C11.2825 32.25 7.92373 32.25 5.83686 30.1632C3.75 28.0763 3.75 24.7175 3.75 18Z"
                  stroke="#F95E07"
                  stroke-width="2.25"
                />
                <path
                  d="M3.75 13.5H32.25"
                  stroke="#F95E07"
                  stroke-width="2.25"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 19.5H25.5"
                  stroke="#F95E07"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 25.5H22.5"
                  stroke="#F95E07"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4996 9H10.5131"
                  stroke="#F95E07"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4996 9H16.5131"
                  stroke="#F95E07"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 13.5V32.25"
                  stroke="#F95E07"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <a>Access our web version</a>
          </div>
          <div className="flex items-center ">
            <div className="p-2 m-2 bg-orange-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M11.625 23.25L18.4617 16.4133C18.8922 15.9828 19.1075 15.7675 19.1075 15.5C19.1075 15.2325 18.8922 15.0172 18.4617 14.5867L11.625 7.75"
                  stroke="#F95E07"
                  stroke-width="1.9375"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
