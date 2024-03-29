import { useState } from "react";
import { Button } from "../Button/Button";
import { Inputs } from "../Input/Inputs";
import "./style.css";

export function Form({ action, list }) {
  function handleSubmit(some) {
    if (some !== undefined) {
      let transactionItem = some;
      transactionItem = {
        ...some,
        id:
          String(list.length) +
          some.transactionValue +
          some.description.replaceAll(" ", "") +
          some.kindOfValue,
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
        <small>Ex. Compra de roupas</small>
      </section>
      <section className="values">
        <section className="sum">
          <label htmlFor="transactionValue">Valor</label>
          <Inputs id="transactionValue" type="number" action={handleChange} />
        </section>
        <section className="kindOf">
          <label htmlFor="">Tipo de valor</label>
          <select
            name="kindValue"
            id="kindOfValue"
            onChange={handleChange}
            required
          >
            <option value="">Tipo de valor</option>
            <option value="deposit">Entrada</option>
            <option value="withdrawal">Saída</option>
          </select>
        </section>
      </section>
      <Button text="Inserir valor" action={handleSubmit} />
    </form>
  );
}
