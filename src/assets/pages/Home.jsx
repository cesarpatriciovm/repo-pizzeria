import CardPizza from "./components/CardPizza";
import Header from "./components/Header";
import { pizzas } from "../data/pizzas";

function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-8 px-4">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              img={pizza.img}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;