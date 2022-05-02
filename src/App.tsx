import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Promocoes } from './pages/Promocoes';
import { Footer } from './components/Footer';
import { Template } from './components/mainComponents/mainComponents';
import { Contact } from './pages/Contact';
import { AdPage } from './pages/AdPage';

const App = () => {
  return (
    
    <Template>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/ad/:id" element={<AdPage/>} />
      </Routes>
    
    <Footer />
    </Template>

    
  )
}

export default App