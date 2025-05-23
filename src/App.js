import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageNotFound from './pages/PageNotFound'


function App() {
  return (
    <div className="max-w-screen-2xl">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
