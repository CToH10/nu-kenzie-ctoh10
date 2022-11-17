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
  //fazer state com active, mudar state, muda active
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

  let navButtons = document.querySelectorAll(".btnNav button");

  navButtons.forEach((navButton) => {
    if (navButton.innerText === active) {
      navButton.className = "active";
    } else if (navButton.innerText !== active) {
      navButton.className = "";
    }
  });

  return (
    <section className="transactionsNav">
      <section className="listNav">
        <h2>Resumo financeiro</h2>

        <section className="btnNav">
          <Button text="Todos" action={() => handleBtns("")} />
          <Button text="Entradas" action={(event) => handleBtns("deposit")} />
          <Button text="Saídas" action={() => handleBtns("withdrawal")} />
        </section>
      </section>

      {!depTrue && !withTrue && (
        <ul>
          {actualList.map((elem, index) => Transaction(elem, index, action))}
        </ul>
      )}
      {depTrue && (
        <ul>
          {depositList.map((elem, index) => Transaction(elem, index, action))}
        </ul>
      )}
      {withTrue && (
        <ul>
          {withdrawalList.map((elem, index) =>
            Transaction(elem, index, action)
          )}
        </ul>
      )}
    </section>
  );
}
