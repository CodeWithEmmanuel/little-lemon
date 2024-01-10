import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import NoPage from "./components/NoPage";
import BookingConfirmed from "./components/BookingConfirmed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [resDetails, setResDetails] = useState({});

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                resDetails={resDetails}
                setResDetails={setResDetails}
              />
            }
          />
          <Route
            path="/confirmed"
            element={<BookingConfirmed resDetails={resDetails} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
