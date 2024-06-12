import React, { Component } from 'react';

export default class NewsItem extends Component {

  humanReadableDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div>
        <div>
          <div className="card">
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small class="text-muted">By {author} on {this.humanReadableDate(date)}</small></p>
              <a href={newsUrl} className="btn btn-sm btn-primary" target='_blank'  rel="noreferrer">Read more</a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
