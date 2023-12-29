import React, { Component } from 'react';

export default class Newsitems extends Component {
  render() {
    let style = {};

    if (this.props.backgroundUrl) {
      style = {
        backgroundImage: `url(${this.props.backgroundUrl})`,
      };
    } else {
      style = {
        backgroundImage: `url(
          'https://images.unsplash.com/photo-1455612693675-112974d4880b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        )`,
      };
    }

    return (
      <>
        <a rel="noreferrer" target="_blank" className="link-decor" href={this.props.newsUrl}>
          <div className="col newsbox" style={style}>
            <div className="overlay text-white">
              <span className="main-text">
                <strong>{this.props.title}</strong>
              </span>
            </div>
          </div>
        </a>
      </>
    );
  }
}
