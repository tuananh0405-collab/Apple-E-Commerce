import "../src/assets/styles/App.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import TopScroll from "./components/site/TopScroll";
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
      <TopScroll/>
    </>
  );
}

export default App;
