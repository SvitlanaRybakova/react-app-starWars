import { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import starwarsData from "./starwarsData";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Planets from "./pages/Planets";
import Species from "./pages/Species";

// нужно обязательно загрузить BrowserRouter, Route npm install react-router-dom
class App extends Component {
  constructor(){
    super();
    this.state = {
      navLinks: [
        {name: "Home", path:"/"},
        {name: "About", path: "/about"},
        {name: "Planets", path: "/planets"},
        {name: "Species", path: "/species"},
      ],
      quotes: starwarsData.quotes,
      backgrounds: starwarsData.backgrounds,
      description: starwarsData.description,
    }
  }

  componentDidMount = () => {
    console.log("когда компонент уже смонтирован");
    let background = this.state.backgrounds[
      Math.floor(Math.random() * this.state.backgrounds.length)
    ]
    document.body.style.backgroundImage = `url(${background})`
  }

  render(){
    return (
    <div className="App">
      <BrowserRouter>
      <Navbar navLinks={this.state.navLinks} />
      <Route exact path="/">
        <Home quotes={this.state.quotes} />
      </Route>
      <Route exact path="/about">
        <About desc={this.state.description} />
      </Route>
      <Route exact path="/planets">
        <Planets  />
      </Route>
      <Route exact path="/species">
        <Species  />
      </Route>
      </BrowserRouter>
    </div>
  );
  }
  
}

export default App;
