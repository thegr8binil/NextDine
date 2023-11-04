"use client";
import React, { useState } from "react";

function Modal({ buttonText }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log("HELOOOO")
    const formData = {
      name,
      companyName,
      email,
      mobileNo,
    };

    try {
      const response = await fetch('https://ajcjewel.com:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("sucess")
      } else {
        console.log("failed")
      }
    } catch (error) {
      console.log("try again",error)
    }
  };
  

  return (
    <main>
      <button
        onClick={toggleModal}
        className="bg-white text-orange-500 rounded-lg px-2 py-2 border border-orange-500 hover:bg-orange-500 hover:text-white"
        type="button"
      >
        {buttonText}
      </button>
      {isModalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)] "
        >
          <div className="relative w-full h-full max-h-full flex items-center justify-center">
            <div className="relative bg-slate-300 rounded-lg shadow w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
              <button
                onClick={toggleModal}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  NextDine Demo
                </h3>
                <form className="space-y-6" action="submit" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Eg.Jhon Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cname"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your Company Name
                    </label>
                    <input
                      type="text"
                      name="cname"
                      id="cname"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Eg.Nexteons"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Eg.name@gamil.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Mobile No"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your Mobile No
                    </label>
                    <input
                      type="number"
                      name="Mobile No"
                      id="Mobile No"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-300-500 focus:border-orange-400-500 block w-full p-2.5"
                      placeholder="+91123923488"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Get Our Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Modal;
