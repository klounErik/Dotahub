import React, {Component} from 'react'

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
            return <ul key={index}>{news.data.score}<a href={news.data.url} key={index}>{news.data.title}</a></ul>
        })
        console.log(this.state.news.data.children)
        return(<div className="home">
            {liste}
        </div>)
    }
}