import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Restaurants, Home } from './pages';

function App() {
  return (
    <div className=' h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/restaurants' element={<Restaurants />} />
      </Routes>
    </div>
  );
}

export default App;
