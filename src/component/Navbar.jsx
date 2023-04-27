import { Web3Button } from "@web3modal/react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import logo from "../assets/photobloc_klogo.svg";
import github from "../assets/github.svg";
import confi from "../contract/Config.json";

export default function Navbar() {
  const scanlink = confi.SCAN_LINK;
  return (
    <div className="sticky top-0 flex items-center justify-between w-full h-auto p-2 bg-transparent backdrop-blur">
      <div>
        <Link to="/" className="flex scale-150 animate-bounce">
          <img src={logo} width={40} />
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-center gap-6">
          <Link to="/" className="text-teal-500 hover:text-fuchsia-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <Link to="https://github.com/dcryptoniun/photoblock" target="blank">
            <img
              className="bg-teal-500 rounded-full hover:bg-fuchsia-500"
              src={github}
              width={20}
              alt="github link"
            />
          </Link>
          <Link
            to={scanlink}
            target="blank"
            className="text-teal-500 hover:text-fuchsia-500"
          >
            Explorer
          </Link>
          <Link to="/settings">
            <Profile />
          </Link>

          <Web3Button icon="hide" />
        </div>
      </div>
    </div>
  );
}
