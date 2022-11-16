import { Button } from "../Button/Button";
import { Transaction } from "../Transaction/Card";

export function List({ list, action }) {
  return (
    <section>
      <section className="listNav">
        <h2>Transações</h2>

        <section className="btnNav">
          <Button text="Todos" />
          <Button text="Entradas" />
          <Button text="Saídas" />
        </section>
      </section>

      <ul>{list.map((elem) => Transaction(elem, action))}</ul>
    </section>
  );
}
