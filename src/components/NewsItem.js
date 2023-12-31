import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title, description, imageurl, newsUrl,author,date}= this.props;
    return (
      <div>
        <div className="card" >
            <img src={!imageurl?"https://cdn.wisden.com/wp-content/uploads/2023/10/gill-dengue.png":imageurl} className="card-img-top" alt="..."/>
                 <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                   <p className="card-text">{description}</p>
                   <p className="card-text"><small className="text-muted">By {!author? "Unknown":author} on {date}</small></p>
                   <a rel='noreferrer' href={newsUrl}  target="-blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
          </div>
     </div>
    )
  }
}

export default NewsItem
