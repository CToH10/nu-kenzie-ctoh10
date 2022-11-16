export function Total({ balance }) {
  let treat = [...balance];
  console.log(treat);
  let total = treat[0].transactionValue;

  if (treat[0].kindOfValue === "withdrawal") {
    total = total * -1;
  }

  if (treat.length > 1) {
    let deposits = [];

    deposits = treat.filter((operation) => operation.kindOfValue === "deposit");

    let depositValue = deposits.map((elem) => elem.transactionValue);
    console.log(depositValue);

    let sum = depositValue.reduce((previousBalance = 0, currentBalance) => {
      return previousBalance + currentBalance;
    });

    let withdrawals = [];

    withdrawals = treat.filter((operation) => {
      if (operation.kindOfValue === "withdrawal") {
        return operation.transactionValue;
      } else {
        return 0;
      }
    });

    let withdrawalValue = withdrawals.map((elem) => elem.transactionValue);

    let subtract = withdrawalValue.reduce(
      (previousBalance = 0, currentBalance) => {
        return previousBalance + currentBalance;
      }
    );
    total = sum - subtract;
  }

  return (
    <>
      <section className="text">
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </section>
      <section className="total">
        <p>R$ {total}</p>
      </section>
    </>
  );
}
