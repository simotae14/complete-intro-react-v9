import Pizza from "./Pizza";

export default function Order() {
  const pizzaType = "pepperoni";
  const pizzaSize = "M";

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizzaType">Pizza Type</label>
            <select name="pizzaType" value={pizzaType}>
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizzaSize">Pizza Size</label>
            <div>
              <span>
                <input
                  id="pizza-s"
                  checked={pizzaSize === "S"}
                  name="pizzaSize"
                  type="radio"
                  value="S"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  id="pizza-m"
                  checked={pizzaSize === "M"}
                  name="pizzaSize"
                  type="radio"
                  value="M"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  id="pizza-l"
                  checked={pizzaSize === "L"}
                  name="pizzaSize"
                  type="radio"
                  value="L"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          <Pizza
            name="Pepperoni"
            description="another pep pizza"
            image={"/public/pizzas/pepperoni.webp"}
          />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
}