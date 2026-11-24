import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import HowItWorks from "./components/layout/HowItWorks";
import UpcomingEvents from "./components/layout/UpcomingEvents";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <UpcomingEvents />
              <HowItWorks />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
