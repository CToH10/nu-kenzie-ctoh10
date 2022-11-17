import "./style.css";

export function Transaction(
  { description, kindOfValue, transactionValue, id },
  index,
  action
) {
  function handleDeletion(deleted) {
    action(deleted);
  }

  let kindTreated;
  let className = "transCard";

  if (kindOfValue === "deposit") {
    kindTreated = "Entrada";
    className += " deposit";
  } else {
    kindTreated = "Saída";
    className += " withdrawal";
  }

  return (
    <li key={id} id={index + id} className={className}>
      <section className="descKind">
        <h3 className="transactionDesc">{description}</h3>
        <p>{kindTreated}</p>
      </section>
      <section className="valueDelete">
        <p>R$ {transactionValue}</p>
        <button
          className="deleteBtn"
          onClick={(event) => handleDeletion(id)}
        ></button>
      </section>
    </li>
  );
}
