import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { StaticHeader } from "./components/Header/Header";
import { LandingPage } from "./components/LandingPage/LandingPage";
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
  }

  return (
    <section className="App">
      {initialized ? (
        <>
          <StaticHeader action={goToPage} />
          <MainPage>
            <section className="formTotal">
              <section className="container">
                <Form action={newTrans} list={transactionsList} />
              </section>

              <section className="container">
                {transactionsList.length !== 0 && (
                  <Total balance={[...transactionsList]} />
                )}
              </section>
            </section>

            <List list={transactionsList} action={deleteTransaction} />
          </MainPage>
        </>
      ) : (
        <LandingPage>
          <Button text="Iniciar" action={goToPage} />
        </LandingPage>
      )}
    </section>
  );
}

export default App;
