import { Authenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import Booking from "./components/Booking";
import Home from "./components/Home";
import Availability from "./components/Availability";
import Appointments from "./components/Appointments";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import About from "./components/About";
import Clients from "./components/Clients";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Routes>
        <Authenticator>
          <Routes>
            <Route path="/booking" element={<Booking />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </Authenticator>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
