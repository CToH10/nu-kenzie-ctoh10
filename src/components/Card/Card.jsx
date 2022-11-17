export function Transaction(
  { description, kindOfValue, transactionValue, id },
  index,
  action
) {
  function handleDeletion(deleted) {
    action(deleted);
  }
  return (
    <li key={id} id={index + id}>
      <section className="descKind">
        <h3 className="transactionDesc">{description}</h3>
        <p>{kindOfValue}</p>
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
