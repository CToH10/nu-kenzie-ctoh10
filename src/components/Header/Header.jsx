import { Button } from "../Button/Button";
import "./style.css";

export function StaticHeader({ action }) {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.setAttribute("light", true);
  } else {
    document.documentElement.setAttribute("dark", true);
  }

  function darkMode() {
    if (document.documentElement.getAttribute("light") === "true") {
      document.documentElement.removeAttribute("light");
      document.documentElement.setAttribute("dark", true);
    } else {
      document.documentElement.removeAttribute("dark");
      document.documentElement.setAttribute("light", true);
    }
  }
  return (
    <header>
      <h1>
        <span>Nu</span> Kenzie
      </h1>
      <section className="interact">
        <Button action={darkMode} />
        <Button text="Início" action={action} />
      </section>
    </header>
  );
}
