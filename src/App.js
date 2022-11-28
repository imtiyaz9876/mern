
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Error from "./components/Error"

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     
     
      <BrowserRouter>
      <Navbar />
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*"      element={<Error />} />
          
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
