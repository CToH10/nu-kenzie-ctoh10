import { useState } from "react";
import { Button } from "../Button/Button";
import { Transaction } from "../Card/Card";
import "./style.css";

export function List({ list, action }) {
  let actualList = list;
  let depositList = actualList.filter((elem) => elem.kindOfValue === "deposit");
  let withdrawalList = actualList.filter(
    (elem) => elem.kindOfValue === "withdrawal"
  );

  const [depTrue, setDepTrue] = useState(false);
  const [withTrue, setWithTrue] = useState(false);
  const [active, setActive] = useState("Todos");

  function handleBtns(btn) {
    if (btn === "deposit") {
      setDepTrue(true);
      setWithTrue(false);
      setActive("Entradas");
    } else if (btn === "withdrawal") {
      setWithTrue(true);
      setDepTrue(false);
      setActive("Saídas");
    } else {
      setDepTrue(false);
      setWithTrue(false);
      setActive("Todos");
    }
  }

  return (
    <section className="transactionsNav">
      <section className="listNav">
        <h2>Resumo financeiro</h2>

        <section className="btnNav">
          <Button
            text="Todos"
            action={() => handleBtns("")}
            className={active === "Todos" ? "active" : ""}
          />
          <Button
            text="Entradas"
            action={(event) => handleBtns("deposit")}
            className={active === "Entradas" ? "active" : ""}
          />
          <Button
            text="Saídas"
            action={() => handleBtns("withdrawal")}
            className={active === "Saídas" ? "active" : ""}
          />
        </section>
      </section>
      {actualList.length === 0 && !depTrue && !withTrue && (
        <h2 className="noTransactions">Você não possui lançamentos</h2>
      )}
      {!depTrue && !withTrue && (
        <ul>
          {actualList.map((elem, index) => Transaction(elem, index, action))}
        </ul>
      )}
      {depTrue && (
        <>
          {depositList.length > 0 ? (
            <ul>
              {depositList.map((elem, index) =>
                Transaction(elem, index, action)
              )}
            </ul>
          ) : (
            <h2 className="noTransactions">Você não possui lançamentos</h2>
          )}
        </>
      )}
      {withTrue && (
        <>
          {withdrawalList.length > 0 ? (
            <ul>
              {withdrawalList.map((elem, index) =>
                Transaction(elem, index, action)
              )}
            </ul>
          ) : (
            <h2 className="noTransactions">Você não possui lançamentos</h2>
          )}
        </>
      )}
    </section>
  );
}
