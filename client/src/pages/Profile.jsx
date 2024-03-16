import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ethers } from "ethers";

function Profile() {
  const [data, setdata] = useState({
    Balance: null,
  });
  const [data1, setdata1] = useState({
    address: "",
  });

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]))
        .catch((error) => console.error(error));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setdata({
          Balance: "0." + balance.slice(2, 3),
        });
        console.log(balance);
      });
  };

  const accountChangeHandler = (account) => {
    setdata1((prevState) => ({
      ...prevState,
      address: account,
    }));
    console.log(account);

    getbalance(account);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
  <Navbar />
  <div className="mt-20 mx-auto max-w-lg p-8 bg-white shadow-md rounded-md">
    <h1 className="text-2xl font-bold mb-4">Wallet Address: {data1.address}</h1>
    <h1 className="text-lg font-semibold mb-4">Wallet Balance: {data.Balance}</h1>
    <button onClick={btnhandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Connect to Wallet
    </button>
  </div>
</div>

  );
}

export default Profile;
