import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="The Pepperoni Pizza"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Americano Pizza"
        description="French fries and and hot dogs, wtf Italy"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="The Hawaiian"
        description="pineapple and ham, wtf America"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Chicken Pizza?"
        description="chicken nuggies on your Pizza, wtf UK"
        image={"/public/pizzas/ckn_alfredo.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
