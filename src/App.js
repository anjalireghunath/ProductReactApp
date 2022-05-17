import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductEntry from './components/ProductEntry';
import SearchProduct from './components/SearchProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewBook from './components/ViewBook';
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' exact element={<ProductEntry/>}/>
  <Route path='/search' exact element={<SearchProduct/>}/>
  <Route path='/viewbook' exact element={<ViewBook/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
