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
import { useState, useContext } from 'react';
import { CartContext } from './context/CartContext';


const dishes = [
  { 
    id: 1, 
    img: mexicanImage, 
    title: "Enchiladas", price: 12, 
    isNew: true, 
    stock: 1 
  },
  { 
    id: 2, 
    img: moleImage, 
    title: "Mole", 
    price: 15, 
    isNew: false, 
    stock: 5 
  },
  { 
    id: 3, 
    img: TACOS, 
    title: "TACOS", 
    price: 3, 
    isNew: false, 
    stock: 12 
  },
];

function App() {
  const [isNewOnly, setIsNewOnly] = useState(false);
  const availableDishes = dishes.filter(dish => dish.stock > 0 && (!isNewOnly || dish.isNew));
  const toggleNewOnly = () => {
    setIsNewOnly(!isNewOnly);
  };
  const { dispatch } = useContext(CartContext); // Utilisation directe de useContext

  return (
    <div className="App">
      <Header />
      <main className="p-5">
        <Button onClick={toggleNewOnly} variant="outline-primary m-5">
          {isNewOnly ? "Show All" : "New Only"}
        </Button>
        <Container>
          <Row>
            {availableDishes.map(dish => (
              <Dish key={dish.id} img={dish.img} title={dish.title} price={dish.price} isNew={dish.isNew} />
            ))}
          </Row>
        </Container>
        <Button onClick={() => dispatch({type:"decrement"})} variant="outline-primary m-5">
          hmmmmmmmmm food
        </Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
