import React,{useState}  from 'react'
import Navbar from '../components/Navbar'
import { ethers } from "ethers";


function Profile() {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
});
const btnhandler = () => {
  if (window.ethereum) {
      window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((res) => accountChangeHandler(res[0]))
          .catch((error) => console.error(error)); // Add error handling here
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
              Balance: ethers.utils.formatEther(balance),
          });
      })
      .catch((error) => console.error(error)); // Add error handling here
};

const accountChangeHandler = (account) => {
  setdata({
      address: account,
  });

  getbalance(account);
};
  return (
    <div>
      <Navbar></Navbar>
      <div className='mt-20'>
        <h1 className='text-red-500'>
        {data.address}
        </h1>
        <h1 className='text-red-600'>
        {data.balance}
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
