import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <Router>
      <Header onAdd={() => setShowAddForm(!showAddForm)} showAddForm={showAddForm} />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/" exact render={() => <Dashboard showAddForm={showAddForm} />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
