import { useAccount } from "wagmi";
import Welcome from "./component/Welcome";
import Dashboard from "./component/Dashboard";

export default function Home() {
  const { isConnected } = useAccount();

  if (isConnected) return <Dashboard />;
  return <Welcome />;
}
