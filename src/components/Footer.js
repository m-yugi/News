import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="column">
          <h3>Contact Us</h3>
          <p>msaiyugandhar333@mail.com</p>
        </div>
        <div className="column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">hello how are you</a>
            </li>
            <li>
              <a href="/">Contact Me</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Follow Us</h3>
          <ul>
            <li id="icon-li">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/msaiyugandhar/"
              >
                <i className="fa-brands fa-linkedin" id="icons"></i>
              </a>
            </li>
            <li id="icon-li">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/m-yugi"
              >
                <i className="fa-brands fa-github" id="icons"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
