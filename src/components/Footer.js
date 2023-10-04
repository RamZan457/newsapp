import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                <span>NewsMonkey</span>
              </a>
              <span className="mb-3 mb-md-0 text-body-secondary">
                © {new Date().getFullYear()} Company, Inc
              </span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
