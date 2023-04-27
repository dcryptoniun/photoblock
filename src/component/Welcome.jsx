import { Web3Button } from "@web3modal/react";
import logo from "../assets/photobloc_klogo.svg";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-10 md:py-20">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-t from-teal-500 to-fuchsia-500 bg-clip-text hover:bg-gradient-to-b">
                Photo Block
              </h1>
              <h1 className="text-3xl font-bold ">
                Store your photos securely and privately
              </h1>
              <p className="mt-4 leading-6 ">
                Our decentralized photo storage/gallery website uses the power
                of blockchain to keep your photos safe and secure, while also
                allowing you to share them with friends and family.
              </p>
              <div className="mt-8">
                <Web3Button icon="hide" />
              </div>
            </div>
            <div className="hidden shadow-xl shadow-slate-400 md:block md:w-4/12 ">
              <img
                width={120}
                src={logo}
                alt="Decentralized photo storage/gallery website"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
