import React, {Component} from 'react'
import './Updates.css'

export default class Updates extends Component{
    state = {
        updates: []
    }

    componentDidMount(){
        this.props.getUpdates()
        .then(res => this.setState({updates: res.appnews.newsitems}))
    }

    render(){
        const {updates} = this.state
        console.log(updates)
        const gameUpdates = updates.map((news, index) =>{
            let date = new Date(1000*news.date)
            if(news.feedlabel === "Product Update")
            return (
            <div key={index}>
            <ul key={index}><a href={news.url}>{news.title}</a>{date.toDateString()}</ul>
            </div>)
        })
        return(
            <div className="newscontainer">
            {gameUpdates}
            </div>
        )
    }
}