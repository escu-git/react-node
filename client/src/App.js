import './App.css';
import { LoginProvider } from './Contexts/LoginContext';
import NavBar from './Components/Header/NavBar';
import {Routes, Route} from 'react-router-dom';
import ProductsContainer from './Components/Products/ProductContainer';
import './Styles/styles.css'
import SignUp from './Components/Login/Signup/SignUp';
import Login from './Components/Login/Login/Login';

function App() {
  return (
    <div className="App">
    <LoginProvider>
      <NavBar/>
      <Routes>
        <Route path='/productos' element={<ProductsContainer/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </LoginProvider>
    </div>
  );
}

export default App;
