import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { StaticHeader } from "./components/Header/Header";
import { List } from "./components/List/List";
import { MainPage } from "./components/MainPage/MainPage";

function App() {
  const [transactionsList, setTransactionsList] = useState([]);
  const [initialized, setInitialized] = useState(false);

  function goToPage() {
    setInitialized(!initialized);
    console.log(initialized);
  }

  return (
    <section className="App">
      {initialized ? (
        <>
          <StaticHeader action={goToPage} />
          <MainPage>
            <section className="newValues">
              <Form />
            </section>

            <List />
          </MainPage>
        </>
      ) : (
        <Button text="Iniciar" action={goToPage} />
      )}
    </section>
  );
}

export default App;
