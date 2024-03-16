import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ethers } from "ethers";

function Profile() {
  const [data, setData] = useState({
    Balance: null,
  });
  const [data1, setData1] = useState({
    address: "",
  });

  const btnHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]))
        .catch((error) => console.error(error));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setData({
          Balance: "0." + balance.slice(2, 3) + " ETH",
        });
        console.log(balance);
      });
  };

  const accountChangeHandler = (account) => {
    setData1((prevState) => ({
      ...prevState,
      address: account,
    }));
    console.log(account);

    getBalance(account);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-400 to-purple-200 min-h-screen">
      <Navbar />

      <div className="flex pt-32 flex-col md:flex-row justify-center items-center gap-8 p-8">
        <div className="p-8 bg-white shadow mt-24 md:mt-0 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400">Paper views</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">10</p>
                <p className="text-gray-400">Papers published</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Connect
              </button>
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Message
              </button>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              Bhuvan Sambari, <span className="font-light text-gray-500">18</span>
            </h1>
            <p className="font-light text-gray-600 mt-3">India, Chennai</p>
            <p className="mt-8 text-gray-500">Research scholar</p>
            <p className="mt-2 text-gray-500">University of Computer Science</p>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
            </p>
          </div>
        </div>
        <div className="mb-10 mx-auto max-w-lg p-8 bg-white shadow-md rounded-md">
          <h1 className="text-xl font-semibold mb-4">Wallet Address: {data1.address}</h1>
          <h1 className="text-lg font-semibold mb-4">Wallet Balance: {data.Balance}</h1>
          <button
            onClick={btnHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Connect to Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
