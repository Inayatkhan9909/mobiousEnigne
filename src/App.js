import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


function App() {
  return (
    <div className="max-w-screen-2xl">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route  path="/" element={<HomePage/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
