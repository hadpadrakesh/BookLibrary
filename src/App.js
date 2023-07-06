import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Component/Signup';
import Login from './Component/Login';
import Main from './Component/Main';
import Protect from "./Component/Protect";

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/main" element={ <Protect Child={Main}/> }/>
     </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
