import Navbar from "./components/Navbar";
import CarSale from "./sections/CarSale";
import Home from "./sections/Home";
import Services from "./sections/Services";
import LevaConfig from "./LevaConfig";

function App() {
  return (
    <div>
      <div>
        <LevaConfig />
      </div>
      <Navbar />
      <Home />
      <Services />
      <CarSale />
    </div>
  );
}

export default App;
