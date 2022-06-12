import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignIn from './screens/SignIn';

function App() {
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <Navigation />
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SignIn />}></Route>
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">All rigths reserved</div>
      </footer>
    </div>
  );
}

export default App;
