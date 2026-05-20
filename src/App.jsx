import Flower from "./Flower";

function App() {

 const flower = [
  {
    image: "/rose.jpg",
    id: 1,
    name: "Rose",
    rating: "10",
    description: "Beautiful flower",
    age: "2",
  },

  {
    image: "/sunflower.jpg",
    id: 2,
    name: "Sunflower",
    rating: "9",
    description: "Bright yellow flower",
    age: "1",
  },

  {
    image: "/tulip.jpg",
    id: 3,
    name: "Tulip",
    rating: "8.5",
    description: "Colorful flower",
    age: "2",
  },
];

  return (
    <>
      {flower.map((flower) => {
        return (
          <Flower
            key={flower.id}
            image={flower.image}
            name={flower.name}
            rating={flower.rating}
            description={flower.description}
            age={flower.age}
          />
        );
      })}
    </>
  );
}

export default App;