import Gallery from "./Gallery";
import Upload from "./Upload";

export default function Dashboard() {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col justify-between p-5">
        <div>
          {" "}
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-t from-teal-500 to-fuchsia-500 bg-clip-text hover:bg-gradient-to-b">
            Photo Block
          </h1>
        </div>
        <div className="sticky h-full p-2">
          <Upload />
        </div>
        <div className="w-full h-full p-2">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
