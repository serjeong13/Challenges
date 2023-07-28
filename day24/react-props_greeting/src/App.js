import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Rocco" isCoach={false} />
      <Greeting name="Yair" isCoach={true} />
    </>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      {isCoach ? <h2>Hello Coach!</h2> : null}
    </div>
  );
}
