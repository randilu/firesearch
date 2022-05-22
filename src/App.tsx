import { initializeApp } from "firebase/app";

import firebaseConfig from "./configs/firebase-config.json";
import Login from "./pages/Login";
import "./App.scss";

function App() {
  initializeApp(firebaseConfig.result.sdkConfig);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
