// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import mexicanImage from './assets/mexican.jpg';
import moleImage from './assets/mole.jpg';
import TACOS from './assets/tacos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const dishes = [
  {
    id: 1,
    img: mexicanImage,
    title: "Enchiladas",
    price: 12,
    isNew: true,
    stock: 0,
  },
  {
    id: 2,
    img: moleImage,
    title: "Mole",
    price: 15,
    isNew: false,
    stock: 5,
  },
  {
    id: 3,
    img: TACOS,
    title: "TACOS",
    price: 3,
    isNew: false,
    stock: 12,
  },
];

function App() {
  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [isNewOnly, setIsNewOnly] = useState(false); 
  const showAvailableOnly = () => {
    setFilteredDishes(dishes.filter((dish) => dish.stock > 0));
  };
  const toggleNewOnly = () => {
    setIsNewOnly(!isNewOnly);
    if (!isNewOnly) {
      setFilteredDishes(dishes.filter((dish) => dish.isNew === true));
    } else {
      setFilteredDishes(dishes);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="p-5">
      <Button onClick={showAvailableOnly} variant="outline-primary m-5">Available Only</Button>
      <Button onClick={toggleNewOnly} variant="outline-primary m-5">{isNewOnly ? "Show All" : "New Only"}</Button>
        <Container>
          <Row>
            {filteredDishes.map(dish=>(
              <Dish
              key={dish.id}
              img={dish.img}
              title={dish.title}
              price={dish.price}
              isNew={dish.isNew}
            />
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;