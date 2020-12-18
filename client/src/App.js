import React from "react";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import NewDreamPrint from "./views/NewDreamPrint";
import AllDreamPrints from "./views/AllDreamPrints";
import DreamPrint from "./views/DreamPrint";
import EditDreamPrint from "./views/EditDreamPrint";
import Homepage from "./views/Homepage";
import Faqs from "./views/Faqs";
import Contact from "./views/Contact";
import Terms from "./views/Terms";
import Help from "./views/Help";

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="/homepage" style={{ color: "black" }}>
        Home
      </Link>
      {" | "}
      <Link to="/3dreamprints" style={{ color: "black" }}>
        All Dreamprint
      </Link>
      {" | "}
      <Link to="/3dreamprints/new" style={{ color: "black" }}>
        Create A New 3Dreamprint Request
      </Link>
      {" | "}
      <Link to="/3dreamprints/faqs" style={{ color: "black" }}>
        F.A.Q's
      </Link>
      <Router>
        <Redirect from="/" to="/3dreamprints" noThrow="true" />
        <NotFound default />
        <Homepage path="/homepage" />
        <Faqs path="/faqs" />
        <AllDreamPrints path="/3dreamprints" />
        <DreamPrint path="/3dreamprints/:id" />
        <NewDreamPrint path="/3dreamprints/new" />
        <EditDreamPrint path="/3dreamprints/:id/edit" />
        <Faqs path="/3dreamprints/faqs" />
        <Contact path="/3dreamprints/contact" />
        <Terms path="/3dreamprints/terms" />
        <Help path="/3dreamprints/help" />
      </Router>
      <footer>Dreams in the form of 3D printing </footer>
      <Footer />
    </div>
  );
}

export default App;
