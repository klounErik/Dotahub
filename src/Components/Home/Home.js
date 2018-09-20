import React, {Component} from 'react'
import './Home.css'

export default class Home extends Component{
    state = {
        news: []
    }

    componentDidMount(){
        this.props.getNews()
        .then(res => this.setState({news: res}))
    }

    render(){
        const {news} = this.state
        if(this.state.news.length === 0){
            return null
        }
        const liste = news.data.children.map((news, index) =>{
            return (<div key={index} className="postContainer">
            <ul>{news.data.score}</ul>
            <ul><a href={news.data.url}>{news.data.title}</a></ul>
            <ul>{news.data.author}</ul>
            <ul>{news.data.link_flair_text}</ul>
            </div>
            )
        })
        console.log(this.state.news.data.children)
        return(<div className="home">
            {liste}
        </div>)
    }
}