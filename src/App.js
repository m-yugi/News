import './App.css';
import React, { Component } from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage key="general" />} />
            <Route exact path="/" element={<Homepage key="general" />} />
            <Route
              exact
              path="/entertainment"
              element={
                <Homepage key="entertainment" category="entertainment" />
              }
            />
            <Route
              exact
              path="/business"
              element={<Homepage key="business" category="business" />}
            />
            <Route
              exact
              path="/sports"
              element={<Homepage key="sports" category="sports" />}
            />
            <Route
              exact
              path="/health"
              element={<Homepage key="health" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<Homepage key="science" category="science" />}
            />
            <Route
              exact
              path="/technology"
              element={<Homepage key="technology" category="technology" />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
