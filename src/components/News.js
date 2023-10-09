import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log("hello iam aconstructor from newsItem");
    this.state={
       articles: [],
       loading: false

    }


    
  }

  async componentDidMount(){
  
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=650f0f4614f44f61852009c2a2b7d339";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})


  }
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h2>24-News Top HeadLines</h2>

          <div className='row'>
            {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,40): ""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsUrl={element.url}/>
  
                </div>
            })}
            
          </div>

        </div>
        
       
      </div>
    )
  }
}

export default News
