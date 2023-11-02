import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { TableSection } from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <main>
        <Balance />
        <TableSection />
      </main>
    </>
  );
}

export default App;
