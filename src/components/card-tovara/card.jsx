import { Link } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import "./card.css";

const Card = () => {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    title: "Мраморная говядина 1 кг",
    description: "Описание",
    price: 2000,
    image: "/images/meat.jpg",
  };

  return (
    <div className="card">

      <img
        src={product.image}
        alt={product.title}
        className="card-img"
      />

      <div className="card-info">

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <h4>{product.price} ₽</h4>

        <div className="card-btns">

          <button
            className="order"
            onClick={() => addToCart(product)}
          >
            Заказать
          </button>

          <Link to="/card" className="more">
            Подробнее
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Card;