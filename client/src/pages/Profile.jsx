import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ethers } from "ethers";

function Profile() {
  const [data, setdata] = useState({
    Balance: null
  });
  const[data1,setdata1]=useState({
    address: "",
  })

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
          Balance: balance,
        });
        console.log(balance)
      });
  };

  const accountChangeHandler = (account) => {
    setdata1((prevState) => ({
      ...prevState,
      address: account,
    }));
    console.log(account)

    getbalance(account);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-20'>
        <h1 >
        {data1.address}
        </h1>
        <h1 >
        {data.Balance} {/* Use 'Balance' instead of 'balance' */}
        </h1>
        <button
                        onClick={btnhandler}
                        variant="primary"
                    >
                        Connect to wallet
                    </button>
      </div>
    </div>
  )
}

export default Profile