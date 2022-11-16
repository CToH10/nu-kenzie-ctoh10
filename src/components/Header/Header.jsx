import { Button } from "../Button/Button";
import "./style.css";

export function StaticHeader({ action }) {
  return (
    <header>
      <h1>
        <span>Nu</span> Kenzie
      </h1>
      <Button text="Início" action={action} />
    </header>
  );
}
