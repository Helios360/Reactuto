// components/Dish.jsx

const Dish = ({ img, title, price }) => {
  return (
    <div class="hello">
      <img src={img} alt={title} height="200" width="200" />
      <h3>{title}</h3>
      <h4>{price}€</h4>
    </div>
  );
};

export default Dish;
