import React from "react";
import { NavLink } from "react-router-dom";
import orangeStore from "../assets/img/orangeStore.png";

function Sidebar({ navMenu, isSidebarHidden, setIsSidebarHidden }) {
  return (
    <div
      className={`navbar-menu relative z-50 ${isSidebarHidden ? "hidden" : ""}`}
    >
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <img src={orangeStore} className="h-16 w-auto" alt="orangeStore" />
          </a>
          <button
            onClick={() => setIsSidebarHidden(true)}
            className="navbar-close cursor-pointer"
          >
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            {navMenu.map((menu) => (
              <li key={menu.route} className="mb-1">
                <NavLink className="block p-4 text-sm font-semibold text-gray-400 hover:bg-orange-50 hover:text-orange-600 rounded">
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <a
              className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
              href="#"
            >
              Sign in
            </a>
            <a
              className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-orange-600 hover:bg-orange-700  rounded-xl"
              href="#"
            >
              Sign Up
            </a>
          </div>
          <p className="my-4 text-xs text-center text-gray-400">
            <span>Stepbro Inc.</span>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
