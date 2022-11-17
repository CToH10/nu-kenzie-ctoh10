import "./style.css";

export function LandingPage({ children }) {
  return (
    <>
      <section className="pageID">
        <section className="pageText">
          <h1>
            <span>Nu</span> Kenzie
          </h1>
          <section className="pageDesc">
            <p>Centralize o controle das suas finanças</p>
            <small>de forma rápida e segura</small>
          </section>
        </section>
        {children}
      </section>
      <section className="pageImg"></section>
    </>
  );
}
