import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { StaticHeader } from "./components/Header/Header";
import { List } from "./components/List/List";
import { MainPage } from "./components/MainPage/MainPage";
import { Total } from "./components/Total/Total";

function App() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [initialized, setInitialized] = useState(false);

  function goToPage() {
    setInitialized(!initialized);
  }

  function newTrans(transaction) {
    setTransactionsList([...transactionsList, transaction]);
  }

  function deleteTransaction(transaction) {
    setTransactionsList(
      transactionsList.filter((elem) => elem.id !== transaction)
    );
    console.log(transactionsList);
  }

  return (
    <section className="App">
      {initialized ? (
        <>
          <StaticHeader action={goToPage} />
          <MainPage>
            <section className="container">
              <Form action={newTrans} list={transactionsList} />
            </section>

            <section className="container">
              {transactionsList.length !== 0 && (
                <Total balance={[...transactionsList]} />
              )}
            </section>

            <List list={transactionsList} action={deleteTransaction} />
          </MainPage>
        </>
      ) : (
        <Button text="Iniciar" action={goToPage} />
      )}
    </section>
  );
}

export default App;
