import { initializeApp } from "firebase/app";

import firebaseConfig from "./configs/firebase-config.json";
import "./App.scss";
import SignUp from "./pages/SignUp";


function App() {
  initializeApp(firebaseConfig.result.sdkConfig);
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
