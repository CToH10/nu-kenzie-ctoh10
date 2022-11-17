import "./style.css";

export function Inputs({ id, placeholder, type = "text", action }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={action}
      required
    />
  );
}
