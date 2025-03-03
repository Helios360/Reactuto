// App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dish from './components/Dish';
import mexicanImage from './assets/mexican.jpg';
import moleImage from './assets/mole.jpg';
import TACOS from './assets/tacos.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <main> 
        <h1>Here are my dishes</h1>
        <Dish
          img={mexicanImage} // Make sure the path is correct
          title="Mexican Dish"
          price={10} // Price should be a number
        />
        <Dish
          img={moleImage} // Make sure the path is correct
          title="Mole"
          price={10} // Price should be a number
        />
        <Dish
          img={TACOS} // Make sure the path is correct
          title="TACOS"
          price={10} // Price should be a number
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
