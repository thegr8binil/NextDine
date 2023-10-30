const navBar = () => {
  return (
    <main className="p-4 flex items-center justify-between text-sm sm:text-md md:text-xl">
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="33"
          viewBox="0 0 34 33"
          fill="none"
        >
          <g clip-path="url(#clip0_1_225)">
            <path
              d="M31.625 32.9995H2.2717C1.01712 32.9995 0 31.9824 0 30.7278V2.27268C0 1.0181 1.01712 0.000976562 2.2717 0.000976562H31.625C32.8796 0.000976562 33.8967 1.0181 33.8967 2.27268V30.7278C33.8967 31.9824 32.8796 32.9995 31.625 32.9995Z"
              fill="#F95E07"
            />
            <path
              d="M14.6182 14.9163H11.6019C10.1131 14.9163 8.90192 13.8411 8.90192 12.5196V7.3804C8.90192 7.13197 9.10322 6.93066 9.35165 6.93066C9.60009 6.93066 9.80139 7.13197 9.80139 7.3804V12.5196C9.80139 13.3451 10.6091 14.0169 11.6019 14.0169H14.6182C15.6111 14.0169 16.4188 13.3451 16.4188 12.5196V7.3804C16.4188 7.13197 16.6201 6.93066 16.8685 6.93066C17.117 6.93066 17.3183 7.13197 17.3183 7.3804V12.5196C17.3183 13.8411 16.107 14.9163 14.6182 14.9163Z"
              fill="white"
            />
            <path
              d="M13.1101 27.1662C12.8617 27.1662 12.6604 26.9649 12.6604 26.7165V14.4666C12.6604 14.2181 12.8617 14.0168 13.1101 14.0168C13.3586 14.0168 13.5599 14.2181 13.5599 14.4666V26.7163C13.5599 26.9647 13.3584 27.1662 13.1101 27.1662Z"
              fill="white"
            />
            <path
              d="M13.1101 12.7767C12.8617 12.7767 12.6604 12.5754 12.6604 12.3269V7.3804C12.6604 7.13197 12.8617 6.93066 13.1101 6.93066C13.3586 6.93066 13.5599 7.13197 13.5599 7.3804V12.3269C13.5599 12.5754 13.3584 12.7767 13.1101 12.7767Z"
              fill="white"
            />
            <path
              d="M21.1969 27.1663C20.9485 27.1663 20.7472 26.965 20.7472 26.7165V7.74149C20.7472 7.32665 21.0368 6.97892 21.4677 6.8762C21.9246 6.76736 22.383 6.96632 22.5821 7.36047C24.0677 10.2999 24.8725 13.3999 25.2861 15.4829C25.5363 16.7436 25.0414 18.0045 23.9623 18.8555C23.7673 19.0093 23.4845 18.9759 23.3307 18.7809C23.1768 18.5859 23.2103 18.3031 23.4053 18.1493C24.2138 17.5117 24.587 16.5804 24.4039 15.6581C24.0013 13.6303 23.2191 10.6149 21.7794 7.76631C21.7753 7.75804 21.7629 7.7521 21.7425 7.74868C21.7044 7.74239 21.6666 7.75174 21.6467 7.76164V26.7165C21.6467 26.9648 21.4452 27.1663 21.1969 27.1663Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_225">
              <rect width="33.8967" height="33" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1>NextDine</h1>
      </div>
      <div>
        <button className="bg-white text-orange-500 rounded-lg px-4 py-2 border border-orange-500">
        Request a Demo
        </button>
      </div>
    </main>
  );
};
export default navBar;
