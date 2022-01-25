import React from "react";

function LeftNav() {
  return (
    <>
      <div className="container bg-gray-400 p-2 my-6 text-gray-600 rounded-md shadow-xl">
        <h3>Welcome, Bala</h3>
        <p></p>
      </div>
      <a
        href="/"
        className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
      >
        <i className="fas fa-home" />
        <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
          Dashboard
        </span>
      </a>
      <a
        href="/"
        className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
      >
        <i className="fas fa-ticket-alt" />
        <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
          Your Favourities
        </span>
      </a>
      <a
        href="/"
        className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
      >
        <i className="fas fa-ticket-alt" />
        <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
          Recently Added
        </span>
      </a>
      <a
        href="/"
        className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
      >
        <i className="fas fa-chart-area" />
        <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
          Exit
        </span>
      </a>
    </>
  );
}
export default LeftNav;
