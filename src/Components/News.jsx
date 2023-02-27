import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }


 async componentDidMount(){
    console.log("cdm")
    let url=` https://newsapi.org/v2/everything?q=bitcoin&apiKey=2f0d8d729f7044bcacee042bee30a563&page=1&pageSize=20`;
    let data =await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrev= async()=>{
    let url=` https://newsapi.org/v2/everything?q=bitcoin&apiKey=2f0d8d729f7044bcacee042bee30a563&page=${this.state.page-1}&pageSize=20`;
    let data =await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page-1
    })
  }
  handleNext=async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url=` https://newsapi.org/v2/everything?q=bitcoin&apiKey=2f0d8d729f7044bcacee042bee30a563&page=${this.state.page+1}&pageSize=20`;
    let data =await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page+1
    })
  }

  }

  render() {

    return (
      <div className='container my-3'>
        <h2>News World - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {

            return (
              <div className="col-md-3 mx-3"  key={element.url}>
            <NewsItem title={element.title? element.title.slice(0, 30):" "} description={element.description ? element.description:"!Description "} imageUrl={ element.urlToImage? element.urlToImage:"https://i.dailymail.co.uk/1s/2023/02/23/07/67989143-0-image-a-146_1677135608963.jpg"} newsUrl={element.url} />
          </div>
            )

          })}

        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News
