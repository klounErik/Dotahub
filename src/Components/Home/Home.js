import React, {Component} from 'react'

export default class Home extends Component{
    state = {
        news: []
    }


    getNews = async () =>{
        fetch('http://localhost:1234/api/redditnews')
        .then(res => res.json())
        .then(data => this.setState({news: data}))
    }

    componentDidMount(){
        this.getNews()
    }

    render(){
        const {news} = this.state
        
        if(this.state.news.length === 0){
            return null
        }
        const liste = news.data.children.map((news, index) =>{
            return <ul key={index}>{news.data.title}</ul>
        })
        console.log(this.state.news.data.children)
        return(<div className="home">
            {liste}
        </div>)
    }
}