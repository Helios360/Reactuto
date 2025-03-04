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
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Row>
            <Dish
              img={mexicanImage}
              title="Mexican Dish"
              price={10}
              isNew="true"
            />
            <Dish
              img={moleImage}
              title="Mole"
              price={10}
            />
            <Dish
              img={TACOS}
              title="TACOS"
              price={10}
            />
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;