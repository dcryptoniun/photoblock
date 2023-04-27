import { useState } from "react";
import axios from "axios";
import confi from "../contract/Config.json";
import Abi from "../contract/Abi.json";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { toast } from "react-toastify";

const Upload = () => {
  const contractAddress = confi.CONTRACT_ADDRESS;
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState(null);
  const [loading, setLoading] = useState(false);
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: Abi,
    functionName: "addCID",
    args: [cid],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    const url = import.meta.env.VITE_PINATA_URL;
    const apiKey = import.meta.env.VITE_PINATA_API_KEY;
    const apiSecret = import.meta.env.VITE_PINATA_API_SECRET;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: apiKey,
          pinata_secret_api_key: apiSecret,
        },
      });
      setCid(response.data.IpfsHash);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleWrite = () => {
    write();
    // if (isSuccess) {
    //   alert("Image saved successfully");
    //   setCid(null);
    //   setFile(null);
    // }
  };

  return (
    <div className="w-full h-auto p-2 rounded-xl">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4 group">
          <div className="p-1 border border-transparent rounded bg-gradient-to-l group-hover:bg-gradient-to-r from-teal-600 to-fuchsia-600 bg-clip-border ">
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div>
            {!cid && (
              <button
                className="p-2 px-5 rounded bg-gradient-to-r group-hover:bg-gradient-to-l disabled:cursor-not-allowed from-teal-600 to-fuchsia-600"
                onClick={handleUpload}
                disabled={!file || loading}
              >
                {loading ? "Uploading..." : "Upload"}
              </button>
            )}{" "}
            {loading && toast("uploading")}
          </div>
          <div>
            {cid && (
              <button
                className="p-2 px-5 rounded bg-gradient-to-r group-hover:bg-gradient-to-l disabled:cursor-not-allowed from-teal-600 to-fuchsia-600"
                onClick={handleWrite}
                disabled={!cid}
              >
                {isLoading ? "Saving..." : "Save to PhotoBlock"}
              </button>
            )}
            {isLoading && toast("saving......")}
            {isSuccess && toast("saved sucessfully")}
            {isSuccess && location.reload()}
          </div>
        </div>
        <div>
          <span className="text-xs text-center text-gray-500">
            upload ⟩ Save to PhotoBlock ⟩ reload
          </span>
        </div>
      </div>
    </div>
  );
};

export default Upload;
