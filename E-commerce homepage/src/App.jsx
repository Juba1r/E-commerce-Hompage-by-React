import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container-fluid middle-section">contents section</div>
      <Footer />
    </div>
  );
}

export default App;
