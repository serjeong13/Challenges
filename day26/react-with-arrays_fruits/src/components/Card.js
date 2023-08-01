import "./Card.css";

export default function Card({ name, colour }) {
  return (
    <li>
      <div className="card" style={{ backgroundColor: colour }}>
        <h2>{name}</h2>
        <p>{colour}</p>
      </div>
    </li>
  );
}
