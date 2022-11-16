import { Button } from "../Button/Button";

export function List({ lista }) {
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

      <ul>{/* {lista.map((elem) => )} */}</ul>
    </section>
  );
}
