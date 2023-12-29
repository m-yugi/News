import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="newtons-cradle m-auto">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
      </>
    );
  }
}
