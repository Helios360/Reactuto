// components/Dish.jsx

const Dish = ({ img, title, price }) => {
  return (
    <div class="text-center">
      <img src={img} alt={title} height="200" width="200" />
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Dish;
