"use client";
import Modal from "@/components/Modal";
import Link from "next/link";
const onclickhandler = () => {
  window.location.href = "/Downloads";
};
const navBar = () => {
  return (
    <main className="flex items-center justify-between w-screen p-4 text-sm sm:text-md md:text-xl max-w-10xl">
      <div className="flex items-center gap-1">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="47.834" height="47.834" rx="23.917" fill="#F95E07" />
          <path
            d="M36.4022 13.2292C34.3812 11.2082 29.9847 12.3278 27.711 14.6015C26.4855 15.8269 26.1269 17.1375 26.373 18.4019C26.6207 19.6742 26.596 21.1104 25.6513 21.9978L14.4877 32.4849C13.7137 33.212 13.6946 34.4351 14.4455 35.186C15.1963 35.9368 16.4195 35.9178 17.1465 35.1437L27.6336 23.9801C28.5211 23.0354 29.9573 23.0108 31.2295 23.2584C32.494 23.5045 33.8045 23.1459 35.03 21.9204C37.3036 19.6467 38.4233 15.2503 36.4022 13.2292Z"
            stroke="white"
            stroke-width="1.76716"
            stroke-linecap="round"
          />
          <path
            d="M15.0928 15.7792L19.2292 19.8895M16.8804 22.2532L21.5779 17.5259"
            stroke="white"
            stroke-width="1.76716"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0686 12.2389L22.0353 17.1747C22.9947 18.1282 23.5455 19.4177 23.5709 20.7702L23.5784 21.1741C23.5918 21.8848 23.8936 22.5596 24.4144 23.0433L34.5744 32.4803C35.3561 33.2065 35.3808 34.436 34.6287 35.1929C33.8767 35.9497 32.6473 35.933 31.9163 35.1559L22.414 25.0563C21.927 24.5387 21.2505 24.2414 20.5398 24.2325L20.1358 24.2274C18.7832 24.2107 17.4902 23.6681 16.5306 22.7145L11.564 17.7788"
            stroke="white"
            stroke-width="1.76716"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <Link href="/">NextDine</Link>
      </div>
      <div>
        <div className="flex items-center justify-center gap-2 text-orange-500 ">
          <Link href="/Downloads" className="hidden sm:inline-block">
            Downloads
          </Link>
          <button onClick={onclickhandler} className="">
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
          </button>
        </div>
      </div>
      <div>
        <Modal buttonText="Request a Demo" />
      </div>
    </main>
  );
};
export default navBar;
