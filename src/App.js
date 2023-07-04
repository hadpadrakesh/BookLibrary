import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Component/Signup';
import Login from './Component/Login';
import Main from './Component/Main';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Routes>
     <Route path="/" element={<Main/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
