import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "apple", colour: "yellow" },
    { id: 2, name: "strawberry", colour: "pink" },
    { id: 3, name: "watermelon", colour: "red" },
    { id: 4, name: "orange", colour: "blue" },
    { id: 5, name: "kiwi", colour: "green" },
  ];

  return (
    <ul>
      {fruits.map(({ id, name, colour }) => (
        <Card key={id} name={name} colour={colour} />
      ))}
    </ul>
  );
}
