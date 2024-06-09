import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/news/News';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };

    // Bind the method to `this`
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange = (value) => {
    this.setState({ searchValue: value });
  };
  render() {
    return (
      <div>


        <Router>
          <Navbar onSearchChange={this.handleSearchChange} />

          <Routes>
            <Route exact path="/" element={<News searchValue={this.state.searchValue} />} />
            <Route exact path="/business" element={<News searchValue={this.state.searchValue} categeory="business" />} />
            <Route exact path="/entertainment" element={<News searchValue={this.state.searchValue} categeory="entertainment" />} />
            <Route exact path="/general" element={<News searchValue={this.state.searchValue} categeory="general" />} />
            <Route exact path="/health" element={<News searchValue={this.state.searchValue} categeory="health" />} />
            <Route exact path="/science" element={<News searchValue={this.state.searchValue} categeory="science" />} />
            <Route exact path="/sports" element={<News searchValue={this.state.searchValue} categeory="sports" />} />
            <Route exact path="/technology" element={<News searchValue={this.state.searchValue} categeory="technology" />} />
          </Routes>
        </Router>

        Search Value: {this.state.searchValue}
      </div>
    )
  }
}
