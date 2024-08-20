import Navbar from "./components/Navbar";
import CarSale from "./sections/CarSale";
import Home from "./sections/Home";
import Services from "./sections/Services";
import LevaConfig from "./LevaConfig";

function App() {
  return (
    <>
      <LevaConfig />
      <Navbar />
      <Home />
      <Services />
      <CarSale />
    </>
  );
}

export default App;

// TODO: 

// Navbar: implementar um search bar

// Body: Criar seção para venda/aluguel de carros com cards dos carros e suas infos

// implementar API mockada das infos dos carros

// implementar pagina do admin onde pode realizar um CRUD com os carros 
