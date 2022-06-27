import { Route, Router, Routes } from "react-router";
import Coaches from "./components/coaches/Coaches";
import MainPage from "./components/mainPage/MainPage";
import WhatsThatPage from "./components/whatsThatPage/WhatsThatPage";
import YouGet from "./components/youget/YouGet";
import './media.css'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<MainPage />}/>  
      <Route path="/pagetwo" element={<WhatsThatPage />}/>
      <Route path="/pagethree" element={<YouGet />}/>
      <Route path="/coaches" element={<Coaches />}/>
      </Routes>
    </div>
  );
}

export default App;
