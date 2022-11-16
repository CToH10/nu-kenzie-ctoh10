import { useState } from "react";
import { Button } from "../Button/Button";
import { Inputs } from "../Input/Inputs";
import "./style.css";

export function Form({ action }) {
  function handleSubmit(some) {
    if (some !== undefined) {
      let transactionItem = some;
      transactionItem = {
        ...some,
        id:
          some.transactionValue + some.description.concat() + some.kindOfValue,
      };
      action(transactionItem);
    }
  }

  const [input, setInput] = useState({
    description: "",
    transactionValue: 0,
    kindOfValue: "",
    id: "",
  });

  function handleChange(event) {
    const name = event.target.id;
    let value = event.target.value;

    if (name === "transactionValue") {
      value = Number(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(input);
      }}
    >
      <section className="descIpt">
        <label htmlFor="description">Descrição</label>
        <Inputs
          id="description"
          placeholder="Digite aqui sua descrição"
          action={handleChange}
        />
      </section>
      <section className="values">
        <section className="sum">
          <label htmlFor="transactionValue">Valor</label>
          <Inputs id="transactionValue" type="number" action={handleChange} />
        </section>
        <section className="kindOf">
          <label htmlFor="">Tipo de transação</label>
          <select
            name="kindValue"
            id="kindOfValue"
            onChange={handleChange}
            required
          >
            <option value="">Tipo de de transação</option>
            <option value="deposit">Entrada</option>
            <option value="withdrawal">Saída</option>
          </select>
        </section>
      </section>
      <Button text="Inserir valor" action={handleSubmit} />
    </form>
  );
}
