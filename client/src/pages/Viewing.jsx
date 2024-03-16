import React from "react";
import Navbar from "../components/Navbar";

function Card(props) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.heading}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.sub}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Viewing() {
  return (
    <div className="h-full w-screen bg-gradient-to-r from-purple-600 via-purple-400 to-purple-200">
      <Navbar />
      <div className="pt-20">
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for papers,articles..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex  flex-wrap">
          <Card
            heading="The Power of Movies"
            sub="To speak of movies rather than film or cinema deliberately eschews
        essentialism. Posing the problem in an essentialist idiom..."
          />
          <Card
            heading="The Biology of Pseudocalanus"
            sub="Pseudocalanus is typical of most crustaceans in that after hatching at an early stage of development it adds successively new..."
          />
          <Card
            heading="A Faulkner Filmography"
            sub="Film Quarterly, published since 1958, provides readers with insightful analyses of film, the film industry, and international cinemas..."
          />
          <Card
            heading="Alexa, Siri, Cortana, and More: An Introduction to Voice Assistants"
            sub="Voice assistants are software agents that can interpret human speech and respond via synthesized voices. Apple’s..."
          />
          <Card heading='A Statistical Study of Ship Domains' sub='A ship domain may be thought of as the sea around his ship which the navigator would like to keep free, with respect to other ships...'/>
          <Card heading='An Ethereum-based Voting System using IPFS and MetaMask' sub='EASY E-VOTE is a student government election voting system that utilized Ethereum blockchain, IPFS (Interplanetary File System), and MetaMask...'/>
          <Card heading='Survey of clustering algorithms' sub='Data analysis plays an indispensable role for understanding various phenomena. Cluster analysis, primitive exploration with little or no prior...'/>
          <Card heading='ITS and Traffic Management' sub='This chapter discusses traffic flow modeling advancements, the issue of route guidance, and information systems. The specific road...'/>
        <div className="w-screen flex justify-center">
        <a
          href="#"
          className="w-[500px] flex justify-center mb-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Viewing;
