import Home from "./Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Settings from "./component/Settings";

function App() {
  return (
    <div className="flex flex-col items-center h-screen min-h-screen overflow-y-auto font-mono bg-gradient-to-bl from-slate-900 to-zinc-900 text-slate-100">
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
