// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import mexicanImage from './assets/mexican.jpg';
import moleImage from './assets/mole.jpg';
import TACOS from './assets/tacos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container p-5">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Dish
                img={mexicanImage}
                title="Mexican Dish"
                price={10}
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Dish
                img={moleImage}
                title="Mole"
                price={10}
              />
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Dish
                img={TACOS}
                title="TACOS"
                price={10}
              />
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;