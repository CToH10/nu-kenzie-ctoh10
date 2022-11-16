export function Transaction({ description, kindOf, value }) {
  return (
    <li>
      <section className="descKind">
        <h3 className="transactionDesc">{description}</h3>
        <p>{kindOf}</p>
      </section>
      <section className="valueDelete">
        <p>{value}</p>
        <button className="deleteTransaction"></button>
      </section>
    </li>
  );
}
