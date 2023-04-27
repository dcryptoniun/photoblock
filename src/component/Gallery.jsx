import confi from "../contract/Config.json";
import Abi from "../contract/Abi.json";
import { useAccount, useContractRead } from "wagmi";

const GATEWAY_URL = "https://gateway.ipfs.io/ipfs/";

const Gallery = () => {
  const { address } = useAccount();
  const contractAddress = confi.CONTRACT_ADDRESS;

  const handleReload = () => {
    location.reload();
  };

  const { data: cids } = useContractRead({
    address: contractAddress,
    abi: Abi,
    functionName: "getCIDs",
    watch: true,
    overrides: { from: address },
  });

  return (
    <div className="w-full h-full p-2 overflow-y-auto rounded-xl bg-white/10">
      <div className="flex ">
        <div className="flex items-center justify-center w-full ">
          <h1 className="text-xl font-extrabold text-center text-transparent bg-gradient-to-t from-teal-500 to-fuchsia-500 bg-clip-text hover:bg-gradient-to-b">
            Gallery
          </h1>
          <button
            onClick={handleReload}
            className="p-2 rounded-full hover:animate-spin "
          >
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
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
      </div>
      {cids?.length > 0 ? (
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {cids?.map((cid) => (
            <div key={cid} className="flex items-center justify-center">
              <img
                className="p-2 scale-95 hover:border rounded-xl hover:scale-105"
                src={`${GATEWAY_URL}${cid}`}
                width={100}
                alt={cid}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 text-center text-gray-400">
          Upload file to photoblock
        </div>
      )}
    </div>
  );
};

export default Gallery;
