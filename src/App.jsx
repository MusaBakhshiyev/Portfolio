import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PortfolioDetail from './Pages/PortfolioDetail/PortfolioDetail';
import './App.css'

function App() {
  return (
    <BrowserRouter basename='Portfolio'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PortfolioDetail" element={<PortfolioDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
