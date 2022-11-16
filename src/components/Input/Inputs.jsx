import "./style.css";

export function Inputs({ id, placeholder }) {
  return <input type="text" placeholder={placeholder} id={id} required />;
}
