import "./style.css";

function CardPage() {
  return (
    <section className="card-page">

      <div className="big-img">
        <img src="/images/meat.jpg" alt="Мраморная говядина" />
      </div>

      <div className="big-info">
        <h1>
          Мраморная говядина
          <br />
          1 кг
        </h1>

        <p>Описание любой длинный</p>

        <h2>2000 ₽</h2>

        <button>Заказать</button>
      </div>

    </section>
  );
}

export default CardPage;