import './App.css';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
