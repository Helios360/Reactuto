// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import Home from './components/Home';
import mexicanImage from './assets/mexican.jpg';
import moleImage from './assets/mole.jpg';
import TACOS from './assets/tacos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const dishes = [
  {
    id: 1,
    img: mexicanImage,
    title: "Mexican Dish",
    price: 10,
    isNew: true,
  },
  {
    id: 2,
    img: moleImage,
    title: "Mole",
    price: 10,
    isNew: false,
  },
  {
    id: 3,
    img: TACOS,
    title: "TACOS",
    price: 10,
    isNew: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home dishes={dishes}/>
        <Container>
          <Row>
            {dishes.map(dish=>(
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