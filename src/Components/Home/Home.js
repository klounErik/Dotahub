import React, {Component} from 'react'

export default class Home extends Component{
    state = {
        news: []
    }


    getNews = async () =>{
        fetch('http://localhost:1234/api/redditnews')
        .then(res => res.json())
        .then(json => this.setState({news: json}))
    }

    componentDidMount(){
        this.getNews()
    }

    render(){
        const {news} = this.state
        if(this.state.news.length === 0){
            return null
        }
        console.log('Hello world' + news)
        const liste = news.data.children.map((news, index) =>{
            return <ul key={index}>{news.data.score}<a href={news.data.url} key={index}>{news.data.title}</a></ul>
        })
        console.log(this.state.news.data.children)
        return(<div className="home">
            {liste}
        </div>)
    }
}