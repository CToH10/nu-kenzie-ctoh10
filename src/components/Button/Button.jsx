import "./style.css";

export function Button({ text, action, className }) {
  return (
    <button
      onClick={() => {
        action();
      }}
      className={className}
    >
      {text}
    </button>
  );
}
