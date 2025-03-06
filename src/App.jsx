import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import mexicanImage from './assets/mexican.jpg';
import moleImage from './assets/mole.jpg';
import TACOS from './assets/tacos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState, useContext, useRef, useEffect } from 'react';
import { CartContext } from './context/CartContext';

const dishes = [
  { id: 1, img: mexicanImage, title: "Enchiladas", price: 12, isNew: true, stock: 1 },
  { id: 2, img: moleImage, title: "Mole", price: 15, isNew: false, stock: 5 },
  { id: 3, img: TACOS, title: "TACOS", price: 3, isNew: false, stock: 12 },
];

function App() {
  const [isNewOnly, setIsNewOnly] = useState(false);
  const { cartCount } = useContext(CartContext);
  const prevCartCountRef = useRef(cartCount);

  useEffect(() => {
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  const availableDishes = dishes.filter(dish => dish.stock > 0 && (!isNewOnly || dish.isNew));
  const toggleNewOnly = () => {
    setIsNewOnly(!isNewOnly);
  };

  return (
    <div className="App">
      <Header />
      <main className="p-5">
        <Button onClick={toggleNewOnly} variant="outline-primary m-5">
          {isNewOnly ? "Show All" : "New Only"}
        </Button>
        <p>Le panier est passé de {prevCartCountRef.current} à {cartCount} articles.</p>
        <Container>
          <Row>
            {availableDishes.map(dish => (
              <Dish key={dish.id} img={dish.img} title={dish.title} price={dish.price} isNew={dish.isNew} />
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
