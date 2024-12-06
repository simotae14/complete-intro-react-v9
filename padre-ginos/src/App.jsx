import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="The Pepperoni Pizza"
        description="Mozzarella Cheese, Pepperoni"
      />
      <Pizza
        name="Americano Pizza"
        description="French fries and and hot dogs, wtf Italy"
      />
      <Pizza name="The Hawaiian" description="pineapple and ham, wtf America" />
      <Pizza
        name="Chicken Pizza?"
        description="chicken nuggies on your Pizza, wtf UK"
      />
      <Pizza
        name="Baked Potato Pizza"
        description="unholy potato mash, wtf Minnesota"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
