import './App.css';
import PageProduct from './Components/PageProduct/PageProduct';
import MainPage from './Components/MainPage/MainPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/product' element={<PageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
