// components/Dish.jsx
import Card from 'react-bootstrap/Card';
const Dish = ({ img, title, price }) => {
  return (
    <Card class="col-md-4">
        <div class="hello border">
        <img src={img} alt={title} height="200" width="200" />
        <h3>{title}</h3>
        <h4>{price}€</h4>
        </div>
    </Card>
  );
};

export default Dish;
