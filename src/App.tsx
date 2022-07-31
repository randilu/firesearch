import { initializeApp } from "firebase/app";

// import firebaseConfig from "./configs/firebase-config.json";
import Login from "../src/components/Login";

function App() {
  // initializeApp(firebaseConfig.result.sdkConfig);
  return (
    <div className="h-screen w-screen bg-slate-200" >
      <Login />
    </div>
  );
}

export default App;
