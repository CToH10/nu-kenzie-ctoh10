import { Button } from "../Button/Button";
import { Inputs } from "../Input/Inputs";
import "./style.css";

export function Form() {
  return (
    <form>
      <section className="descIpt">
        <label htmlFor="description">Descrição</label>
        <Inputs id="description" placeholder="Digite aqui sua descrição" />
      </section>
      <section className="values">
        <section className="sum">
          <label htmlFor="totalSum">Valor</label>
          <Inputs id="totalSum" />
        </section>
        <section className="kindOf">
          <label htmlFor="">Tipo de transação</label>
          <select name="kindValue" id="kindOfValue">
            <option value="deposit">Entrada</option>
            <option value="withdrawal">Saída</option>
          </select>
        </section>
      </section>
      <Button text="Inserir valor" />
    </form>
  );
}
