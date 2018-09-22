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
            let url = news.data.url.split('')
            let findPic = url[url.length - 1]
            return (<div key={index} className="postContainer">
            <ul>{news.data.score}</ul>
            <ul><a href={news.data.url}>{news.data.title}</a></ul>
            {findPic === 'g' ? <img alt="redditpost" height={350} width={500} src={news.data.url}/> : <span/>}
            
            </div>
            )
        })
        return(<div className="home">
            {liste}
        </div>)
    }
}