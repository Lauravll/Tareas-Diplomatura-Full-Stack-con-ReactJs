import logo from './logo.svg';
//import './App.css';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import { Button } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import NovedadesPage from './pages/NovedadesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="novedades" element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
