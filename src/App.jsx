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
