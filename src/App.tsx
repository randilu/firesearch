import { initializeApp } from "firebase/app";

import firebaseConfig from "./configs/firebase-config.json";
import "./App.scss";
import SignUp from "./pages/SignUp";

import { ThemeProvider  } from "@material-tailwind/react";


export const customTheme = {
  button: {
    defaultProps: {
      className: 'w-fit',
      color: 'purple',
    },   
  },
  input: {
    defaultProps: {
      color: 'purple',
    }, 
  },      
  tooltip: {
    styles: {
      base: {
        bg: 'bg-yellow-500',
        text: 'text-green-500',
        width: 'max-w-md',
      },
    },
  },
}


function App() {
  initializeApp(firebaseConfig.result.sdkConfig);
  return (
  <ThemeProvider value={customTheme}>
    <div className="App">
      <SignUp />
    </div>
  </ThemeProvider>
  );
}

export default App;
