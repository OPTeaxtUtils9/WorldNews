import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="container">
          <div className="card my-2" style={{ width: "18rem" }}>
            <img
              src={ImageUrl}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
