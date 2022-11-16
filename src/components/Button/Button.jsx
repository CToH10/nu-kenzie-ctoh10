import "./style.css";

export function Button({ text, action }) {
  return (
    <button
      onClick={() => {
        action();
      }}
    >
      {text}
    </button>
  );
}