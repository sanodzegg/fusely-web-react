import Navbar from "./Comps/Navbar";
import Header from "./Comps/Header";
import Offers from "./Comps/Offers";
import Plans from "./Comps/PlansNContent";
import Footer from "./Comps/Footer";
import './Styles/Responsive/responsive.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Offers />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
