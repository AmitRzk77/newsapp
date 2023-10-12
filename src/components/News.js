import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor(){
    super();
    console.log("hello iam aconstructor from newsItem");
    this.state={
       articles: [],
       loading: false,
       page:1

    }


    
  }

  async componentDidMount(){
  
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=650f0f4614f44f61852009c2a2b7d339&page=1 &pageSize=${this.props.pageSize}` ;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults}) 


  }
  handlePrevClick =async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=650f0f4614f44f61852009c2a2b7d339&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
  
    this.setState({
      page:this.state.page -1,
      articles:parsedData.articles
      
    })

  }
  handleNextClick = async()=>{
    console.log("Next");

    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

  

   
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=650f0f4614f44f61852009c2a2b7d339&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
  
    this.setState({
      page:this.state.page +1,
      articles:parsedData.articles
    
      
    })
  }


  }
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h1 className="text-center">24-News Top HeadLines</h1>
          {this.state.loading&&<Spinner/>}

          <div className='row'>
            {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,40): ""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsUrl={element.url}/>
  
                </div>
            })}
            
          </div>


        </div>

        

        <div className='container d-flex justify-content-between'>
          <button disabled ={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;  </button>


        </div>
        


        
        
       
      </div>
    )
  }
}

export default News
