export function Transaction({ description, kindOf, transactionValue }) {
  return (
    <li>
      <section className="descKind">
        <h3 className="transactionDesc">{description}</h3>
        <p>{kindOf}</p>
      </section>
      <section className="valueDelete">
        <p>R$ {transactionValue}</p>
        <button className="deleteTransaction"></button>
      </section>
    </li>
  );
}
