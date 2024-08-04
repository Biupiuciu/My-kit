import { Login } from "./components/Login";
import axios from "axios";
export default function Home() {
  // axios.defaults.baseURL = "http://localhost:4040";
  return (
    <main className="">
      <Login />
    </main>
  );
}
