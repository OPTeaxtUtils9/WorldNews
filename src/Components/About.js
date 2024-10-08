import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png"
                  className="card-img-top"
                  alt="..."
                />               
                  <h5 className="card-title">Card Title 1</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
