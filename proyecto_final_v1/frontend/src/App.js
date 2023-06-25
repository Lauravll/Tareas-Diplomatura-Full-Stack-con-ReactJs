import logo from './logo.svg';
//import './App.css';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Footer></Footer>
      <Button variant="primary">Aceptar</Button>
    </div>
  );
}

export default App;
