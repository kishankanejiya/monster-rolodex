import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Cardlist } from "./component/card-list/card-list.component.jsx";
import { Searchbox } from "./component/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      superhero: [],
      searchfield: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ superhero: users }));
  }

  handleChange(e) {
    this.setState({ searchfield: e.target.value });
  }

  render() {
    const { superhero, searchfield } = this.state;
    const filtersuperhero = superhero.filter((hero) =>
      hero.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox
          placeholder="Enter Monster Name"
          handleChange={this.handleChange}
        />
        <Cardlist superhero={filtersuperhero}></Cardlist>
      </div>
    );
  }
}

export default App;
